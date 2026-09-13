"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptIntroductionLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! TypeScript catches type mistakes while you're writing code, before you ever run it."
      );
      markTopicComplete("typescript", "introduction");
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
            href="/learn/typescript"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← TypeScript Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              TypeScript
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 1 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Introduction to TypeScript
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Understand what TypeScript is, why types help, and write your
            first typed variable.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[10%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 10%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what TypeScript adds on top of JavaScript.</li>
            <li>✓ Explain why catching errors early is valuable.</li>
            <li>✓ Write a simple typed variable.</li>
            <li>✓ Recognize a basic type error.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is TypeScript?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            TypeScript is JavaScript with{" "}
            <strong className="text-white">types</strong> added on top.
            Every valid JavaScript program is nearly valid TypeScript too —
            TypeScript just gives you an optional way to describe{" "}
            <em>what kind of value</em> a variable is allowed to hold, so
            mistakes get caught while you&apos;re writing code, not later
            when your program actually runs.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-medium text-slate-400">
                JavaScript
              </div>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-300">
                <code>{`let age = 16;
age = "sixteen"; // allowed,
// even though it's probably a mistake`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-medium text-slate-400">
                TypeScript
              </div>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-xs leading-6 text-emerald-300">
                <code>{`let age: number = 16;
age = "sixteen"; // Error! caught
// immediately, before running`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Declaring a typed variable
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            You add a type by writing a colon and the type name right
            after the variable name.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">age</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
              </code>
            </pre>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="font-mono text-sm text-blue-300">age</div>
              <p className="mt-1 text-xs text-slate-500">
                The variable name
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="font-mono text-sm text-emerald-300">
                : number
              </div>
              <p className="mt-1 text-xs text-slate-500">
                The type annotation
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="font-mono text-sm text-orange-300">= 16</div>
              <p className="mt-1 text-xs text-slate-500">
                The actual value
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Once <code className="text-emerald-300">age</code> is typed as{" "}
            <code className="text-emerald-300">number</code>, TypeScript
            will refuse to let you assign it text, a boolean, or anything
            else later on.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            The main basic types
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Type</th>
                  <th className="px-5 py-3 font-medium">Example value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">
                    number
                  </td>
                  <td className="px-5 py-3 text-slate-400">16, 3.14, -4</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">
                    string
                  </td>
                  <td className="px-5 py-3 text-slate-400">
                    &quot;Hello&quot;
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300">
                    boolean
                  </td>
                  <td className="px-5 py-3 text-slate-400">true, false</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Notice these are lowercase — <code>number</code>, not{" "}
            <code>Number</code>. TypeScript is picky about that.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What is the main benefit of adding types?
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
                A. It makes your program run faster
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
                B. It catches mistakes while you're writing code, before
                you run it
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
                C. It removes the need for variables
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
              Write three typed TypeScript variables:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                <strong className="text-white">name</strong>, typed as{" "}
                <code>string</code>, storing your name.
              </li>
              <li>
                <strong className="text-white">age</strong>, typed as{" "}
                <code>number</code>, storing your age.
              </li>
              <li>
                <strong className="text-white">isLearner</strong>, typed
                as <code>boolean</code>, set to true.
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Each line follows the same pattern:{" "}
                <code>let name: type = value;</code>
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`let name: string = "Nampho";
let age: number = 16;
let isLearner: boolean = true;`}</code>
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
                Capitalizing the type
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`let age: Number = 16; // wrong casing`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                TypeScript&apos;s built-in types are lowercase:{" "}
                <code>number</code>, <code>string</code>,{" "}
                <code>boolean</code> — not <code>Number</code>,{" "}
                <code>String</code>, <code>Boolean</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Mismatching the type and the value
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`let age: string = 16; // Error: 16 is a number, not a string`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                The type you declare must actually match the kind of
                value you assign to it.
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
            Now that you understand the basic idea, the next step is
            learning about variables and TypeScript's basic types in more
            depth.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/typescript"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to TypeScript
            </Link>

            <Link
              href="/learn/typescript"
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