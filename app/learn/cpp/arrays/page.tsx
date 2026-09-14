"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppArraysLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult("Correct! Array indexes start at 0, so the first element is marks[0].");
      markTopicComplete("cpp", "arrays");
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
          <Link href="/learn/cpp" className="text-sm text-slate-400 transition hover:text-emerald-400">
            ← C++ Topics
          </Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">C++</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 7 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Arrays</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Store multiple values of the same type in a single variable.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 70%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">What you should know after this lesson</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Create an array and access its elements.</li>
            <li>✓ Understand indexes start at 0.</li>
            <li>✓ Loop through an array.</li>
            <li>✓ Know an array's fixed size can't grow.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Creating an array</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">marks</span>
                <span className="text-slate-400">[</span>
                <span className="text-orange-300">5</span>
                <span className="text-slate-400">] = {"{"}</span>
                <span className="text-orange-300">65</span>
                <span className="text-slate-400">, </span>
                <span className="text-orange-300">78</span>
                <span className="text-slate-400">, </span>
                <span className="text-orange-300">42</span>
                <span className="text-slate-400">, </span>
                <span className="text-orange-300">90</span>
                <span className="text-slate-400">, </span>
                <span className="text-orange-300">55</span>
                <span className="text-slate-400">{"}"};</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            The number in square brackets is the array&apos;s{" "}
            <strong className="text-white">fixed size</strong> — once
            declared, a C++ array can never grow or shrink.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Indexes start at 0</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">marks array</div>
            <div className="flex divide-x divide-white/10">
              {["65", "78", "42", "90", "55"].map((val, i) => (
                <div key={i} className="flex-1 p-4 text-center">
                  <div className="font-mono text-lg text-emerald-300">{val}</div>
                  <div className="mt-1 font-mono text-xs text-slate-500">[{i}]</div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">marks[0]</code> is the
            first element (65), same rule as Java and Python.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Looping through an array</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Adding up all the marks</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`int total = 0;

for (int i = 0; i < 5; i++) {
    total = total + marks[i];
}

cout << total;`}</code>
            </pre>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">Given int marks[3] = {"{"}65, 78, 42{"}"}, what does marks[0] give you?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. 65</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. 78</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. An error</span>
            </label>
          </div>

          <button onClick={checkQuiz} className="mt-6 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">Check Answer</button>

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
            <p className="leading-7 text-slate-300">Write C++ code that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Creates an array called marks with the values 65, 78, 42, 90, 55.</li>
              <li>Uses a for loop to add them all up into a total variable.</li>
              <li>Prints the total.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Loop from i = 0 to i &lt; 5, adding{" "}
                <code>marks[i]</code> to total each time.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int marks[5] = {65, 78, 42, 90, 55};
int total = 0;

for (int i = 0; i < 5; i++) {
    total = total + marks[i];
}

cout << total;`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Going out of bounds</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`int marks[3] = {65, 78, 42};
cout << marks[3]; // undefined behaviour, not a safe error`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                This is genuinely more dangerous in C++ than Java — going
                out of bounds doesn&apos;t always crash cleanly, it can
                read garbage memory. Always double-check your loop
                bounds.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Trying to resize an array</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`int marks[5];
marks[5] = 100; // one past the end - not allowed`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                A C++ array&apos;s size is fixed at creation — you
                can&apos;t add a 6th item to a 5-item array.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can store multiple values, the next step is
            organizing your code into reusable functions.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/cpp" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to C++</Link>
            <Link href="/learn/cpp/functions" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}