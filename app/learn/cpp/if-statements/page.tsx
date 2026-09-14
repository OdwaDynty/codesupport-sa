"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppIfStatementsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult("Correct! else runs only when the if condition was false.");
      markTopicComplete("cpp", "if-statements");
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
            <span className="text-slate-400">Topic 5 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">If Statements & If/Else</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Teach your program to make decisions, and handle more than
            one possible outcome.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[50%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 50%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">What you should know after this lesson</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Write an if statement.</li>
            <li>✓ Add an else block.</li>
            <li>✓ Chain conditions with else if.</li>
            <li>✓ Combine conditions using logical operators.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">A basic if statement</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> (age &gt;= 13) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;You are a teenager.&quot;;
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Same familiar pattern from other languages — the code inside
            the curly braces only runs if the condition is true.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">else and else if</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">mark</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">72</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> (mark &gt;= 80) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Grade: A&quot;;
                </span>
                {"\n"}
                <span className="text-slate-400">{"} "}</span>
                <span className="text-purple-400">else if</span>
                <span className="text-slate-400"> (mark &gt;= 60) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Grade: B&quot;;
                </span>
                {"\n"}
                <span className="text-slate-400">{"} "}</span>
                <span className="text-purple-400">else</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Grade: C&quot;;
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Combining conditions</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Multiple conditions</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> (mark &gt;= 50 {"&&"} mark {"<"} 100) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Valid pass mark.&quot;;
                </span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">When does the code inside an else block run?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Every time the program runs</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Only when the if condition was false</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Only when the if condition was true</span>
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
            <p className="leading-7 text-slate-300">Write a C++ program that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Creates an int variable called age.</li>
              <li>Prints &quot;You can vote&quot; if age is 18 or older, otherwise prints &quot;You cannot vote yet&quot;.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use an if block for the voting-age condition and an else
                block for everyone else.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int age = 16;

if (age >= 18) {
    cout << "You can vote";
} else {
    cout << "You cannot vote yet";
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
              <div className="font-semibold text-red-300">Adding a semicolon after the condition</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`if (age > 18); {
    cout << "Adult";
}`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                That semicolon ends the if statement early — the block
                below runs no matter what the condition is.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Using = instead of ==</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`if (isPassing = true) { }`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Same trap as the Operators lesson — this assigns instead
                of comparing, and compiles without warning.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that your program can make decisions, the next step is
            learning how to repeat instructions using loops.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/cpp" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to C++</Link>
            <Link href="/learn/cpp" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}