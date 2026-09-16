"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function ComputationalThinkingLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! Computational thinking is a way of solving problems — it doesn't require a computer at all."
      );
      markTopicComplete("logic", "computational-thinking");
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
            href="/learn/logic"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Problem Solving Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              Problem Solving & Logic
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 1 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            What is Computational Thinking?
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            The core mindset behind solving problems like a programmer —
            no code required.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[12%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 12%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what computational thinking means.</li>
            <li>✓ Name the four core skills it's built from.</li>
            <li>✓ Recognize computational thinking in an everyday task.</li>
            <li>✓ Explain why this matters before learning to code.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            It's not about computers
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Despite the name, <strong className="text-white">computational
            thinking</strong> isn&apos;t really about computers at all —
            it&apos;s a way of breaking down and solving problems that
            happens to be exactly how computers (and good programmers)
            approach things.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            You&apos;ve actually been doing this your whole life without
            realizing it. Planning a trip, working out a recipe, sorting
            your books by subject — all of these use the same underlying
            skills you&apos;re about to learn on purpose.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Why this matters:</strong>{" "}
              a huge number of beginners who feel &quot;bad at coding&quot;
              are actually just missing this step — they jump straight
              to writing code before they&apos;ve properly thought
              through the problem. This course fixes that, before you
              ever touch a language.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            The four core skills
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Computational thinking is usually broken into four skills.
            You&apos;ll get a full lesson on each of the first three
            later in this course — this is just a quick preview.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">1. Decomposition</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Breaking a big, overwhelming problem into smaller, more
                manageable pieces.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">2. Pattern Recognition</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Spotting similarities between this problem and ones
                you&apos;ve already solved.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">3. Abstraction</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Ignoring irrelevant details and focusing only on what
                actually matters for solving the problem.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">4. Algorithms</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Writing out a clear, step-by-step set of instructions to
                actually solve the problem.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            A real example: making toast
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Let&apos;s apply all four skills to something you&apos;ve
            definitely done before — making toast.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="divide-y divide-white/10">
              <div className="p-5">
                <div className="text-sm font-semibold text-emerald-300">
                  Decomposition
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  &quot;Make breakfast&quot; is too big. Break it down:
                  get the bread, put it in the toaster, wait, get butter,
                  spread it.
                </p>
              </div>

              <div className="p-5">
                <div className="text-sm font-semibold text-emerald-300">
                  Pattern Recognition
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This is similar to making a sandwich — both involve
                  &quot;get ingredient, prepare it, combine, serve.&quot;
                </p>
              </div>

              <div className="p-5">
                <div className="text-sm font-semibold text-emerald-300">
                  Abstraction
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  You don&apos;t need to think about how the toaster&apos;s
                  heating element works internally — just that pressing
                  the lever starts it.
                </p>
              </div>

              <div className="p-5">
                <div className="text-sm font-semibold text-emerald-300">
                  Algorithm
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  1. Get bread. 2. Put in toaster. 3. Press lever. 4. Wait
                  until it pops up. 5. Spread butter.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            That last step — the algorithm — is exactly what you&apos;ll
            eventually turn into real code. Everything before it is the
            thinking that makes writing that code actually possible.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Which of these best describes computational thinking?
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
                A. A way of using a computer to solve math problems
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
                B. A way of solving problems — it doesn't require a
                computer at all
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
                C. A programming language
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
              Pick an everyday task you do regularly — getting ready for
              school, packing your school bag, or something similar.
              Write out, in your own words:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>How you&apos;d break it into smaller steps (decomposition).</li>
              <li>Any other task it reminds you of (pattern recognition).</li>
              <li>The exact step-by-step instructions (an algorithm).</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                There&apos;s no code involved here — just write it out
                the same way the toast example was laid out above.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Example Answer
              </summary>
              <div className="space-y-3 border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                <p>
                  <strong className="text-white">Task:</strong> Getting
                  ready for school.
                </p>
                <p>
                  <strong className="text-white">Decomposition:</strong>{" "}
                  Wake up, brush teeth, get dressed, eat breakfast, pack
                  bag, leave.
                </p>
                <p>
                  <strong className="text-white">Pattern:</strong> Similar
                  to getting ready for a sports practice — same basic
                  &quot;wake, prepare, pack, go&quot; shape.
                </p>
                <p>
                  <strong className="text-white">Algorithm:</strong> 1.
                  Wake up. 2. Brush teeth. 3. Get dressed. 4. Eat. 5. Pack
                  bag. 6. Check you have everything. 7. Leave.
                </p>
              </div>
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
                Trying to solve everything at once
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Jumping straight to a full solution without breaking the
                problem down first is exactly how beginners get stuck and
                overwhelmed — decomposition exists to prevent this.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Thinking this only applies to computers
              </div>
              <p className="mt-2 text-sm text-slate-500">
                These are general life problem-solving skills — you&apos;ll
                use them everywhere, not just when coding.
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
            Now that you understand the big picture, let's go deeper on
            the first skill — breaking problems down.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/logic"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Problem Solving
            </Link>

            <Link
              href="/learn/logic/decomposition"
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