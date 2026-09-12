"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function PythonListsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! List indexes start at 0, so the first item is marks[0]."
      );
      markTopicComplete("python", "lists");
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
            <span className="text-slate-400">Topic 11 of 13</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Python Lists
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to store many values of any type in a single
            variable, instead of creating a new variable for each one.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[85%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 85%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain why lists are useful.</li>
            <li>✓ Create a list and access its items.</li>
            <li>✓ Understand that list indexes start at 0.</li>
            <li>✓ Loop through a list using a for loop.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">Why do we need lists?</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Imagine storing five test marks. Without a list, you&apos;d
            need five separate variables — <code className="text-emerald-300">mark1</code>,{" "}
            <code className="text-emerald-300">mark2</code>, and so on.
            That gets unmanageable fast. A{" "}
            <strong className="text-white">list</strong> lets you store
            all of them in one variable instead.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`marks = [65, 78, 42, 90, 55]`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This single variable, <code className="text-emerald-300">marks</code>,
            now holds all five values. Unlike Java arrays, a Python list
            can even hold different types mixed together, though it&apos;s
            usually clearer to keep one type per list.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Accessing items — indexes start at 0
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Each value in a list has a position, called an{" "}
            <strong className="text-white">index</strong>. This is the
            single most important thing to remember about lists:{" "}
            <strong className="text-white">indexes start counting from 0, not 1.</strong>
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              marks list
            </div>

            <div className="flex divide-x divide-white/10">
              {["65", "78", "42", "90", "55"].map((val, i) => (
                <div key={i} className="flex-1 p-4 text-center">
                  <div className="font-mono text-lg text-emerald-300">
                    {val}
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">
                    [{i}]
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-emerald-300">
              <code>{`print(marks[0])  # prints 65
print(marks[2])  # prints 42`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">marks[0]</code> is the{" "}
            <strong>first</strong> item (65), not the zeroth in some other
            sense — this trips up almost every beginner at least once.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Looping through a list
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Python makes looping through a list especially clean — you can
            loop directly over the values, without needing an index at
            all.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Printing every mark
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`for mark in marks:
    print(mark)`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Here, <code className="text-emerald-300">mark</code> takes on
            each value in the list in turn — 65, then 78, then 42, and so
            on — without you ever writing an index yourself.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              With an index, using range()
            </div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`for i in range(len(marks)):
    print(marks[i])`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">len(marks)</code> tells you
            how many items are in the list — useful when you need the
            index itself, not just the value.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Given marks = [65, 78, 42], what does marks[0] give you?
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
              <span className="text-sm text-slate-300">A. 65</span>
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
              <span className="text-sm text-slate-300">B. 78</span>
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
                C. An error, because there is no index 0
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
              Write a Python program that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Creates a list called{" "}
                <strong className="text-white">marks</strong> with the
                values 65, 78, 42, 90, 55.
              </li>
              <li>
                Uses a for loop to add up all the marks into a{" "}
                <strong className="text-white">total</strong> variable.
              </li>
              <li>Prints the total.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Start <code>total</code> at 0 before the loop, then use{" "}
                <code>for mark in marks:</code> to add each value to it.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`marks = [65, 78, 42, 90, 55]
total = 0

for mark in marks:
    total = total + mark

print(total)`}</code>
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
                Going out of range
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`marks = [65, 78, 42]
print(marks[3])  # IndexError`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                A list with 3 items only has valid indexes 0, 1, and 2.
                Trying to access index 3 crashes the program with an{" "}
                <code>IndexError</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Looping with the value instead of the index, then using it
                as an index anyway
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`for mark in marks:
    print(marks[mark])  # probably not what you meant`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                If you loop with{" "}
                <code>for mark in marks:</code>, <code>mark</code> is
                already the value — not an index. Only use{" "}
                <code>for i in range(len(marks)):</code> when you
                genuinely need the index.
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
            Now that you can store multiple values, the next step is
            learning how to organize your code into reusable functions.
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