"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Project = {
  id: string;
  level: string;
  language: string;
  title: string;
  description: string;
  skills: string[];
  goal: string;
  requirements: string[];
  steps: string[];
  hint: string;
  starter_code: string;
  solution: string;
  extensions: string[];
  sort_order: number;
};

const emptyForm = {
  level: "Beginner",
  language: "Java",
  title: "",
  description: "",
  skills: "",
  goal: "",
  requirements: "",
  steps: "",
  hint: "",
  starter_code: "",
  solution: "",
  extensions: "",
  sort_order: 0,
};

// The form keeps array fields as one-line-per-item text areas,
// and we split/join them to/from real arrays only when saving/loading.
function linesToArray(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

function arrayToLines(arr: string[]): string {
  return arr.join("\n");
}

export default function AdminProjectsPage() {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    checkUserAndLoad();
  }, []);

  const checkUserAndLoad = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/admin/login");
      return;
    }

    await loadProjects();
  };

  const loadProjects = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error(error);
      setError("We could not load projects.");
      setLoading(false);
      return;
    }

    setProjects(data || []);
    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const updateField = (field: keyof typeof form, value: string | number) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const startCreate = () => {
    setEditingId(null);
    setForm({ ...emptyForm, sort_order: projects.length + 1 });
    setShowForm(true);
  };

  const startEdit = (project: Project) => {
    setEditingId(project.id);
    setForm({
      level: project.level,
      language: project.language,
      title: project.title,
      description: project.description,
      skills: arrayToLines(project.skills),
      goal: project.goal,
      requirements: arrayToLines(project.requirements),
      steps: arrayToLines(project.steps),
      hint: project.hint,
      starter_code: project.starter_code,
      solution: project.solution,
      extensions: arrayToLines(project.extensions),
      sort_order: project.sort_order,
    });
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveProject = async () => {
    if (!form.title || !form.description || !form.goal) {
      alert("Please fill in at least Title, Description and Goal.");
      return;
    }

    setSaving(true);

    const payload = {
      level: form.level,
      language: form.language,
      title: form.title,
      description: form.description,
      skills: linesToArray(form.skills),
      goal: form.goal,
      requirements: linesToArray(form.requirements),
      steps: linesToArray(form.steps),
      hint: form.hint,
      starter_code: form.starter_code,
      solution: form.solution,
      extensions: linesToArray(form.extensions),
      sort_order: form.sort_order,
    };

    if (editingId) {
      const { error } = await supabase
        .from("projects")
        .update(payload)
        .eq("id", editingId);

      if (error) {
        console.error(error);
        alert("Could not save changes.");
        setSaving(false);
        return;
      }
    } else {
      const { error } = await supabase.from("projects").insert(payload);

      if (error) {
        console.error(error);
        alert("Could not create project.");
        setSaving(false);
        return;
      }
    }

    setSaving(false);
    cancelForm();
    await loadProjects();
  };

  const deleteProject = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      console.error(error);
      alert("Could not delete project.");
      return;
    }

    await loadProjects();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/admin" className="font-bold">
            CodeSupport <span className="text-emerald-400">SA</span>
            <span className="ml-2 text-xs font-normal text-slate-600">
              ADMIN
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-sm text-slate-400 hover:text-white"
            >
              Coding Help
            </Link>
            <Link
              href="/admin/consultations"
              className="text-sm text-slate-400 hover:text-white"
            >
              Consultations
            </Link>
            <Link
              href="/admin/exercises"
              className="text-sm text-slate-400 hover:text-white"
            >
              Exercises
            </Link>

            <button
              onClick={logout}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Admin Dashboard
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>
              <p className="mt-3 text-sm text-slate-500">
                {projects.length} projects live on /projects right now.
              </p>
            </div>

            <button
              onClick={startCreate}
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
            >
              + Add Project
            </button>
          </div>
        </div>
      </header>

      {showForm && (
        <section className="mx-auto max-w-4xl px-6 pt-8 lg:px-8">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold">
              {editingId ? "Edit Project" : "New Project"}
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Language
                </label>
                <select
                  value={form.language}
                  onChange={(e) => updateField("language", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                >
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="Tailwind">Tailwind CSS</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="C++">C++</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Level
                </label>
                <select
                  value={form.level}
                  onChange={(e) => updateField("level", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Challenge">Challenge</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Title
                </label>
                <input
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Order
                </label>
                <input
                  type="number"
                  value={form.sort_order}
                  onChange={(e) =>
                    updateField("sort_order", Number(e.target.value))
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                rows={2}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Skills (one per line)
              </label>
              <textarea
                value={form.skills}
                onChange={(e) => updateField("skills", e.target.value)}
                rows={4}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Goal
              </label>
              <textarea
                value={form.goal}
                onChange={(e) => updateField("goal", e.target.value)}
                rows={2}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Requirements (one per line)
              </label>
              <textarea
                value={form.requirements}
                onChange={(e) => updateField("requirements", e.target.value)}
                rows={5}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Steps (one per line)
              </label>
              <textarea
                value={form.steps}
                onChange={(e) => updateField("steps", e.target.value)}
                rows={5}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Hint
              </label>
              <textarea
                value={form.hint}
                onChange={(e) => updateField("hint", e.target.value)}
                rows={2}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Starter Code
              </label>
              <textarea
                value={form.starter_code}
                onChange={(e) => updateField("starter_code", e.target.value)}
                rows={8}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-mono text-sm leading-6 text-emerald-300 outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Solution
              </label>
              <textarea
                value={form.solution}
                onChange={(e) => updateField("solution", e.target.value)}
                rows={10}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-mono text-sm leading-6 text-emerald-300 outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Extensions (one per line)
              </label>
              <textarea
                value={form.extensions}
                onChange={(e) => updateField("extensions", e.target.value)}
                rows={4}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={saveProject}
                disabled={saving}
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Save Changes"
                  : "Create Project"}
              </button>

              <button
                onClick={cancelForm}
                className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        {loading && (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">
            <p className="text-sm text-slate-500">Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-slate-900 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-600">
                      #{project.sort_order}
                    </span>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
                      {project.language}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">
                      {project.level}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold">{project.title}</p>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(project)}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProject(project.id, project.title)}
                    className="rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-2 text-sm text-red-300 hover:bg-red-400/10"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}