"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCompletedTopics } from "@/lib/progress";

const topics = [
  {
    number: "01",
    slug: "computational-thinking",
    title: "What is Computational Thinking?",
    description: "The core mindset behind solving problems like a programmer.",
    level: "Beginner",
    available: true,
  },
  {
    number: "02",
    slug: "decomposition",
    title: "Breaking Down Problems",
    description: "Split a big, overwhelming problem into small, manageable pieces.",
    level: "Beginner",
    available: true,
  },
  {
    number: "03",
    slug: "pattern-recognition",
    title: "Pattern Recognition",
    description: "Spot similarities between problems, so you don't solve everything from scratch.",
    level: "Beginner",
    available: true,
  },
  {
    number: "04",
    slug: "pseudocode",
    title: "Writing Pseudocode",
    description: "Plan your logic in plain language before writing any real code.",
    level: "Beginner",
    available: true,
  },
  {
    number: "05",
    slug: "flowcharts",
    title: "Flowcharts",
    description: "Visualize the steps and decisions in a process.",
    level: "Beginner",
    available: true,
  },
  {
    number: "06",
    slug: "algorithms",
    title: "Algorithms & Efficiency",
    description: "What an algorithm actually is, and why some solutions are better than others.",
    level: "Intermediate",
    available: true,
  },
  {
    number: "07",
    slug: "debugging",
    title: "Debugging as a Skill",
    description: "A systematic way to find and fix what's going wrong.",
    level: "Intermediate",
    available: true,
  },
  {
    number: "08",
    slug: "putting-it-together",
    title: "Putting It All Together",
    description: "Solve a real problem from scratch, using everything from this course.",
    level: "Intermediate",
    available: true,
  },
];

export default function LogicPage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  useEffect(() => {
    getCompletedTopics("logic").then(setCompletedSlugs);
  }, []);

  const completedCount = topics.filter((t) =>
    completedSlugs.includes(t.slug)
  ).length;

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
                  🧩
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-400">
                    Foundational Skills
                  </p>

                  <h1 className="text-4xl font-bold sm:text-5xl">
                    Problem Solving & Logic
                  </h1>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Learn to think like a programmer — no syntax, no
                language, just the reasoning skills every good
                developer relies on.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 px-5 py-4">
              <div className="text-sm text-slate-500">Course progress</div>
              <div className="mt-1 text-2xl font-bold">
                {completedCount} / {topics.length}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {completedCount === topics.length
                  ? "All topics complete! 🎉"
                  : "Complete each quiz to track progress"}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 bg-emerald-400/5">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-8">
          <p className="text-sm leading-6 text-emerald-200">
            💡 <strong>New to coding?</strong> This is a great place to
            start — before picking a language, these thinking skills
            will make learning any of them much easier.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Problem Solving Fundamentals
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Work through the topics
          </h2>

          <p className="mt-2 text-slate-400">
            No prior coding experience needed — start here.
          </p>
        </div>

        <div className="space-y-4">
          {topics.map((topic) => (
            <Link
              key={topic.number}
              href={topic.available ? `/learn/logic/${topic.slug}` : "#"}
              className={`group flex flex-col gap-5 rounded-2xl border p-6 transition sm:flex-row sm:items-center ${
                topic.available
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
                {completedSlugs.includes(topic.slug) ? (
                  <span className="text-emerald-400">✓ Completed</span>
                ) : topic.available ? (
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

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8">
            <p className="text-sm font-semibold text-emerald-400">
              Ready to apply it?
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Pick a language and start building
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Once you've got the thinking skills down, put them into
              practice with a real programming language.
            </p>

            <Link
              href="/learn"
              className="mt-6 inline-block rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Languages →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}