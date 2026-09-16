"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function FlowchartsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! A diamond shape represents a decision point in a flowchart."
      );
      markTopicComplete("logic", "flowcharts");
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
            <span className="text-slate-400">Topic 5 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Flowcharts
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Visualize the steps and decisions in a process — sometimes a
            picture makes logic click faster than words do.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[62%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 62%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Recognize the standard flowchart shapes.</li>
            <li>✓ Read a flowchart from start to end.</li>
            <li>✓ Draw a simple flowchart for a decision.</li>
            <li>✓ Know when a flowchart is more useful than pseudocode.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">The standard shapes</h2>

          <p className="mt-5 leading-8 text-slate-300">
            A flowchart uses a small set of shapes, each with a specific
            meaning, connected by arrows showing the order things
            happen.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-full border-2 border-emerald-400 text-xs font-semibold text-emerald-300">
                Start / End
              </div>
              <p className="text-sm text-slate-400">Oval — where the process begins or ends.</p>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-lg border-2 border-blue-400 text-xs font-semibold text-blue-300">
                Process
              </div>
              <p className="text-sm text-slate-400">Rectangle — a single action or calculation.</p>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex h-16 w-16 shrink-0 rotate-45 items-center justify-center border-2 border-yellow-400">
                <span className="-rotate-45 text-center text-[11px] font-semibold text-yellow-300">
                  Decision
                </span>
              </div>
              <p className="text-sm text-slate-400">Diamond — a yes/no question that branches.</p>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900 p-5">
              <div
                className="flex h-14 w-24 shrink-0 items-center justify-center border-2 border-purple-400 text-[11px] font-semibold text-purple-300"
                style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" }}
              >
                Input/Output
              </div>
              <p className="text-sm text-slate-400">Parallelogram — getting input or showing output.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">A worked example</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Here&apos;s the same &quot;Pass or Fail&quot; logic from the
            last lesson, drawn as a flowchart.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 p-8">
            <div className="flex h-12 w-40 items-center justify-center rounded-full border-2 border-emerald-400 text-sm font-semibold text-emerald-300">
              Start
            </div>
            <div className="text-slate-600">↓</div>

            <div
              className="flex h-12 w-52 items-center justify-center border-2 border-purple-400 text-sm font-semibold text-purple-300"
              style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
            >
              Input: mark
            </div>
            <div className="text-slate-600">↓</div>

            <div className="flex h-24 w-24 rotate-45 items-center justify-center border-2 border-yellow-400">
              <span className="-rotate-45 text-center text-[11px] font-semibold text-yellow-300">
                mark &gt;= 50?
              </span>
            </div>
            <div className="text-slate-600">↓</div>

            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-slate-500">Yes</span>
                <div className="flex h-12 w-36 items-center justify-center rounded-lg border-2 border-blue-400 text-sm font-semibold text-blue-300">
                  Display &quot;Pass&quot;
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-slate-500">No</span>
                <div className="flex h-12 w-36 items-center justify-center rounded-lg border-2 border-blue-400 text-sm font-semibold text-blue-300">
                  Display &quot;Fail&quot;
                </div>
              </div>
            </div>

            <div className="text-slate-600">↓</div>
            <div className="flex h-12 w-40 items-center justify-center rounded-full border-2 border-emerald-400 text-sm font-semibold text-emerald-300">
              End
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Notice the diamond genuinely branches into two paths — that
            branching is exactly what a diamond shape means whenever you
            see one.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Pseudocode vs. flowcharts</h2>

          <p className="mt-5 leading-8 text-slate-300">
            They&apos;re not competing tools — they&apos;re two ways of
            expressing the same logic. Pseudocode is often faster to
            write; flowcharts are often easier to <em>see</em> the shape
            of a process at a glance, especially with lots of branching
            decisions. Use whichever helps you think more clearly for a
            given problem.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">Which shape represents a decision point?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Oval</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Rectangle</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Diamond</span>
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
              On paper (or in your head), describe the flowchart for:
              &quot;Ask for a number. If it&apos;s even, display &apos;Even&apos;.
              Otherwise, display &apos;Odd&apos;.&quot; List which shape
              you&apos;d use for each part.
            </p>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Every flowchart needs exactly one Start shape and at
                least one End shape.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Example Answer</summary>
              <div className="space-y-2 border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                <p>1. Oval: Start</p>
                <p>2. Parallelogram: Input number</p>
                <p>3. Diamond: number MOD 2 equals 0?</p>
                <p>4. Rectangle (Yes path): Display &quot;Even&quot;</p>
                <p>5. Rectangle (No path): Display &quot;Odd&quot;</p>
                <p>6. Oval: End</p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting both branches of a decision</div>
              <p className="mt-2 text-sm text-slate-500">
                Every diamond needs both a Yes path and a No path drawn
                — leaving one out means your flowchart doesn&apos;t
                cover every case.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Mixing up shapes</div>
              <p className="mt-2 text-sm text-slate-500">
                Using a rectangle for a decision instead of a diamond
                makes a flowchart confusing to read — stick to the
                standard meaning of each shape.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can visualize logic, the next step is
            understanding what an algorithm actually is, and why some
            are better than others.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/logic" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to Problem Solving</Link>
            <Link href="/learn/logic/algorithms" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}