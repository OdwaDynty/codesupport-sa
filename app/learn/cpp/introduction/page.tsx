"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppIntroductionLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! main is where every C++ program starts running."
      );
      markTopicComplete("cpp", "introduction");
    } else if (quizAnswer === "") {
      setQuizResult("Choose an answer first.");
    } else {
      setQuizResult("Not quite. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-bold text-white transition hover:text-emerald-400"
          >
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>

          <Link
            href="/learn/cpp"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← C++ Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              C++
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 1 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Introduction to C++
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Understand what C++ is, how a program is structured, and
            write your first line of code.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[10%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 10%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what C++ is used for.</li>
            <li>✓ Recognize the basic structure of a C++ program.</li>
            <li>✓ Explain what #include and main do.</li>
            <li>✓ Write and understand a simple "Hello, World!" program.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">What is C++?</h2>

          <p className="mt-5 leading-8 text-slate-300">
            C++ is a powerful, fast programming language used for
            everything from operating systems and game engines to
            embedded devices. It gives you more direct control over how
            your program uses memory than languages like Java or Python
            — which is exactly why it's used where performance really
            matters.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            If you've learned Java already, a lot of C++ will feel
            familiar — variables, if statements, loops, functions all
            work similarly. The biggest new idea C++ introduces is
            working directly with memory addresses, which you&apos;ll
            meet properly a bit later in this course.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            The structure of a C++ program
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Every C++ program you write will follow roughly this same
            shape:
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              Basic structure
            </div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">#include</span>{" "}
                <span className="text-orange-300">&lt;iostream&gt;</span>
                {"\n"}
                <span className="text-purple-400">using namespace</span>{" "}
                <span className="text-slate-300">std;</span>
                {"\n\n"}
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">main</span>
                <span className="text-slate-400">() {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">
                  cout &lt;&lt; &quot;Hello, World!&quot;;
                </span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">return</span>{" "}
                <span className="text-orange-300">0</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">
                #include &lt;iostream&gt;
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Brings in the tools needed for input/output, like{" "}
                <code className="text-emerald-300">cout</code>.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">
                using namespace std;
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Lets you write <code>cout</code> instead of the longer{" "}
                <code>std::cout</code> every time.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">int main()</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                The <strong className="text-white">main function</strong>{" "}
                — the exact point where your program starts running.
                Every C++ program needs exactly one of these.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">return 0;</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Tells the operating system the program finished
                successfully. You&apos;ll see this at the end of almost
                every main function.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">Your first program</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              hello.cpp
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Running this program prints exactly one line:{" "}
            <code className="text-emerald-300">Hello, World!</code>. The{" "}
            <code className="text-emerald-300">&lt;&lt;</code> symbol
            sends the text into <code>cout</code>, which displays it.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Which part of a C++ program tells it where to start running?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input
                type="radio"
                name="quiz"
                value="A"
                checked={quizAnswer === "A"}
                onChange={(e) => setQuizAnswer(e.target.value)}
                className="mt-1"
              />
              <span className="text-sm text-slate-300">
                A. #include &lt;iostream&gt;
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input
                type="radio"
                name="quiz"
                value="B"
                checked={quizAnswer === "B"}
                onChange={(e) => setQuizAnswer(e.target.value)}
                className="mt-1"
              />
              <span className="text-sm text-slate-300">B. main</span>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input
                type="radio"
                name="quiz"
                value="C"
                checked={quizAnswer === "C"}
                onChange={(e) => setQuizAnswer(e.target.value)}
                className="mt-1"
              />
              <span className="text-sm text-slate-300">C. cout</span>
            </label>
          </div>

          <button
            onClick={checkQuiz}
            className="mt-6 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Check Answer
          </button>

          {quizResult && (
            <div
              className={`mt-5 rounded-xl p-4 text-sm ${
                quizResult.startsWith("Correct")
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-yellow-400/10 text-yellow-300"
              }`}
            >
              {quizResult}
            </div>
          )}
        </section>

        {/* Exercise */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            04 • Exercise
          </p>

          <h2 className="mt-3 text-3xl font-bold">Your turn</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="leading-7 text-slate-300">
              Write a C++ program that prints three lines to the screen:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Your name.</li>
              <li>The school or place you are learning from.</li>
              <li>The message &quot;I am learning C++!&quot;</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You can chain multiple <code>&lt;&lt;</code> in one{" "}
                <code>cout</code> line, using{" "}
                <code>&quot;\n&quot;</code> to move to a new line between
                each message.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Nampho" << "\\n";
    cout << "CodeSupport SA" << "\\n";
    cout << "I am learning C++!" << "\\n";
    return 0;
}`}</code>
              </pre>
            </details>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Watch out
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Common beginner mistakes
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Forgetting the semicolon
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`cout << "Hello"`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Unlike Python, almost every C++ statement needs a{" "}
                <code>;</code> at the end — leaving it off is one of the
                most common beginner errors.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Forgetting #include &lt;iostream&gt;
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`int main() {
    cout << "Hello"; // Error: cout not recognized
}`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Without that include line at the top, C++ has no idea
                what <code>cout</code> even is.
              </p>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>

          <h2 className="mt-4 text-2xl font-bold">
            Ready for the next topic?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you understand the basic structure, the next step is
            learning how to store information using variables.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/cpp"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to C++
            </Link>

            <Link
              href="/learn/cpp"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
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