"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindCardLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! Combining many small utility classes on one element is exactly how Tailwind is meant to be used."
      );
      markTopicComplete("tailwind", "building-a-card");
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
            <span className="text-slate-400">Topic 9 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Building a Simple Card
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Combine everything from this course into one real, complete
            component.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 100%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Combine spacing, color, typography and borders in one element.</li>
            <li>✓ Use flexbox to arrange a card&apos;s internal content.</li>
            <li>✓ Add a hover effect to an entire card.</li>
            <li>✓ Read and understand a realistic block of Tailwind classes.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Building it piece by piece
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Real Tailwind code almost always looks like a long list of
            classes stacked on one element — that&apos;s normal, not
            messy. Let&apos;s build a project card, adding one idea at a
            time.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-2 text-sm font-mono text-slate-400">
                Step 1 — container with padding, background and rounded
                corners
              </div>
              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-500">(empty card)</p>
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm font-mono text-slate-400">
                Step 2 — add a border and shadow
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg">
                <p className="text-sm text-slate-500">(still empty, now with depth)</p>
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm font-mono text-slate-400">
                Step 3 — add real content with typography
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg">
                <h3 className="text-xl font-bold">Project Title</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A short description of the project goes here.
                </p>
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
            Adding flexbox for layout
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Now let&apos;s add a footer row inside the card — an icon on
            the left, a &quot;View →&quot; link on the right, using
            exactly the flexbox pattern from earlier in this course.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg">
            <h3 className="text-xl font-bold">Project Title</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              A short description of the project goes here.
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-semibold text-emerald-400">
                View →
              </span>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            <code className="text-emerald-300">flex items-center justify-between</code>{" "}
            handles the whole layout of that footer row in one line.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            The finished, hoverable card
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Finally, let&apos;s add a hover effect so the whole card
            responds when a visitor mouses over it — a subtle border
            color change and a smooth transition.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Try hovering this card
            </div>

            <div className="p-6">
              <a
                href="#"
                className="block rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-lg transition hover:border-emerald-400/40"
              >
                <h3 className="text-xl font-bold">Project Title</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A short description of the project goes here.
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl">🚀</span>
                  <span className="text-sm font-semibold text-emerald-400">
                    View →
                  </span>
                </div>
              </a>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            This is genuinely the same pattern used for the project cards
            on CodeSupport SA&apos;s own{" "}
            <Link href="/projects" className="text-emerald-400 hover:underline">
              Projects page
            </Link>
            .
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Is it normal for a real element to have many utility classes
            at once?
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
                A. No, it means you&apos;re doing something wrong
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
                B. Only true for advanced developers
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
                C. Yes, combining many small classes on one element is
                exactly how Tailwind is meant to be used
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
              Build a complete card{" "}
              <code className="text-emerald-300">&lt;div&gt;</code> with:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>A dark background, padding, rounded corners and a shadow.</li>
              <li>A bold heading inside.</li>
              <li>
                A footer row (using flexbox) with an icon on the left and
                text on the right.
              </li>
              <li>A hover effect on the whole card.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Build it in the same order as this lesson: container
                first, then content, then the flex footer, then the hover
                effect last.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<div class="bg-slate-900 p-6 rounded-2xl shadow-lg transition hover:border-emerald-400 border border-white/10">
  <h3 class="text-xl font-bold">My Card</h3>

  <div class="flex items-center justify-between mt-4">
    <span>🚀</span>
    <span class="text-emerald-400">View →</span>
  </div>
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
                Trying to remember every class instead of building things
                up
              </div>
              <p className="mt-2 text-sm text-slate-500">
                No one memorizes every Tailwind class. Build in small
                steps — background, then spacing, then content, then
                extras — the same way this lesson did, testing as you go.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Forgetting Tailwind&apos;s own documentation
              </div>
              <p className="mt-2 text-sm text-slate-500">
                When you can&apos;t remember an exact class name,
                Tailwind&apos;s official docs (tailwindcss.com/docs) are
                searchable and list every utility — even experienced
                developers look things up constantly.
              </p>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>

          <h2 className="mt-4 text-2xl font-bold">
            You&apos;ve completed the Tailwind CSS course!
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            From your first utility class to a complete, hoverable card
            component — you now know how to style real interfaces with
            Tailwind. Time to put it into practice.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/tailwind"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Tailwind
            </Link>

            <Link
              href="/projects"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Projects →
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
