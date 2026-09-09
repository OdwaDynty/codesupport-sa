"use client";

import Link from "next/link";
import { useState } from "react";

export default function PythonDataTypesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! float is used for numbers that can have decimal places."
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
            <span className="text-slate-400">Topic 3 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Python Data Types
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn the different kinds of values a Python variable can
            store.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[30%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 30%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Name the main Python data types.</li>
            <li>✓ Explain the difference between int and float.</li>
            <li>✓ Use text (str) and True/False (bool) values.</li>
            <li>✓ Check a variable&apos;s type using type().</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Python figures out the type for you
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            In the Variables lesson, you saw that Python doesn&apos;t make
            you state a data type up front — it works out the type
            automatically from the value you give it. This is different
            from Java, where you have to declare the type explicitly.
            Python still has data types underneath, though, and knowing
            them matters just as much.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`score = 87
average = 72.5
grade = "A"
passed = True`}</code>
            </pre>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            The main data types
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">int</span>
                <span className="text-sm text-slate-500">Whole numbers</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Used for values with no decimal point, like an age or a
                score. Example: <code className="text-emerald-300">16</code>,{" "}
                <code className="text-emerald-300">100</code>,{" "}
                <code className="text-emerald-300">-4</code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">float</span>
                <span className="text-sm text-slate-500">Decimal numbers</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Used for values that need decimal places, like an average
                or a price. Example:{" "}
                <code className="text-emerald-300">72.5</code>,{" "}
                <code className="text-emerald-300">3.14</code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">str</span>
                <span className="text-sm text-slate-500">Text (string)</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Used for words and sentences. Written in single or double
                quotes. Example:{" "}
                <code className="text-emerald-300">
                  &quot;Hello, World!&quot;
                </code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">bool</span>
                <span className="text-sm text-slate-500">True or false</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Used when a value can only be one of two states. Example:{" "}
                <code className="text-emerald-300">True</code>,{" "}
                <code className="text-emerald-300">False</code>
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
            Checking a variable&apos;s type
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            If you&apos;re ever unsure what type a variable is, Python has
            a built-in function to tell you:
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Using type()
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                {"\n"}
                <span className="text-slate-300">print(type(age))</span>
                {"\n"}
                <span className="text-slate-500">
                  {"  "}# {"<"}class &apos;int&apos;{">"}
                </span>
              </code>
            </pre>
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Which data type would you use to store a test average like 72.5?
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
              <span className="text-sm text-slate-300">A. int</span>
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
              <span className="text-sm text-slate-300">B. float</span>
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
              <span className="text-sm text-slate-300">C. bool</span>
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
              Create four Python variables using the correct data type for
              each:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                A variable called{" "}
                <strong className="text-white">learner_count</strong> that
                stores the number of learners in a class (a whole number).
              </li>
              <li>
                A variable called{" "}
                <strong className="text-white">average_mark</strong> that
                stores a class average of 68.4.
              </li>
              <li>
                A variable called{" "}
                <strong className="text-white">subject_name</strong> that
                stores the text &quot;Mathematics&quot;.
              </li>
              <li>
                A variable called{" "}
                <strong className="text-white">is_passing</strong> that
                stores whether a learner passed.
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Think about whether each value is a whole number, a
                decimal, text, or true/false.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`learner_count = 30

average_mark = 68.4

subject_name = "Mathematics"

is_passing = True`}</code>
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
                Forgetting quotes around text
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                name = Nampho
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Without quotes, Python thinks{" "}
                <code>Nampho</code> is a variable name, not text — use{" "}
                <code>name = &quot;Nampho&quot;</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Using lowercase true/false
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                passed = true
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Python&apos;s boolean values are capitalized:{" "}
                <code>True</code> and <code>False</code>.
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
            Now that you know the main data types, the next step is
            learning how to get input from the user and display output.
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