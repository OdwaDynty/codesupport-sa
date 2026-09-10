import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { generateSignature, getProcessUrl } from "@/lib/payfast";

// Never trust an amount from the client — always look it up server-side
// from the duration actually stored on the request.
const PRICES: Record<string, string> = {
  "30": "100.00",
  "60": "180.00",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing request id." }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: consultation, error } = await supabase
      .from("consultation_requests")
      .select("id, student_name, email, duration_minutes")
      .eq("id", id)
      .single();

    if (error || !consultation) {
      return NextResponse.json({ error: "Request not found." }, { status: 404 });
    }

    const amount = PRICES[String(consultation.duration_minutes)];

    if (!amount) {
      return NextResponse.json(
        { error: "Invalid session duration." },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

    // Field order matters for the signature — keep this order exactly.
    const fields: Record<string, string> = {
      merchant_id: process.env.PAYFAST_MERCHANT_ID!,
      merchant_key: process.env.PAYFAST_MERCHANT_KEY!,
      return_url: `${siteUrl}/support/payment-success`,
      cancel_url: `${siteUrl}/support/payment-cancelled`,
      notify_url: `${siteUrl}/api/support/itn`,
      name_first: consultation.student_name,
      email_address: consultation.email,
      m_payment_id: String(consultation.id),
      amount,
      item_name: `CodeSupport SA - ${consultation.duration_minutes} min consultation`,
    };

    const signature = generateSignature(fields);

    return NextResponse.json({
      action: getProcessUrl(),
      fields: { ...fields, signature },
    });
  } catch (error) {
    console.error("Create payment error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}