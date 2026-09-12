"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TailwindIntroductionLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! Tailwind styles elements using small, single-purpose classes directly in your HTML."
      );
      markTopicComplete("tailwind", "introduction");
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
            href="/learn/tailwind"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Tailwind Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              Tailwind CSS
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 1 of 9</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Introduction to Tailwind CSS
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Understand what makes Tailwind different from regular CSS, and
            style your very first element.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[11%] rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 11%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what utility-first CSS means.</li>
            <li>✓ Explain how Tailwind differs from writing regular CSS.</li>
            <li>✓ Add the Tailwind CDN script to an HTML page.</li>
            <li>✓ Style a simple element using utility classes.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What is Tailwind CSS?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Tailwind CSS is a{" "}
            <strong className="text-white">utility-first</strong> CSS
            framework. Instead of writing your own CSS rules in a separate
            file, you style elements by adding small, pre-built classes
            directly onto your HTML — each class does exactly one thing.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-medium text-slate-400">
                Traditional CSS
              </div>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-300">
                <code>{`.button {
  background: green;
  color: white;
  padding: 12px;
}`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-medium text-slate-400">
                Tailwind
              </div>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-xs leading-6 text-emerald-300">
                <code>{`<button class="bg-green-600
  text-white p-3">`}</code>
              </pre>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            No separate CSS file, no inventing class names like{" "}
            <code className="text-emerald-300">.button</code> — you just
            combine existing utility classes right where you need them.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Getting Tailwind onto a page
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The fastest way to try Tailwind, without installing anything,
            is a single script tag in your HTML&apos;s{" "}
            <code className="text-emerald-300">&lt;head&gt;</code>:
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              index.html
            </div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-slate-400">&lt;head&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">&lt;script src=</span>
                <span className="text-orange-300">
                  &quot;https://cdn.tailwindcss.com&quot;
                </span>
                <span className="text-slate-400">&gt;&lt;/script&gt;</span>
                {"\n"}
                <span className="text-slate-400">&lt;/head&gt;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This is exactly how CodeSupport SA itself uses Tailwind for its
            own design — a real, production-ready way to get started
            quickly. Larger projects usually install Tailwind properly as
            part of their build tools, but the ideas you learn are
            identical either way.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Your first styled element
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Let&apos;s style a simple box. Each class below controls one
            specific thing.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              HTML
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-slate-400">&lt;div class=</span>
                <span className="text-orange-300">
                  &quot;bg-emerald-500 text-white p-4&quot;
                </span>
                <span className="text-slate-400">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">Hello, Tailwind!</span>
                {"\n"}
                <span className="text-slate-400">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="font-mono text-sm text-purple-400">
                bg-emerald-500
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Sets the background color
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="font-mono text-sm text-purple-400">
                text-white
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Sets the text color
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="font-mono text-sm text-purple-400">p-4</div>
              <p className="mt-1 text-xs text-slate-500">
                Adds padding on all sides
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Here&apos;s what that actually looks like:
          </p>

          <div className="mt-3 rounded-xl bg-emerald-500 p-4 text-white">
            Hello, Tailwind!
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            What does &quot;utility-first&quot; mean?
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
                A. You write your own custom class names in a separate CSS
                file, like normal
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
                B. You style elements using small, single-purpose classes
                directly in your HTML
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
                C. Tailwind writes JavaScript code for you
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
              Write the Tailwind classes needed to make a{" "}
              <code className="text-emerald-300">&lt;div&gt;</code> have:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>A blue background.</li>
              <li>White text.</li>
              <li>Padding on all sides.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Background color classes start with{" "}
                <code>bg-</code>, text color classes start with{" "}
                <code>text-</code>, and padding uses <code>p-</code>{" "}
                followed by a number.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`<div class="bg-blue-500 text-white p-4">
  Hello!
</div>`}</code>
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
                Forgetting quotes around the class list
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class=bg-blue-500 text-white>`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                All the classes need to sit inside one pair of quotes:{" "}
                <code>class=&quot;bg-blue-500 text-white&quot;</code>
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Guessing a class name that doesn&apos;t exist
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`<div class="background-blue">`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Tailwind class names follow specific patterns (like{" "}
                <code>bg-blue-500</code>, not{" "}
                <code>background-blue</code>). If a class doesn&apos;t
                match Tailwind&apos;s naming, nothing happens — no error,
                it just silently doesn&apos;t style anything.
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
            Now that you understand the basic idea, the next step is
            learning Tailwind&apos;s color and background utilities in
            more depth.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/tailwind"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Tailwind
            </Link>

            <Link
              href="/learn/tailwind"
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