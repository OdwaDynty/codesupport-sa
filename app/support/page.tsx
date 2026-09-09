"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    grade: "",
    duration: "",
    topic: "",
    message: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      grade: "",
      duration: "",
      topic: "",
      message: "",
    });
    setSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/support/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "We could not submit your request. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Submit error:", error);
      alert("We could not submit your request. Please try again.");
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <nav className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
            <Link href="/" className="font-bold hover:text-emerald-400">
              CodeSupport <span className="text-emerald-400">SA</span>
            </Link>
            <Link href="/" className="text-sm text-slate-400 hover:text-emerald-400">
              Home
            </Link>
          </div>
        </nav>

        <section className="flex min-h-[75vh] items-center justify-center px-6 py-16">
          <div className="w-full max-w-2xl rounded-3xl border border-emerald-400/20 bg-slate-900 p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-3xl">
              ✓
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Request received
            </p>

            <h1 className="mt-3 text-3xl font-bold">
              Consultation request submitted!
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
              We&apos;ll contact you by email to confirm a time and arrange
              payment. This usually happens within 1–2 school days.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Back to Home
              </Link>

              <button
                onClick={resetForm}
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="font-bold hover:text-emerald-400">
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/learn"
              className="hidden text-sm text-slate-400 hover:text-emerald-400 sm:block"
            >
              Learn
            </Link>
            <Link
              href="/practice"
              className="hidden text-sm text-slate-400 hover:text-emerald-400 sm:block"
            >
              Practice
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
          <Link href="/" className="text-sm text-slate-500 hover:text-emerald-400">
            ← Back to home
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            One-on-One Support
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Request a consultation
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Sometimes you need someone to sit with you and work through a
            problem directly. Tell us what you need help with and pick a
            session length — we&apos;ll email you to confirm a time.
          </p>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student details */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              01
            </p>
            <h2 className="mt-2 text-2xl font-bold">About you</h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
              </div>

              <div>
                <label htmlFor="grade" className="mb-2 block text-sm font-medium text-slate-300">
                  Grade
                </label>
                <select
                  id="grade"
                  required
                  value={form.grade}
                  onChange={(e) => updateField("grade", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                >
                  <option value="">Select your grade</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Session details */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              02
            </p>
            <h2 className="mt-2 text-2xl font-bold">Session details</h2>

            <div className="mt-7">
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Session length
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label
                  className={`cursor-pointer rounded-xl border p-5 transition ${
                    form.duration === "30"
                      ? "border-emerald-400 bg-emerald-400/5"
                      : "border-white/10 bg-slate-950 hover:border-white/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="duration"
                    value="30"
                    checked={form.duration === "30"}
                    onChange={(e) => updateField("duration", e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-sm text-slate-400">30 minutes</div>
                  <div className="mt-1 text-2xl font-bold text-white">R100</div>
                </label>

                <label
                  className={`cursor-pointer rounded-xl border p-5 transition ${
                    form.duration === "60"
                      ? "border-emerald-400 bg-emerald-400/5"
                      : "border-white/10 bg-slate-950 hover:border-white/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="duration"
                    value="60"
                    checked={form.duration === "60"}
                    onChange={(e) => updateField("duration", e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-sm text-slate-400">60 minutes</div>
                  <div className="mt-1 text-2xl font-bold text-white">R180</div>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="topic" className="mb-2 block text-sm font-medium text-slate-300">
                What do you need help with?
              </label>
              <input
                id="topic"
                required
                value={form.topic}
                onChange={(e) => updateField("topic", e.target.value)}
                placeholder="e.g. Java loops, Python project debugging"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Tell us more
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Explain what you're struggling with and what you'd like to cover in the session..."
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Payment note */}
          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Note:</strong> submitting
              this form sends a request only — it does not process payment.
              We&apos;ll email you to confirm a time and arrange payment
              separately.
            </p>
          </div>

          {/* Submission */}
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold">Ready to request a session?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              We&apos;ll get back to you by email to arrange a time.
            </p>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-emerald-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
            >
              Request Consultation →
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between">
            <span>CodeSupport SA</span>
            <span>Learn. Practise. Build. Get Help.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}