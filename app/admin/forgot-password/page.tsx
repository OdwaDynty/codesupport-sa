"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    const { error } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo:
          `${window.location.origin}/admin/update-password`,
      });

    if (error) {
      console.error(error);
      setError(
        "We could not send the password reset email. Please try again."
      );
      setLoading(false);
      return;
    }

    setMessage(
      "If an account exists for this email address, a password reset link has been sent."
    );

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          <Link
            href="/"
            className="block text-center font-bold hover:text-emerald-400"
          >
            CodeSupport{" "}
            <span className="text-emerald-400">
              SA
            </span>
          </Link>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-8">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                Admin Area
              </p>

              <h1 className="mt-3 text-3xl font-bold">
                Reset Password
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your admin email address and we will send you a password reset link.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Admin Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
              </div>

              {message && (
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-sm leading-6 text-emerald-300">
                  {message}
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Sending reset link..."
                  : "Send Reset Link"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/admin/login"
                className="text-sm text-slate-500 hover:text-emerald-400"
              >
                ← Back to login
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}