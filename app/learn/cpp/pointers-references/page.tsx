"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppPointersLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "B") {
      setQuizResult(
        "Correct! & gets the memory address of a variable; * accesses the value a pointer points to."
      );
      markTopicComplete("cpp", "pointers-references");
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
          <Link href="/learn/cpp" className="text-sm text-slate-400 transition hover:text-emerald-400">
            ← C++ Topics
          </Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">C++</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 9 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Pointers & References</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Understand memory addresses — the concept that genuinely
            sets C++ apart from Java and Python.
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
            <li>✓ Explain what a memory address is.</li>
            <li>✓ Get a variable's address using &amp;.</li>
            <li>✓ Declare and use a pointer.</li>
            <li>✓ Understand what a reference is, and how it differs from a pointer.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Every variable lives somewhere in memory</h2>

          <p className="mt-5 leading-8 text-slate-300">
            Every variable you&apos;ve created so far is actually stored
            at a specific location in your computer&apos;s memory — an{" "}
            <strong className="text-white">address</strong>. Most
            languages hide this from you entirely. C++ lets you see and
            work with it directly.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">
                  cout &lt;&lt; &amp;age;
                </span>
                <span className="text-slate-500"> // prints a memory address, like 0x7ffee...</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">&amp;age</code> means
            &quot;the address of{" "}
            <code>age</code>&quot; — a completely different meaning from
            the <code>&amp;&amp;</code> logical operator from earlier in
            this course.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Pointers — a variable that stores an address</h2>

          <p className="mt-5 leading-8 text-slate-300">
            A <strong className="text-white">pointer</strong> is a
            variable whose value is a memory address — it &quot;points
            to&quot; another variable.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-purple-400">int</span>
                <span className="text-slate-400">* </span>
                <span className="text-blue-300">agePointer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-slate-400">&amp;age;</span>
                {"\n\n"}
                <span className="text-slate-300">
                  cout &lt;&lt; *agePointer;
                </span>
                <span className="text-slate-500"> // prints 16 - the value at that address</span>
              </code>
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">&amp; (on a variable)</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                &quot;Give me the address of this variable&quot;
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-purple-400">* (on a pointer)</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                &quot;Give me the value stored at this address&quot;
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">References — an easier alternative</h2>

          <p className="mt-5 leading-8 text-slate-300">
            A <strong className="text-white">reference</strong> is like
            an alternate name for an existing variable — simpler to use
            than a pointer, with no <code>*</code> needed to access the
            value.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">A reference</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">age</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-orange-300">16</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-purple-400">int</span>
                <span className="text-slate-400">&amp; </span>
                <span className="text-blue-300">ageRef</span>{" "}
                <span className="text-slate-400">= age;</span>
                {"\n\n"}
                <span className="text-slate-300">ageRef = 17;</span>
                <span className="text-slate-500"> // this also changes age!</span>
                {"\n"}
                <span className="text-slate-300">cout &lt;&lt; age;</span>
                <span className="text-slate-500"> // prints 17</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">ageRef</code> is just
            another name for <code>age</code> — changing one changes the
            other, since they&apos;re the exact same memory location.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What do &amp; and * do in this context?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. They are only used for arithmetic</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. &amp; gets a variable's memory address; * accesses the value a pointer points to</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. They delete a variable</span>
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
            <p className="leading-7 text-slate-300">Write C++ code that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Creates an int variable called mark, set to 72.</li>
              <li>Creates a pointer called markPointer that points to mark.</li>
              <li>Prints the value mark points to, using the pointer.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Declare the pointer with <code>int* markPointer = &amp;mark;</code>,
                then print <code>*markPointer</code>.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`int mark = 72;
int* markPointer = &mark;

cout << *markPointer;`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Confusing the two meanings of *</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`int* p = &age;  // here, * means "this is a pointer"
cout << *p;     // here, * means "give me the value"`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                The same symbol means two different things depending on
                where it appears — this trips up almost everyone at
                first.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Printing a pointer instead of dereferencing it</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`cout << agePointer; // prints the address, not 16`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                If you meant to print the value, you need the{" "}
                <code>*</code> in front: <code>*agePointer</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🎯</div>
          <h2 className="mt-4 text-2xl font-bold">Ready for the final topic?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            One last step — a brief introduction to classes and objects.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/cpp" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to C++</Link>
            <Link href="/learn/cpp/classes" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Next Topic →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}