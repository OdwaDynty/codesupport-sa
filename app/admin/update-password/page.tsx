"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function UpdatePasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] =
    useState(true);

  useEffect(() => {
    const checkRecoverySession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setError(
          "Your password recovery link is invalid or has expired. Please request a new one."
        );
      }

      setCheckingSession(false);
    };

    checkRecoverySession();
  }, []);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (password.length < 6) {
      setError(
        "Your new password must contain at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    if (error) {
      console.error(error);
      setError(
        "We could not update your password. Please request a new recovery link."
      );
      setLoading(false);
      return;
    }

    setMessage(
      "Your password has been updated successfully. Redirecting to login..."
    );

    setTimeout(() => {
      router.push("/admin/login");
    }, 2000);
  };

  if (checkingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-sm text-slate-500">
          Checking password recovery link...
        </p>
      </main>
    );
  }

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
                Choose New Password
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Create a new password for your CodeSupport SA admin account.
              </p>
            </div>

            {!message && (
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    New Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Confirm New Password
                  </label>

                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm leading-6 text-red-300">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading
                    ? "Updating password..."
                    : "Update Password"}
                </button>

              </form>
            )}

            {message && (
              <div className="mt-8 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5 text-center text-sm leading-6 text-emerald-300">
                {message}
              </div>
            )}

            {!message && error.includes("expired") && (
              <div className="mt-6 text-center">
                <Link
                  href="/admin/forgot-password"
                  className="text-sm text-emerald-400 hover:text-emerald-300"
                >
                  Request a new reset link
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}