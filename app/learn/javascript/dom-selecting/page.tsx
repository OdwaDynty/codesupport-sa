"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function JavaScriptDomSelectingLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult("Correct! document.getElementById() finds the one element with that exact id.");
      markTopicComplete("javascript", "dom-selecting");
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
          <Link href="/learn/javascript" className="text-sm text-slate-400 transition hover:text-emerald-400">← JavaScript Topics</Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">JavaScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 9 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">DOM Basics: Selecting Elements</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Use JavaScript to find elements on a real webpage — the
            first step toward making pages interactive.
          </p>
          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[90%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 90%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">What you should know after this lesson</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what the DOM is.</li>
            <li>✓ Select an element by its id.</li>
            <li>✓ Read and change an element's text content.</li>
            <li>✓ Change an element's style from JavaScript.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">What is the DOM?</h2>
          <p className="mt-5 leading-8 text-slate-300">
            The <strong className="text-white">DOM</strong> (Document
            Object Model) is how your browser represents an HTML page as
            something JavaScript can read and change. Every element on a
            page — every heading, button, paragraph — becomes an object
            JavaScript can reach into.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Selecting an element by id</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Given this HTML:
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-slate-400">&lt;h1 id=</span>
                <span className="text-orange-300">&quot;title&quot;</span>
                <span className="text-slate-400">&gt;</span>
                <span className="text-slate-300">Hello</span>
                <span className="text-slate-400">&lt;/h1&gt;</span>
              </code>
            </pre>
          </div>
          <p className="mt-5 leading-8 text-slate-300">
            You can select it in JavaScript with:
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-emerald-300">
              <code>{`const title = document.getElementById("title");`}</code>
            </pre>
          </div>
          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">title</code> now refers
            to that exact element — you can read from it or change it.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Changing text and style</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Changing an element</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`const title = document.getElementById("title");

title.textContent = "Welcome!";
title.style.color = "green";`}</code>
            </pre>
          </div>
          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">textContent</code>{" "}
            changes what text is displayed;{" "}
            <code className="text-emerald-300">style.color</code>{" "}
            changes its appearance — this is exactly how the interactive
            widgets on CodeSupport SA update text and colors on the fly.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What does document.getElementById() do?</h2>
          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Creates a new HTML element</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Finds the one element on the page with that exact id</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Deletes an element</span>
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
            <p className="leading-7 text-slate-300">
              Given <code className="text-emerald-300">&lt;p id=&quot;message&quot;&gt;Old text&lt;/p&gt;</code>,
              write JavaScript that:
            </p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Selects that element.</li>
              <li>Changes its text to &quot;New text&quot;.</li>
            </ol>
            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use <code>getElementById</code> to select it, then set{" "}
                <code>textContent</code>.
              </div>
            </details>
            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`const message = document.getElementById("message");
message.textContent = "New text";`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Misspelling the id</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`document.getElementById("titel"); // returns null - typo`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                If the id doesn&apos;t match exactly,{" "}
                <code>getElementById</code> returns{" "}
                <code>null</code> — trying to use{" "}
                <code>.textContent</code> on that will crash your
                script.
              </p>
            </div>
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Running the script before the HTML exists</div>
              <p className="mt-2 text-sm text-slate-500">
                If your <code>&lt;script&gt;</code> runs before the
                element it&apos;s looking for has loaded, it won&apos;t
                find it. Placing your script at the bottom of the page,
                or waiting for the page to load, avoids this.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the final topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            One last step — making your page respond when a user
            actually clicks something.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/javascript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to JavaScript</Link>
            <Link href="/learn/javascript/dom-events" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}