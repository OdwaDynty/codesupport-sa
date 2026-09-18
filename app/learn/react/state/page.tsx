"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function StateLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");
  const [demoCount, setDemoCount] = useState(0);

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! Calling the setter function is what tells React to re-render the component with the new value."
      );
      markTopicComplete("react", "state");
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
            <span className="text-slate-400">Topic 3 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            State with useState
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Give a component its own memory — values that can change
            over time and cause the screen to update.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[37%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 37%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain why props alone aren't enough for changing data.</li>
            <li>✓ Create state using useState.</li>
            <li>✓ Update state using its setter function.</li>
            <li>✓ Understand that updating state triggers a re-render.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Why we need state</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Props are read-only and come from outside. But what about
            data that changes based on what a user does right there on
            the page — like a counter, or whether a menu is open?
            That&apos;s exactly what <strong className="text-white">
            state</strong> is for — a component&apos;s own internal,
            changeable data.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">The useState Hook</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">import</span>
                <span className="text-slate-300">{" { useState } "}</span>
                <span className="text-purple-400">from</span>{" "}
                <span className="text-orange-300">&quot;react&quot;</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-slate-400">[</span>
                <span className="text-blue-300">count</span>
                <span className="text-slate-400">, </span>
                <span className="text-blue-300">setCount</span>
                <span className="text-slate-400">] = </span>
                <span className="text-blue-300">useState</span>
                <span className="text-slate-400">(</span>
                <span className="text-orange-300">0</span>
                <span className="text-slate-400">);</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-blue-300">count</div>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                The current value
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-blue-300">setCount</div>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                The function used to update it
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-orange-300">useState(0)</div>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                The starting value
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            The key rule: you never change{" "}
            <code className="text-emerald-300">count</code> directly.
            You always call <code className="text-emerald-300">
            setCount(...)</code> — that&apos;s what tells React
            &quot;something changed, please update the screen.&quot;
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Try it right now</h2>

          <p className="mt-5 leading-8 text-slate-300">
            This counter below is a genuinely working example, built
            exactly the way you just learned:
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-8 text-center">
            <button
              onClick={() => setDemoCount(demoCount + 1)}
              className="rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Click me
            </button>

            <p className="mt-5 text-2xl font-bold text-emerald-400">
              {demoCount}
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">The code behind it</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{count}</p>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </section>
          <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What actually causes React to update the screen?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Changing the count variable directly</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Calling the setter function, like setCount(...)</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Refreshing the whole page</span>
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
              <li>Has a piece of state called isOn, starting as false.</li>
              <li>Has a button that toggles isOn between true and false when clicked.</li>
              <li>Displays "ON" or "OFF" based on the current value.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                To toggle a boolean, set it to its own opposite:{" "}
                <code>setIsOn(!isOn)</code>
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
      <p>{isOn ? "ON" : "OFF"}</p>
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
              <div className="font-semibold text-red-300">Changing state directly</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`count = count + 1; // won't update the screen at all`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                This changes the variable, but React never finds out —
                you must always go through the setter function.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Calling useState inside a condition or loop</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`if (someCondition) {
  const [count, setCount] = useState(0); // not allowed
}`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Hooks like useState must always be called at the top
                level of a component, every render, in the same order —
                never conditionally.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can store changing data, the next step is
            responding properly to different kinds of user events.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/react" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to React</Link>
            <Link href="/learn/react/events" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}