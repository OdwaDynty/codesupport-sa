"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptOptionalReadonlyLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! readonly means the property can be set once (usually in the constructor) but never changed after that."
      );
      markTopicComplete("typescript", "optional-readonly");
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
          <Link href="/learn/typescript" className="text-sm text-slate-400 transition hover:text-emerald-400">
            ← TypeScript Topics
          </Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">TypeScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 8 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Optional & Readonly Properties
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Mark a property as not always required, or as something that
            should never change once set.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[80%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 80%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Mark an interface or class property as optional using ?.</li>
            <li>✓ Mark a property as readonly.</li>
            <li>✓ Explain what happens if you try to change a readonly property.</li>
            <li>✓ Combine optional and readonly on different properties of the same type.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Optional properties with ?</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Just like optional function parameters, a question mark after
            a property name makes it optional on an interface too.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">nickname</span>
                <span className="text-emerald-300">?</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Now an object can satisfy{" "}
            <code className="text-emerald-300">Learner</code> with or
            without a <code>nickname</code> — but{" "}
            <code>name</code> and <code>mark</code> are still required.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">readonly properties</h2>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">readonly</code> means a
            property can be set once — usually in the constructor — but
            never changed afterward.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">readonly</span>{" "}
                <span className="text-blue-300">id</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                {"  "}
                <span className="text-purple-400">constructor</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">id</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">this.id = id;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
                {"\n\n"}
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">learner1</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400">(</span>
                <span className="text-orange-300">1</span>
                <span className="text-slate-400">);</span>
                {"\n"}
                <span className="text-slate-300">learner1.id = 2;</span>
                <span className="text-slate-500"> // Error!</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This is useful for things that genuinely shouldn&apos;t
            change after creation — like an ID number.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Combining both</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              An interface with both patterns
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-yellow-300">Product</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">readonly</span>{" "}
                <span className="text-blue-300">id</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">title</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">discount</span>
                <span className="text-emerald-300">?</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            <code>id</code> can never change,{" "}
            <code>title</code> is always required,{" "}
            <code>discount</code> may or may not be present.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            What does readonly do?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Makes the property optional</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Allows setting it once, then prevents it from ever changing</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Deletes the property after use</span>
            </label>
          </div>

          <button onClick={checkQuiz} className="mt-6 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
            Check Answer
          </button>

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
            <p className="leading-7 text-slate-300">Write a TypeScript interface called <strong className="text-white">Booking</strong> with:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>A readonly <strong className="text-white">bookingId</strong> (number).</li>
              <li>A required <strong className="text-white">studentName</strong> (string).</li>
              <li>An optional <strong className="text-white">notes</strong> (string).</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                <code>readonly</code> goes before the property name;{" "}
                <code>?</code> goes right after it.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`interface Booking {
  readonly bookingId: number;
  studentName: string;
  notes?: string;
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
              <div className="font-semibold text-red-300">Forgetting a property is optional and always trying to use it</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`console.log(learner.nickname.toUpperCase()); // could crash if nickname is missing`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Since an optional property might not exist, check for it
                first before using it directly.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Trying to reassign a readonly property later</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`product.id = 99; // Error, even outside the constructor`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Once set, a <code>readonly</code> property is locked —
                there&apos;s no way around it except creating a new
                object.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can control what changes, the next step is
            learning how to define a fixed set of named values with
            enums.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript/enums" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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