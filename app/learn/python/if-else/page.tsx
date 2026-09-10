"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function PythonIfElseLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! else runs only when the if condition was false."
      );
      markTopicComplete("python", "if-else");
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
            <span className="text-slate-400">Topic 7 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Python If / Else
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to make your program respond differently depending on
            whether a condition is true or false.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 70%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what the else block does.</li>
            <li>✓ Write an if / else statement.</li>
            <li>✓ Use elif to check multiple conditions in order.</li>
            <li>✓ Understand that only one block in the chain ever runs.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What does else do?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            An if statement on its own only handles one outcome — if the
            condition is false, nothing happens.{" "}
            <strong className="text-white">else</strong> gives you a
            second block of code that runs specifically when the condition
            is false.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-blue-300">mark</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">42</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> mark {">"}= 50:</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;You passed.&quot;)
                </span>
                {"\n"}
                <span className="text-purple-400">else</span>
                <span className="text-slate-400">:</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;You did not pass.&quot;)
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Since mark is 42, the condition is false, so this prints{" "}
            <code className="text-emerald-300">You did not pass.</code>{" "}
            Notice <code className="text-emerald-300">else</code> lines up
            with <code>if</code> — same indentation level — and its own
            block is indented under it, same as the if block.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Checking more than two outcomes with elif
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            When you have more than two possible outcomes, chain conditions
            together using <code className="text-emerald-300">elif</code>{" "}
            (short for &quot;else if&quot;). Python checks each condition
            in order and runs the <strong className="text-white">first</strong>{" "}
            one that&apos;s true, then skips the rest.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Grading example
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-blue-300">mark</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">72</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> mark {">"}= 80:</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;Grade: A&quot;)
                </span>
                {"\n"}
                <span className="text-purple-400">elif</span>
                <span className="text-slate-400"> mark {">"}= 60:</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;Grade: B&quot;)
                </span>
                {"\n"}
                <span className="text-purple-400">else</span>
                <span className="text-slate-400">:</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;Grade: C&quot;)
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            With mark = 72: the first condition (80+) is false, so Python
            checks the next one. <code className="text-emerald-300">mark {">"}= 60</code>{" "}
            is true, so it prints{" "}
            <code className="text-emerald-300">Grade: B</code> — and never
            even looks at the final else.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            When does the code inside an else block run?
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
                B. Only when the if condition was false
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
                C. Only when the if condition was true
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
            03 • Exercise
          </p>

          <h2 className="mt-3 text-3xl font-bold">Your turn</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="leading-7 text-slate-300">
              Write a Python program that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Creates a variable called{" "}
                <strong className="text-white">age</strong>.
              </li>
              <li>Prints &quot;You can vote&quot; if age is 18 or older.</li>
              <li>Otherwise, prints &quot;You cannot vote yet&quot;.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use an <code>if</code> block for the voting-age condition,
                and an <code>else</code> block for everyone else. Don&apos;t
                forget the colons.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`age = 16

if age >= 18:
    print("You can vote")
else:
    print("You cannot vote yet")`}</code>
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
                Writing a condition on the else
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                else age {"<"} 18:
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                <code>else</code> never takes a condition of its own — it
                catches whatever the if (and any elif) missed. Need another
                condition? Use <code>elif</code> instead.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Mismatched indentation between if and else
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`if age >= 18:
    print("Adult")
  else:
    print("Minor")`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                <code>if</code> and its matching <code>else</code> must
                line up at exactly the same indentation level, or Python
                will raise an error.
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
            Now that you can handle two or more outcomes, the next step is
            learning how to place decisions inside other decisions.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/python"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Python
            </Link>

            <Link
              href="/learn/python/nested-conditions"
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