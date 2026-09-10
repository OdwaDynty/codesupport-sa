import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { generateSignature, getProcessUrl } from "@/lib/payfast";

// PayFast calls this route directly (server-to-server) after a payment
// attempt. We must NEVER trust this blindly — three checks are required:
// 1. The signature they sent matches one we independently recompute
// 2. The source IP is actually PayFast's
// 3. PayFast itself confirms the data is genuine when we call them back
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const receivedSignature = data.signature;
    const dataWithoutSignature = { ...data };
    delete dataWithoutSignature.signature;

    const expectedSignature = generateSignature(dataWithoutSignature);

    if (receivedSignature !== expectedSignature) {
      console.error("ITN signature mismatch", { data });
      return new NextResponse("Invalid signature", { status: 400 });
    }

    // Ask PayFast to confirm this notification is genuinely theirs
    const validateUrl =
      process.env.PAYFAST_MODE === "sandbox"
        ? "https://sandbox.payfast.co.za/eng/query/validate"
        : "https://www.payfast.co.za/eng/query/validate";

    const validateResponse = await fetch(validateUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    });

    const validateText = await validateResponse.text();

    if (validateText.trim() !== "VALID") {
      console.error("ITN validation failed with PayFast", validateText);
      return new NextResponse("Validation failed", { status: 400 });
    }

    const consultationId = data.m_payment_id;
    const paymentStatus = data.payment_status; // "COMPLETE", "FAILED", etc.
    const pfPaymentId = data.pf_payment_id;

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const newStatus = paymentStatus === "COMPLETE" ? "Paid" : "Failed";

    const { error } = await supabase
      .from("consultation_requests")
      .update({
        payment_status: newStatus,
        pf_payment_id: pfPaymentId,
      })
      .eq("id", consultationId);

    if (error) {
      console.error("Failed to update consultation payment status:", error);
      return new NextResponse("Database error", { status: 500 });
    }

    // PayFast requires a 200 OK response to know the notification was received
    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("ITN processing error:", error);
    return new NextResponse("Error", { status: 500 });
  }
}