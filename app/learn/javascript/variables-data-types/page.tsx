"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function JavaScriptVariablesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! let is used for a value that can change, const is used for a value that shouldn't."
      );
      markTopicComplete("javascript", "variables-data-types");
    } else if (quizAnswer === "") {
      setQuizResult("Choose an answer first.");
    } else {
      setQuizResult("Not quite. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-bold text-white transition hover:text-emerald-400">
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>
          <Link href="/learn/javascript" className="text-sm text-slate-400 transition hover:text-emerald-400">
            ← JavaScript Topics
          </Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">JavaScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 2 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Variables & Data Types
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how JavaScript stores information, and the difference
            between let and const.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[20%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 20%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Create a variable using let and const.</li>
            <li>✓ Explain when to use let versus const.</li>
            <li>✓ Recognize the main JavaScript data types.</li>
            <li>✓ Use typeof to check a value's type.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">let and const</h2>

          <p className="mt-5 leading-8 text-slate-300">
            JavaScript has two modern ways to create a variable:{" "}
            <code className="text-emerald-300">let</code>, for a value
            that might change later, and{" "}
            <code className="text-emerald-300">const</code>, for a value
            that should never change once set.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">age = 17;</span>
                <span className="text-slate-500"> // fine, age can change</span>
                {"\n\n"}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">schoolName</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">&quot;My School&quot;</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">
                  schoolName = &quot;Other School&quot;;
                </span>
                <span className="text-slate-500"> // Error!</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            A good habit: default to{" "}
            <code className="text-emerald-300">const</code> unless you
            genuinely know the value will need to change — it makes your
            code&apos;s intentions clearer.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">The main data types</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">number</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Both whole numbers and decimals — JavaScript doesn&apos;t
                separate them like Java does. Example:{" "}
                <code className="text-emerald-300">16</code>,{" "}
                <code className="text-emerald-300">72.5</code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">string</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Text, in single, double, or backtick quotes. Example:{" "}
                <code className="text-emerald-300">
                  &quot;Hello, World!&quot;
                </code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-purple-400">boolean</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                <code className="text-emerald-300">true</code> or{" "}
                <code className="text-emerald-300">false</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Checking a type with typeof</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Using typeof
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">
                  console.log(typeof age);
                </span>
                <span className="text-slate-500"> // "number"</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            <code className="text-emerald-300">typeof</code> is
            especially handy while learning, to confirm what type
            something actually is.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            What is the difference between let and const?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. They do the same thing</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. let can be reassigned, const cannot</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. const is only for numbers</span>
            </label>
          </div>

          <button onClick={checkQuiz} className="mt-6 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
            Check Answer
          </button>

          {quizResult && (
            <div className={`mt-5 rounded-xl p-4 text-sm ${quizResult.startsWith("Correct") ? "bg-emerald-400/10 text-emerald-300" : "bg-yellow-400/10 text-yellow-300"}`}>
              {quizResult}
            </div>
          )}
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">04 • Exercise</p>
          <h2 className="mt-3 text-3xl font-bold">Your turn</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="leading-7 text-slate-300">Write JavaScript code that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Creates a <code>const</code> called <strong className="text-white">name</strong> with your name.</li>
              <li>Creates a <code>let</code> called <strong className="text-white">age</strong> with your age.</li>
              <li>Prints both using console.log().</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Your name won&apos;t change during the program, so it
                fits <code>const</code>.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`const name = "Nampho";
let age = 16;

console.log(name);
console.log(age);`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Trying to reassign a const</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`const total = 10;
total = 20; // Error`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                If you know a value needs to change later, use{" "}
                <code>let</code> instead.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting quotes around text</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let name = Nampho; // Error - Nampho isn't a defined variable`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Text always needs quotes:{" "}
                <code>&quot;Nampho&quot;</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can store values, the next step is learning how
            to work with them using operators.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/javascript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to JavaScript
            </Link>
            <Link href="/learn/javascript/operators" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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