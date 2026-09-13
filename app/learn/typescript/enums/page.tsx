"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptEnumsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! An enum defines a fixed set of named values a variable can hold."
      );
      markTopicComplete("typescript", "enums");
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
            <span className="text-slate-400">Topic 9 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Enums
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Define a fixed set of named values, instead of relying on
            plain text or numbers that could easily be mistyped.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[90%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 90%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Define an enum with the enum keyword.</li>
            <li>✓ Use an enum value.</li>
            <li>✓ Explain why an enum is safer than plain strings.</li>
            <li>✓ Compare an enum to a literal union type.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Defining an enum</h2>

          <p className="mt-5 leading-8 text-slate-300">
            An <strong className="text-white">enum</strong> (short for
            &quot;enumeration&quot;) defines a fixed list of named
            values.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">enum</span>{" "}
                <span className="text-yellow-300">Status</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">Pass</span>
                <span className="text-slate-400">,</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">Fail</span>
                <span className="text-slate-400">,</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">Pending</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">Status.Pass</code>,{" "}
            <code className="text-emerald-300">Status.Fail</code>, and{" "}
            <code className="text-emerald-300">Status.Pending</code> are
            now the only three valid values for anything typed as{" "}
            <code>Status</code>.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Using an enum</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">result</span>
                <span className="text-slate-400">: </span>
                <span className="text-yellow-300">Status</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-yellow-300">Status</span>
                <span className="text-slate-400">.</span>
                <span className="text-blue-300">Pass</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400">
                  {" "}
                  (result === Status.Pass) {"{"}
                </span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">
                  console.log(&quot;Well done!&quot;);
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Notice you always use the full{" "}
            <code className="text-emerald-300">Status.Pass</code> — never
            just <code>Pass</code> on its own.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">
            enum versus a literal union — which to use?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            You saw literal unions (
            <code className="text-emerald-300">
              &quot;Pass&quot; | &quot;Fail&quot;
            </code>
            ) a couple of lessons ago — enums solve a very similar
            problem. Both are valid choices; many TypeScript projects
            actually prefer literal unions for simple cases like this,
            and save enums for when the set of values is more central to
            the whole program.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Literal union</th>
                  <th className="px-5 py-3 font-medium">Enum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-5 py-3 font-mono text-emerald-300 text-xs">
                    type Status = &quot;Pass&quot; | &quot;Fail&quot;;
                  </td>
                  <td className="px-5 py-3 font-mono text-emerald-300 text-xs">
                    enum Status {"{"} Pass, Fail {"}"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            What is an enum?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. A function that returns multiple values</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. A fixed set of named values a variable can hold</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. A type of loop</span>
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
              <li>Defines an enum called <strong className="text-white">Grade</strong> with values Beginner, Intermediate, Advanced.</li>
              <li>Declares a variable called <strong className="text-white">myLevel</strong> set to Grade.Intermediate.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Same pattern as the Status example — comma-separated
                names inside curly braces.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`enum Grade {
  Beginner,
  Intermediate,
  Advanced
}

let myLevel: Grade = Grade.Intermediate;`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting the enum name prefix</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let result = Pass; // Error: 'Pass' isn't defined on its own`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Always use the full path:{" "}
                <code>Status.Pass</code>, never just{" "}
                <code>Pass</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Using commas to separate values incorrectly</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`enum Status { Pass; Fail; } // wrong separator`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Enum members are separated by commas, not semicolons.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the final topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            One last concept — generics, which let you write code that
            works safely with more than one type.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript/generics" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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