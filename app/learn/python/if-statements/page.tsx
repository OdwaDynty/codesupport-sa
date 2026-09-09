"use client";

import Link from "next/link";
import { useState } from "react";

export default function PythonIfStatementsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! The code inside the if block only runs when the condition is true."
      );
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
            href="/learn/python"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Python Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              Python
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 6 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Python If Statements
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to make your program run different code depending on
            a condition.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[60%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 60%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what an if statement does.</li>
            <li>✓ Write an if statement using a comparison operator.</li>
            <li>✓ Understand how indentation controls what runs.</li>
            <li>✓ Combine conditions using and / or.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is an if statement?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            An <strong className="text-white">if statement</strong> lets
            your program make a decision. It checks a condition and only
            runs a block of code if that condition is{" "}
            <code className="text-emerald-300">True</code>.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> age {">"}= 13:</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;You are a teenager.&quot;)
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Since <code className="text-emerald-300">age {">"}= 13</code> is
            true when age is 16, the message gets printed. If age had been
            10, nothing would print at all.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Indentation matters
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            This is the biggest difference from Java: Python doesn&apos;t
            use curly braces <code className="text-emerald-300">{"{ }"}</code>{" "}
            to mark a block of code. Instead, it uses{" "}
            <strong className="text-white">indentation</strong> — the
            spacing at the start of a line. Every line that&apos;s indented
            under the <code className="text-emerald-300">if</code> belongs
            to that if statement.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> condition:</span>
                {"\n"}
                {"    "}
                <span className="text-orange-300">
                  # this line runs only if condition is True
                </span>
                {"\n"}
                {"    "}
                <span className="text-orange-300">
                  # so does this one, if still indented
                </span>
                {"\n"}
                <span className="text-slate-500">
                  # this line always runs — it&apos;s not indented
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Standard practice is to indent with{" "}
            <strong className="text-white">4 spaces</strong>. Most code
            editors do this automatically when you press Tab after a
            colon.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Combining conditions
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            You can use <code className="text-emerald-300">and</code> /{" "}
            <code className="text-emerald-300">or</code> from the last
            lesson to check more than one condition at once:
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Multiple conditions
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-blue-300">mark</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">75</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400">
                  {" "}
                  mark {">"}= 50 and mark {"<"} 100:
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;Valid pass mark.&quot;)
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This only prints the message if <strong>both</strong> conditions
            are true.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            When does the code inside an if block run?
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
                A. Every time the program runs
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
                B. Only when the condition is false
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
                C. Only when the condition is true
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
              Write a Python program that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Creates a variable called{" "}
                <strong className="text-white">temperature</strong>.
              </li>
              <li>
                Prints &quot;It&apos;s a hot day&quot; if the temperature is
                greater than 30.
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use an <code>if</code> statement with the{" "}
                <code>{">"}</code> operator, and remember to indent the
                line that should print.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`temperature = 34

if temperature > 30:
    print("It's a hot day")`}</code>
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
                Forgetting the colon
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`if age > 18
    print("Adult")`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Every <code>if</code> line needs a colon{" "}
                <code>:</code> at the end — Python will give a syntax
                error without it.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Inconsistent indentation
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`if age > 18:
   print("Adult")
     print("Can vote")`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Mixing different amounts of indentation causes an{" "}
                <code>IndentationError</code>. Stick to a consistent
                number of spaces (4 is standard) throughout your program.
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
            Now that your program can make decisions, the next step is
            learning how to handle both outcomes with if / else.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/python"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Python
            </Link>

            <Link
              href="/learn/python"
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