"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FeedbackPage() {
  const [pageContext, setPageContext] = useState("");
  const [rating, setRating] = useState<"positive" | "negative" | "">("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please write a short message before submitting.");
      return;
    }

    setSubmitting(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("site_feedback").insert({
      user_id: user?.id || null,
      page_context: pageContext || null,
      rating: rating || null,
      message: message.trim(),
    });

    setSubmitting(false);

    if (error) {
      console.error(error);
      alert("We could not submit your feedback. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <nav className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
            <Link href="/" className="font-bold hover:text-emerald-400">
              CodeSupport <span className="text-emerald-400">SA</span>
            </Link>
          </div>
        </nav>

        <section className="flex min-h-[75vh] items-center justify-center px-6 py-16">
          <div className="w-full max-w-xl rounded-3xl border border-emerald-400/20 bg-slate-900 p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-3xl">
              ✓
            </div>

            <h1 className="mt-6 text-2xl font-bold">Thank you!</h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400">
              Your feedback goes straight to us and genuinely helps improve
              CodeSupport SA. We read every message.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="font-bold hover:text-emerald-400">
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-emerald-400"
        >
          ← Back to home
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-emerald-400">
          We'd love to hear from you
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Send us feedback
        </h1>

        <p className="mt-4 text-slate-400">
          Found something confusing, spotted a bug, or just want to tell us
          what's working? This goes straight to the CodeSupport SA team —
          it isn't posted publicly.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Overall, how do you feel about CodeSupport SA?
            </label>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setRating("positive")}
                className={`flex-1 rounded-xl border p-4 text-center text-2xl transition ${
                  rating === "positive"
                    ? "border-emerald-400 bg-emerald-400/10"
                    : "border-white/10 bg-slate-900 hover:border-white/20"
                }`}
              >
                👍
              </button>

              <button
                type="button"
                onClick={() => setRating("negative")}
                className={`flex-1 rounded-xl border p-4 text-center text-2xl transition ${
                  rating === "negative"
                    ? "border-red-400 bg-red-400/10"
                    : "border-white/10 bg-slate-900 hover:border-white/20"
                }`}
              >
                👎
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="pageContext"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              What page, lesson or feature is this about? (optional)
            </label>
            <input
              id="pageContext"
              value={pageContext}
              onChange={(e) => setPageContext(e.target.value)}
              placeholder="e.g. Java Arrays lesson, the practice page..."
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what's on your mind..."
              className="w-full resize-y rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-emerald-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {submitting ? "Sending..." : "Send Feedback"}
          </button>
        </form>
      </section>
    </main>
  );
}