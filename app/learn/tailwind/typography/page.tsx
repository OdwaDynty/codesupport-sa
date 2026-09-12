"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindTypographyLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! font-bold makes text bold, text-xl makes it larger."
      );
      markTopicComplete("tailwind", "typography");
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
            <span className="text-slate-400">Topic 4 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Typography
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Control the size, weight and alignment of your text.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[44%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 44%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Set font size using text- utilities.</li>
            <li>✓ Set font weight using font- utilities.</li>
            <li>✓ Align text using text-left/center/right.</li>
            <li>✓ Control line height using leading- utilities.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">Font size</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Font size utilities use{" "}
            <code className="text-emerald-300">text-</code> followed by a
            named size, from tiny to huge.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="space-y-3">
              <p className="text-xs">text-xs — small print</p>
              <p className="text-sm">text-sm — small text</p>
              <p className="text-base">text-base — normal text</p>
              <p className="text-lg">text-lg — slightly larger</p>
              <p className="text-xl">text-xl — larger still</p>
              <p className="text-2xl">text-2xl — heading size</p>
              <p className="text-4xl">text-4xl — big heading</p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            You can see the whole scale directly above — each line is
            actually styled with the class it names.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Font weight and alignment
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <p className="font-normal">font-normal</p>
              <p className="font-medium">font-medium</p>
              <p className="font-semibold">font-semibold</p>
              <p className="font-bold">font-bold</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <p className="text-left text-sm text-slate-400">text-left</p>
              <p className="text-center text-sm text-slate-400">text-center</p>
              <p className="text-right text-sm text-slate-400">text-right</p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Notice the pattern is the same everywhere in Tailwind — a
            property prefix (<code className="text-emerald-300">font-</code>,{" "}
            <code className="text-emerald-300">text-</code>) followed by a
            value.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Putting it together
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              HTML
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-400">&lt;h1 class=</span>
                <span className="text-orange-300">
                  &quot;text-3xl font-bold text-center&quot;
                </span>
                <span className="text-slate-400">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">Welcome!</span>
                {"\n"}
                <span className="text-slate-400">&lt;/h1&gt;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">Result:</p>

          <div className="mt-3 rounded-xl bg-slate-950 p-6">
            <h3 className="text-center text-3xl font-bold">Welcome!</h3>
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Which classes would make text both bold and large?
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
                A. text-center and p-4
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
                B. font-bold and text-xl
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
                C. m-bold and size-xl
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
              Write the Tailwind classes for an{" "}
              <code className="text-emerald-300">&lt;h2&gt;</code> that is:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>2xl in size.</li>
              <li>Semibold weight.</li>
              <li>Centered.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You'll need three classes: one for size, one for weight,
                one for alignment.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<h2 class="text-2xl font-semibold text-center">
  My Heading
</h2>`}</code>
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
                Confusing text-xl (size) with text-center (alignment)
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`class="text-center-xl" — this class doesn't exist`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Size and alignment are always separate classes:{" "}
                <code>text-xl</code> and <code>text-center</code>, used
                together, never combined into one word.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Using bold instead of font-bold
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`class="bold"`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Tailwind's class is always <code>font-bold</code>, with
                the <code>font-</code> prefix — a bare{" "}
                <code>bold</code> doesn&apos;t exist as a class.
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
            Now that you can style text, the next step is learning about
            borders, rounded corners and shadows.
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