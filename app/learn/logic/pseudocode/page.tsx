"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function PseudocodeLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! Pseudocode is plain-language planning — it isn't tied to any real programming language's exact syntax."
      );
      markTopicComplete("logic", "pseudocode");
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
            <span className="text-slate-400">Topic 4 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Writing Pseudocode
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Plan your logic in plain language, before worrying about any
            programming language's exact syntax.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[50%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 50%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what pseudocode is and why it's useful.</li>
            <li>✓ Use common pseudocode conventions.</li>
            <li>✓ Write pseudocode for a simple decision.</li>
            <li>✓ Write pseudocode for a simple loop.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Plan before you code</h2>

          <p className="mt-5 leading-8 text-slate-300">
            <strong className="text-white">Pseudocode</strong> is a way
            of writing out your logic in plain, structured language —
            not tied to Java, Python, or any specific language&apos;s
            exact syntax. It lets you focus entirely on{" "}
            <em>what</em> your solution needs to do, before getting
            distracted by semicolons, brackets, or indentation rules.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Why this helps:</strong>{" "}
              if your pseudocode logic is wrong, that&apos;s easy and
              cheap to fix. If you only discover the logic is wrong{" "}
              <em>after</em> writing 40 lines of real code, that&apos;s
              a much bigger fix.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Common conventions</h2>

          <p className="mt-5 leading-8 text-slate-300">
            There&apos;s no single official pseudocode standard, but
            these conventions are widely used and easy to read:
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Keyword</th>
                  <th className="px-5 py-3 font-medium">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr><td className="px-5 py-3 font-mono text-emerald-300">INPUT</td><td className="px-5 py-3 text-slate-300">Get a value from the user</td></tr>
                <tr><td className="px-5 py-3 font-mono text-emerald-300">DISPLAY / OUTPUT</td><td className="px-5 py-3 text-slate-300">Show something to the user</td></tr>
                <tr><td className="px-5 py-3 font-mono text-emerald-300">SET</td><td className="px-5 py-3 text-slate-300">Assign a value to a variable</td></tr>
                <tr><td className="px-5 py-3 font-mono text-emerald-300">IF / ELSE</td><td className="px-5 py-3 text-slate-300">A decision</td></tr>
                <tr><td className="px-5 py-3 font-mono text-emerald-300">WHILE / FOR</td><td className="px-5 py-3 text-slate-300">A loop</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">A worked example</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Let&apos;s write pseudocode for: &quot;check if a number is
            even or odd.&quot;
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Pseudocode</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`INPUT number

IF number MOD 2 equals 0 THEN
    DISPLAY "Even"
ELSE
    DISPLAY "Odd"
END IF`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Notice this reads almost like English, and says nothing
            about which language you&apos;ll actually build it in — the
            exact same pseudocode could become Java, Python, or
            JavaScript later.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What makes pseudocode useful?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. It must follow Python's exact syntax</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. It's plain-language planning, not tied to any specific language's syntax</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. It can only be used for very simple programs</span>
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
              Write pseudocode for: &quot;Ask the user for a mark. If it&apos;s
              50 or higher, display &apos;Pass&apos;. Otherwise, display
              &apos;Fail&apos;.&quot;
            </p>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Start with INPUT, then use IF / ELSE for the decision.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`INPUT mark

IF mark >= 50 THEN
    DISPLAY "Pass"
ELSE
    DISPLAY "Fail"
END IF`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Writing real code with syntax errors instead of pseudocode</div>
              <p className="mt-2 text-sm text-slate-500">
                If you find yourself worrying about semicolons or exact
                brackets, you&apos;ve drifted from pseudocode back into
                real code — pull back to plain language.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Being too vague</div>
              <p className="mt-2 text-sm text-slate-500">
                &quot;Do the calculation&quot; isn&apos;t useful pseudocode
                — be specific enough that someone else could follow your
                steps exactly.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can write logic in plain language, the next
            step is learning to visualize it as a flowchart.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/logic" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to Problem Solving</Link>
            <Link href="/learn/logic/flowcharts" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}