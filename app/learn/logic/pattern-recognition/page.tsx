"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function PatternRecognitionLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! Both tasks share the same underlying pattern: loop through every item, check a condition, keep a running count."
      );
      markTopicComplete("logic", "pattern-recognition");
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
            <span className="text-slate-400">Topic 3 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Pattern Recognition
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Spot similarities between problems, so you're never really
            starting from zero.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[37%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 37%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what pattern recognition means in problem solving.</li>
            <li>✓ Spot when two different-sounding problems share the same shape.</li>
            <li>✓ Reuse a known approach on a new problem.</li>
            <li>✓ Avoid forcing a pattern that doesn't actually fit.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">You've solved this before</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Once you&apos;ve decomposed a few problems, you&apos;ll start
            noticing something: many &quot;new&quot; problems are
            actually old problems wearing a different outfit.{" "}
            <strong className="text-white">Pattern recognition</strong>{" "}
            is spotting that underlying similarity, so you can reuse an
            approach that already worked.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Two problems, one pattern</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Look at these two tasks — they sound completely different,
            but watch what happens when we decompose both.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-semibold text-white">
                Task A: &quot;Add up all the marks in a class.&quot;
              </div>
              <ol className="mt-3 space-y-1 text-sm text-slate-400 list-decimal pl-5">
                <li>Start a total at 0.</li>
                <li>Go through every mark.</li>
                <li>Add each mark to the total.</li>
                <li>Show the final total.</li>
              </ol>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-semibold text-white">
                Task B: &quot;Count how many learners passed.&quot;
              </div>
              <ol className="mt-3 space-y-1 text-sm text-slate-400 list-decimal pl-5">
                <li>Start a count at 0.</li>
                <li>Go through every mark.</li>
                <li>If the mark is a pass, add 1 to the count.</li>
                <li>Show the final count.</li>
              </ol>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Both follow the exact same shape:{" "}
            <strong className="text-white">
              start a running value, loop through every item, update the
              value based on each item, show the result at the end.
            </strong>{" "}
            This is one of the most common patterns you&apos;ll meet in
            programming.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Where this pays off</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Once you recognize &quot;this is a running-total pattern,&quot;
            you don&apos;t have to think from scratch every time — you
            just adapt the same shape: finding the highest mark, counting
            vowels in a word, adding up prices in a cart. All the same
            underlying pattern, wearing different clothes.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            "Sum all the marks" and "count how many passed" share which pattern?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Loop through every item, check a condition, keep a running value</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. They don't share anything in common</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Both require a computer to solve</span>
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
              These two tasks share the same pattern. Write out the
              shared shape in your own words:
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-400">
              <li>• &quot;Find the highest mark in a class.&quot;</li>
              <li>• &quot;Find the longest word in a sentence.&quot;</li>
            </ul>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Think about what you'd need to keep track of as you go
                through each item, and when you'd update it.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Example Answer</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Both follow: start by assuming the first item is the
                answer, then go through every remaining item — if you
                find one bigger/longer, replace your current answer with
                it. By the end, you're left with the true biggest/longest
                one.
              </div>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forcing a pattern that doesn't fit</div>
              <p className="mt-2 text-sm text-slate-500">
                Not every problem is a running-total pattern — recognize
                the shape, don&apos;t force it onto something genuinely
                different.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Treating every problem as brand new</div>
              <p className="mt-2 text-sm text-slate-500">
                If a problem feels totally unfamiliar, pause and ask:
                &quot;have I solved something with this same shape
                before?&quot; Usually, you have.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can spot patterns, the next step is learning
            how to plan a solution in plain language, before writing any
            real code.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/logic" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to Problem Solving</Link>
            <Link href="/learn/logic/pseudocode" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}