"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function CodingHelpPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    grade: "",
    language: "",
    topic: "",
    problem: "",
    code: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      grade: "",
      language: "",
      topic: "",
      problem: "",
      code: "",
    });

    setSubmitted(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <nav className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
            <Link
              href="/"
              className="font-bold hover:text-emerald-400"
            >
              CodeSupport{" "}
              <span className="text-emerald-400">SA</span>
            </Link>

            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-emerald-400"
            >
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
              Your coding problem is ready.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Your request has been captured. For now, this is a V1
              demo, so the request is not yet being stored in a database.
              We will connect this form to a real submission system next.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/practice"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
              >
                Continue Practising
              </Link>

              <Link
                href="/support"
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Need 1-on-1 Help?
              </Link>
            </div>

            <button
              onClick={resetForm}
              className="mt-6 text-sm text-slate-500 hover:text-slate-300"
            >
              Submit another problem
            </button>
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
          <Link
            href="/"
            className="font-bold hover:text-emerald-400"
          >
            CodeSupport{" "}
            <span className="text-emerald-400">SA</span>
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

            <Link
              href="/projects"
              className="hidden text-sm text-slate-400 hover:text-emerald-400 sm:block"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-emerald-400"
          >
            ← Back to home
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Coding Help
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Stuck on your code?
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Tell us what you are trying to build, show us where you are
            stuck and include your code. We can help you work through
            the problem.
          </p>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student details */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                01
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                About you
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                This helps us understand who we are helping.
              </p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
              </div>

              <div>
                <label
                  htmlFor="grade"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Grade
                </label>

                <select
                  id="grade"
                  required
                  value={form.grade}
                  onChange={(e) =>
                    updateField("grade", e.target.value)
                  }
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

          {/* Coding details */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                02
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Your coding problem
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Tell us what language you are using and what topic you
                are working on.
              </p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="language"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Programming language
                </label>

                <select
                  id="language"
                  required
                  value={form.language}
                  onChange={(e) =>
                    updateField("language", e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                >
                  <option value="">
                    Select a language
                  </option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="C++">C++</option>
                  <option value="C">C</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="HTML/CSS">HTML / CSS</option>
                  <option value="SQL">SQL</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Topic
                </label>

                <select
                  id="topic"
                  required
                  value={form.topic}
                  onChange={(e) =>
                    updateField("topic", e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                >
                  <option value="">Select a topic</option>
                  <option value="Variables">
                    Variables / Data Types
                  </option>
                  <option value="Input and Output">
                    Input / Output
                  </option>
                  <option value="Conditions">
                    If / Else / Conditions
                  </option>
                  <option value="Loops">
                    Loops
                  </option>
                  <option value="Arrays">
                    Arrays
                  </option>
                  <option value="Methods">
                    Methods / Functions
                  </option>
                  <option value="OOP">
                    Classes / OOP
                  </option>
                  <option value="Errors">
                    Errors / Debugging
                  </option>
                  <option value="Project">
                    Project
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="problem"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                What are you struggling with?
              </label>

              <textarea
                id="problem"
                required
                rows={6}
                value={form.problem}
                onChange={(e) =>
                  updateField("problem", e.target.value)
                }
                placeholder="Explain what you are trying to do, what you expected to happen and what is happening instead..."
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
              />

              <p className="mt-2 text-xs text-slate-600">
                Try to explain the problem in your own words.
              </p>
            </div>
          </div>

          {/* Code */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                03
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Your code
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                If you have already written some code, paste it below.
              </p>
            </div>

            <div className="mt-7">
              <textarea
                id="code"
                rows={14}
                value={form.code}
                onChange={(e) =>
                  updateField("code", e.target.value)
                }
                placeholder={`Paste your code here...

Example:

public class Main {
    public static void main(String[] args) {
        // your code
    }
}`}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-4 font-mono text-sm leading-7 text-emerald-300 outline-none placeholder:font-sans placeholder:text-slate-700 focus:border-emerald-400"
              />

              <p className="mt-2 text-xs text-slate-600">
                Never include passwords, API keys or other private
                information in your code.
              </p>
            </div>
          </div>

          {/* Submission */}
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold">
              Ready to ask for help?
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Submit your problem. You will then be able to continue
              learning or request deeper one-on-one support.
            </p>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-emerald-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
            >
              Submit Coding Problem →
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