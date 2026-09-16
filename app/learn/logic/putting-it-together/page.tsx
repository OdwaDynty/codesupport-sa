"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function PuttingItTogetherLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! Decompose first, then plan the logic — jumping straight to code is exactly what leads to getting stuck."
      );
      markTopicComplete("logic", "putting-it-together");
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
            <span className="text-slate-400">Topic 8 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Putting It All Together
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Solve a real problem from scratch, using every skill from
            this course, start to finish.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 100%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Apply decomposition, pattern recognition, and pseudocode together.</li>
            <li>✓ Plan a complete solution before writing real code.</li>
            <li>✓ Recognize this same process works for any problem, in any language.</li>
            <li>✓ Feel confident tackling your first real programming course.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">The full process, start to finish</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Let&apos;s solve a genuinely real problem, using everything
            from this course in order:
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <p className="text-sm font-semibold text-white">The problem:</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              &quot;Write a program that takes a list of test marks and
              tells the teacher the class average, the highest mark, and
              how many learners passed (50 or above).&quot;
            </p>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Step 1 — Decompose it</h2>

          <div className="mt-6 space-y-2 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <p className="text-sm text-slate-300">1. Get the list of marks.</p>
            <p className="text-sm text-slate-300">2. Calculate the average of all marks.</p>
            <p className="text-sm text-slate-300">3. Find the highest mark.</p>
            <p className="text-sm text-slate-300">4. Count how many marks are 50 or above.</p>
            <p className="text-sm text-slate-300">5. Display all three results.</p>
          </div>

          <h2 className="mt-10 text-3xl font-bold">Step 2 — Spot the pattern</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Steps 2, 3, and 4 all share the same running-value pattern
            from earlier in this course — loop through every mark, and
            update a running value (a total, a current highest, a
            count) as you go.
          </p>

          <h2 className="mt-10 text-3xl font-bold">Step 3 — Write the pseudocode</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`SET total to 0
SET highest to 0
SET passCount to 0

FOR each mark in marks
    SET total to total + mark

    IF mark > highest THEN
        SET highest to mark
    END IF

    IF mark >= 50 THEN
        SET passCount to passCount + 1
    END IF
END FOR

SET average to total / number of marks

DISPLAY average
DISPLAY highest
DISPLAY passCount`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Notice this pseudocode does <strong className="text-white">
            all three calculations in a single pass</strong> through the
            marks — a genuinely efficient approach, not three separate
            loops.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">This process works everywhere</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Here&apos;s the genuinely important part: this exact
            pseudocode could become real code in{" "}
            <strong className="text-white">any</strong> of your language
            courses — Java, Python, JavaScript, C++ — with only the
            syntax changing. The thinking behind it stays identical. This
            is why this course comes first: it&apos;s the one skill set
            that transfers to everything else you&apos;ll learn.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What should you do before writing real code?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Nothing — just start typing and figure it out as you go</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Decompose the problem and plan the logic first</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Memorize the whole language's syntax</span>
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
          <h2 className="mt-3 text-3xl font-bold">Your turn — a full practice run</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="leading-7 text-slate-300">
              Using the full process from this lesson, plan a solution
              for: &quot;Given a list of prices in a shopping cart,
              calculate the total, and tell the customer if they qualify
              for free delivery (total is R500 or more).&quot;
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Decompose it into steps.</li>
              <li>Identify any patterns from earlier in this course.</li>
              <li>Write it out as pseudocode.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                This uses the same running-total pattern from earlier,
                followed by one final decision.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Example Answer</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`SET total to 0

FOR each price in prices
    SET total to total + price
END FOR

IF total >= 500 THEN
    DISPLAY "You qualify for free delivery!"
ELSE
    DISPLAY "Add more items for free delivery."
END IF

DISPLAY total`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Skipping straight to code, even now</div>
              <p className="mt-2 text-sm text-slate-500">
                It&apos;s tempting to skip planning once you feel
                confident — resist that. Even experienced developers
                plan first for anything beyond a trivial task.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Thinking this course was "just theory"</div>
              <p className="mt-2 text-sm text-slate-500">
                Every single one of your language courses will lean on
                these exact skills, constantly — this wasn&apos;t a
                detour, it was the foundation.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>
          <h2 className="mt-4 text-2xl font-bold">You&apos;ve completed Problem Solving & Logic!</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            You now think like a programmer, before ever writing a
            single line of real code. That foundation will make every
            language course easier from here. Time to pick a language
            and start building.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/logic" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to Problem Solving</Link>
            <Link href="/learn" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Choose a Language →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}