"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function TypeScriptClassesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! The constructor runs automatically when a new object is created from the class."
      );
      markTopicComplete("typescript", "classes");
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
            <span className="text-slate-400">Topic 7 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Classes
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Build classes with typed properties and methods — the same
            object-oriented ideas from Java and Python, TypeScript style.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 70%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Define a class with typed properties.</li>
            <li>✓ Write a constructor that sets initial values.</li>
            <li>✓ Add a typed method to a class.</li>
            <li>✓ Create objects from the class.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">A typed class</h2>

          <p className="mt-5 leading-8 text-slate-300">
            A TypeScript class looks almost identical to a JavaScript
            one, except every property gets a type, declared up front.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">class</span>{" "}
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
                {"\n\n"}
                {"  "}
                <span className="text-purple-400">constructor</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">, </span>
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">this.name = name;</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">this.mark = mark;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            The <code className="text-emerald-300">constructor</code>{" "}
            runs automatically whenever a new object is created from this
            class — it&apos;s where you set up the object&apos;s starting
            values.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Creating objects</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-blue-300">learner1</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400">(</span>
                <span className="text-orange-300">&quot;Nampho&quot;</span>
                <span className="text-slate-400">, </span>
                <span className="text-orange-300">85</span>
                <span className="text-slate-400">);</span>
                {"\n\n"}
                <span className="text-slate-300">console.log(learner1.name);</span>
                <span className="text-slate-500"> // Nampho</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            TypeScript checks the constructor call too — passing{" "}
            <code className="text-emerald-300">
              new Learner(85, &quot;Nampho&quot;)
            </code>{" "}
            (arguments swapped) would be an error, since the types
            wouldn&apos;t match the parameters&apos; declared order.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Adding a typed method</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              learner.ts
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">class</span>{" "}
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
                {"\n\n"}
                {"  "}
                <span className="text-purple-400">constructor</span>
                <span className="text-slate-400">(</span>
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">string</span>
                <span className="text-slate-400">, </span>
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-300">number</span>
                <span className="text-slate-400">) {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">this.name = name;</span>
                {"\n"}
                {"    "}
                <span className="text-slate-300">this.mark = mark;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">{"}"}</span>
                {"\n\n"}
                {"  "}
                <span className="text-blue-300">isPassing</span>
                <span className="text-slate-400">(): </span>
                <span className="text-emerald-300">boolean</span>
                <span className="text-slate-400"> {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> this.mark {">"}= 50;</span>
                {"\n"}
                {"  "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">
            When does a class's constructor run?
          </h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Automatically, when a new object is created from the class</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Only when you call it by name</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Once per program, no matter how many objects you make</span>
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
            <p className="leading-7 text-slate-300">Write a TypeScript class that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Is called <strong className="text-white">Subject</strong>, with typed properties <strong className="text-white">name</strong> (string) and <strong className="text-white">mark</strong> (number).</li>
              <li>Has a method <strong className="text-white">getGrade()</strong> returning &quot;A&quot; if mark is 80 or higher, otherwise &quot;B&quot;.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                <code>getGrade()</code> needs its own return type:{" "}
                <code>getGrade(): string</code>
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`class Subject {
  name: string;
  mark: number;

  constructor(name: string, mark: number) {
    this.name = name;
    this.mark = mark;
  }

  getGrade(): string {
    if (this.mark >= 80) {
      return "A";
    }
    return "B";
  }
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
              <div className="font-semibold text-red-300">Forgetting to declare the property type at the top of the class</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`class Learner {
  constructor(name: string) {
    this.name = name; // Error: name doesn't exist on Learner
  }
}`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Every property needs to be declared with its type at the
                top of the class body, separately from the constructor
                parameter.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting new when creating an object</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`let learner1 = Learner("Nampho", 85); // Error`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Creating an object always needs <code>new</code>:{" "}
                <code>new Learner(...)</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the next topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Now that you can build classes, the next step is learning how
            to mark properties as optional or unchangeable.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/typescript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Back to TypeScript
            </Link>
            <Link href="/learn/typescript/optional-readonly" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
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