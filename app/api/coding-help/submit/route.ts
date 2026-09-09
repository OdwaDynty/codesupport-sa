import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, grade, language, topic, problem, code } = body;

    if (!name || !email || !grade || !language || !topic || !problem) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from("coding_help_requests")
      .insert({
        student_name: name,
        email,
        grade,
        language,
        topic,
        problem,
        code,
      })
      .select("request_reference")
      .single();

    if (error || !data) {
      console.error("Insert error:", error);
      return NextResponse.json(
        { error: "We could not submit your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reference: data.request_reference });
  } catch (error) {
    console.error("Submit request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}