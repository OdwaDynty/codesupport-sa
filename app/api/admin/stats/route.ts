import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ error: "Not authorized." }, { status: 401 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: userData, error: userError } = await supabase.auth.getUser(
      token
    );

    if (userError || !userData?.user) {
      return NextResponse.json({ error: "Not authorized." }, { status: 401 });
    }

    const oneWeekAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();

    // Student accounts — using the Admin API, since auth.users isn't a
    // regular table you can query directly.
    const { data: usersData, error: usersError } =
      await supabase.auth.admin.listUsers({ perPage: 1000 });

    const totalStudents = usersError ? 0 : usersData.users.length;
    const newStudentsThisWeek = usersError
      ? 0
      : usersData.users.filter(
          (u) => u.created_at && u.created_at >= oneWeekAgo
        ).length;

    // Coding help requests
    const { count: totalCodingHelp } = await supabase
      .from("coding_help_requests")
      .select("*", { count: "exact", head: true });

    const { count: codingHelpThisWeek } = await supabase
      .from("coding_help_requests")
      .select("*", { count: "exact", head: true })
      .gte("created_at", oneWeekAgo);

    // Consultation requests
    const { count: totalConsultations } = await supabase
      .from("consultation_requests")
      .select("*", { count: "exact", head: true });

    const { count: paidConsultations } = await supabase
      .from("consultation_requests")
      .select("*", { count: "exact", head: true })
      .eq("payment_status", "Paid");

    const { count: consultationsThisWeek } = await supabase
      .from("consultation_requests")
      .select("*", { count: "exact", head: true })
      .gte("created_at", oneWeekAgo);

    // Lesson progress
    const { count: totalLessonsCompleted } = await supabase
      .from("learner_progress")
      .select("*", { count: "exact", head: true });

    const { data: learnerRows } = await supabase
      .from("learner_progress")
      .select("user_id");

    const uniqueLearners = learnerRows
      ? new Set(learnerRows.map((r) => r.user_id)).size
      : 0;

    // Practice exercise completions
    const { count: totalExercisesCompleted } = await supabase
      .from("exercise_progress")
      .select("*", { count: "exact", head: true });

    return NextResponse.json({
      totalStudents,
      newStudentsThisWeek,
      totalCodingHelp: totalCodingHelp || 0,
      codingHelpThisWeek: codingHelpThisWeek || 0,
      totalConsultations: totalConsultations || 0,
      paidConsultations: paidConsultations || 0,
      consultationsThisWeek: consultationsThisWeek || 0,
      totalLessonsCompleted: totalLessonsCompleted || 0,
      uniqueLearners,
      totalExercisesCompleted: totalExercisesCompleted || 0,
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}