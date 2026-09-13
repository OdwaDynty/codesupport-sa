import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, grade, duration, topic, message, slotId } = body;

    if (!name || !email || !grade || !duration || !topic || !message || !slotId) {
      return NextResponse.json(
        { error: "Please fill in all required fields and pick a time slot." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Confirm the slot is still actually open before booking it —
    // protects against two students racing for the same slot.
    const { data: slot, error: slotError } = await supabase
      .from("available_slots")
      .select("id, is_booked")
      .eq("id", slotId)
      .single();

    if (slotError || !slot) {
      return NextResponse.json(
        { error: "That time slot could not be found. Please pick another." },
        { status: 400 }
      );
    }

    if (slot.is_booked) {
      return NextResponse.json(
        { error: "That time slot was just booked by someone else. Please pick another." },
        { status: 409 }
      );
    }

    const { data, error } = await supabase
      .from("consultation_requests")
      .insert({
        student_name: name,
        email,
        grade,
        duration_minutes: duration,
        topic,
        message,
        slot_id: slotId,
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

    // Reserve the slot now, before payment — released automatically
    // later if the payment ends up failing or being cancelled.
    await supabase
      .from("available_slots")
      .update({ is_booked: true })
      .eq("id", slotId);

    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("Support submit error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}