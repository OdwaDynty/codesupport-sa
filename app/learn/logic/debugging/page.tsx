"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function DebuggingLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! Narrowing down exactly where the problem starts is the key debugging skill."
      );
      markTopicComplete("logic", "debugging");
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
            <span className="text-slate-400">Topic 7 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Debugging as a Skill
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            A systematic way to find and fix what's going wrong —
            instead of guessing randomly.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[87%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 87%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what debugging actually means.</li>
            <li>✓ Use a systematic approach instead of guessing randomly.</li>
            <li>✓ Narrow down where a problem is actually happening.</li>
            <li>✓ Know when to ask for help, and what to share when you do.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Debugging is a skill, not luck</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Every programmer, no matter how experienced, spends real
            time debugging — finding and fixing things that go wrong.
            The difference between a frustrating debugging session and a
            quick one usually isn&apos;t luck — it&apos;s having a
            systematic approach instead of randomly changing things and
            hoping.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Reframe it:</strong>{" "}
              a bug isn&apos;t a sign you&apos;re bad at coding —
              it&apos;s completely normal, and debugging it is itself a
              real, learnable skill.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">A systematic approach</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">1. Reproduce it</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Can you make the problem happen again, reliably? If it&apos;s
                random or you can&apos;t trigger it on demand, that&apos;s
                itself useful information.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">2. Narrow it down</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Instead of staring at your whole program, check: does
                this specific section work correctly on its own? Keep
                narrowing until you find the exact spot things go wrong.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">3. Check your assumptions</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Print out or check the actual value of a variable at that
                point — is it really what you assumed it was? Bugs love
                hiding in wrong assumptions.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-semibold text-white">4. Fix one thing, test again</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Change one thing at a time, then check if it actually
                fixed the problem — changing five things at once makes it
                impossible to know what actually worked.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Asking for help effectively</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Sometimes, after genuinely trying to narrow it down yourself,
            you&apos;ll still be stuck — and that&apos;s exactly what
            CodeSupport SA&apos;s Coding Help feature is for. Asking well
            gets you a better answer, faster:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="text-sm font-semibold text-red-300">Less helpful</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                &quot;My code doesn&apos;t work, please help.&quot;
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <div className="text-sm font-semibold text-emerald-300">More helpful</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                &quot;I expected X to print, but Y printed instead. I
                narrowed it down to this specific line — here&apos;s
                what I&apos;ve tried so far.&quot;
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What's the key skill in effective debugging?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Narrowing down exactly where the problem starts</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Changing many things at once and hoping something works</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Rewriting the whole program from scratch every time</span>
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
              Think back to a time something you built (or tried to
              build, even outside coding) didn&apos;t work as expected.
              Write out:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>What you expected to happen.</li>
              <li>What actually happened instead.</li>
              <li>How you could have narrowed down where it went wrong, using the four-step approach above.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                This doesn&apos;t have to be about code — any time a plan
                didn&apos;t go as expected works for this exercise.
              </div>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Randomly changing things without a theory</div>
              <p className="mt-2 text-sm text-slate-500">
                This can accidentally "fix" something while you don&apos;t
                understand why — which often creates a new, harder-to-find
                bug later.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Giving up too early</div>
              <p className="mt-2 text-sm text-slate-500">
                Getting stuck is normal and doesn&apos;t mean
                you&apos;re bad at this — it&apos;s genuinely part of the
                process for every programmer, at every skill level.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the final topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Time to bring everything together, and solve a real problem
            from scratch.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/logic" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to Problem Solving</Link>
            <Link href="/learn/logic/putting-it-together" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}