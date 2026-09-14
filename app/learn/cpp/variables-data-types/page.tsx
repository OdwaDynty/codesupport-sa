"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppVariablesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! double is used for numbers that can have decimal places."
      );
      markTopicComplete("cpp", "variables-data-types");
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
            <span className="text-slate-400">Topic 2 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Variables & Data Types
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to store information in C++, and the exact type
            each variable must be given.
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
            <li>✓ Declare a variable with an explicit type.</li>
            <li>✓ Recognize the main C++ data types.</li>
            <li>✓ Use string, which needs its own include.</li>
            <li>✓ Explain the difference between int and double.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Declaring a variable</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Unlike Python, C++ always requires you to state a
            variable&apos;s type up front — this is called{" "}
            <strong className="text-white">static typing</strong>. Once
            declared, that type can never change.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This should look familiar if you&apos;ve done the Java course
            — C++&apos;s variable syntax is very close to Java&apos;s.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">The main data types</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">int</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Whole numbers. Example: <code className="text-emerald-300">16</code>,{" "}
                <code className="text-emerald-300">-4</code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">double</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Decimal numbers. Example: <code className="text-emerald-300">72.5</code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">char</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A single character, in single quotes. Example:{" "}
                <code className="text-emerald-300">&apos;A&apos;</code>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">bool</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                <code className="text-emerald-300">true</code> or{" "}
                <code className="text-emerald-300">false</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Working with text — string</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Text in C++ uses <code className="text-emerald-300">string</code>,
            but it needs its own separate include line.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Using a string
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">#include</span>{" "}
                <span className="text-orange-300">&lt;string&gt;</span>
                {"\n"}
                <span className="text-purple-400">using namespace</span>{" "}
                <span className="text-slate-300">std;</span>
                {"\n\n"}
                <span className="text-purple-400">string</span>{" "}
                <span className="text-blue-300">name</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">&quot;Nampho&quot;</span>
                <span className="text-slate-400">;</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            Which data type would you use to store a test average like 72.5?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. int</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. double</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. bool</span>
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
            <p className="leading-7 text-slate-300">Declare four C++ variables using the correct data type for each:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li><strong className="text-white">learnerCount</strong> — the number of learners in a class.</li>
              <li><strong className="text-white">averageMark</strong> — a class average of 68.4.</li>
              <li><strong className="text-white">subjectName</strong> — the text &quot;Mathematics&quot;.</li>
              <li><strong className="text-white">isPassing</strong> — whether a learner passed.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Remember subjectName needs the string type, which needs{" "}
                <code>#include &lt;string&gt;</code> at the top.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int learnerCount = 30;
double averageMark = 68.4;
string subjectName = "Mathematics";
bool isPassing = true;`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Using int for a decimal value</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`int average = 72.5; // silently loses the decimal part`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                This compiles, but silently chops off the decimal,
                storing 72 instead — use <code>double</code> for decimals.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting #include &lt;string&gt;</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`string name = "Nampho"; // Error without the include`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Unlike <code>int</code> or <code>double</code>,{" "}
                <code>string</code> needs its own include line.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you know the data types, the next step is learning
            how to work with them using operators.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/cpp" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to C++</Link>
            <Link href="/learn/cpp/operators" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}