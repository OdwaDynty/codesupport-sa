"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptVariablesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! TypeScript infers the type from the value, so you don't always have to write it yourself."
      );
      markTopicComplete("typescript", "variables-types");
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
            <span className="text-slate-400">Topic 2 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Beginner</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Variables & Basic Types
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how TypeScript figures out types on its own, and when
            you still need to write them yourself.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[20%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 20%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain type inference.</li>
            <li>✓ Know when to write a type explicitly versus letting TypeScript infer it.</li>
            <li>✓ Understand what the any type means, and why to avoid it.</li>
            <li>✓ Recognize null and undefined.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Type inference</h2>

          <p className="mt-5 leading-8 text-slate-300">
            You don&apos;t always have to write a type — TypeScript is
            often smart enough to figure it out from the value itself.
            This is called <strong className="text-white">type
            inference</strong>.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-500">// TypeScript infers: number</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Even though we didn&apos;t write{" "}
            <code className="text-emerald-300">: number</code>,
            TypeScript still knows <code className="text-emerald-300">age</code>{" "}
            is a number — and will still stop you from later assigning it
            text.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">When to write the type yourself</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Inference works great when you assign a value immediately.
            But if you declare a variable{" "}
            <strong className="text-white">without</strong> a starting
            value, TypeScript can&apos;t guess — so you should write the
            type explicitly.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-500">// no value yet, so we must say what type it will be</span>
                {"\n\n"}
                <span className="text-slate-300">mark = 78;</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">any, null and undefined</h2>

          <p className="mt-5 leading-8 text-slate-300">
            TypeScript has a special type called{" "}
            <code className="text-emerald-300">any</code> that turns
            off type checking for that variable — it can hold anything,
            and TypeScript won&apos;t complain.
          </p>

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm leading-6 text-yellow-200">
              <strong className="text-yellow-300">Important:</strong>{" "}
              using <code>any</code> defeats the whole point of
              TypeScript. Avoid it unless you genuinely have no other
              option — it&apos;s an escape hatch, not a default.
            </p>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            You&apos;ll also see <code className="text-emerald-300">null</code>{" "}
            (deliberately &quot;no value&quot;) and{" "}
            <code className="text-emerald-300">undefined</code> (a
            variable that hasn&apos;t been given a value yet) — these are
            their own distinct types in TypeScript.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            If you write let name = &quot;Nampho&quot;; with no type
            annotation, what happens?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. TypeScript treats it as type any</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. TypeScript infers it as type string automatically</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. It causes an error</span>
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
            <p className="leading-7 text-slate-300">Write TypeScript code that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Declares a variable called <strong className="text-white">total</strong> with type number, but no value yet.</li>
              <li>Later assigns it the value 100.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Since there&apos;s no value on the first line, you must
                write the type explicitly.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`let total: number;

total = 100;`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Overusing any</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let data: any = getSomething();`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Reaching for <code>any</code> whenever you&apos;re unsure
                of a type removes TypeScript&apos;s safety net entirely —
                try to find the real type first.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting a variable declared without a value still needs a type</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let mark; // TypeScript treats this as "any" - not ideal`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Write <code>let mark: number;</code> instead, so
                TypeScript knows what&apos;s coming.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you understand basic types, the next step is adding
            types to functions.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript/functions" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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