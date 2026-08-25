"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Exercise = {
  id: number;
  language: "Java" | "Python";
  level: "Beginner" | "Intermediate";
  topic: string;
  title: string;
  question: string;
  hint: string;
  solution: string;
};

const exercises: Exercise[] = [
  {
    id: 1,
    language: "Java",
    level: "Beginner",
    topic: "Variables",
    title: "Store a learner's age",
    question:
      "Create a Java variable called studentAge and store the value 17 in it.",
    hint: "You need a whole-number data type.",
    solution: `int studentAge = 17;`,
  },
  {
    id: 2,
    language: "Java",
    level: "Beginner",
    topic: "Output",
    title: "Display your name",
    question:
      'Write a Java statement that displays your name on the screen using System.out.println().',
    hint: 'Put your name inside double quotation marks.',
    solution: `System.out.println("Odwa");`,
  },
  {
    id: 3,
    language: "Java",
    level: "Beginner",
    topic: "Calculations",
    title: "Calculate a total",
    question:
      "Create two integer variables called mark1 and mark2. Store 65 and 75 in them and calculate their total.",
    hint: "Create a third variable called total and add mark1 and mark2.",
    solution: `int mark1 = 65;
int mark2 = 75;
int total = mark1 + mark2;`,
  },
  {
    id: 4,
    language: "Java",
    level: "Beginner",
    topic: "If Statements",
    title: "Check a pass mark",
    question:
      "Write an if statement that displays \"Pass\" when a variable called mark is 50 or higher.",
    hint: "Use >= when comparing the mark with 50.",
    solution: `if (mark >= 50) {
    System.out.println("Pass");
}`,
  },
  {
    id: 5,
    language: "Java",
    level: "Intermediate",
    topic: "If / Else",
    title: "Pass or fail",
    question:
      "Write an if/else statement that displays \"Pass\" when mark is 50 or higher and \"Fail\" otherwise.",
    hint: "The second result belongs inside else.",
    solution: `if (mark >= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}`,
  },
  {
    id: 6,
    language: "Java",
    level: "Intermediate",
    topic: "Loops",
    title: "Count from 1 to 5",
    question:
      "Use a for loop to display the numbers 1, 2, 3, 4 and 5.",
    hint: "Start the counter at 1 and continue while it is less than or equal to 5.",
    solution: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
  },
  {
    id: 7,
    language: "Python",
    level: "Beginner",
    topic: "Variables",
    title: "Store a learner's mark",
    question:
      "Create a Python variable called mark and store the value 78 in it.",
    hint: "Python does not require you to declare the data type.",
    solution: `mark = 78`,
  },
  {
    id: 8,
    language: "Python",
    level: "Beginner",
    topic: "Output",
    title: "Display your school",
    question:
      'Write a Python statement that displays the name of your school.',
    hint: "Use the print() function.",
    solution: `print("My School")`,
  },
];

