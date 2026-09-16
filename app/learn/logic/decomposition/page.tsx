"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function DecompositionLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! Decomposition means breaking a big problem into smaller, more manageable pieces."
      );
      markTopicComplete("logic", "decomposition");
    } else if (quizAnswer === "") {
      setQuizResult("Choose an answer first.");
    } else {
      setQuizResult("Not quite. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-bold text-white transition hover:text-emerald-400">
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>
          <Link href="/learn/logic" className="text-sm text-slate-400 transition hover:text-emerald-400">
            ← Problem Solving Topics
          </Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">Problem Solving & Logic</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 2 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Breaking Down Problems
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Split a big, overwhelming problem into small, manageable
            pieces — the single most useful habit in problem solving.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[25%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 25%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what decomposition means.</li>
            <li>✓ Recognize when a problem is "too big" to tackle directly.</li>
            <li>✓ Break a real problem into smaller subproblems.</li>
            <li>✓ Know how small is "small enough."</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Why big problems feel impossible</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Ever felt stuck staring at a coding task with no idea where
            to even start? That feeling almost always means the problem
            is too big to hold in your head all at once.{" "}
            <strong className="text-white">Decomposition</strong> is the
            fix: break it into smaller pieces, and solve each piece one
            at a time.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">A useful test:</strong>{" "}
              if you can&apos;t describe how to solve a piece in one or
              two sentences, it&apos;s probably still too big — break it
              down further.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Worked example: a simple calculator</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Imagine the task: &quot;Build a program that calculates the
            result of two numbers using an operator the user chooses.&quot;
            That&apos;s genuinely a lot to think about at once. Let&apos;s
            decompose it.
          </p>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">Step 1</div>
              <p className="mt-1 text-sm text-slate-300">Get the first number from the user.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">Step 2</div>
              <p className="mt-1 text-sm text-slate-300">Get the operator (+, -, *, /) from the user.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">Step 3</div>
              <p className="mt-1 text-sm text-slate-300">Get the second number from the user.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">Step 4</div>
              <p className="mt-1 text-sm text-slate-300">Work out which operator was chosen, and perform that calculation.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">Step 5</div>
              <p className="mt-1 text-sm text-slate-300">Display the result.</p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Each of these steps is small enough to think about — and
            genuinely small enough to eventually become just a few lines
            of real code, in whichever language you&apos;re using.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">How small is small enough?</h2>

          <p className="mt-5 leading-8 text-slate-300">
            There&apos;s no single correct answer — it depends on your
            own confidence. A more experienced programmer might keep
            &quot;get the operator and perform the calculation&quot; as
            one step. A beginner might split that into three or four
            smaller steps. Both are valid — decompose until{" "}
            <em>you</em> feel confident tackling each piece.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What does decomposition mean?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Writing code without planning first</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Making a problem harder on purpose</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Breaking a big problem into smaller, more manageable pieces</span>
            </label>
          </div>

          <button onClick={checkQuiz} className="mt-6 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">Check Answer</button>

          {quizResult && (
            <div className={`mt-5 rounded-xl p-4 text-sm ${quizResult.startsWith("Correct") ? "bg-emerald-400/10 text-emerald-300" : "bg-yellow-400/10 text-yellow-300"}`}>
              {quizResult}
            </div>
          )}
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">04 • Exercise</p>
          <h2 className="mt-3 text-3xl font-bold">Your turn</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="leading-7 text-slate-300">
              Decompose this task into at least 4 smaller steps:{" "}
              <strong className="text-white">&quot;Build a program that
              tells a learner their final grade based on three test
              marks.&quot;</strong>
            </p>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Think about what has to happen first (getting the marks)
                before anything can be calculated.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Example Answer</summary>
              <div className="space-y-2 border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                <p>1. Get the first mark from the learner.</p>
                <p>2. Get the second mark.</p>
                <p>3. Get the third mark.</p>
                <p>4. Calculate the average of the three marks.</p>
                <p>5. Work out the letter grade based on the average.</p>
                <p>6. Display the grade to the learner.</p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Steps that are still too big</div>
              <p className="mt-2 text-sm text-slate-500">
                &quot;Calculate everything and show the result&quot; isn&apos;t
                really decomposed — it&apos;s just the whole problem
                restated. Keep breaking it down until each step is a
                single, clear action.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Over-decomposing trivial steps</div>
              <p className="mt-2 text-sm text-slate-500">
                You don&apos;t need to split &quot;display the result&quot;
                into five smaller steps — decompose until each piece is
                manageable, not infinitely small.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can break problems apart, the next step is
            noticing when different problems share the same shape.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/logic" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to Problem Solving</Link>
            <Link href="/learn/logic/pattern-recognition" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}