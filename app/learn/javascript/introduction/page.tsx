"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function JavaScriptIntroductionLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! console.log() displays a value in the browser's developer console."
      );
      markTopicComplete("javascript", "introduction");
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
            href="/learn/javascript"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← JavaScript Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              JavaScript
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 1 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Introduction to JavaScript
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Understand what JavaScript is, where it runs, and display your
            first message.
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
            <li>✓ Explain what JavaScript is used for.</li>
            <li>✓ Explain where JavaScript code can run.</li>
            <li>✓ Use console.log() to display a value.</li>
            <li>✓ Open a browser's developer console.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is JavaScript?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            JavaScript is the programming language that makes websites{" "}
            <strong className="text-white">interactive</strong>. While
            HTML builds a page&apos;s structure and CSS (like Tailwind,
            which you may have already learned) styles it, JavaScript is
            what makes a button actually{" "}
            <em>do something</em> when clicked, or a form check itself
            before submitting.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            It&apos;s also the only programming language every web
            browser understands natively — no installation needed to try
            it.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center">
              <div className="text-2xl">📄</div>
              <div className="mt-2 text-sm font-semibold">HTML</div>
              <p className="mt-1 text-xs text-slate-500">Structure</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center">
              <div className="text-2xl">🎨</div>
              <div className="mt-2 text-sm font-semibold">CSS</div>
              <p className="mt-1 text-xs text-slate-500">Style</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center">
              <div className="text-2xl">⚡</div>
              <div className="mt-2 text-sm font-semibold">JavaScript</div>
              <p className="mt-1 text-xs text-slate-500">Behaviour</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Displaying output with console.log()
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The most basic JavaScript instruction you&apos;ll use
            constantly is <code className="text-emerald-300">console.log()</code>{" "}
            — it prints whatever you put inside the brackets to the{" "}
            <strong className="text-white">console</strong>, a panel
            built into every browser for exactly this purpose.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">Example</div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
              <code>{`console.log("Hello, World!");`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            To actually see this, you need to open your browser&apos;s{" "}
            <strong className="text-white">developer console</strong> —
            usually by pressing F12, or right-clicking anywhere on a page
            and choosing &quot;Inspect&quot;, then clicking the{" "}
            &quot;Console&quot; tab.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Where JavaScript code lives
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            JavaScript is normally placed inside a{" "}
            <code className="text-emerald-300">&lt;script&gt;</code> tag
            in an HTML page, or in its own separate{" "}
            <code className="text-emerald-300">.js</code> file linked to
            the page.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              index.html
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-400">&lt;script&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">
                  console.log(&quot;Hello, World!&quot;);
                </span>
                {"\n"}
                <span className="text-slate-400">&lt;/script&gt;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            You can also try JavaScript directly in your browser&apos;s
            console itself — just type a line of code there and press
            Enter.
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What does console.log() do?
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
                A. Changes the color of the webpage
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
              <span className="text-sm text-slate-300">
                B. Displays a value in the browser's developer console
              </span>
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
              <span className="text-sm text-slate-300">
                C. Saves a file to the computer
              </span>
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
              Write JavaScript code that prints three lines to the
              console:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Your name.</li>
              <li>The school or place you are learning from.</li>
              <li>The message &quot;I am learning JavaScript!&quot;</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                You&apos;ll need three separate{" "}
                <code>console.log(...)</code> lines, each with text
                inside quotes.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`console.log("Nampho");
console.log("CodeSupport SA");
console.log("I am learning JavaScript!");`}</code>
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
                Forgetting the quotes around text
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                console.log(Hello);
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Text needs quotes:{" "}
                <code>console.log(&quot;Hello&quot;)</code>. Without
                them, JavaScript thinks{" "}
                <code>Hello</code> is a variable name, and you&apos;ll
                get an error since it doesn&apos;t exist.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Confusing console.log() with alert()
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                alert(&quot;Hello&quot;); {"// pops up a dialog box, not the console"}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Both display text, but{" "}
                <code>alert()</code> interrupts the page with a popup —{" "}
                <code>console.log()</code> is quieter and used constantly
                for checking what your code is doing.
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
            Now that you can display output, the next step is learning
            how to store information using variables.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/javascript"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to JavaScript
            </Link>

            <Link
              href="/learn/javascript/variables-data-types"
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