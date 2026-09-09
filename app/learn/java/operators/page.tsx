"use client";

import Link from "next/link";
import { useState } from "react";

export default function OperatorsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult("Correct! == compares two values, = assigns a value.");
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
            <span className="text-slate-400">Topic 5 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Java Operators
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to do calculations, compare values, and combine
            conditions in your Java programs.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[50%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 50%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Use arithmetic operators to calculate values.</li>
            <li>✓ Use comparison operators to compare two values.</li>
            <li>✓ Explain the difference between = and ==.</li>
            <li>✓ Combine conditions using logical operators.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">Arithmetic operators</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Arithmetic operators let you do maths with numbers stored in
            variables.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Operator</th>
                  <th className="px-5 py-3 font-medium">Meaning</th>
                  <th className="px-5 py-3 font-medium">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">+</td>
                  <td className="px-5 py-3 text-slate-300">Addition</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    5 + 3 → 8
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">-</td>
                  <td className="px-5 py-3 text-slate-300">Subtraction</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    5 - 3 → 2
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">*</td>
                  <td className="px-5 py-3 text-slate-300">Multiplication</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    5 * 3 → 15
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">/</td>
                  <td className="px-5 py-3 text-slate-300">Division</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    6 / 3 → 2
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">%</td>
                  <td className="px-5 py-3 text-slate-300">
                    Modulus (remainder)
                  </td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    7 % 2 → 1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`int total = 5 + 3;
System.out.println(total); // prints 8`}</code>
            </pre>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">Comparison operators</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Comparison operators compare two values and give you back a
            boolean — <code className="text-emerald-300">true</code> or{" "}
            <code className="text-emerald-300">false</code>. You&apos;ll use
            these constantly once you start writing if statements.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Operator</th>
                  <th className="px-5 py-3 font-medium">Meaning</th>
                  <th className="px-5 py-3 font-medium">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">==</td>
                  <td className="px-5 py-3 text-slate-300">Equal to</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    5 == 5 → true
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">!=</td>
                  <td className="px-5 py-3 text-slate-300">Not equal to</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    5 != 3 → true
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">{">"}</td>
                  <td className="px-5 py-3 text-slate-300">Greater than</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    5 {">"} 3 → true
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">{"<"}</td>
                  <td className="px-5 py-3 text-slate-300">Less than</td>
                  <td className="px-5 py-3 font-mono text-slate-400">
                    5 {"<"} 3 → false
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Important:</strong>{" "}
              <code className="text-emerald-300">=</code> assigns a value to
              a variable. <code className="text-emerald-300">==</code>{" "}
              compares two values. Mixing these up is one of the most
              common beginner mistakes — see below.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">Logical operators</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Logical operators let you combine more than one condition.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Combining conditions
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-300">age {">"} 12 </span>
                <span className="text-purple-400">{"&&"}</span>
                <span className="text-slate-300"> age {"<"} 18</span>
                {"\n"}
                <span className="text-slate-500">
                  {"  "}// true only if BOTH conditions are true
                </span>
                {"\n\n"}
                <span className="text-slate-300">grade == &quot;A&quot; </span>
                <span className="text-purple-400">{"||"}</span>
                <span className="text-slate-300"> grade == &quot;B&quot;</span>
                {"\n"}
                <span className="text-slate-500">
                  {"  "}// true if EITHER condition is true
                </span>
                {"\n\n"}
                <span className="text-purple-400">{"!"}</span>
                <span className="text-slate-300">passed</span>
                {"\n"}
                <span className="text-slate-500">
                  {"  "}// flips true to false, and false to true
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
            What is the difference between = and ==?
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
                A. They mean the same thing
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
                B. == compares two values, = assigns a value
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
                C. = compares two values, == assigns a value
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
              Write a Java program that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Creates two int variables,{" "}
                <strong className="text-white">markOne</strong> and{" "}
                <strong className="text-white">markTwo</strong>, with any
                values.
              </li>
              <li>
                Calculates their total in a variable called{" "}
                <strong className="text-white">total</strong>.
              </li>
              <li>
                Prints whether <strong className="text-white">total</strong>{" "}
                is greater than 100.
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use the <code>+</code> operator to add the two marks
                together, then use <code>{">"}</code> with{" "}
                <code>System.out.println()</code> to print the result of
                the comparison.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int markOne = 65;
int markTwo = 42;

int total = markOne + markTwo;

System.out.println(total > 100);`}</code>
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
                Using = instead of ==
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                if (age = 18) {"{"}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                This tries to assign 18 to age instead of comparing them —
                use <code>==</code> when comparing two values.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Dividing two integers and expecting a decimal
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`int result = 5 / 2; // gives 2, not 2.5`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Dividing two <code>int</code> values in Java drops the
                decimal part. Use <code>double</code> if you need the
                decimal.
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
            Now that you can compare values, the next step is learning how
            to make your program actually respond to those comparisons
            using if statements.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
               href="/learn/java"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
              Back to Java
            </Link>

            <Link
             href="/learn/java/if-statements"
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