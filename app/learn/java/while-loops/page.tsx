"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function WhileLoopsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! A while loop keeps repeating as long as its condition stays true, however many times that takes."
      );
      markTopicComplete("java", "while-loops");
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
            <span className="text-slate-400">Topic 10 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Java While Loops
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to repeat instructions while a condition stays true —
            even when you don&apos;t know exactly how many times in advance.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 100%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what a while loop does.</li>
            <li>✓ Write a while loop with a condition.</li>
            <li>✓ Understand the difference between for and while loops.</li>
            <li>✓ Avoid writing an infinite loop.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is a while loop?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            A <strong className="text-white">while loop</strong> keeps
            repeating a block of code for as long as its condition stays
            true. Unlike a for loop, it doesn&apos;t have a built-in
            counter — you&apos;re responsible for creating and updating the
            variable the condition depends on.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">count</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">1</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">while</span>
                <span className="text-slate-400"> (count {"<"}= 5) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  System.out.println(count);
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">count++;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This prints 1 through 5, the same result as the for loop from
            the last lesson — but written a different way.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            When to use while instead of for
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            A for loop is the natural choice when you know exactly how many
            times you want to repeat something. A while loop is better
            when you <strong className="text-white">don&apos;t</strong>{" "}
            know in advance — for example, repeating until the user enters
            valid input.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Repeating until valid input
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-300">Scanner input = </span>
                <span className="text-purple-400">new</span>
                <span className="text-slate-300"> Scanner(System.in);</span>
                {"\n"}
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">-1</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">while</span>
                <span className="text-slate-400"> (age {"<"} 0) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  System.out.println(&quot;Enter your age:&quot;);
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">age = input.nextInt();</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            There&apos;s no way to know in advance how many times the user
            will enter an invalid age before getting it right — a while
            loop handles that naturally, where a for loop wouldn&apos;t fit
            well.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            How many times does a while loop repeat?
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
                A. Always exactly 10 times
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
                B. A fixed number of times decided before the loop starts
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
                C. As long as its condition stays true, however many times
                that takes
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
              Write a Java while loop that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Starts a counter variable at 10.
              </li>
              <li>
                Prints the counter, then decreases it by 1, while it is
                greater than 0 (a countdown).
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use <code>count--</code> instead of <code>count++</code> to
                decrease the counter each time through the loop.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int count = 10;

while (count > 0) {
    System.out.println(count);
    count--;
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
                Forgetting to update the condition variable
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`int count = 1;

while (count <= 5) {
    System.out.println(count);
    // forgot count++;
}`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Without updating <code>count</code> inside the loop, the
                condition never becomes false — this is the most common
                cause of infinite loops.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Initializing the variable inside the loop
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`while (count <= 5) {
    int count = 1; // resets every time!
    count++;
}`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                The counter needs to be created{" "}
                <strong>before</strong> the while loop starts, not inside
                it — otherwise it resets on every repeat and never
                actually changes from the loop&apos;s point of view.
              </p>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>

          <h2 className="mt-4 text-2xl font-bold">
            You&apos;ve completed the Java fundamentals!
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            You now know the building blocks every Java program is made
            from — variables, data types, input/output, operators,
            decisions and loops. The best way to make it stick is to build
            something real.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/java"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Java
            </Link>

            <Link
              href="/projects"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Projects →
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