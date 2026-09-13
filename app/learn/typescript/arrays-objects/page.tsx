"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptArraysObjectsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! number[] means an array that can only contain numbers."
      );
      markTopicComplete("typescript", "arrays-objects");
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
            <span className="text-slate-400">Topic 4 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Arrays & Objects
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Type a list of values, and describe the exact shape of an
            object.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[40%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 40%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Type an array of a single value type.</li>
            <li>✓ Describe the shape of an object using an inline type.</li>
            <li>✓ Access typed object properties safely.</li>
            <li>✓ Recognize a type mismatch on an array or object.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Typed arrays</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Add square brackets after a type to mean &quot;an array of
            this type.&quot;
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">marks</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">[] = [</span>
                <span className="text-orange-300">65</span>
                <span className="text-slate-400">, </span>
                <span className="text-orange-300">78</span>
                <span className="text-slate-400">, </span>
                <span className="text-orange-300">90</span>
                <span className="text-slate-400">];</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">number[]</code> means
            &quot;an array where every item must be a number.&quot;
            Trying to push a string into this array would be an error.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Typing the shape of an object</h2>

          <p className="mt-5 leading-8 text-slate-300">
            You can describe exactly what properties an object should
            have, and what type each one is.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">learner</span>
                <span className="text-slate-400">: {"{"} </span>
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">; </span>
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400"> {"}"} = {"{"}</span>
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

          <p className="mt-5 leading-8 text-slate-300">
            Now <code className="text-emerald-300">learner</code> must
            always have exactly a <code>name</code> (string) and a{" "}
            <code>mark</code> (number) — nothing missing, nothing extra
            of the wrong type.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">A function that takes a typed object</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Using an inline object type as a parameter
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">printLearner</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">learner</span>
                <span className="text-slate-400">: {"{"} name: string; mark: number {"}"}): </span>
                <span className="text-emerald-300">void</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">console.log(learner.name, learner.mark);</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            This inline style works, but repeating it everywhere gets
            tedious — the next lesson (Interfaces) shows a much cleaner
            way to name and reuse a shape like this.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            What does the type number[] mean?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. An array where every item must be a number</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. A single number</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. An array with exactly zero items</span>
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
              <li>Declares a <code>string[]</code> array called <strong className="text-white">subjects</strong> with three subject names.</li>
              <li>Declares a variable typed as an object with <strong className="text-white">title</strong> (string) and <strong className="text-white">price</strong> (number).</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                The object type goes in curly braces right after the
                colon, same pattern shown in Section 2.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`let subjects: string[] = ["Maths", "IT", "English"];

let product: { title: string; price: number } = {
  title: "Notebook",
  price: 25
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
              <div className="font-semibold text-red-300">Missing a required property</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let learner: { name: string; mark: number } = { name: "Nampho" }; // Error: mark is missing`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Every property in the type must be present in the actual
                object, unless it&apos;s marked optional (covered later).
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Mixing types inside a single array</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let marks: number[] = [65, "78", 90]; // Error: "78" is a string`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Every item in a <code>number[]</code> must genuinely be a
                number, not text that looks like one.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can type object shapes inline, the next step is
            learning how to name and reuse them with interfaces.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript/interfaces" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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