export default function PracticePage() {
  const [language, setLanguage] = useState("All");
  const [level, setLevel] = useState("All");
  const [completed, setCompleted] = useState<number[]>([]);
  const [openHint, setOpenHint] = useState<number | null>(null);
  const [openSolution, setOpenSolution] = useState<number | null>(null);

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const languageMatch =
        language === "All" || exercise.language === language;

      const levelMatch = level === "All" || exercise.level === level;

      return languageMatch && levelMatch;
    });
  }, [language, level]);

  const markCompleted = (id: number) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((exerciseId) => exerciseId !== id)
        : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="font-bold transition hover:text-emerald-400"
          >
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/learn"
              className="hidden text-sm text-slate-400 transition hover:text-emerald-400 sm:block"
            >
              Learn
            </Link>

            <Link
              href="/projects"
              className="hidden text-sm text-slate-400 transition hover:text-emerald-400 sm:block"
            >
              Projects
            </Link>

            <Link
              href="/support"
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Get Help
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-emerald-400"
          >
            ← Back to home
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Coding Practice
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Practise what you learn.
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Work through coding problems, try them yourself, use hints when
              you are stuck and check the solution when you are ready.
            </p>
          </div>

          {/* Progress */}
          <div className="mt-10 max-w-xl rounded-2xl border border-white/10 bg-slate-950 p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Your practice progress</span>

              <span className="font-semibold text-emerald-400">
                {completed.length} / {exercises.length}
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all"
                style={{
                  width: `${(completed.length / exercises.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div>
              <label
                htmlFor="language"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Language
              </label>

              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              >
                <option value="All">All languages</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="level"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Difficulty
              </label>

              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              >
                <option value="All">All levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
              </select>
            </div>

            <div className="sm:ml-auto sm:pt-6">
              <span className="text-sm text-slate-500">
                {filteredExercises.length} exercises
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        {filteredExercises.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">
            <div className="text-3xl">🔎</div>

            <h2 className="mt-4 text-xl font-bold">
              No exercises found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try another language or difficulty level.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredExercises.map((exercise, index) => {
              const isCompleted = completed.includes(exercise.id);
              const hintIsOpen = openHint === exercise.id;
              const solutionIsOpen = openSolution === exercise.id;

              return (
                <article
                  key={exercise.id}
                  className={`rounded-2xl border p-6 transition sm:p-8 ${
                    isCompleted
                      ? "border-emerald-400/30 bg-emerald-400/5"
                      : "border-white/10 bg-slate-900"
                  }`}
                >
                  {/* Exercise top */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                          {exercise.language}
                        </span>

                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-500">
                          {exercise.level}
                        </span>

                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-500">
                          {exercise.topic}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-3">
                        <span className="text-sm font-mono text-slate-600">
                          #{String(index + 1).padStart(2, "0")}
                        </span>

                        <h2 className="text-xl font-bold">
                          {exercise.title}
                        </h2>
                      </div>
                    </div>

                    {isCompleted && (
                      <span className="text-sm font-semibold text-emerald-400">
                        ✓ Completed
                      </span>
                    )}
                  </div>

                  {/* Question */}
                  <div className="mt-7 rounded-xl border border-white/10 bg-slate-950 p-5">
                    <p className="text-sm font-semibold text-slate-300">
                      Your task
                    </p>

                    <p className="mt-3 leading-7 text-slate-300">
                      {exercise.question}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={() =>
                        setOpenHint(hintIsOpen ? null : exercise.id)
                      }
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10"
                    >
                      💡 {hintIsOpen ? "Hide Hint" : "Show Hint"}
                    </button>

                    <button
                      onClick={() =>
                        setOpenSolution(
                          solutionIsOpen ? null : exercise.id
                        )
                      }
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10"
                    >
                      📖 {solutionIsOpen ? "Hide Solution" : "Show Solution"}
                    </button>

                    <button
                      onClick={() => markCompleted(exercise.id)}
                      className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                        isCompleted
                          ? "bg-white/10 text-slate-300 hover:bg-white/15"
                          : "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                      }`}
                    >
                      {isCompleted
                        ? "Mark as incomplete"
                        : "✓ I solved it"}
                    </button>
                  </div>

                  {/* Hint */}
                  {hintIsOpen && (
                    <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                      <div className="text-sm font-semibold text-yellow-300">
                        💡 Hint
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {exercise.hint}
                      </p>
                    </div>
                  )}

                  {/* Solution */}
                  {solutionIsOpen && (
                    <div className="mt-4 overflow-hidden rounded-xl border border-emerald-400/20 bg-slate-950">
                      <div className="border-b border-white/10 px-5 py-3 text-sm font-semibold text-emerald-300">
                        ✓ Example solution
                      </div>

                      <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-emerald-300">
                        <code>{exercise.solution}</code>
                      </pre>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Help CTA */}
      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Stuck?
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Don't stay stuck for hours.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Use the hints and solutions first. If you still cannot figure
              out the problem, you can ask for coding help or book a
              one-on-one consultation.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/coding-help"
                className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Get Coding Help
              </Link>

              <Link
                href="/support"
                className="rounded-xl bg-emerald-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Book 1-on-1 Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <span>CodeSupport SA</span>
          <span>Learn. Practise. Build. Get Help.</span>
        </div>
      </footer>
    </main>
  );
}