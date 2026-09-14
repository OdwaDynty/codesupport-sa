"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppInputOutputLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult("Correct! cin is used to read input typed by the user.");
      markTopicComplete("cpp", "input-output");
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
            <span className="text-slate-400">Topic 4 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Input & Output</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to display messages with cout and read what the
            user types with cin.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[40%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 40%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">What you should know after this lesson</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Display text using cout.</li>
            <li>✓ Read user input using cin.</li>
            <li>✓ Read different data types from input.</li>
            <li>✓ Combine multiple pieces of output in one line.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Reading user input with cin</h2>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">cin</code> (pronounced
            &quot;see-in&quot;) reads whatever the user types, using the
            same <code>&gt;&gt;</code> symbol pointing the other way from{" "}
            <code>cout</code>.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Enter your age: &quot;;
                </span>
                {"\n"}
                <span className="text-slate-300">cin &gt;&gt; age;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Unlike Java&apos;s Scanner, there&apos;s no setup needed —{" "}
            <code className="text-emerald-300">cin</code> works
            immediately since it comes from{" "}
            <code>&lt;iostream&gt;</code>, the same include you already
            have.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">cin knows the type automatically</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Unlike some languages where input always comes in as text,{" "}
            <code className="text-emerald-300">cin</code> reads directly
            into whatever type the variable already is.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Reading different types
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">cin &gt;&gt; age;</span>
                <span className="text-slate-500">{"  "}// reads a whole number</span>
                {"\n\n"}
                <span className="text-purple-400">double</span>{" "}
                <span className="text-blue-300">average</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">cin &gt;&gt; average;</span>
                <span className="text-slate-500">{"  "}// reads a decimal number</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Chaining output</h2>

          <p className="mt-5 leading-8 text-slate-300">
            You can chain several <code className="text-emerald-300">&lt;&lt;</code>{" "}
            in a row to combine text and variables in one line.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-emerald-300">
              <code>{`string name = "Nampho";
int age = 16;

cout << "Hello, " << name << "! You are " << age << " years old.";`}</code>
            </pre>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">Which tool does C++ use to read what the user types?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. cout</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Scanner</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. cin</span>
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
              <li>Asks the user to type their age.</li>
              <li>Reads it into an int variable using cin.</li>
              <li>Prints it back with a message like &quot;You are 16 years old.&quot;</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Ask the question with <code>cout</code> first, then read
                the answer with <code>cin</code> into a variable declared
                beforehand.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int age;
cout << "Enter your age: ";
cin >> age;
cout << "You are " << age << " years old.";`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Using the wrong arrow direction</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`cin << age; // wrong direction`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Remember: <code>cout &lt;&lt;</code> sends data out,{" "}
                <code>cin &gt;&gt;</code> reads data in — the arrows
                point in the direction data flows.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Typing text when an int is expected</div>
              <p className="mt-2 text-sm text-slate-500">
                If a variable is declared as <code>int</code> but the
                user types letters, <code>cin</code> can get into a bad
                state — handling that gracefully is a more advanced
                topic, but worth knowing it can happen.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can get input from the user, the next step is
            learning how to make decisions with if statements.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/cpp" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to C++</Link>
            <Link href="/learn/cpp/if-statements" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}