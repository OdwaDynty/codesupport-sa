"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptInterfacesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! An interface names a reusable object shape, instead of retyping it everywhere."
      );
      markTopicComplete("typescript", "interfaces");
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
            <span className="text-slate-400">Topic 5 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Interfaces
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Give a reusable name to an object shape, instead of repeating
            it everywhere.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[50%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 50%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Define an interface for an object shape.</li>
            <li>✓ Use an interface as a variable or parameter type.</li>
            <li>✓ Explain why interfaces are better than repeating inline types.</li>
            <li>✓ Create an object that satisfies an interface.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Naming a shape with interface</h2>

          <p className="mt-5 leading-8 text-slate-300">
            In the last lesson, we wrote the same object shape inline
            every time. An <strong className="text-white">interface</strong>{" "}
            lets you define that shape once, give it a name, and reuse it
            everywhere.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            By convention, interface names start with a capital letter —{" "}
            <code className="text-emerald-300">Learner</code>, not{" "}
            <code>learner</code>.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Using an interface</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Once defined, you use the interface name exactly like any
            other type — as a variable&apos;s type, or a function
            parameter&apos;s type.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">learner1</span>
                <span className="text-slate-400">: </span>
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400"> = {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-orange-300">&quot;Nampho&quot;</span>
                <span className="text-slate-400">,</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">: </span>
                <span className="text-orange-300">85</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
                <span className="text-slate-400">;</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              As a function parameter
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">printLearner</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">learner</span>
                <span className="text-slate-400">: </span>
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400">): </span>
                <span className="text-emerald-300">void</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">console.log(learner.name);</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Much cleaner than repeating{" "}
            <code className="text-emerald-300">{"{ name: string; mark: number }"}</code>{" "}
            every single time you need this shape.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Why not just use an inline type?</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Imagine you need the same &quot;Learner&quot; shape in five
            different functions. Without an interface, you&apos;d write
            the same three lines five times — and if you ever need to
            add a new field, you&apos;d have to update it in five places.
            With an interface, you change it in exactly one place.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Rule of thumb:</strong>{" "}
              if you find yourself typing the same object shape more than
              once, that&apos;s a sign it should be an interface instead.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            What is the main benefit of an interface?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. It makes code run faster</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. It names a reusable object shape, instead of repeating it everywhere</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. It replaces the need for functions</span>
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
            <p className="leading-7 text-slate-300">Write TypeScript code that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Defines an interface called <strong className="text-white">Subject</strong> with <strong className="text-white">name</strong> (string) and <strong className="text-white">mark</strong> (number).</li>
              <li>Creates a variable called <strong className="text-white">maths</strong> typed as Subject, with real values.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Define the interface first, then use its name as the type
                for <code>maths</code>.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`interface Subject {
  name: string;
  mark: number;
}

let maths: Subject = {
  name: "Mathematics",
  mark: 72
};`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Using commas instead of semicolons inside an interface</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`interface Learner {
  name: string,
  mark: number,
}`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Interface fields are usually separated with semicolons,
                not commas — though many setups tolerate either, it&apos;s
                worth using the standard convention.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Lowercase interface names</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`interface learner { name: string; }`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Not an error, but breaks convention — interface names
                should start with a capital letter, like{" "}
                <code>Learner</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can name object shapes, the next step is
            learning how to allow a value to be one of several types.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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