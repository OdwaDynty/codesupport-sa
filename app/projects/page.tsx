"use client";

import Link from "next/link";
import AuthNavButton from "@/components/AuthNavButton";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import MobileMenu from "@/components/MobileMenu";

type Project = {
  id: string;
  level: "Beginner" | "Intermediate" | "Challenge";
  language: "Java" | "Python" | "Tailwind" | "TypeScript" | "JavaScript" | "C++";
  title: string;
  description: string;
  skills: string[];
  goal: string;
  requirements: string[];
  steps: string[];
  hint: string;
  starterCode: string;
  solution: string;
  extensions: string[];
};

/* removed: the old hardcoded const projects: Project[] = [ ... ]; array
   that used to sit here — data now comes from Supabase instead. */
const levels = ["All", "Beginner", "Intermediate", "Challenge"];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [level, setLevel] = useState("All");
  const [language, setLanguage] = useState("All");
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<
    "overview" | "steps" | "starter" | "solution"
  >("overview");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (!error && data) {
      const mapped: Project[] = data.map((row) => ({
        id: row.id,
        level: row.level,
        language: row.language,
        title: row.title,
        description: row.description,
        skills: row.skills,
        goal: row.goal,
        requirements: row.requirements,
        steps: row.steps,
        hint: row.hint,
        starterCode: row.starter_code,
        solution: row.solution,
        extensions: row.extensions,
      }));
      setProjects(mapped);
    }

    setLoadingProjects(false);
  };

  const filteredProjects = projects.filter((project) => {
    const levelMatch =
      level === "All" || project.level === level;

    const languageMatch =
      language === "All" || project.language === language;

    return levelMatch && languageMatch;
  });

  const toggleCompleted = (id: string) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((projectId) => projectId !== id)
        : [...current, id]
    );
  };

  const selectedProject = projects.find(
    (project) => project.id === openProject
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="relative border-b border-white/10 bg-slate-950">
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
              href="/practice"
              className="hidden text-sm text-slate-400 transition hover:text-emerald-400 sm:block"
            >
              Practice
            </Link>

            <div className="hidden sm:block">
              <AuthNavButton />
            </div>

            <MobileMenu />

            <Link
              href="/support"
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Get Help
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
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
              Build Something
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Exercises teach you individual skills. Projects show you how to
              put those skills together to build something useful.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3">
              <span className="text-2xl font-bold">
                {projects.length}
              </span>

              <span className="ml-2 text-sm text-slate-500">
                projects
              </span>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3">
              <span className="text-2xl font-bold">
                {completed.length}
              </span>

              <span className="ml-2 text-sm text-slate-500">
                completed
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div>
              <label
                htmlFor="project-level"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Difficulty
              </label>

              <select
                id="project-level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              >
                {levels.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All levels" : item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="project-language"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Language
              </label>

              <select
                id="project-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              >
                <option value="All">All languages</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Tailwind">Tailwind CSS</option>
                <option value="TypeScript">TypeScript</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C++">C++</option>
              </select>
            </div>

            <div className="sm:ml-auto">
              <span className="text-sm text-slate-500">
                Showing {filteredProjects.length} projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const isCompleted = completed.includes(project.id);

            return (
              <article
                key={project.id}
                className={`rounded-2xl border p-6 transition ${
                  isCompleted
                    ? "border-emerald-400/30 bg-emerald-400/5"
                    : "border-white/10 bg-slate-900 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      {project.language}
                    </span>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {project.level}
                    </span>
                  </div>

                  {isCompleted && (
                    <span className="text-xs font-semibold text-emerald-400">
                      ✓ Done
                    </span>
                  )}
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-950 px-3 py-1.5 text-xs text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-3">
                  <button
                    onClick={() => {
                      setOpenProject(project.id);
                      setActiveTab("overview");
                    }}
                    className="flex-1 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    View Project
                  </button>

                  <button
                    onClick={() => toggleCompleted(project.id)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isCompleted
                        ? "border border-white/10 bg-white/5 text-slate-300"
                        : "border border-white/10 bg-slate-950 text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {isCompleted ? "Undo" : "✓"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Project Viewer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 backdrop-blur-sm">
          <div className="min-h-screen px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-5xl">
              {/* Modal header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      {selectedProject.language}
                    </span>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {selectedProject.level}
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    {selectedProject.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {selectedProject.description}
                  </p>
                </div>

                <button
                  onClick={() => setOpenProject(null)}
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
                >
                  Close ✕
                </button>
              </div>

              {/* Tabs */}
              <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-3">
                {[
                  ["overview", "Overview"],
                  ["steps", "Steps"],
                  ["starter", "Starter Code"],
                  ["solution", "Solution"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() =>
                      setActiveTab(
                        value as
                          | "overview"
                          | "steps"
                          | "starter"
                          | "solution"
                      )
                    }
                    className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                      activeTab === value
                        ? "bg-emerald-400 text-slate-950"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="mt-8">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                        🎯 Project Goal
                      </p>

                      <p className="mt-3 leading-7 text-slate-300">
                        {selectedProject.goal}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                      <h3 className="text-xl font-bold">
                        Requirements
                      </h3>

                      <ul className="mt-5 space-y-3">
                        {selectedProject.requirements.map(
                          (requirement, index) => (
                            <li
                              key={requirement}
                              className="flex gap-3 text-sm leading-7 text-slate-400"
                            >
                              <span className="font-mono text-emerald-400">
                                {index + 1}.
                              </span>

                              <span>{requirement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                      <h3 className="text-xl font-bold">
                        Skills you will practise
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {selectedProject.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-xl bg-slate-950 px-4 py-2 text-sm text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "steps" && (
                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
                    <p className="text-sm text-slate-500">
                      Don't copy the solution immediately. Try each step
                      yourself.
                    </p>

                    <div className="mt-8 space-y-5">
                      {selectedProject.steps.map((step, index) => (
                        <div
                          key={step}
                          className="flex gap-5 rounded-xl border border-white/10 bg-slate-950 p-5"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-slate-950">
                            {index + 1}
                          </div>

                          <p className="text-sm leading-7 text-slate-300">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                      <p className="text-sm font-semibold text-yellow-300">
                        💡 Hint
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {selectedProject.hint}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "starter" && (
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                      <span className="text-sm font-semibold">
                        Starter Code
                      </span>

                      <span className="text-xs text-slate-500">
                        Try completing the missing parts
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-emerald-300">
                      <code>{selectedProject.starterCode}</code>
                    </pre>
                  </div>
                )}

                {activeTab === "solution" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                      <p className="text-sm font-semibold text-yellow-300">
                        ⚠️ Try the project first
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        The solution is here for checking your work or helping
                        you understand where you went wrong.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900">
                      <div className="border-b border-white/10 px-5 py-4">
                        <span className="text-sm font-semibold text-emerald-300">
                          Example Solution
                        </span>
                      </div>

                      <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-emerald-300">
                        <code>{selectedProject.solution}</code>
                      </pre>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                      <h3 className="text-xl font-bold">
                        🚀 Extension Challenges
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Finished already? Try improving your program.
                      </p>

                      <ul className="mt-5 space-y-3">
                        {selectedProject.extensions.map(
                          (extension, index) => (
                            <li
                              key={extension}
                              className="flex gap-3 text-sm leading-7 text-slate-400"
                            >
                              <span className="text-emerald-400">
                                {index + 1}.
                              </span>

                              <span>{extension}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Completion */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold">
                      Finished this project?
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Mark it as completed to keep track of your progress.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      toggleCompleted(selectedProject.id)
                    }
                    className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      completed.includes(selectedProject.id)
                        ? "bg-white/10 text-slate-300 hover:bg-white/15"
                        : "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                    }`}
                  >
                    {completed.includes(selectedProject.id)
                      ? "✓ Project Completed"
                      : "Mark Project Complete"}
                  </button>
                </div>
              </div>

              {/* Help */}
              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
                <h3 className="font-bold">
                  Stuck on the project?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Try the steps and hint first. If you still need help,
                  CodeSupport SA can help you work through the problem.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between">
            <span>CodeSupport SA</span>
            <span>Learn. Practise. Build. Get Help.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
