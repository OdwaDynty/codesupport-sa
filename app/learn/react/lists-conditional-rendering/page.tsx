"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function ListsConditionalLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! A unique key prop helps React efficiently track which list items changed, were added, or removed."
      );
      markTopicComplete("react", "lists-conditional-rendering");
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
          <Link href="/learn/react" className="text-sm text-slate-400 transition hover:text-emerald-400">
            ← React Topics
          </Link>
        </div>
      </nav>
            <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">React</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 5 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Rendering Lists & Conditional Rendering
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Display arrays of data, and show or hide content based on
            conditions.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[62%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 62%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Render a list of items using .map().</li>
            <li>✓ Explain why each item needs a unique key.</li>
            <li>✓ Show content conditionally using && and ternaries.</li>
            <li>✓ Combine both in one component.</li>
          </ul>
        </section>
                <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Rendering a list with .map()</h2>

          <p className="mt-5 leading-8 text-slate-300">
            To display an array of data as JSX, you transform each item
            into a piece of JSX using{" "}
            <code className="text-emerald-300">.map()</code> — the same
            array method from JavaScript, just returning JSX this time.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-emerald-300">
              <code>{`const subjects = ["Maths", "English", "Science"];

<ul>
  {subjects.map((subject) => (
    <li key={subject}>{subject}</li>
  ))}
</ul>`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            That <code className="text-emerald-300">key</code> prop is
            important — React uses it to efficiently track which item is
            which, especially when the list changes later.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Conditional rendering</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Sometimes you only want to show something under certain
            conditions. Two common patterns:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-semibold text-white">Using &&</div>
              <pre className="mt-3 overflow-x-auto font-mono text-xs leading-6 text-emerald-300">
                <code>{`{isLoggedIn && (
  <p>Welcome back!</p>
)}`}</code>
              </pre>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Shows the JSX only when the condition is true, shows
                nothing otherwise.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="text-sm font-semibold text-white">Using a ternary</div>
              <pre className="mt-3 overflow-x-auto font-mono text-xs leading-6 text-emerald-300">
                <code>{`{isPassing
  ? <p>Pass</p>
  : <p>Fail</p>
}`}</code>
              </pre>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Use when you need to show one thing OR another — never
                nothing at all.
              </p>
            </div>
          </div>
        </section>
                <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Combining both</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">A list with per-item conditional styling</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`const marks = [65, 42, 90, 38];

<ul>
  {marks.map((mark, index) => (
    <li key={index}>
      {mark} — {mark >= 50 ? "Pass" : "Fail"}
    </li>
  ))}
</ul>`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Here we&apos;re using the array&apos;s index as the key,
            since these numbers don&apos;t have a more natural unique
            identifier — this is acceptable for a list that never
            reorders or changes.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">Why does each item in a list need a key prop?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. It's required for styling the list</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. It helps React efficiently track which items changed, were added, or removed</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. It sets the text color of each item</span>
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
            <p className="leading-7 text-slate-300">Write a React component that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Has an array of at least 3 learner names.</li>
              <li>Renders them as a list using .map(), with a proper key.</li>
              <li>Shows "No learners yet" instead, if the array is empty.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Check learners.length === 0 with a ternary to decide
                which to render.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`function LearnerList() {
  const learners = ["Nampho", "Thando", "Zola"];

  return (
    <div>
      {learners.length === 0 ? (
        <p>No learners yet</p>
      ) : (
        <ul>
          {learners.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
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
              <div className="font-semibold text-red-300">Forgetting the key prop</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`{subjects.map((s) => <li>{s}</li>)} // React warns in the console`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                This still renders, but React will warn you in the
                console — always include a unique key.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Using && when a value might be 0</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`{count && <p>Count: {count}</p>} // renders "0" if count is 0!`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                If <code>count</code> is 0, this actually renders the
                literal number 0 on the page, since 0 is "falsy" but
                still gets displayed — use a proper condition like{" "}
                <code>count &gt; 0 &amp;&amp; ...</code> instead.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can display dynamic content, the next step is
            running code in response to a component appearing or
            updating.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/react" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to React</Link>
            <Link href="/learn/react/use-effect" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}