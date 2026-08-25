import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Introduction to Python",
    description:
      "Understand what Python is and write your first simple Python program.",
    level: "Beginner",
  },
  {
    number: "02",
    title: "Variables",
    description:
      "Learn how Python programs store and work with information.",
    level: "Beginner",
  },
  {
    number: "03",
    title: "Data Types",
    description:
      "Work with numbers, text, boolean values and other basic data types.",
    level: "Beginner",
  },
  {
    number: "04",
    title: "Input and Output",
    description:
      "Learn how to receive information from users and display results.",
    level: "Beginner",
  },
  {
    number: "05",
    title: "Operators",
    description:
      "Use arithmetic, comparison and logical operators in your programs.",
    level: "Beginner",
  },
  {
    number: "06",
    title: "If Statements",
    description:
      "Teach your Python programs how to make decisions.",
    level: "Beginner",
  },
  {
    number: "07",
    title: "If / Else",
    description:
      "Create programs that respond differently to different conditions.",
    level: "Beginner",
  },
  {
    number: "08",
    title: "Nested Conditions",
    description:
      "Use one decision inside another decision.",
    level: "Intermediate",
  },
  {
    number: "09",
    title: "For Loops",
    description:
      "Repeat instructions using Python's for loop.",
    level: "Intermediate",
  },
  {
    number: "10",
    title: "While Loops",
    description:
      "Repeat instructions while a condition remains true.",
    level: "Intermediate",
  },
];

export default function PythonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Link
            href="/learn"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Back to Learn
          </Link>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                  🐍
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-400">
                    Programming Language
                  </p>

                  <h1 className="text-4xl font-bold sm:text-5xl">Python</h1>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Learn Python from the ground up with simple explanations,
                examples and practical programming exercises.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4">
              <div className="text-sm text-slate-500">Course progress</div>
              <div className="mt-1 text-2xl font-bold">0 / 10</div>
              <div className="mt-2 text-xs text-slate-500">
                Progress tracking coming later
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Python Fundamentals
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Work through the topics
          </h2>

          <p className="mt-2 text-slate-400">
            Start at the beginning if Python is new to you.
          </p>
        </div>

        <div className="space-y-4">
          {topics.map((topic) => (
            <div
              key={topic.number}
              className="flex flex-col gap-5 rounded-2xl border border-white/5 bg-slate-900/50 p-6 sm:flex-row sm:items-center"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 font-mono text-sm text-emerald-400">
                {topic.number}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold">{topic.title}</h3>

                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-500">
                    {topic.level}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {topic.description}
                </p>
              </div>

              <div className="text-sm text-slate-500">Coming soon</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8">
            <p className="text-sm font-semibold text-emerald-400">
              Coming next
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Python exercises and projects
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Practice what you learn with coding challenges and practical
              Python projects.
            </p>

            <Link
              href="/practice"
              className="mt-6 inline-block rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Practice →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}