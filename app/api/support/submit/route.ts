import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, grade, duration, topic, message } = body;

    if (!name || !email || !grade || !duration || !topic || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Note: no .select() after insert — avoids the RLS-on-RETURNING issue
    // we hit with coding_help_requests, since anon has no SELECT policy here.
    const { error } = await supabase.from("consultation_requests").insert({
      student_name: name,
      email,
      grade,
      duration_minutes: duration,
      topic,
      message,
    });

    if (error) {
      console.error("Consultation request insert error:", error);
      return NextResponse.json(
        { error: "We could not submit your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Support submit error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}