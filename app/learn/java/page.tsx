import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Introduction to Java",
    description:
      "Understand what Java is, how Java programs work and what you need to write your first program.",
    level: "Beginner",
  },
  {
    number: "02",
    title: "Variables",
    description:
      "Learn how programs store information using variables.",
    level: "Beginner",
  },
  {
    number: "03",
    title: "Data Types",
    description:
      "Understand integers, decimals, characters, text and boolean values.",
    level: "Beginner",
  },
  {
    number: "04",
    title: "Input and Output",
    description:
      "Learn how to display information and receive input from the user.",
    level: "Beginner",
  },
  {
    number: "05",
    title: "Operators",
    description:
      "Work with arithmetic, comparison and logical operators.",
    level: "Beginner",
  },
  {
    number: "06",
    title: "If Statements",
    description:
      "Teach your program to make decisions based on conditions.",
    level: "Beginner",
  },
  {
    number: "07",
    title: "If / Else",
    description:
      "Create programs that can choose between different outcomes.",
    level: "Beginner",
  },
  {
    number: "08",
    title: "Nested If Statements",
    description:
      "Learn how to place decisions inside other decisions.",
    level: "Intermediate",
  },
  {
    number: "09",
    title: "For Loops",
    description:
      "Repeat instructions using a for loop.",
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

export default function JavaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
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
                  ☕
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-400">
                    Programming Language
                  </p>

                  <h1 className="text-4xl font-bold sm:text-5xl">Java</h1>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Start with the fundamentals of Java and gradually build your
                programming skills through examples, exercises and projects.
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

      {/* Topics */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Java Fundamentals
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Work through the topics
          </h2>

          <p className="mt-2 text-slate-400">
            Start at the beginning if you are new to programming.
          </p>
        </div>

        <div className="space-y-4">
          {topics.map((topic, index) => (
            <Link
              key={topic.number}
              href={
                index === 1
                  ? "/learn/java/variables"
                  : index === 5
                    ? "/learn/java/if-statements"
                    : "#"
              }
              className={`group flex flex-col gap-5 rounded-2xl border p-6 transition sm:flex-row sm:items-center ${
                index === 1 || index === 5
                  ? "border-white/10 bg-slate-900 hover:border-emerald-400/40"
                  : "cursor-default border-white/5 bg-slate-900/50"
              }`}
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

              <div className="text-sm font-medium text-slate-500">
                {index === 1 || index === 5 ? (
                  <span className="text-emerald-400 group-hover:text-emerald-300">
                    Start →
                  </span>
                ) : (
                  "Coming soon"
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Project CTA */}
      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8">
            <p className="text-sm font-semibold text-emerald-400">
              Ready to build?
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Put your Java skills into practice.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Once you have worked through the fundamentals, try a practical
              project and see what you can build.
            </p>

            <Link
              href="/projects"
              className="mt-6 inline-block rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Projects →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}