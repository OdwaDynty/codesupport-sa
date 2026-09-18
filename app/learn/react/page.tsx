"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCompletedTopics } from "@/lib/progress";

const topics = [
  {
    number: "01",
    slug: "introduction",
    title: "Introduction to React & JSX",
    description: "What React is, and the JSX syntax that mixes HTML with JavaScript.",
    level: "Beginner",
    available: true,
  },
  {
    number: "02",
    slug: "components-props",
    title: "Components & Props",
    description: "Build reusable pieces of UI, and pass data into them.",
    level: "Beginner",
    available: false,
  },
  {
    number: "03",
    slug: "state",
    title: "State with useState",
    description: "Give a component memory that can change over time.",
    level: "Beginner",
    available: false,
  },
  {
    number: "04",
    slug: "events",
    title: "Handling Events",
    description: "Respond to clicks, typing, and other user interactions.",
    level: "Beginner",
    available: false,
  },
  {
    number: "05",
    slug: "lists-conditional-rendering",
    title: "Rendering Lists & Conditional Rendering",
    description: "Display arrays of data, and show or hide content based on conditions.",
    level: "Intermediate",
    available: false,
  },
  {
    number: "06",
    slug: "use-effect",
    title: "useEffect & Side Effects",
    description: "Run code in response to a component rendering or updating.",
    level: "Intermediate",
    available: false,
  },
  {
    number: "07",
    slug: "forms",
    title: "Forms in React",
    description: "Capture and manage user input with controlled form elements.",
    level: "Intermediate",
    available: false,
  },
  {
    number: "08",
    slug: "building-an-app",
    title: "Building a Small App",
    description: "Combine everything you've learned into one real, working app.",
    level: "Intermediate",
    available: false,
  },
];

export default function ReactCoursePage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  useEffect(() => {
    getCompletedTopics("react").then(setCompletedSlugs);
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
                  ⚛️
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-400">
                    Frontend Library
                  </p>

                  <h1 className="text-4xl font-bold sm:text-5xl">
                    React
                  </h1>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Learn to build interactive user interfaces with React —
                the same library CodeSupport SA itself is built with.
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
            💡 <strong>Before starting:</strong> this course assumes you
            already know JavaScript fundamentals — if you haven't done
            that course yet, start there first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            React Fundamentals
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Work through the topics
          </h2>

          <p className="mt-2 text-slate-400">
            Some JavaScript knowledge is assumed — start with the
            JavaScript course first if you're new to it.
          </p>
        </div>

        <div className="space-y-4">
          {topics.map((topic) => (
            <Link
              key={topic.number}
              href={topic.available ? `/learn/react/${topic.slug}` : "#"}
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
              Coming next
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Practice and projects
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Practise what you learn with coding challenges and
              practical React projects.
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