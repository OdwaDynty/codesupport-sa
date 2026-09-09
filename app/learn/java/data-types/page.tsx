"use client";

import Link from "next/link";
import { useState } from "react";

export default function DataTypesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! A double is used for numbers that can have decimal places."
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
            href="/learn/java"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Java Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              Java
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 3 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Java Data Types
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn the different kinds of values a Java variable can store,
            and how to choose the right one.
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
            <li>✓ Name the main Java data types.</li>
            <li>✓ Choose the correct data type for a value.</li>
            <li>✓ Explain the difference between int and double.</li>
            <li>✓ Use text (String) and true/false (boolean) values.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Why does the data type matter?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            In the last lesson, you saw that every Java variable has a data
            type — it tells Java what <em>kind</em> of value is being
            stored, so the computer knows how much memory to use and what
            you're allowed to do with it. You can&apos;t divide a piece of
            text, and you can&apos;t add letters onto a whole number, so
            Java needs to know up front what it&apos;s working with.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`int score = 87;
double average = 72.5;
char grade = 'A';
boolean passed = true;`}</code>
            </pre>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">The main data types</h2>

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
                <span className="font-mono text-purple-400">double</span>
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
                <span className="font-mono text-purple-400">String</span>
                <span className="text-sm text-slate-500">Text</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Used for words and sentences. Always written in double
                quotes. Example:{" "}
                <code className="text-emerald-300">
                  &quot;Hello, World!&quot;
                </code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">char</span>
                <span className="text-sm text-slate-500">
                  A single character
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Used for exactly one character, written in single quotes.
                Example: <code className="text-emerald-300">&apos;A&apos;</code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">boolean</span>
                <span className="text-sm text-slate-500">True or false</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Used when a value can only be one of two states. Example:{" "}
                <code className="text-emerald-300">true</code>,{" "}
                <code className="text-emerald-300">false</code>
              </p>
            </div>
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
              <span className="text-sm text-slate-300">B. double</span>
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
              <span className="text-sm text-slate-300">C. boolean</span>
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
              Create four Java variables using the correct data type for
              each:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                A variable called{" "}
                <strong className="text-white">learnerCount</strong> that
                stores the number of learners in a class (a whole number).
              </li>
              <li>
                A variable called{" "}
                <strong className="text-white">averageMark</strong> that
                stores a class average of 68.4.
              </li>
              <li>
                A variable called{" "}
                <strong className="text-white">subjectName</strong> that
                stores the text &quot;Mathematics&quot;.
              </li>
              <li>
                A variable called{" "}
                <strong className="text-white">isPassing</strong> that
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
                <code>{`int learnerCount = 30;

double averageMark = 68.4;

String subjectName = "Mathematics";

boolean isPassing = true;`}</code>
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
                Using int for a decimal value
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                int average = 72.5;
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                This won&apos;t compile. A decimal value needs{" "}
                <code>double</code>, not <code>int</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Forgetting quotes around text
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                String name = Nampho;
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Text values always need double quotes:{" "}
                <code>&quot;Nampho&quot;</code>.
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
              href="/learn/java"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Java
            </Link>

            <Link
              href="/learn/java/input-output"
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