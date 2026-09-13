import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { generateSignature, getProcessUrl } from "@/lib/payfast";

describe("generateSignature", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("produces the same signature for the same input and passphrase", () => {
    process.env.PAYFAST_PASSPHRASE = "test-passphrase";

    const fields = { merchant_id: "10000100", amount: "100.00" };

    const sig1 = generateSignature(fields);
    const sig2 = generateSignature(fields);

    expect(sig1).toBe(sig2);
  });

  it("produces a different signature when the passphrase changes", () => {
    const fields = { merchant_id: "10000100", amount: "100.00" };

    process.env.PAYFAST_PASSPHRASE = "passphrase-one";
    const sig1 = generateSignature(fields);

    process.env.PAYFAST_PASSPHRASE = "passphrase-two";
    const sig2 = generateSignature(fields);

    expect(sig1).not.toBe(sig2);
  });

  it("produces a different signature when any field value changes", () => {
    process.env.PAYFAST_PASSPHRASE = "test-passphrase";

    const sig1 = generateSignature({ amount: "100.00" });
    const sig2 = generateSignature({ amount: "180.00" });

    expect(sig1).not.toBe(sig2);
  });

  it("respects field order (order matters for the signature)", () => {
    process.env.PAYFAST_PASSPHRASE = "test-passphrase";

    const sigAB = generateSignature({ a: "1", b: "2" });
    const sigBA = generateSignature({ b: "2", a: "1" });

    // Different key order should produce a different signature,
    // since PayFast signs fields in the order given.
    expect(sigAB).not.toBe(sigBA);
  });

  it("returns a 32-character hex string (a valid MD5 hash)", () => {
    process.env.PAYFAST_PASSPHRASE = "test-passphrase";

    const sig = generateSignature({ amount: "100.00" });

    expect(sig).toMatch(/^[a-f0-9]{32}$/);
  });

  it("includes empty-string fields in the signature (required for ITN validation)", () => {
    process.env.PAYFAST_PASSPHRASE = "test-passphrase";

    // This guards against the exact bug we hit in production: PayFast's
    // ITN payload includes empty custom_str/custom_int fields, and our
    // signature must include them too, or verification fails.
    const withEmpty = generateSignature({ amount: "100.00", custom_str1: "" });
    const withoutEmpty = generateSignature({ amount: "100.00" });

    expect(withEmpty).not.toBe(withoutEmpty);
  });

  it("works without a passphrase set (some sandbox configs have none)", () => {
    delete process.env.PAYFAST_PASSPHRASE;

    const sig = generateSignature({ amount: "100.00" });

    expect(sig).toMatch(/^[a-f0-9]{32}$/);
  });
});

describe("getProcessUrl", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("returns the sandbox URL when PAYFAST_MODE is sandbox", () => {
    process.env.PAYFAST_MODE = "sandbox";
    expect(getProcessUrl()).toBe("https://sandbox.payfast.co.za/eng/process");
  });

  it("returns the live URL when PAYFAST_MODE is anything else", () => {
    process.env.PAYFAST_MODE = "live";
    expect(getProcessUrl()).toBe("https://www.payfast.co.za/eng/process");
  });
});