"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForLoopsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult("Correct! This loop prints the numbers 5 times (1 to 5).");
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
            <span className="text-slate-400">Topic 9 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Java For Loops
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to repeat instructions a fixed number of times
            without writing the same code over and over.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[90%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 90%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain why loops are useful.</li>
            <li>✓ Write a for loop that repeats a set number of times.</li>
            <li>✓ Understand each of the three parts of a for loop.</li>
            <li>✓ Use the loop counter variable inside the loop.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Why do we need loops?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Imagine you wanted to print &quot;Hello&quot; five times. You
            could write <code className="text-emerald-300">System.out.println(&quot;Hello&quot;);</code>{" "}
            five separate times — but what if you needed it 100 times, or
            10,000 times? A{" "}
            <strong className="text-white">for loop</strong> lets you
            repeat an instruction as many times as you need, without
            writing it out repeatedly.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">for</span>
                <span className="text-slate-400"> (</span>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">i</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">1</span>
                <span className="text-slate-400">; i {"<"}= 5; i++) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  System.out.println(&quot;Hello&quot;);
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This one loop prints &quot;Hello&quot; exactly five times —
            once for each value of <code className="text-emerald-300">i</code>{" "}
            from 1 through 5.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            The three parts of a for loop
          </h2>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">for</span>
                <span className="text-slate-400"> (</span>
                <span className="text-blue-300">start</span>
                <span className="text-slate-400">; </span>
                <span className="text-orange-300">condition</span>
                <span className="text-slate-400">; </span>
                <span className="text-emerald-300">update</span>
                <span className="text-slate-400">) {"{"} ... {"}"}</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-blue-300">int i = 1</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                <strong className="text-white">Start:</strong> creates a
                counter variable and sets its starting value. This runs{" "}
                <strong>once</strong>, before the loop begins.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-orange-300">i {"<"}= 5</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                <strong className="text-white">Condition:</strong> checked
                before every repeat. As long as it&apos;s true, the loop
                keeps going. As soon as it&apos;s false, the loop stops.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-emerald-300">i++</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                <strong className="text-white">Update:</strong> runs at the
                end of every repeat. <code>i++</code> is shorthand for{" "}
                <code>i = i + 1</code> — it increases i by one each time.
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
            Using the counter inside the loop
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The counter variable isn&apos;t just for controlling the loop —
            you can use its value inside the loop too:
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Multiplication table
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">for</span>
                <span className="text-slate-400">
                  {" "}
                  (int i = 1; i {"<"}= 5; i++) {"{"}
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  System.out.println(&quot;3 x &quot; + i + &quot; = &quot; + (3 * i));
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This prints five lines: &quot;3 x 1 = 3&quot;, &quot;3 x 2 =
            6&quot;, all the way up to &quot;3 x 5 = 15&quot; — each line
            using the current value of <code className="text-emerald-300">i</code>.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            How many times does this loop run?
          </h2>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
            <code>{`for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`}</code>
          </pre>

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
              <span className="text-sm text-slate-300">A. 4 times</span>
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
              <span className="text-sm text-slate-300">B. 5 times</span>
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
              <span className="text-sm text-slate-300">C. 6 times</span>
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
              Write a Java for loop that prints the numbers 1 through 10,
              each on its own line.
            </p>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Start the counter at 1, keep the loop going while it&apos;s
                less than or equal to 10, and increase it by 1 each time.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`for (int i = 1; i <= 10; i++) {
    System.out.println(i);
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
                Forgetting to update the counter (infinite loop)
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`for (int i = 1; i <= 5;) {
    System.out.println(i);
}`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Without <code>i++</code>, <code>i</code> never changes, so
                the condition <code>i {"<"}= 5</code> stays true forever —
                the loop never stops.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Off-by-one errors
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`for (int i = 1; i < 5; i++) {
    // only runs 4 times: 1, 2, 3, 4
}`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Using <code>{"<"}</code> instead of <code>{"<"}=</code> is
                a very common mistake — double-check whether you meant to
                include the final number or stop just before it.
              </p>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>

          <h2 className="mt-4 text-2xl font-bold">
            Ready for the final topic?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            One more loop type to go — while loops repeat based on a
            condition, rather than a fixed number of times.
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