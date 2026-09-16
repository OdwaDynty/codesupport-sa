"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function AlgorithmsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! An algorithm is simply a clear, step-by-step set of instructions to solve a problem."
      );
      markTopicComplete("logic", "algorithms");
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
            <span className="text-slate-400">Topic 6 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Algorithms & Efficiency
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            What an algorithm actually is, and why some solutions are
            genuinely better than others.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[75%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 75%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Define what an algorithm is.</li>
            <li>✓ Explain why more than one correct algorithm can exist for the same problem.</li>
            <li>✓ Explain, at a basic level, what "efficiency" means.</li>
            <li>✓ Compare two simple algorithms for the same task.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">What is an algorithm?</h2>

          <p className="mt-5 leading-8 text-slate-300">
            You&apos;ve actually already been writing algorithms this
            whole course — every piece of pseudocode and every flowchart
            you&apos;ve written <em>is</em> an algorithm.{" "}
            <strong className="text-white">An algorithm is simply a
            clear, step-by-step set of instructions for solving a
            problem.</strong>
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            A recipe is an algorithm for making food. Directions to
            someone&apos;s house are an algorithm for getting there.
            Nothing mysterious — just a precise sequence of steps.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">More than one correct answer</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Here&apos;s something important: for almost any problem,
            more than one algorithm can correctly solve it — but some
            are better than others.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            Imagine finding a specific name in a phone book with 1,000
            names, sorted alphabetically.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-semibold text-white">
                Algorithm A: Check every page
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Start at page 1, check every single name until you find
                it. Could take up to 1,000 checks.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-semibold text-white">
                Algorithm B: Open to the middle
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Open to the middle, see if your name comes before or
                after, repeat on the correct half. Takes about 10 checks.
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Both algorithms are correct — they both eventually find the
            name. But Algorithm B is dramatically more{" "}
            <strong className="text-white">efficient</strong>. This is
            actually a well-known real algorithm called{" "}
            <em>binary search</em>, and you&apos;ll likely meet it again
            in one of your language courses.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Why efficiency matters</h2>

          <p className="mt-5 leading-8 text-slate-300">
            For small tasks, efficiency barely matters — both algorithms
            above would feel instant on a computer either way. But as
            problems get bigger (searching a million records, not
            1,000), an inefficient algorithm can become genuinely too
            slow to use, while an efficient one still feels instant.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">At this stage:</strong>{" "}
              you don&apos;t need to calculate exact efficiency — just
              build the habit of asking &quot;is there a smarter way to
              do this?&quot; before assuming your first idea is the best
              one.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What is an algorithm?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. A type of programming language</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. A clear, step-by-step set of instructions to solve a problem</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. A type of computer hardware</span>
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
              Think of two different algorithms for finding the largest
              number in an unsorted list of 20 numbers. Describe both in
              plain language, and say which one you think is more
              efficient, and why.
            </p>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Since the list is unsorted, is there really a shortcut —
                or does every algorithm have to check every number at
                least once?
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Example Answer</summary>
              <div className="space-y-3 border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                <p>
                  <strong className="text-white">Algorithm A:</strong>{" "}
                  Compare every pair of numbers to each other (very
                  wasteful — checks far more than necessary).
                </p>
                <p>
                  <strong className="text-white">Algorithm B:</strong>{" "}
                  Assume the first number is the largest, then check each
                  remaining number once, updating your answer whenever
                  you find something bigger.
                </p>
                <p>
                  Algorithm B is more efficient — since the list is
                  unsorted, every algorithm has to look at every number
                  at least once, but B does that with the minimum
                  possible work, while A does far more comparisons than
                  needed.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Assuming your first idea is automatically the best one</div>
              <p className="mt-2 text-sm text-slate-500">
                It&apos;s fine to start with the first working solution
                you think of — just get in the habit of asking afterward
                whether there&apos;s a smarter way.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Over-optimizing tiny, unimportant tasks</div>
              <p className="mt-2 text-sm text-slate-500">
                Efficiency matters most for large or frequently-repeated
                tasks — don&apos;t agonize over shaving microseconds off
                something that only runs once on ten items.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Even with great planning, things go wrong sometimes. Next,
            let's learn how to debug systematically.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/logic" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to Problem Solving</Link>
            <Link href="/learn/logic/debugging" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}