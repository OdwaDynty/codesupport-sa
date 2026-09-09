import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
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

    const { data: userData, error: userError } = await supabase.auth.getUser(token);

    if (userError || !userData?.user) {
      return NextResponse.json({ error: "Not authorized." }, { status: 401 });
    }

    const body = await request.json();
    const requestId = body.requestId;

    if (!requestId) {
      return NextResponse.json({ error: "Missing requestId." }, { status: 400 });
    }

    const { data: helpRequest, error: fetchError } = await supabase
      .from("coding_help_requests")
      .select("email, student_name, request_reference, admin_response")
      .eq("id", requestId)
      .single();

    if (fetchError || !helpRequest) {
      return NextResponse.json({ error: "Request not found." }, { status: 404 });
    }

    if (!helpRequest.email) {
      return NextResponse.json(
        { error: "No email on file for this student." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const statusUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/request-status?reference=${encodeURIComponent(
      helpRequest.request_reference
    )}`;

    const { error: sendError } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "CodeSupport SA <onboarding@resend.dev>",
      to: helpRequest.email,
      subject: `Your CodeSupport SA request ${helpRequest.request_reference} has a response`,
      text: `Hi ${helpRequest.student_name},

We've responded to your coding help request (${helpRequest.request_reference}).

Response:
${helpRequest.admin_response}

You can view the full details here:
${statusUrl}

- CodeSupport SA`,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notify response error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}