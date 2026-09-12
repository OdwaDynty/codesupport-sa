"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function JavaClassesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult(
        "Correct! An object is a specific instance created from a class, with its own values."
      );
      markTopicComplete("java", "classes");
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
            href="/learn/java"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Java Topics
          </Link>
        </div>
      </nav>

      {/* Lesson Header */}
      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">
              Java
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 13 of 13</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Intro to Classes
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            A first look at organizing code around objects — the
            foundation of object-oriented programming.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-emerald-400" />
          </div>

          <p className="mt-2 text-xs text-slate-500">Lesson progress: 100%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Learning objective */}
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what a class and an object are.</li>
            <li>✓ Create a simple class with fields.</li>
            <li>✓ Create objects from a class.</li>
            <li>✓ Access an object&apos;s fields and methods.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            01 • Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Classes are blueprints
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Everything you&apos;ve written so far has lived inside a
            single class called <code className="text-emerald-300">Main</code>.
            A <strong className="text-white">class</strong> is really a{" "}
            <strong className="text-white">blueprint</strong> for
            creating things. Think of it like a blueprint for a house — the
            blueprint itself isn&apos;t a house you can live in, but you
            can build many actual houses from it.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">
              A Learner class
            </div>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">public class</span>{" "}
                <span className="text-yellow-300">Learner</span>{" "}
                <span className="text-slate-400">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">String</span>{" "}
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            This class defines that every{" "}
            <code className="text-emerald-300">Learner</code> has a{" "}
            <code className="text-emerald-300">name</code> and a{" "}
            <code className="text-emerald-300">mark</code>. These are
            called <strong className="text-white">fields</strong>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            02 • Understand
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Objects — actual instances of a class
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Once you have a class, you can create as many{" "}
            <strong className="text-white">objects</strong> from it as you
            like — each one with its own separate values.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-yellow-300">Learner</span>{" "}
                <span className="text-blue-300">learner1</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400">();</span>
                {"\n"}
                <span className="text-slate-300">learner1.name = </span>
                <span className="text-orange-300">&quot;Nampho&quot;</span>
                <span className="text-slate-300">;</span>
                {"\n"}
                <span className="text-slate-300">learner1.mark = </span>
                <span className="text-orange-300">85</span>
                <span className="text-slate-300">;</span>
                {"\n\n"}
                <span className="text-yellow-300">Learner</span>{" "}
                <span className="text-blue-300">learner2</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-yellow-300">Learner</span>
                <span className="text-slate-400">();</span>
                {"\n"}
                <span className="text-slate-300">learner2.name = </span>
                <span className="text-orange-300">&quot;Thando&quot;</span>
                <span className="text-slate-300">;</span>
                {"\n"}
                <span className="text-slate-300">learner2.mark = </span>
                <span className="text-orange-300">62</span>
                <span className="text-slate-300">;</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">learner1</code> and{" "}
            <code className="text-emerald-300">learner2</code> are both
            separate <code className="text-emerald-300">Learner</code>{" "}
            objects, each with their own independent{" "}
            <code>name</code> and <code>mark</code>. Changing one never
            affects the other.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            03 • Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Adding a method to a class
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Classes can also contain methods that work with their own
            fields:
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">
              Learner.java
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">public class</span>{" "}
                <span className="text-yellow-300">Learner</span>{" "}
                <span className="text-slate-400">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">String</span>{" "}
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                {"    "}
                <span className="text-purple-400">public boolean</span>{" "}
                <span className="text-blue-300">isPassing</span>
                <span className="text-slate-400">() {"{"}</span>
                {"\n"}
                {"        "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> mark {">"}= 50;</span>
                {"\n"}
                {"    "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Now every <code className="text-emerald-300">Learner</code>{" "}
            object can check its own pass status:{" "}
            <code className="text-emerald-300">learner1.isPassing()</code>
          </p>
        </section>

        {/* Quiz */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Quick Check
          </p>

          <h2 className="mt-3 text-2xl font-bold">What is an object?</h2>

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
                A. Another name for a variable
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
                B. The blueprint that defines what fields a class has
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
                C. A specific instance created from a class, with its own
                values
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
              Write a Java class that:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>
                Is called <strong className="text-white">Subject</strong>{" "}
                with two fields: <strong className="text-white">name</strong>{" "}
                (String) and <strong className="text-white">mark</strong>{" "}
                (int).
              </li>
              <li>
                Has a method <strong className="text-white">getGrade()</strong>{" "}
                that returns &quot;A&quot; if mark is 80 or higher, otherwise
                &quot;B&quot;.
              </li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Hint
              </summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                <code>getGrade()</code> returns a{" "}
                <code>String</code>, and uses the class&apos;s own{" "}
                <code>mark</code> field directly — no parameters needed.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">
                Show Solution
              </summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`public class Subject {
    String name;
    int mark;

    public String getGrade() {
        if (mark >= 80) {
            return "A";
        }
        return "B";
    }
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
                Forgetting new when creating an object
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                Learner learner1 = Learner();
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                Creating an object always needs the{" "}
                <code>new</code> keyword:{" "}
                <code>new Learner()</code>.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">
                Confusing the class with an object
              </div>
              <pre className="mt-3 font-mono text-sm text-slate-400">
                {`Learner.name = "Nampho"; // wrong - Learner is the class`}
              </pre>
              <p className="mt-2 text-sm text-slate-500">
                You set fields on an actual{" "}
                <strong>object</strong> you created (like{" "}
                <code>learner1</code>), never directly on the class name
                itself.
              </p>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>

          <h2 className="mt-4 text-2xl font-bold">
            You&apos;ve completed the Java curriculum!
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            From your first &quot;Hello, World!&quot; to classes and
            objects — you now know the fundamentals every Java developer
            builds on. Time to put it into practice.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/learn/java"
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Java
            </Link>

            <Link
              href="/projects"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Projects →
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