"use client";

import Link from "next/link";
import { useState } from "react";

export default function NestedIfLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! An if statement written inside another if (or else) block is called nesting."
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
            <span className="text-slate-400">Topic 8 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Java Nested If Statements
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to place one decision inside another when a single
            condition isn&apos;t enough.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[80%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 80%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what a nested if statement is.</li>
            <li>✓ Write an if statement inside another if block.</li>
            <li>✓ Know when nesting is useful versus using &&.</li>
            <li>✓ Read nested code without getting lost in the braces.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What does &quot;nested&quot; mean?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Sometimes one decision only makes sense to check{" "}
            <strong className="text-white">after</strong> another decision
            has already been made. Placing an if statement inside another
            if (or else) block is called{" "}
            <strong className="text-white">nesting</strong>.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-purple-400">boolean</span>{" "}
                <span className="text-blue-300">hasPermission</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">true</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> (age {">"}= 13) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400">
                  {" "}
                  (hasPermission) {"{"}
                </span>
                {"\n"}
                {"        "}
                <span className="text-slate-300">
                  System.out.println(&quot;You may join the coding club.&quot;);
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            The inner if only gets checked at all if the outer condition (
            <code className="text-emerald-300">age {">"}= 13</code>) was
            already true. If age had been 10, Java would never even look at
            the inner condition.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Nesting versus &&
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            You might notice the example above could also be written using{" "}
            <code className="text-emerald-300">{"&&"}</code> from the
            Operators lesson:
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">if</span>
                <span className="text-slate-400">
                  {" "}
                  (age {">"}= 13 {"&&"} hasPermission) {"{"}
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  System.out.println(&quot;You may join the coding club.&quot;);
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Both do the same thing here. Nesting becomes genuinely useful
            when the inner decision needs its <strong>own</strong> separate
            outcomes — for example, if you wanted a different message
            depending on whether permission was true or false, but only for
            learners aged 13 and up.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              Nesting with its own else
            </div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> (age {">"}= 13) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400">
                  {" "}
                  (hasPermission) {"{"}
                </span>
                {"\n"}
                {"        "}
                <span className="text-slate-300">
                  System.out.println(&quot;Welcome to the club!&quot;);
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-400">{"} "}</span>
                <span className="text-purple-400">else</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"        "}
                <span className="text-slate-300">
                  System.out.println(&quot;Ask a parent for permission first.&quot;);
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"} "}</span>
                <span className="text-purple-400">else</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  System.out.println(&quot;Sorry, you must be at least 13.&quot;);
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This gives three distinct outcomes, which a single{" "}
            <code className="text-emerald-300">{"&&"}</code> condition
            couldn&apos;t express on its own.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What is a nested if statement?
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
                A. An if statement written inside another if (or else) block
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
                B. An if statement with two conditions joined by &&
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
                C. An if statement that repeats several times
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
              Write a Java program that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Creates an int variable called{" "}
                <strong className="text-white">mark</strong>.
              </li>
              <li>
                If the mark is 50 or above, checks a{" "}
                <strong className="text-white">nested</strong> condition:
                if the mark is also 80 or above, print &quot;Distinction&quot;,
                otherwise print &quot;Pass&quot;.
              </li>
              <li>If the mark is below 50, print &quot;Fail&quot;.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You need an outer if/else for the 50 mark, and an inner
                if/else nested inside the &quot;50 or above&quot; branch for
                the 80 mark.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int mark = 85;

if (mark >= 50) {
    if (mark >= 80) {
        System.out.println("Distinction");
    } else {
        System.out.println("Pass");
    }
} else {
    System.out.println("Fail");
}`}</code>
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
                Losing track of closing braces
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`if (age >= 13) {
    if (hasPermission) {
        System.out.println("Welcome!");
}`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Nested if statements need one closing{" "}
                <code>{"}"}</code> for every opening one. Indenting
                consistently (as in the examples above) makes it much
                easier to spot a missing brace.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Nesting when && would be simpler
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`if (age >= 13) {
    if (hasPermission) {
        // ...one simple outcome
    }
}`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                If both conditions just lead to one single outcome (no
                separate else branches needed), a single{" "}
                <code>if (age {">"}= 13 {"&&"} hasPermission)</code> is
                cleaner than nesting.
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
            Now that you can nest decisions, the next step is learning how
            to repeat instructions using loops.
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

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">
          CodeSupport SA • Learn. Practise. Build. Get Help.
        </div>
      </footer>
    </main>
  );
}