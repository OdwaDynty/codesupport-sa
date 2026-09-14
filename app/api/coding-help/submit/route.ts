import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import Anthropic from "@anthropic-ai/sdk";

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
      .select("id, request_reference")
      .single();

    if (error || !data) {
      console.error("Insert error:", error);
      return NextResponse.json(
        { error: "We could not submit your request. Please try again." },
        { status: 500 }
      );
    }

    // Generate an AI draft response in the background — this never blocks
    // or fails the student's submission, it just quietly saves a starting
    // point for the admin to review before anything is sent.
    generateAiDraft(data.id, { name, language, topic, problem, code }).catch(
      (err) => console.error("AI draft generation failed:", err)
    );

    return NextResponse.json({ reference: data.request_reference });
  } catch (error) {
    console.error("Submit request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

async function generateAiDraft(
  requestId: string,
  details: {
    name: string;
    language: string;
    topic: string;
    problem: string;
    code: string | null;
  }
) {
  if (!process.env.ANTHROPIC_API_KEY) {
    // AI drafting is optional — if no key is configured, just skip it
    // silently. The admin can still write a response manually as before.
    return;
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const prompt = `You are a friendly, encouraging coding tutor helping a South African high school learner named ${details.name}.

They are learning ${details.language} and are stuck on the topic "${details.topic}".

Their problem, in their own words:
"${details.problem}"

${details.code ? `Their code so far:\n\`\`\`\n${details.code}\n\`\`\`` : "They haven't shared any code yet."}

Write a short, warm, encouraging response that helps them move forward WITHOUT simply giving them the full solution. Guide them with a hint, ask a clarifying question if the problem is ambiguous, or point out what to check first — the same way a good tutor would. Keep it concise (under 150 words), age-appropriate, and end on an encouraging note. Do not include a greeting like "Hi [name]" or a sign-off — just the helpful content itself, since this will be reviewed and personalized by a human before sending.`;

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 400,
    messages: [{ role: "user", content: prompt }],
  });

  const draftText = message.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  await supabase
    .from("coding_help_requests")
    .update({ ai_draft_response: draftText })
    .eq("id", requestId);
}