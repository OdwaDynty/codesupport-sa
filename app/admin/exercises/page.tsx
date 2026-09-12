"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Exercise = {
  id: string;
  language: string;
  level: string;
  topic: string;
  title: string;
  question: string;
  hint: string;
  solution: string;
  sort_order: number;
};

const emptyForm = {
  language: "Java",
  level: "Beginner",
  topic: "",
  title: "",
  question: "",
  hint: "",
  solution: "",
  sort_order: 0,
};

export default function AdminExercisesPage() {
  const router = useRouter();

  const [exercises, setExercises] = useState<Exercise[]>([]);
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

    await loadExercises();
  };

  const loadExercises = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("practice_exercises")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error(error);
      setError("We could not load exercises.");
      setLoading(false);
      return;
    }

    setExercises(data || []);
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
    setForm({ ...emptyForm, sort_order: exercises.length + 1 });
    setShowForm(true);
  };

  const startEdit = (exercise: Exercise) => {
    setEditingId(exercise.id);
    setForm({
      language: exercise.language,
      level: exercise.level,
      topic: exercise.topic,
      title: exercise.title,
      question: exercise.question,
      hint: exercise.hint,
      solution: exercise.solution,
      sort_order: exercise.sort_order,
    });
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveExercise = async () => {
    if (!form.topic || !form.title || !form.question || !form.hint || !form.solution) {
      alert("Please fill in all fields.");
      return;
    }

    setSaving(true);

    if (editingId) {
      const { error } = await supabase
        .from("practice_exercises")
        .update(form)
        .eq("id", editingId);

      if (error) {
        console.error(error);
        alert("Could not save changes.");
        setSaving(false);
        return;
      }
    } else {
      const { error } = await supabase.from("practice_exercises").insert(form);

      if (error) {
        console.error(error);
        alert("Could not create exercise.");
        setSaving(false);
        return;
      }
    }

    setSaving(false);
    cancelForm();
    await loadExercises();
  };

  const deleteExercise = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    const { error } = await supabase
      .from("practice_exercises")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Could not delete exercise.");
      return;
    }

    await loadExercises();
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
              <h1 className="text-3xl font-bold sm:text-4xl">
                Practice Exercises
              </h1>
              <p className="mt-3 text-sm text-slate-500">
                {exercises.length} exercises live on /practice right now.
              </p>
            </div>

            <button
              onClick={startCreate}
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
            >
              + Add Exercise
            </button>
          </div>
        </div>
      </header>

      {/* Create/Edit form */}
      {showForm && (
        <section className="mx-auto max-w-4xl px-6 pt-8 lg:px-8">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold">
              {editingId ? "Edit Exercise" : "New Exercise"}
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
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Topic
                </label>
                <input
                  value={form.topic}
                  onChange={(e) => updateField("topic", e.target.value)}
                  placeholder="e.g. Arrays"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Order (position in the list)
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
                Title
              </label>
              <input
                value={form.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="e.g. Sum an array"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Question
              </label>
              <textarea
                value={form.question}
                onChange={(e) => updateField("question", e.target.value)}
                rows={3}
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
                Solution (code)
              </label>
              <textarea
                value={form.solution}
                onChange={(e) => updateField("solution", e.target.value)}
                rows={6}
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 font-mono text-sm leading-6 text-emerald-300 outline-none focus:border-emerald-400"
              />
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={saveExercise}
                disabled={saving}
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving..." : editingId ? "Save Changes" : "Create Exercise"}
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

      {/* List */}
      <section className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        {loading && (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">
            <p className="text-sm text-slate-500">Loading exercises...</p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-slate-900 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-600">
                      #{exercise.sort_order}
                    </span>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
                      {exercise.language}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">
                      {exercise.level}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">
                      {exercise.topic}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold">{exercise.title}</p>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(exercise)}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteExercise(exercise.id, exercise.title)}
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