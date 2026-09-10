import crypto from "crypto";

// PayFast requires PHP's urlencode() style encoding: spaces become '+',
// and a specific set of characters get percent-encoded that
// encodeURIComponent leaves alone by default. This matches that exactly.
function pfEncode(value: string): string {
  return encodeURIComponent(value)
    .replace(/%20/g, "+")
    .replace(/[!'()*~]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
}

// Builds the MD5 signature PayFast expects. The order of `fields` matters —
// it must match the order the fields are actually sent in, which is why
// callers build their fields object in a specific, fixed order.
export function generateSignature(fields: Record<string, string>): string {
  const passphrase = process.env.PAYFAST_PASSPHRASE;

  let paramString = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${key}=${pfEncode(value)}`)
    .join("&");

  if (passphrase) {
    paramString += `&passphrase=${pfEncode(passphrase)}`;
  }

  return crypto.createHash("md5").update(paramString).digest("hex");
}

export function getProcessUrl(): string {
  return process.env.PAYFAST_MODE === "sandbox"
    ? "https://sandbox.payfast.co.za/eng/process"
    : "https://www.payfast.co.za/eng/process";
}