"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindColorsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! The number controls shade — higher numbers are darker."
      );
      markTopicComplete("tailwind", "colors-backgrounds");
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
            <span className="text-slate-400">Topic 2 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Colors & Backgrounds
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how Tailwind's color system works, and how to use it for
            text and backgrounds.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[22%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 22%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain how Tailwind's color naming pattern works.</li>
            <li>✓ Set text color using text- classes.</li>
            <li>✓ Set background color using bg- classes.</li>
            <li>✓ Understand what the color shade number means.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Tailwind's color naming pattern
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Every Tailwind color class follows the same predictable
            pattern:{" "}
            <code className="text-emerald-300">property-color-shade</code>.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-mono text-lg text-purple-400">bg</div>
                <p className="mt-2 text-xs text-slate-500">
                  What it affects (background)
                </p>
              </div>
              <div>
                <div className="font-mono text-lg text-blue-300">blue</div>
                <p className="mt-2 text-xs text-slate-500">
                  Which color family
                </p>
              </div>
              <div>
                <div className="font-mono text-lg text-orange-300">500</div>
                <p className="mt-2 text-xs text-slate-500">
                  How light or dark
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Put together: <code className="text-emerald-300">bg-blue-500</code>{" "}
            means &quot;set the background to a medium blue.&quot;
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Shades — from 50 to 950
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The number controls the shade. It runs in steps — 50, 100,
            200, 300... up to 900 (some colors go to 950) — and{" "}
            <strong className="text-white">higher numbers are darker</strong>.
          </p>

          <div className="mt-6 grid grid-cols-5 gap-2 sm:grid-cols-9">
            <div className="rounded-lg bg-emerald-100 p-2 text-center text-xs text-slate-900">100</div>
            <div className="rounded-lg bg-emerald-200 p-2 text-center text-xs text-slate-900">200</div>
            <div className="rounded-lg bg-emerald-300 p-2 text-center text-xs text-slate-900">300</div>
            <div className="rounded-lg bg-emerald-400 p-2 text-center text-xs text-slate-950">400</div>
            <div className="rounded-lg bg-emerald-500 p-2 text-center text-xs text-white">500</div>
            <div className="rounded-lg bg-emerald-600 p-2 text-center text-xs text-white">600</div>
            <div className="rounded-lg bg-emerald-700 p-2 text-center text-xs text-white">700</div>
            <div className="rounded-lg bg-emerald-800 p-2 text-center text-xs text-white">800</div>
            <div className="rounded-lg bg-emerald-900 p-2 text-center text-xs text-white">900</div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            All nine of these are <code className="text-emerald-300">bg-emerald-100</code> through{" "}
            <code className="text-emerald-300">bg-emerald-900</code>.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            <strong className="text-white">500</strong> is usually a good
            starting point — it&apos;s a balanced, medium version of any
            color.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Text color and background color together
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              HTML
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-400">&lt;div class=</span>
                <span className="text-orange-300">
                  &quot;bg-slate-900 text-emerald-400 p-4&quot;
                </span>
                <span className="text-slate-400">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">
                  Dark background, emerald text
                </span>
                {"\n"}
                <span className="text-slate-400">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">Result:</p>

          <div className="mt-3 rounded-xl bg-slate-900 p-4 text-emerald-400">
            Dark background, emerald text
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Notice this is exactly the color scheme CodeSupport SA itself
            uses throughout the whole site — a dark{" "}
            <code className="text-emerald-300">bg-slate-950</code>{" "}
            background with <code className="text-emerald-300">emerald</code>{" "}
            accents everywhere.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What does the number in bg-blue-700 control?
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
                A. How wide the element is
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
                B. How light or dark the color is — higher is darker
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
                C. How transparent the color is
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
              <li>A dark purple background (try shade 800).</li>
              <li>Light gray text (try shade 100).</li>
              <li>Some padding.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Tailwind's purple color family is called{" "}
                <code>purple</code>, and gray is called <code>gray</code>.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<div class="bg-purple-800 text-gray-100 p-4">
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
                Forgetting the shade number
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class="bg-blue">`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Most Tailwind colors need a shade number —{" "}
                <code>bg-blue</code> on its own usually won&apos;t work.
                Use <code>bg-blue-500</code> instead.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Using low contrast colors together
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class="bg-yellow-200 text-yellow-300">`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Similar shades of the same color are hard to read against
                each other. Pair a light background with dark text, or a
                dark background with light text.
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
            Now that you can control color, the next step is learning how
            to control spacing and sizing.
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