"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppFunctionsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult("Correct! return sends a value back to wherever the function was called.");
      markTopicComplete("cpp", "functions");
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
            <span className="text-slate-400">Topic 8 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Functions</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Organize your code into reusable, named blocks.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[80%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 80%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">What you should know after this lesson</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Write a function with parameters and a return type.</li>
            <li>✓ Call a function.</li>
            <li>✓ Understand void functions that don't return anything.</li>
            <li>✓ Explain why main is itself a function.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">A typed function</h2>

          <p className="mt-5 leading-8 text-slate-300">
            You&apos;ve actually already written one function — main
            itself! A function is a named block of code you can call
            whenever needed.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">addNumbers</span>
                <span className="text-slate-400">(</span>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">a</span>
                <span className="text-slate-400">, </span>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">b</span>
                <span className="text-slate-400">) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> a + b;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Calling it</div>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`int total = addNumbers(5, 3);
cout << total; // prints 8`}</code>
            </pre>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">void functions</h2>

          <p className="mt-5 leading-8 text-slate-300">
            If a function doesn&apos;t need to send a value back, use{" "}
            <code className="text-emerald-300">void</code> as its return
            type.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">A void function</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-emerald-300">void</span>{" "}
                <span className="text-blue-300">printResult</span>
                <span className="text-slate-400">(</span>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">if</span>
                <span className="text-slate-400"> (mark &gt;= 50) {"{"}</span>
                {"\n"}
                {"        "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Pass&quot;;
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-400">{"} "}</span>
                <span className="text-purple-400">else</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"        "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Fail&quot;;
                </span>
                {"\n"}
                {"    "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Functions before main</h2>

          <p className="mt-5 leading-8 text-slate-300">
            In C++, a function needs to be declared{" "}
            <strong className="text-white">before</strong> the code that
            calls it — usually meaning your own functions go above{" "}
            <code className="text-emerald-300">int main()</code> in the
            file.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Full file order</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`#include <iostream>
using namespace std;

bool isPassing(int mark) {
    return mark >= 50;
}

int main() {
    cout << isPassing(72);
    return 0;
}`}</code>
            </pre>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What does return do?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Prints a value to the screen</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Sends a value back to wherever the function was called</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Repeats the function again</span>
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
            <p className="leading-7 text-slate-300">Write a C++ function that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Is called isPassing, takes an int parameter called mark, and returns a bool.</li>
              <li>Returns true if mark is 50 or higher, false otherwise.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You can return the comparison result directly:{" "}
                <code>return mark &gt;= 50;</code>
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`bool isPassing(int mark) {
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
              <div className="font-semibold text-red-300">Calling a function before it's declared</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`int main() {
    cout << isPassing(72); // Error if isPassing is below main
}

bool isPassing(int mark) { ... }`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Move the function above <code>main</code>, or C++
                won&apos;t recognize it yet at that point in the file.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting to return a value</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`int square(int n) {
    n * n; // missing "return"
}`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                If the return type isn&apos;t <code>void</code>, the
                function must actually <code>return</code> something.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now for the concept that makes C++ genuinely different —
            pointers and references.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/cpp" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to C++</Link>
            <Link href="/learn/cpp/pointers-references" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}