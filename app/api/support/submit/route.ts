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

    // Safe to select here — this route runs server-side with the
    // service role, so RLS never applies to it in the first place.
    const { data, error } = await supabase
      .from("consultation_requests")
      .insert({
        student_name: name,
        email,
        grade,
        duration_minutes: duration,
        topic,
        message,
      })
      .select("id")
      .single();

    if (error || !data) {
      console.error("Consultation request insert error:", error);
      return NextResponse.json(
        { error: "We could not submit your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("Support submit error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}