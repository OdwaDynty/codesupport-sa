"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindFlexboxLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! justify-between pushes the first item to the start and the last to the end, spreading the rest evenly."
      );
      markTopicComplete("tailwind", "flexbox");
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
            <span className="text-slate-400">Topic 6 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Flexbox Basics
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to arrange multiple elements in a row or column —
            the single most useful tool for building layouts.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[67%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 67%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Turn a container into a flex layout using flex.</li>
            <li>✓ Space items apart using justify- utilities.</li>
            <li>✓ Align items vertically using items-.</li>
            <li>✓ Control spacing between items using gap-.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Turning on Flexbox
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Adding the <code className="text-emerald-300">flex</code>{" "}
            class to a container makes its direct children line up in a
            row automatically, instead of stacking on top of each other
            like normal HTML elements do.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              Without flex (default)
            </div>
            <div className="mt-3 space-y-2 rounded-lg bg-slate-950 p-4">
              <div className="w-fit rounded bg-emerald-500 px-4 py-2 text-sm text-white">
                Box 1
              </div>
              <div className="w-fit rounded bg-emerald-500 px-4 py-2 text-sm text-white">
                Box 2
              </div>
              <div className="w-fit rounded bg-emerald-500 px-4 py-2 text-sm text-white">
                Box 3
              </div>
            </div>

            <div className="mt-5 text-sm font-medium text-slate-400">
              With flex
            </div>
            <div className="mt-3 flex gap-2 rounded-lg bg-slate-950 p-4">
              <div className="rounded bg-emerald-500 px-4 py-2 text-sm text-white">
                Box 1
              </div>
              <div className="rounded bg-emerald-500 px-4 py-2 text-sm text-white">
                Box 2
              </div>
              <div className="rounded bg-emerald-500 px-4 py-2 text-sm text-white">
                Box 3
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            justify- and items-
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Once a container is flex, two classes control how its
            children are arranged: <code className="text-emerald-300">justify-</code>{" "}
            controls spacing along the row, and{" "}
            <code className="text-emerald-300">items-</code> controls
            vertical alignment.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-2 text-sm text-slate-400 font-mono">
                justify-between
              </div>
              <div className="flex justify-between rounded-lg bg-slate-900 p-4">
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">A</div>
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">B</div>
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">C</div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm text-slate-400 font-mono">
                justify-center
              </div>
              <div className="flex justify-center gap-2 rounded-lg bg-slate-900 p-4">
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">A</div>
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">B</div>
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">C</div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm text-slate-400 font-mono">
                items-center (this container is taller)
              </div>
              <div className="flex h-20 items-center gap-2 rounded-lg bg-slate-900 p-4">
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">A</div>
                <div className="rounded bg-emerald-500 px-3 py-1.5 text-xs text-white">B</div>
              </div>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            This exact combination —{" "}
            <code className="text-emerald-300">flex items-center justify-between</code>{" "}
            — is used constantly throughout CodeSupport SA&apos;s own
            navigation bars, to keep the logo on the left and links on
            the right, all vertically centered.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">gap- for spacing</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Instead of adding margin to each individual item,{" "}
            <code className="text-emerald-300">gap-</code> on the
            container adds consistent space between every child at once.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              HTML
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-400">&lt;div class=</span>
                <span className="text-orange-300">
                  &quot;flex items-center justify-between gap-4&quot;
                </span>
                <span className="text-slate-400">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">&lt;div&gt;</span>
                <span className="text-slate-300">Logo</span>
                <span className="text-slate-400">&lt;/div&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">&lt;div&gt;</span>
                <span className="text-slate-300">Links</span>
                <span className="text-slate-400">&lt;/div&gt;</span>
                {"\n"}
                <span className="text-slate-400">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What does justify-between do?
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
                A. Stacks all items on top of each other
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
                B. Centers all items together in the middle
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
                C. Pushes the first item to the start and the last to the
                end, spreading the rest evenly
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
              <code className="text-emerald-300">&lt;div&gt;</code> that
              arranges its children:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>In a row (not stacked).</li>
              <li>Centered vertically.</li>
              <li>With a gap of 4 between each child.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You need three classes on the parent container:{" "}
                <code>flex</code>, an <code>items-</code> class, and a{" "}
                <code>gap-</code> class.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<div class="flex items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
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
                Adding justify-/items- without flex
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class="justify-between"> <!-- does nothing -->`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                <code>justify-</code> and <code>items-</code> only work on
                a container that already has <code>flex</code> applied —
                without it, they have no effect at all.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Putting flex on the wrong element
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div>
  <div class="flex">Item 1</div>
  <div>Item 2</div>
</div>`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                <code>flex</code> goes on the{" "}
                <strong>parent</strong> container, not on each individual
                child — it's the parent that arranges its children, not
                the other way around.
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
            Now that you can arrange elements, the next step is making
            your layouts work well on both phones and desktops.
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