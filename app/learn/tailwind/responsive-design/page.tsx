"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindResponsiveLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! Unprefixed classes apply to all screen sizes; md: only kicks in at medium screens and up."
      );
      markTopicComplete("tailwind", "responsive-design");
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
            <span className="text-slate-400">Topic 7 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Responsive Design
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Make your layouts adapt automatically between phones, tablets
            and desktops.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[78%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 78%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain Tailwind's mobile-first approach.</li>
            <li>✓ Use breakpoint prefixes like sm:, md:, lg:.</li>
            <li>✓ Change a layout from stacked to side-by-side on larger screens.</li>
            <li>✓ Hide or show elements at different screen sizes.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Mobile-first: the default is for small screens
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Tailwind is built{" "}
            <strong className="text-white">mobile-first</strong>. Any
            class you write with no prefix applies to every screen size,
            starting from the smallest. To change something only at
            larger sizes, you add a breakpoint prefix.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Prefix</th>
                  <th className="px-5 py-3 font-medium">Applies from</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">
                    (none)
                  </td>
                  <td className="px-5 py-3 text-slate-400">All screens</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">sm:</td>
                  <td className="px-5 py-3 text-slate-400">640px and up</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">md:</td>
                  <td className="px-5 py-3 text-slate-400">768px and up</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">lg:</td>
                  <td className="px-5 py-3 text-slate-400">1024px and up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Stacked on mobile, side-by-side on desktop
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The single most common responsive pattern: start elements
            stacked (the mobile-friendly default), then switch to a row
            once there&apos;s enough screen width.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-slate-400">&lt;div class=</span>
                <span className="text-orange-300">
                  &quot;flex flex-col md:flex-row gap-4&quot;
                </span>
                <span className="text-slate-400">&gt;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">flex-col</code> stacks
            children vertically by default (good for narrow phone
            screens). <code className="text-emerald-300">md:flex-row</code>{" "}
            overrides that back to a horizontal row, but only once the
            screen is at least 768px wide.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Live example — try resizing your browser
            </div>
            <div className="flex flex-col gap-3 p-5 md:flex-row">
              <div className="rounded-lg bg-emerald-500 p-4 text-center text-sm text-white">
                Box 1
              </div>
              <div className="rounded-lg bg-emerald-500 p-4 text-center text-sm text-white">
                Box 2
              </div>
              <div className="rounded-lg bg-emerald-500 p-4 text-center text-sm text-white">
                Box 3
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Hiding and showing elements
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            You can combine <code className="text-emerald-300">hidden</code>{" "}
            with a breakpoint to show something only on larger screens —
            this is exactly how CodeSupport SA&apos;s own navigation
            hides its full link list on mobile and shows a Menu button
            instead.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              HTML
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-400">&lt;div class=</span>
                <span className="text-orange-300">
                  &quot;hidden md:block&quot;
                </span>
                <span className="text-slate-400">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">
                  Only visible on medium screens and up
                </span>
                {"\n"}
                <span className="text-slate-400">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">hidden</code> hides it
            everywhere by default; <code className="text-emerald-300">md:block</code>{" "}
            overrides that back to visible once the screen reaches medium
            width.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What's the difference between a class with no prefix and one
            with md:?
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
                A. They do exactly the same thing
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
                B. Unprefixed applies to all screens; md: only applies
                from medium screens up
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
                C. md: only applies to mobile screens
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
              <code className="text-emerald-300">&lt;div&gt;</code> that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Has text size text-lg on mobile.</li>
              <li>Becomes text-2xl on medium screens and up.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Write the mobile size with no prefix, then add the
                breakpoint version right after it.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<div class="text-lg md:text-2xl">
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
                Forgetting the mobile version entirely
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class="md:flex-row"> <!-- what happens on mobile? -->`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Always set a sensible default first (like{" "}
                <code>flex-col</code>), then override it at larger sizes —
                don&apos;t leave mobile unstyled.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Thinking md: means "only on medium screens"
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`md:text-2xl // applies at md AND larger (lg, xl...) too`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Breakpoints are &quot;from this size <strong>and up</strong>,&quot;
                not &quot;only at this exact size.&quot;{" "}
                <code>md:text-2xl</code> stays active on large and extra
                large screens too, unless something later overrides it.
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
            Now that your layouts adapt to screen size, the next step is
            adding interactivity with hover and focus states.
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