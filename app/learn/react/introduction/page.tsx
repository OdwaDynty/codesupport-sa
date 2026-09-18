"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function ReactIntroductionLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! JSX lets you write HTML-like markup directly inside your JavaScript code."
      );
      markTopicComplete("react", "introduction");
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
            href="/learn/react"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← React Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              React
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 1 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Introduction to React & JSX
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            What React is, and the JSX syntax that mixes HTML with
            JavaScript.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[12%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 12%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what React is and what problem it solves.</li>
            <li>✓ Explain what JSX is.</li>
            <li>✓ Read a simple piece of JSX.</li>
            <li>✓ Embed a JavaScript value inside JSX.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is React?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            React is a JavaScript library for building{" "}
            <strong className="text-white">user interfaces</strong> —
            the buttons, forms, and pages you actually see and interact
            with on a website. Instead of manually finding and updating
            HTML elements yourself (the way plain JavaScript&apos;s DOM
            methods work), React lets you describe{" "}
            <em>what the UI should look like</em>, and it handles
            updating the actual page for you.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            If you&apos;ve completed the JavaScript course, this will
            feel like a genuinely different, more powerful way of
            building the same kinds of interactive pages — including
            the DOM Basics topics from that course.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Worth knowing:</strong>{" "}
              CodeSupport SA itself — the very site you&apos;re learning
              on right now — is built entirely with React (and
              Next.js, a framework built on top of it).
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            JSX — HTML inside JavaScript
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            React uses a special syntax called{" "}
            <strong className="text-white">JSX</strong>, which lets you
            write HTML-like markup directly inside your JavaScript code.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-emerald-300">
              <code>{`const element = <h1>Hello, World!</h1>;`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            That looks like HTML, but it&apos;s actually JavaScript —
            behind the scenes, JSX gets converted into regular
            JavaScript function calls. You never need to think about
            that conversion yourself; you just write JSX and it works.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Embedding JavaScript inside JSX
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The real power of JSX is mixing in actual JavaScript values,
            using curly braces{" "}
            <code className="text-emerald-300">{"{ }"}</code>.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Mixing JavaScript into JSX
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`const name = "Nampho";
const mark = 85;

const element = (
  <div>
    <p>Hello, {name}!</p>
    <p>Your mark is {mark}.</p>
    <p>Your mark plus 5 is {mark + 5}.</p>
  </div>
);`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Anything inside <code className="text-emerald-300">{"{ }"}</code>{" "}
            is evaluated as real JavaScript — a variable, a calculation,
            even a function call. Everything outside the braces is
            treated as plain markup.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What is JSX?
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
                A. A separate programming language from JavaScript
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
                B. Syntax that lets you write HTML-like markup directly inside JavaScript
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
                C. A database query language
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
              Write a piece of JSX that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Creates variables <strong className="text-white">subject</strong>{" "}
                (a string) and <strong className="text-white">mark</strong>{" "}
                (a number).
              </li>
              <li>
                Displays them inside a <code>div</code>, like:
                &quot;Mathematics: 72&quot;
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Embed both variables inside curly braces, separated by a
                colon and a space, written as plain text in the JSX.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`const subject = "Mathematics";
const mark = 72;

const element = (
  <div>
    {subject}: {mark}
  </div>
);`}</code>
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
                Returning multiple elements without a wrapper
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`const element = (
  <h1>Title</h1>
  <p>Text</p> // Error: adjacent elements need a wrapper
);`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                JSX can only return one single top-level element — wrap
                multiple elements in a <code>div</code> (or a special
                empty wrapper called a &quot;Fragment&quot;, which
                you&apos;ll meet later).
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Using regular quotes instead of curly braces for variables
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<p>"name"</p> // prints the literal text "name", not the variable`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                To actually insert a variable&apos;s value, use{" "}
                <code>{"{name}"}</code> — quotes just print literal text.
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
            Now that you can read and write JSX, the next step is
            learning how to build reusable components.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/react"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to React
            </Link>

            <Link
              href="/learn/react/components-props"
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