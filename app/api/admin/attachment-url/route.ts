import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

    const { data: userData, error: userError } = await supabase.auth.getUser(
      token
    );

    if (userError || !userData?.user) {
      return NextResponse.json({ error: "Not authorized." }, { status: 401 });
    }

    const body = await request.json();
    const path = body.path;

    if (!path) {
      return NextResponse.json(
        { error: "Missing attachment path." },
        { status: 400 }
      );
    }

    // Signed URL valid for 5 minutes - long enough for the admin to view it,
    // short enough that the link isn't useful if it leaks anywhere.
    const { data, error } = await supabase.storage
      .from("coding-help-attachments")
      .createSignedUrl(path, 300);

    if (error || !data) {
      console.error("Signed URL error:", error);
      return NextResponse.json(
        { error: "Could not generate attachment link." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: data.signedUrl });
  } catch (error) {
    console.error("Attachment URL error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}