"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCompletedTopics } from "@/lib/progress";

const topics = [
  {
    number: "01",
    slug: "introduction",
    title: "Introduction to Tailwind CSS",
    description: "What Tailwind is, why it's different, and your first styled element.",
    level: "Beginner",
    available: true,
  },
  {
    number: "02",
    slug: "colors-backgrounds",
    title: "Colors & Backgrounds",
    description: "Style text color and background color using utility classes.",
    level: "Beginner",
    available: true,
  },
  {
    number: "03",
    slug: "spacing-sizing",
    title: "Spacing & Sizing",
    description: "Control padding, margin, width and height with simple utilities.",
    level: "Beginner",
    available: true,
  },
  {
    number: "04",
    slug: "typography",
    title: "Typography",
    description: "Control font size, weight, alignment and line height.",
    level: "Beginner",
    available: true,
  },
  {
    number: "05",
    slug: "borders-shadows",
    title: "Borders, Rounded Corners & Shadows",
    description: "Add borders, round corners and give elements depth with shadows.",
    level: "Beginner",
    available: false,
  },
  {
    number: "06",
    slug: "flexbox",
    title: "Flexbox Basics",
    description: "Arrange elements in a row or column using flex utilities.",
    level: "Intermediate",
    available: false,
  },
  {
    number: "07",
    slug: "responsive-design",
    title: "Responsive Design",
    description: "Make layouts adapt to different screen sizes using breakpoint prefixes.",
    level: "Intermediate",
    available: false,
  },
  {
    number: "08",
    slug: "hover-states",
    title: "Hover, Focus & Transitions",
    description: "Style elements differently on hover and focus, with smooth transitions.",
    level: "Intermediate",
    available: false,
  },
  {
    number: "09",
    slug: "building-a-card",
    title: "Building a Simple Card",
    description: "Combine everything you've learned to build a real card component.",
    level: "Intermediate",
    available: false,
  },
];

export default function TailwindPage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  useEffect(() => {
    getCompletedTopics("tailwind").then(setCompletedSlugs);
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
                  🎨
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-400">
                    Styling Framework
                  </p>

                  <h1 className="text-4xl font-bold sm:text-5xl">
                    Tailwind CSS
                  </h1>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Learn to style real web pages fast using Tailwind's
                utility-first approach — no separate CSS files needed.
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

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Tailwind Fundamentals
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Work through the topics
          </h2>

          <p className="mt-2 text-slate-400">
            Some basic HTML knowledge helps, but isn't required to get
            started.
          </p>
        </div>

        <div className="space-y-4">
          {topics.map((topic) => (
            <Link
              key={topic.number}
              href={topic.available ? `/learn/tailwind/${topic.slug}` : "#"}
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
              Practise what you learn with styling challenges and
              practical projects.
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