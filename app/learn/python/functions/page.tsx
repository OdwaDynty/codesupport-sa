"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function PythonFunctionsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! return sends a value back out of the function to wherever it was called."
      );
      markTopicComplete("python", "functions");
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
            <span className="text-slate-400">Topic 12 of 13</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Python Functions
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to organize your code into reusable, named blocks
            instead of repeating the same instructions everywhere.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[92%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 92%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what a function is and why they&apos;re useful.</li>
            <li>✓ Write a function with parameters and a return value.</li>
            <li>✓ Call a function.</li>
            <li>✓ Understand the difference between a function that returns and one that doesn&apos;t.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is a function?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            You&apos;ve already used functions this whole time —{" "}
            <code className="text-emerald-300">print()</code>,{" "}
            <code className="text-emerald-300">input()</code>,{" "}
            <code className="text-emerald-300">range()</code> are all
            functions Python provides for you. A{" "}
            <strong className="text-white">function</strong> is a named
            block of code that performs a task, which you can{" "}
            <strong className="text-white">call</strong> (run) whenever
            you need it. You can write your own too, using{" "}
            <code className="text-emerald-300">def</code>.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-300">greet</span>
                <span className="text-slate-400">():</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  print(&quot;Hello!&quot;)
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            To actually run it, you <strong className="text-white">call</strong>{" "}
            it by name, followed by brackets:{" "}
            <code className="text-emerald-300">greet()</code>
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Parameters and return values
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Functions become genuinely useful once they can accept input
            (<strong className="text-white">parameters</strong>) and send
            a result back out (<strong className="text-white">return</strong>).
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-300">add_numbers</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">a</span>
                <span className="text-slate-400">, </span>
                <span className="text-blue-300">b</span>
                <span className="text-slate-400">):</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> a + b</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-blue-300">(a, b)</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                The <strong className="text-white">parameters</strong> —
                values the function receives from whoever calls it. Notice
                Python doesn&apos;t need you to declare their types.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">return a + b</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Sends the result back to the caller and immediately ends
                the function.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              Calling it
            </div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`total = add_numbers(5, 3)
print(total)  # prints 8`}</code>
            </pre>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            A function that doesn&apos;t return anything
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Not every function needs to send a value back. If a function
            just <em>does</em> something (like printing a message) without
            needing to return a result, that&apos;s completely fine — you
            simply don&apos;t write a{" "}
            <code className="text-emerald-300">return</code> statement.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              A function with no return
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-300">print_result</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">):</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> mark {">"}= 50:</span>
                {"\n"}
                {"        "}
                <span className="text-slate-300">
                  print(&quot;Pass&quot;)
                </span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">else</span>
                <span className="text-slate-400">:</span>
                {"\n"}
                {"        "}
                <span className="text-slate-300">
                  print(&quot;Fail&quot;)
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
            What does the return keyword do?
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
                A. It prints a value to the screen
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
                B. It sends a value back to wherever the function was called
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
                C. It repeats the function again
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
              Write a Python function that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Is called <strong className="text-white">is_passing</strong>,
                takes a parameter called{" "}
                <strong className="text-white">mark</strong>.
              </li>
              <li>
                Returns <strong className="text-white">True</strong> if
                mark is 50 or higher, and{" "}
                <strong className="text-white">False</strong> otherwise.
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You can return the result of a comparison directly:{" "}
                <code>return mark {">"}= 50</code>
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`def is_passing(mark):
    return mark >= 50`}</code>
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
                Forgetting the colon
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`def greet()
    print("Hello!")`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Every <code>def</code> line needs a colon at the end, just
                like <code>if</code> and <code>for</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Expecting print() to also return a value
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`def add(a, b):
    print(a + b)

result = add(2, 3)
print(result)  # prints None, not 5`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                <code>print()</code> only displays a value — it
                doesn&apos;t send it back to whoever called the function.
                If you need the result usable elsewhere, use{" "}
                <code>return</code> instead.
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
            One more concept to go — a brief introduction to classes and
            objects, the foundation of object-oriented programming.
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