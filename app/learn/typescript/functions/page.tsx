"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptFunctionsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! A question mark after a parameter name makes it optional."
      );
      markTopicComplete("typescript", "functions");
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
            <span className="text-slate-400">Topic 3 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Functions & Type Annotations
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Add types to a function&apos;s parameters and return value,
            so mistakes get caught at the call site.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[30%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 30%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Type a function's parameters.</li>
            <li>✓ Type a function's return value.</li>
            <li>✓ Mark a parameter as optional.</li>
            <li>✓ Give a parameter a default value.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Typing parameters and return values</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Each parameter gets its own type annotation, and the return
            type goes after the closing parenthesis.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">addNumbers</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">a</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">, </span>
                <span className="text-blue-300">b</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">): </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> a + b;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Now if you call{" "}
            <code className="text-emerald-300">addNumbers(&quot;5&quot;, 3)</code>,
            TypeScript stops you immediately — <code>a</code> was
            promised to be a number, not text.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Optional parameters</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Adding a question mark after a parameter name makes it{" "}
            <strong className="text-white">optional</strong> — the
            function can be called with or without it.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">greet</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">, </span>
                <span className="text-blue-300">title</span>
                <span className="text-emerald-300">?</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">) {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> (title) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">console.log(title + " " + name);</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">{"} "}</span>
                <span className="text-purple-400">else</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">console.log(name);</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Both <code className="text-emerald-300">greet(&quot;Nampho&quot;)</code>{" "}
            and <code className="text-emerald-300">greet(&quot;Nampho&quot;, &quot;Dr.&quot;)</code>{" "}
            are valid calls now.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Default parameter values</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Instead of making a parameter optional, you can give it a{" "}
            <strong className="text-white">default value</strong> — used
            automatically whenever the caller doesn&apos;t supply one.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Default parameter
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">greet</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">, </span>
                <span className="text-blue-300">title</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">&quot;Student&quot;</span>
                <span className="text-slate-400">): </span>
                <span className="text-emerald-300">void</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">console.log(title + " " + name);</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            <code className="text-emerald-300">void</code> is the return
            type used when a function doesn&apos;t return anything at
            all.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            How do you mark a function parameter as optional?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Put optional before it</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Give it the type any</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Add a question mark after its name</span>
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
            <p className="leading-7 text-slate-300">Write a TypeScript function that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Is called <strong className="text-white">isPassing</strong>, takes a number parameter called <strong className="text-white">mark</strong>.</li>
              <li>Returns a boolean: true if mark is 50 or higher.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                The return type goes after the parentheses:{" "}
                <code>): boolean</code>
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`function isPassing(mark: number): boolean {
  return mark >= 50;
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
              <div className="font-semibold text-red-300">Putting an optional parameter before a required one</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`function greet(title?: string, name: string) {} // Error`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Optional parameters must come <strong>after</strong> all
                required ones.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting the return type mismatches what's actually returned</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`function isPassing(mark: number): boolean {
  return "yes"; // Error: string, not boolean
}`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Whatever the function actually returns must match the
                declared return type.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can type functions, the next step is typing
            arrays and objects.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript/arrays-objects" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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