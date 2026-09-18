"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function UseEffectLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! An empty dependency array means the effect runs once, right after the component first appears."
      );
      markTopicComplete("react", "use-effect");
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
            <span className="text-slate-400">Topic 6 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            useEffect & Side Effects
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Run code in response to a component rendering or updating —
            things that happen outside of React's normal rendering flow.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[75%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 75%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what a "side effect" means in React.</li>
            <li>✓ Use useEffect to run code after a component renders.</li>
            <li>✓ Control when an effect runs using the dependency array.</li>
            <li>✓ Recognize the most common useEffect mistake.</li>
          </ul>
        </section>
                <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">What is a "side effect"?</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Rendering JSX is supposed to be predictable — the same
            props and state should always produce the same output. A{" "}
            <strong className="text-white">side effect</strong> is
            anything that reaches outside that — fetching data, setting
            a page title, starting a timer. React gives you a dedicated
            place for this: <code className="text-emerald-300">useEffect</code>.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">import</span>
                <span className="text-slate-300">{" { useEffect } "}</span>
                <span className="text-purple-400">from</span>{" "}
                <span className="text-orange-300">&quot;react&quot;</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                <span className="text-blue-300">useEffect</span>
                <span className="text-slate-400">(() =&gt; {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-slate-300">console.log(&quot;Component rendered!&quot;);</span>
                {"\n"}
                <span className="text-slate-400">{"}"}, []);</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">The dependency array</h2>

          <p className="mt-5 leading-8 text-slate-300">
            That second argument — the square brackets{" "}
            <code className="text-emerald-300">[]</code> — controls{" "}
            <em>when</em> the effect runs. This is the part that trips up
            almost every beginner.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">useEffect(fn, [])</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Empty array — runs once, right after the component first
                appears. Never again after that.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">useEffect(fn, [count])</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Runs once at first, then again every time{" "}
                <code>count</code> changes.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">useEffect(fn)</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No array at all — runs after every single render. Rarely
                what you actually want.
              </p>
            </div>
          </div>
        </section>
                <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">A realistic example</h2>

          <p className="mt-5 leading-8 text-slate-300">
            A very common use case: updating the page&apos;s title based
            on state.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Updating the document title</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Every time <code className="text-emerald-300">count</code>{" "}
            changes, the effect runs again and updates the browser
            tab&apos;s title — something regular JSX rendering
            can&apos;t do on its own.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What does an empty dependency array, [], mean?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. The effect runs on every render</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. The effect never runs at all</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. The effect runs once, right after the component first appears</span>
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
              <li>Has a seconds piece of state, starting at 0.</li>
              <li>Uses useEffect to log "Component mounted" to the console once, when it first appears.</li>
              <li>Displays the current seconds value.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                "Run once when it first appears" means an empty
                dependency array.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <p>{seconds}</p>;
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
              <div className="font-semibold text-red-300">Forgetting the dependency array entirely</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`useEffect(() => {
  setCount(count + 1); // runs after every render, forever
});`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Updating state inside an effect with no dependency array
                can cause an infinite loop — the update triggers a
                re-render, which runs the effect again, forever.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Leaving a used variable out of the dependency array</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`useEffect(() => {
  document.title = "Count: " + count;
}, []); // count is used here, but missing from the array`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                This effect will use a stale, outdated value of{" "}
                <code>count</code> forever — anything the effect reads
                from state or props should generally be listed in the
                dependency array.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can handle side effects, the next step is
            managing form input properly.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/react" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to React</Link>
            <Link href="/learn/react/forms" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}