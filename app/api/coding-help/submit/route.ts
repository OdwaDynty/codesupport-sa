import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const grade = formData.get("grade") as string;
    const language = formData.get("language") as string;
    const topic = formData.get("topic") as string;
    const problem = formData.get("problem") as string;
    const code = formData.get("code") as string;
    const attachment = formData.get("attachment") as File | null;

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

    // Optional: if the student is logged in, link this request to their account
    let userId: string | null = null;
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (token) {
      const { data: userData } = await supabase.auth.getUser(token);
      if (userData?.user) {
        userId = userData.user.id;
      }
    }

    let attachmentPath: string | null = null;

    if (attachment && attachment.size > 0) {
      if (!ALLOWED_TYPES.includes(attachment.type)) {
        return NextResponse.json(
          { error: "Attachments must be a PNG or JPG image." },
          { status: 400 }
        );
      }

      if (attachment.size > MAX_SIZE_BYTES) {
        return NextResponse.json(
          { error: "Attachment must be smaller than 5MB." },
          { status: 400 }
        );
      }

      const fileExtension = attachment.name.split(".").pop();
      const uniquePath = `${crypto.randomUUID()}.${fileExtension}`;

      const { error: uploadError } = await supabase.storage
        .from("coding-help-attachments")
        .upload(uniquePath, attachment, {
          contentType: attachment.type,
        });

      if (uploadError) {
        console.error("Attachment upload error:", uploadError);
        return NextResponse.json(
          { error: "We could not upload your attachment. Please try again." },
          { status: 500 }
        );
      }

      attachmentPath = uniquePath;
    }

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
        attachment_path: attachmentPath,
        user_id: userId,
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