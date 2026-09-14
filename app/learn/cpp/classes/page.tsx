"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function CppClassesLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer === "C") {
      setQuizResult("Correct! An object is a specific instance created from a class, with its own values.");
      markTopicComplete("cpp", "classes");
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
            <span className="text-slate-400">Topic 10 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Intro to Classes</h1>
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
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">What you should know after this lesson</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Explain what a class and an object are.</li>
            <li>✓ Create a simple class with public members.</li>
            <li>✓ Create objects from a class.</li>
            <li>✓ Add a method to a class.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Classes are blueprints</h2>

          <p className="mt-5 leading-8 text-slate-300">
            A <strong className="text-white">class</strong> is a
            blueprint for creating objects. If you&apos;ve done the Java
            or Python course, this will feel very familiar.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-sm font-medium text-slate-400">A Learner class</div>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-yellow-300">Learner</span>{" "}
                <span className="text-slate-400">{"{"}</span>
                {"\n"}
                <span className="text-purple-400">public</span>
                <span className="text-slate-400">:</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">string</span>{" "}
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-400">{"};"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">public:</code> means these
            properties can be accessed from outside the class — worth
            knowing that C++ classes default to <em>private</em> access
            unless you say otherwise, which is different from Java.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Creating objects</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-yellow-300">Learner</span>{" "}
                <span className="text-blue-300">learner1</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                <span className="text-slate-300">
                  learner1.name = &quot;Nampho&quot;;
                </span>
                {"\n"}
                <span className="text-slate-300">learner1.mark = 85;</span>
                {"\n\n"}
                <span className="text-slate-300">
                  cout &lt;&lt; learner1.name;
                </span>
              </code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Unlike Java, C++ objects don&apos;t always need{" "}
            <code className="text-emerald-300">new</code> — this simple
            version creates the object directly on the stack.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Adding a method</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Learner class with a method</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <code>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-yellow-300">Learner</span>{" "}
                <span className="text-slate-400">{"{"}</span>
                {"\n"}
                <span className="text-purple-400">public</span>
                <span className="text-slate-400">:</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">string</span>{" "}
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">;</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-300">mark</span>
                <span className="text-slate-400">;</span>
                {"\n\n"}
                {"    "}
                <span className="text-purple-400">bool</span>{" "}
                <span className="text-blue-300">isPassing</span>
                <span className="text-slate-400">() {"{"}</span>
                {"\n"}
                {"        "}
                <span className="text-purple-400">return</span>
                <span className="text-slate-300"> mark &gt;= 50;</span>
                {"\n"}
                {"    "}
                <span className="text-slate-400">{"}"}</span>
                {"\n"}
                <span className="text-slate-400">{"};"}</span>
              </code>
            </pre>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Now <code className="text-emerald-300">learner1.isPassing()</code>{" "}
            works, using that object&apos;s own mark.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What is an object?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Another name for a pointer</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. The blueprint that defines what properties a class has</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. A specific instance created from a class, with its own values</span>
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
            <p className="leading-7 text-slate-300">Write a C++ class that:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Is called Subject, with public members name (string) and mark (int).</li>
              <li>Has a method getGrade() that returns &quot;A&quot; if mark is 80 or higher, otherwise &quot;B&quot;.</li>
            </ol>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                getGrade() returns a <code>string</code>, and uses{" "}
                <code>mark</code> directly since it&apos;s inside the
                class.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`class Subject {
public:
    string name;
    int mark;

    string getGrade() {
        if (mark >= 80) {
            return "A";
        }
        return "B";
    }
};`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting public:</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`class Learner {
    string name; // private by default!
};

learner1.name = "Nampho"; // Error`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Unlike Java, C++ class members are{" "}
                <strong>private by default</strong> — without{" "}
                <code>public:</code>, outside code can&apos;t access
                them at all.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Forgetting the semicolon after a class</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`class Learner {
    ...
} // missing semicolon here`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Unlike a function, a class definition needs a{" "}
                <code>;</code> right after its closing brace.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>
          <h2 className="mt-4 text-2xl font-bold">You&apos;ve completed the C++ course!</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            From your first &quot;Hello, World!&quot; to pointers and
            classes — you now know the fundamentals every C++ developer
            builds on. Time to put it into practice.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/cpp" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to C++</Link>
            <Link href="/projects" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">View Projects →</Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-500">CodeSupport SA • Learn. Practise. Build. Get Help.</div>
      </footer>
    </main>
  );
}