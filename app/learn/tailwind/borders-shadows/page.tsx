"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindBordersLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! rounded-full makes an element's corners fully circular."
      );
      markTopicComplete("tailwind", "borders-shadows");
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
            <span className="text-slate-400">Topic 5 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Borders, Rounded Corners & Shadows
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Give your elements definition and depth — the details that
            make a design feel polished.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[56%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 56%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Add a border using border and border- color utilities.</li>
            <li>✓ Round corners using rounded- utilities.</li>
            <li>✓ Add depth using shadow- utilities.</li>
            <li>✓ Combine all three to style a card.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">Borders</h2>

          <p className="mt-5 leading-8 text-slate-300">
            The <code className="text-emerald-300">border</code> class
            adds a thin 1px border on all sides. You can control its color
            with <code className="text-emerald-300">border-</code>{" "}
            followed by a color, same pattern as{" "}
            <code className="text-emerald-300">text-</code> and{" "}
            <code className="text-emerald-300">bg-</code>.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded border border-white/20 p-4 text-center text-sm">
              border
            </div>
            <div className="rounded border-2 border-emerald-500 p-4 text-center text-sm">
              border-2 border-emerald-500
            </div>
            <div className="rounded border-4 border-purple-500 p-4 text-center text-sm">
              border-4 border-purple-500
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            <code className="text-emerald-300">border-2</code> and{" "}
            <code className="text-emerald-300">border-4</code> make the
            border thicker — same numbering idea you&apos;ve seen
            elsewhere.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">Rounded corners</h2>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">rounded-</code> controls
            how curved an element&apos;s corners are — from barely
            rounded to fully circular.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
            <div className="rounded-none bg-emerald-500 p-4 text-center text-xs text-white">
              rounded-none
            </div>
            <div className="rounded-md bg-emerald-500 p-4 text-center text-xs text-white">
              rounded-md
            </div>
            <div className="rounded-xl bg-emerald-500 p-4 text-center text-xs text-white">
              rounded-xl
            </div>
            <div className="rounded-2xl bg-emerald-500 p-4 text-center text-xs text-white">
              rounded-2xl
            </div>
            <div className="rounded-full bg-emerald-500 p-4 text-center text-xs text-white">
              rounded-full
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            <code className="text-emerald-300">rounded-full</code> on a
            square element (equal width and height) produces a perfect
            circle — this is how the little colored dots and avatar
            circles you&apos;ve seen throughout CodeSupport SA are made.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">Shadows</h2>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">shadow-</code> adds depth,
            making an element look like it&apos;s lifted slightly above
            the page.
          </p>

          <div className="mt-6 grid gap-6 bg-slate-800 p-8 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-950 p-5 text-center text-sm shadow-sm">
              shadow-sm
            </div>
            <div className="rounded-xl bg-slate-950 p-5 text-center text-sm shadow-lg">
              shadow-lg
            </div>
            <div className="rounded-xl bg-slate-950 p-5 text-center text-sm shadow-2xl">
              shadow-2xl
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Shadows are subtle on light backgrounds, so they&apos;re shown
            here on a lighter gray strip to make the effect visible.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Which class makes an element's corners fully circular?
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
                A. rounded-full
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
                B. rounded-none
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
                C. border-full
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
              <code className="text-emerald-300">&lt;div&gt;</code> that is:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Has a 2px emerald border.</li>
              <li>Has large rounded corners (rounded-xl).</li>
              <li>Has a medium shadow.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You'll need <code>border-2</code> plus a color class,{" "}
                <code>rounded-xl</code>, and{" "}
                <code>shadow-md</code>.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<div class="border-2 border-emerald-500 rounded-xl shadow-md p-4">
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
                Setting a border color without a border width
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`class="border-emerald-500" // no border shows`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                A color alone doesn&apos;t create a border — you still
                need the base <code>border</code> (or{" "}
                <code>border-2</code>, etc.) class too.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Expecting rounded-full to work on a rectangle
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class="w-40 h-10 rounded-full">`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                On a non-square element, <code>rounded-full</code> creates
                a pill shape, not a circle — that&apos;s expected, not a
                bug, but worth knowing if you actually wanted a circle.
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
            Now that you can style individual elements, the next step is
            learning how to arrange several elements together using
            Flexbox.
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