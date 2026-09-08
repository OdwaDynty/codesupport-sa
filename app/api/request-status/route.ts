import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = body.token?.trim();

    if (!token) {
      return NextResponse.json(
        { error: "Request reference is required." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from("coding_help_requests")
      .select(
        "id, student_name, grade, language, topic, problem, status, admin_response, created_at, responded_at"
      )
      .eq("student_access_token", token)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Request not found. Please check your reference." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      request: data,
    });
  } catch (error) {
    console.error("Request status error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}