"use client";

import Link from "next/link";
import { useState } from "react";

export default function VariablesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult("Correct! A variable is used to store a value.");
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

            <span className="text-slate-400">Topic 2 of 10</span>

            <span className="text-slate-600">•</span>

            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Java Variables
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how variables allow your Java programs to store and work
            with information.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[20%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Lesson progress: 20%
          </p>
        </div>
      </header>

      {/* Main Lesson */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what a variable is.</li>
            <li>✓ Create a variable in Java.</li>
            <li>✓ Store different types of values.</li>
            <li>✓ Change the value stored in a variable.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is a variable?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            A variable is a named place where a program can store a value.
            Think of it like a labelled box.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              Example
            </div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`int age = 16;`}</code>
            </pre>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
              <p>
                <span className="font-semibold text-white">int</span> tells
                Java that we are storing a whole number.
              </p>

              <p>
                <span className="font-semibold text-white">age</span> is the
                name of the variable.
              </p>

              <p>
                <span className="font-semibold text-white">16</span> is the
                value stored inside the variable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Creating a variable
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            A basic Java variable follows this pattern:
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">dataType</span>{" "}
                <span className="text-blue-300">variableName</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">value</span>
                <span className="text-slate-400">;</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">int</div>
              <p className="mt-2 text-sm text-slate-400">
                The data type
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-blue-300">age</div>
              <p className="mt-2 text-sm text-slate-400">
                The variable name
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-orange-300">16</div>
              <p className="mt-2 text-sm text-slate-400">
                The stored value
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
            Different types of variables
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Java examples
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-purple-400">double</span>{" "}
                <span className="text-blue-300">average</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">72.5</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-purple-400">char</span>{" "}
                <span className="text-blue-300">grade</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">&apos;A&apos;</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-purple-400">boolean</span>{" "}
                <span className="text-blue-300">passed</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-purple-400">true</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-purple-400">String</span>{" "}
                <span className="text-blue-300">name</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">&quot;Thando&quot;</span>
                <span className="text-slate-400">;</span>
              </code>
            </pre>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            04 • Try it
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Change a variable
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            A variable can be changed after it has been created.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-8">
              <code>{`int mark = 45;

mark = 75;

System.out.println(mark);`}</code>
            </pre>

            <div className="mt-5 rounded-xl bg-slate-950 p-4">
              <span className="text-sm text-slate-500">Output</span>

              <div className="mt-2 font-mono text-emerald-300">
                75
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-400">
            The variable was first given the value <strong>45</strong>.
            Later, its value was changed to <strong>75</strong>.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What is the purpose of a variable?
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
                A. To delete information from a program
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
                B. To store a value that a program can use
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
                C. To automatically create a website
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
            05 • Exercise
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Your turn
          </h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="leading-7 text-slate-300">
              Create three Java variables:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                A variable called <strong className="text-white">age</strong>{" "}
                that stores your age.
              </li>

              <li>
                A variable called{" "}
                <strong className="text-white">school</strong> that stores the
                name of your school.
              </li>

              <li>
                A variable called{" "}
                <strong className="text-white">averageMark</strong> that stores
                your average mark.
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>

              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Think about which data type is suitable for whole numbers,
                decimal numbers and text.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>

              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int age = 16;

String school = "My School";

double averageMark = 72.5;`}</code>
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
                Forgetting the semicolon
              </div>

              <pre className="mt-3 font-mono text-sm text-slate-400">
                int age = 16
              </pre>

              <p className="mt-2 text-sm text-slate-500">
                Java statements normally end with a semicolon.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Using the wrong data type
              </div>

              <pre className="mt-3 font-mono text-sm text-slate-400">
                int average = 72.5;
              </pre>

              <p className="mt-2 text-sm text-slate-500">
                A decimal value should normally use a type such as double.
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
            Once you understand variables, the next step is learning about
            the different data types Java provides.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/java"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Java
            </Link>

            <Link
              href="/learn/java"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Next Topic →
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">
          CodeSupport SA • Learn. Practise. Build. Get Help.
        </div>
      </footer>
    </main>
  );
}