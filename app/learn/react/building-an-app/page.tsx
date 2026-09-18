"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function BuildingAnAppLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult(
        "Correct! Combining state, events, and list rendering together is exactly how real React apps are built."
      );
      markTopicComplete("react", "building-an-app");
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
            <span className="text-slate-400">Topic 8 of 8</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Building a Small App
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Combine everything you've learned into one real, working
            app — built right here in this lesson.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-emerald-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">Lesson progress: 100%</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-lg font-bold text-emerald-300">
            What you should know after this lesson
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>✓ Combine components, state, events, and lists in one app.</li>
            <li>✓ Build a working to-do list from scratch.</li>
            <li>✓ Read and understand a realistic, complete component.</li>
            <li>✓ Feel confident starting your own React projects.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">Planning the app</h2>

          <p className="mt-5 leading-8 text-slate-300">
            We're going to build a simple to-do list. Before writing any
            code, let's plan what state we need — this is exactly the
            decomposition skill from the Problem Solving & Logic course,
            applied to a React app.
          </p>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">tasks</div>
              <p className="mt-1 text-sm text-slate-400">An array holding all the tasks added so far.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
              <div className="font-mono text-sm text-emerald-300">taskInput</div>
              <p className="mt-1 text-sm text-slate-400">The controlled input's current value, before it's added.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">Try it right now</h2>

          <p className="mt-5 leading-8 text-slate-300">
            This is a genuinely working version of the app, built with
            exactly the ideas from this course:
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="flex gap-3">
              <input
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a task..."
                className="flex-1 rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
              />
              <button
                onClick={addTask}
                className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Add
              </button>
            </div>

            {tasks.length === 0 ? (
              <p className="mt-4 text-sm text-slate-500">No tasks yet.</p>
            ) : (
              <ul className="mt-4 space-y-2">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-slate-950 px-3 py-2 text-sm text-slate-300"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">The full code</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">TodoList.jsx</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  return (
    <div>
      <input
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`}</code>
            </pre>
          </div>

          <p className="mt-5 leading-8 text-slate-300">
            Notice every single idea from this course shows up here:{" "}
            <strong className="text-white">state</strong> (tasks,
            taskInput), a <strong className="text-white">controlled
            input</strong>, an <strong className="text-white">event
            handler</strong> (onClick), and{" "}
            <strong className="text-white">conditional list rendering</strong>{" "}
            — all working together in one real component.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What does building this app show you?</h2>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. That combining state, events, and list rendering together is how real React apps are built</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. That React can only build to-do lists</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. That state and props are the same thing</span>
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
              Extend the to-do list above with one new feature: a delete
              button next to each task, that removes it from the list
              when clicked.
            </p>

            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Use .filter() to create a new array without the task at
                the clicked index.
              </div>
            </details>

            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`const deleteTask = (indexToRemove) => {
  setTasks(tasks.filter((task, index) => index !== indexToRemove));
};

// In the JSX:
<ul>
  {tasks.map((task, index) => (
    <li key={index}>
      {task}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  ))}
</ul>`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Directly modifying the tasks array</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`tasks.push(taskInput); // don't do this - React won't notice`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Always create a new array with{" "}
                <code>[...tasks, newItem]</code> instead of mutating the
                existing one directly.
              </p>
            </div>

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Trying to build everything at once</div>
              <p className="mt-2 text-sm text-slate-500">
                Even this small app was built by adding one piece at a
                time — state, then the input, then the button, then the
                list. Build your own projects the same incremental way.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>
          <h2 className="mt-4 text-2xl font-bold">You&apos;ve completed the React course!</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            From your first JSX to a working to-do app — you now know
            the fundamentals every React developer relies on. Time to
            put it into practice.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/react" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to React</Link>
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