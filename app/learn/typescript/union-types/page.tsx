"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptUnionTypesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! A union type allows a value to be one of several listed types."
      );
      markTopicComplete("typescript", "union-types");
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
            <span className="text-slate-400">Topic 6 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Union Types & Type Aliases
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Allow a value to be one of several types, and give your own
            types a name.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[60%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 60%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Write a union type using the | symbol.</li>
            <li>✓ Explain when a union type is useful.</li>
            <li>✓ Create a type alias with the type keyword.</li>
            <li>✓ Use a type alias made of a union.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Union types with |</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Sometimes a value could reasonably be more than one type. A{" "}
            <strong className="text-white">union type</strong>, written
            with a pipe <code className="text-emerald-300">|</code>,
            lists every type that&apos;s allowed.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">id</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>{" "}
                <span className="text-slate-400">| </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-slate-300">id = 42;</span>
                <span className="text-slate-500"> // fine</span>
                {"\n"}
                <span className="text-slate-300">
                  id = &quot;ABC123&quot;;
                </span>
                <span className="text-slate-500"> // also fine</span>
                {"\n"}
                <span className="text-slate-300">id = true;</span>
                <span className="text-slate-500"> // Error</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">number | string</code>{" "}
            means &quot;must be a number, or a string — nothing else.&quot;
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Naming a type with type</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Just like interfaces name object shapes, the{" "}
            <code className="text-emerald-300">type</code> keyword lets
            you name any type — including a union — so you can reuse it.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">type</span>{" "}
                <span className="text-yellow-300">Status</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">&quot;Pass&quot;</span>{" "}
                <span className="text-slate-400">| </span>
                <span className="text-orange-300">&quot;Fail&quot;</span>{" "}
                <span className="text-slate-400">| </span>
                <span className="text-orange-300">&quot;Pending&quot;</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">result</span>
                <span className="text-slate-400">: </span>
                <span className="text-yellow-300">Status</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">&quot;Pass&quot;</span>
                <span className="text-slate-400">;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This is called a <strong className="text-white">literal
            union</strong> — instead of any string, only these three
            exact text values are allowed. Assigning{" "}
            <code className="text-emerald-300">&quot;Maybe&quot;</code>{" "}
            would be an error.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Union types on function parameters</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              A function that accepts either type
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-300">printId</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">id</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>{" "}
                <span className="text-slate-400">| </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">): </span>
                <span className="text-emerald-300">void</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">console.log(id);</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
                {"\n\n"}
                <span className="text-slate-300">printId(101);</span>
                {"\n"}
                <span className="text-slate-300">
                  printId(&quot;A-101&quot;);
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Both calls are valid — <code>id</code> genuinely accepts
            either type.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            What does number | string mean?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Must be both a number and a string at the same time</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Must always be a number, string is ignored</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Can be either a number or a string</span>
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
              <li>Creates a type alias called <strong className="text-white">Grade</strong> that can only be &quot;A&quot;, &quot;B&quot;, or &quot;C&quot;.</li>
              <li>Declares a variable called <strong className="text-white">myGrade</strong> typed as Grade, set to &quot;A&quot;.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use <code>type Grade = ...</code> with three text values
                joined by <code>|</code>.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`type Grade = "A" | "B" | "C";

let myGrade: Grade = "A";`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Using & instead of |</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let id: number & string; // this means something totally different`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                <code>|</code> means &quot;one of these.&quot;{" "}
                <code>&amp;</code> means &quot;all of these combined&quot;
                — a more advanced concept you don&apos;t need yet. For a
                union, always use <code>|</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Assigning a value outside the allowed literal union</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`type Grade = "A" | "B" | "C";
let myGrade: Grade = "D"; // Error`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Only the exact listed values are valid — nothing else,
                even if it seems like a reasonable grade.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can combine types, the next step is learning how
            to build classes with typed properties and methods.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript/classes" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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