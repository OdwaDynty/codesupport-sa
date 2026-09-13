"use client";

import Link from "next/link";
import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";

export default function JavaScriptDomEventsLesson() {
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");
  const [demoCount, setDemoCount] = useState(0);

  const checkQuiz = () => {
    if (quizAnswer === "A") {
      setQuizResult("Correct! addEventListener attaches a function that runs whenever that event happens.");
      markTopicComplete("javascript", "dom-events");
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
          <Link href="/learn/javascript" className="text-sm text-slate-400 transition hover:text-emerald-400">← JavaScript Topics</Link>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">JavaScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Topic 10 of 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Intermediate</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">DOM Basics: Responding to Clicks</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Make your webpage respond when a user interacts with it — a
            real, working button, right here in this lesson.
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
            <li>✓ Explain what an event is.</li>
            <li>✓ Attach a click event using addEventListener.</li>
            <li>✓ Write a function that runs when the event fires.</li>
            <li>✓ Combine selecting, events and changing content together.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">01 • Learn</p>
          <h2 className="mt-3 text-3xl font-bold">What is an event?</h2>
          <p className="mt-5 leading-8 text-slate-300">
            An <strong className="text-white">event</strong> is something
            that happens on a page — a click, typing in a box, scrolling.
            JavaScript can &quot;listen&quot; for these events and run
            code in response.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">02 • Understand</p>
          <h2 className="mt-3 text-3xl font-bold">addEventListener</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Given <code className="text-emerald-300">
              &lt;button id=&quot;myButton&quot;&gt;Click me&lt;/button&gt;
            </code>:
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-emerald-300">
              <code>{`const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log("Button was clicked!");
});`}</code>
            </pre>
          </div>
          <p className="mt-5 leading-8 text-slate-300">
            <code className="text-emerald-300">addEventListener</code>{" "}
            takes two things: the type of event to listen for (
            <code className="text-emerald-300">&quot;click&quot;</code>),
            and a function to run whenever it happens.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">03 • Examples</p>
          <h2 className="mt-3 text-3xl font-bold">Try it right now</h2>
          <p className="mt-5 leading-8 text-slate-300">
            This button below is a genuinely working example, built the
            same way you just learned:
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-8 text-center">
            <button
              onClick={() => setDemoCount(demoCount + 1)}
              className="rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Click me
            </button>

            <p className="mt-5 text-sm text-slate-400">
              Clicked{" "}
              <span className="font-bold text-emerald-400">{demoCount}</span>{" "}
              {demoCount === 1 ? "time" : "times"}
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-medium text-slate-400">Vanilla JavaScript equivalent</div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-emerald-300">
              <code>{`let count = 0;
const button = document.getElementById("myButton");
const countDisplay = document.getElementById("countDisplay");

button.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = "Clicked " + count + " times";
});`}</code>
            </pre>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Quick Check</p>
          <h2 className="mt-3 text-2xl font-bold">What does addEventListener do?</h2>
          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="A" checked={quizAnswer === "A"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">A. Attaches a function that runs whenever a specific event happens</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="B" checked={quizAnswer === "B"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">B. Deletes an element from the page</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
              <input type="radio" name="quiz" value="C" checked={quizAnswer === "C"} onChange={(e) => setQuizAnswer(e.target.value)} className="mt-1" />
              <span className="text-sm text-slate-300">C. Changes the page's background color</span>
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
              Given <code className="text-emerald-300">&lt;button id=&quot;greetButton&quot;&gt;Greet&lt;/button&gt;</code>{" "}
              and <code className="text-emerald-300">&lt;p id=&quot;greeting&quot;&gt;&lt;/p&gt;</code>,
              write JavaScript that:
            </p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-400">
              <li>Listens for a click on the button.</li>
              <li>When clicked, sets the paragraph's text to &quot;Hello there!&quot;</li>
            </ol>
            <details className="mt-8 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Hint</summary>
              <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">
                Select both elements first, then attach the listener to
                the button.
              </div>
            </details>
            <details className="mt-3 rounded-xl border border-white/10 bg-slate-950">
              <summary className="cursor-pointer p-4 text-sm font-semibold text-emerald-400">Show Solution</summary>
              <pre className="overflow-x-auto border-t border-white/10 p-5 font-mono text-sm leading-7 text-emerald-300">
                <code>{`const button = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

button.addEventListener("click", function () {
  greeting.textContent = "Hello there!";
});`}</code>
              </pre>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Watch out</p>
          <h2 className="mt-3 text-3xl font-bold">Common beginner mistakes</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Calling the function instead of passing it</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`button.addEventListener("click", greet()); // wrong - runs immediately`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                Leave off the parentheses:{" "}
                <code>addEventListener(&quot;click&quot;, greet)</code>{" "}
                — you&apos;re handing over the function itself, not
                calling it right now.
              </p>
            </div>
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5">
              <div className="font-semibold text-red-300">Misspelling the event name</div>
              <pre className="mt-3 font-mono text-sm text-slate-400">{`button.addEventListener("clik", ...); // silently does nothing`}</pre>
              <p className="mt-2 text-sm text-slate-500">
                A misspelled event name doesn&apos;t error — it just
                never fires, which can be confusing to debug.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
          <div className="text-3xl">🏆</div>
          <h2 className="mt-4 text-2xl font-bold">You&apos;ve completed the JavaScript course!</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            From your first console.log() to making a real button
            respond to clicks — you now know the fundamentals of
            JavaScript and how it brings webpages to life. Time to put
            it into practice.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learn/javascript" className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Back to JavaScript</Link>
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