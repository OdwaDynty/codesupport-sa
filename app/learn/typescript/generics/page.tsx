"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptGenericsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! Generics let one function or class work safely with several different types, without losing type safety."
      );
      markTopicComplete("typescript", "generics");
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
          <Link href="/learn/typescript" className="text-sm text-slate-400 transition hover:text-emerald-400">
            ← TypeScript Topics
          </Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">TypeScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 10 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Generics (Introduction)
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Write reusable code that works safely with more than one
            type, without giving up type checking.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 100%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain the problem generics solve.</li>
            <li>✓ Write a simple generic function.</li>
            <li>✓ Call a generic function with different types.</li>
            <li>✓ Recognize generic syntax when you see it (like Array&lt;string&gt;).</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">The problem generics solve</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Imagine writing a function that just returns whatever you
            give it, unchanged. Without generics, you&apos;d have to pick
            one specific type — but that&apos;s too limiting.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">identity</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">value</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">): </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> value;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-500">
                  // only works for numbers — what about strings?
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Using <code className="text-emerald-300">any</code> would
            work for every type, but you&apos;d lose all type checking —
            exactly what we&apos;ve spent this whole course trying to
            avoid.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">A generic function</h2>

          <p className="mt-5 leading-8 text-slate-300">
            A <strong className="text-white">generic</strong> uses a
            placeholder letter (by convention,{" "}
            <code className="text-emerald-300">T</code>) to stand in for
            &quot;whatever type is actually used when this is called.&quot;
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">identity</span>
                <span className="text-slate-400">&lt;</span>
                <span className="text-yellow-300">T</span>
                <span className="text-slate-400">&gt;(</span>
                <span className="text-blue-300">value</span>
                <span className="text-slate-400">: </span>
                <span className="text-yellow-300">T</span>
                <span className="text-slate-400">): </span>
                <span className="text-yellow-300">T</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> value;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">&lt;T&gt;</code> declares
            the placeholder. Now the parameter and return type are both{" "}
            <code className="text-emerald-300">T</code> — whatever type
            you pass in, that same type comes back out, fully checked.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Calling it with different types</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Works for numbers and strings alike
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-300">identity(42);</span>
                <span className="text-slate-500"> // T becomes number, returns 42</span>
                {"\n"}
                <span className="text-slate-300">
                  identity(&quot;hello&quot;);
                </span>
                <span className="text-slate-500">
                  {" "}
                  // T becomes string, returns &quot;hello&quot;
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            You&apos;ve actually already been using generics without
            realizing it — an array like{" "}
            <code className="text-emerald-300">Array&lt;string&gt;</code>{" "}
            (another way of writing{" "}
            <code className="text-emerald-300">string[]</code>) is a
            generic type in action, where{" "}
            <code>Array</code> is generic over whatever type it holds.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            What do generics let you do?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Write one function or class that works safely with several different types</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Turn off type checking entirely</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Make code run faster</span>
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
            <p className="leading-7 text-slate-300">
              Write a generic function called{" "}
              <strong className="text-white">firstItem</strong> that:
            </p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Takes an array of any type T.</li>
              <li>Returns the first item in that array.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                The parameter type is <code>T[]</code> — an array of
                whatever T ends up being.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`function firstItem<T>(items: T[]): T {
  return items[0];
}`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting the angle brackets</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`function identity(value: T): T {} // Error: T is not defined`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                You must declare the placeholder with{" "}
                <code>&lt;T&gt;</code> right after the function name,
                before using it anywhere.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Reaching for generics before you actually need them</div>
              <p className="mt-2 text-sm text-slate-500">
                If a function only ever needs to work with one specific
                type, a plain typed function is simpler and clearer —
                generics are for when you genuinely need the same logic
                to work across several types.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>
          <h2 className="mt-4 text-2xl font-bold">
            You&apos;ve completed the TypeScript course!
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            From your first typed variable to generics — you now know
            the fundamentals of writing safer, more reliable code with
            TypeScript. Time to put it into practice.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/projects" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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