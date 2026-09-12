"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindSpacingLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! m- controls margin (outside spacing), p- controls padding (inside spacing)."
      );
      markTopicComplete("tailwind", "spacing-sizing");
    } else if (quizAnswer === "") {
      setQuizResult("Choose an answer first.");
    } else {
      setQuizResult("Not quite. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-bold text-white transition hover:text-emerald-400"
          >
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>

          <Link
            href="/learn/tailwind"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Tailwind Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              Tailwind CSS
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 3 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Spacing & Sizing
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Control the space inside and around elements, and how big
            they are.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[33%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 33%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain the difference between padding and margin.</li>
            <li>✓ Use p- and m- utilities.</li>
            <li>✓ Target a single side using pt-, pb-, pl-, pr-.</li>
            <li>✓ Set width and height using w- and h-.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Padding vs. margin
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            <strong className="text-white">Padding</strong> is the space{" "}
            <em>inside</em> an element, between its content and its edge.{" "}
            <strong className="text-white">Margin</strong> is the space{" "}
            <em>outside</em> an element, pushing other elements away from
            it.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-8">
            <div className="mx-auto max-w-sm bg-purple-900/30 p-6">
              <div className="text-center text-xs text-purple-300">
                margin (space outside)
              </div>
              <div className="mt-3 bg-emerald-500 p-6 text-center text-white">
                <div className="text-xs text-emerald-100">
                  padding (space inside)
                </div>
                <div className="mt-2 rounded bg-slate-950 px-3 py-2 text-sm">
                  Content
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            In Tailwind: <code className="text-emerald-300">p-</code> is
            padding, <code className="text-emerald-300">m-</code> is
            margin.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            The spacing scale
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The number after <code className="text-emerald-300">p-</code>{" "}
            or <code className="text-emerald-300">m-</code> is a step on
            Tailwind&apos;s spacing scale — it&apos;s not pixels directly,
            but each step is consistent (roughly 0.25rem, or 4px, per
            step).
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Class</th>
                  <th className="px-5 py-3 font-medium">Approx. size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">p-1</td>
                  <td className="px-5 py-3 text-slate-400">4px</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">p-2</td>
                  <td className="px-5 py-3 text-slate-400">8px</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">p-4</td>
                  <td className="px-5 py-3 text-slate-400">16px</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">p-8</td>
                  <td className="px-5 py-3 text-slate-400">32px</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            You can also target a single side:{" "}
            <code className="text-emerald-300">pt-4</code> (top),{" "}
            <code className="text-emerald-300">pb-4</code> (bottom),{" "}
            <code className="text-emerald-300">pl-4</code> (left),{" "}
            <code className="text-emerald-300">pr-4</code> (right) — the
            same letters work for margin too:{" "}
            <code className="text-emerald-300">mt-4</code>,{" "}
            <code className="text-emerald-300">mb-4</code>, and so on.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Width and height
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">w-</code> and{" "}
            <code className="text-emerald-300">h-</code> control an
            element&apos;s width and height the same way — using the
            spacing scale, or special keywords like{" "}
            <code className="text-emerald-300">w-full</code> (100% of the
            parent).
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Different widths
            </div>

            <div className="space-y-3 p-6">
              <div className="w-16 rounded bg-emerald-500 p-2 text-center text-xs text-white">
                w-16
              </div>
              <div className="w-32 rounded bg-emerald-500 p-2 text-center text-xs text-white">
                w-32
              </div>
              <div className="w-full rounded bg-emerald-500 p-2 text-center text-xs text-white">
                w-full
              </div>
            </div>
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What is the difference between p- and m-?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input
                type="radio"
                name="quiz"
                value="A"
                checked={quizAnswer === "A"}
                onChange={(e) => setQuizAnswer(e.target.value)}
                className="mt-1"
              />
              <span className="text-sm text-slate-300">
                A. They do the same thing
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input
                type="radio"
                name="quiz"
                value="B"
                checked={quizAnswer === "B"}
                onChange={(e) => setQuizAnswer(e.target.value)}
                className="mt-1"
              />
              <span className="text-sm text-slate-300">
                B. m- controls padding, p- controls margin
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input
                type="radio"
                name="quiz"
                value="C"
                checked={quizAnswer === "C"}
                onChange={(e) => setQuizAnswer(e.target.value)}
                className="mt-1"
              />
              <span className="text-sm text-slate-300">
                C. m- controls margin, p- controls padding
              </span>
            </label>
          </div>

          <button
            onClick={checkQuiz}
            className="mt-6 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Check Answer
          </button>

          {quizResult && (
            <div
              className={`mt-5 rounded-xl p-4 text-sm ${
                quizResult.startsWith("Correct")
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-yellow-400/10 text-yellow-300"
              }`}
            >
              {quizResult}
            </div>
          )}
        </section>

        {/* Exercise */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            04 • Exercise
          </p>

          <h2 className="mt-3 text-3xl font-bold">Your turn</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="leading-7 text-slate-300">
              Write the Tailwind classes for a{" "}
              <code className="text-emerald-300">&lt;div&gt;</code> with:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Padding of 6 on all sides.</li>
              <li>A top margin of 4.</li>
              <li>A width that fills its full parent.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Top margin uses <code>mt-</code>, and "full width" has its
                own keyword class rather than a number.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<div class="p-6 mt-4 w-full">
  Hello!
</div>`}</code>
              </pre>
            </details>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Watch out
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Common beginner mistakes
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Mixing up p- and m-
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class="m-4"> <!-- pushes other elements away, doesn't add inner space -->`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                If your content still looks squished against the edges,
                you probably need <code>p-</code>, not <code>m-</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Expecting the number to mean pixels exactly
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`p-10 is not "10 pixels"`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                The numbers are steps on Tailwind&apos;s own scale, not raw
                pixel counts — <code>p-10</code> is actually 40px, since
                each step is 4px.
              </p>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>

          <h2 className="mt-4 text-2xl font-bold">
            Ready for the next topic?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can control spacing, the next step is styling
            text itself.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/tailwind"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Tailwind
            </Link>

            <Link
              href="/learn/tailwind"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Next Topic →
            </Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">
          CodeSupport SA • Learn. Practise. Build. Get Help.
        </div>
      </footer>
    </main>
  );
}