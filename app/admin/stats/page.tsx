"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Stats = {
  totalStudents: number;
  newStudentsThisWeek: number;
  totalCodingHelp: number;
  codingHelpThisWeek: number;
  totalConsultations: number;
  paidConsultations: number;
  consultationsThisWeek: number;
  totalLessonsCompleted: number;
  uniqueLearners: number;
  totalExercisesCompleted: number;
};

export default function AdminStatsPage() {
  const router = useRouter();

  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

    await loadStats();
  };

  const loadStats = async () => {
    setLoading(true);
    setError("");

    const {
      data: { session },
    } = await supabase.auth.getSession();

    try {
      const response = await fetch("/api/admin/stats", {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Could not load stats.");
        setLoading(false);
        return;
      }

      setStats(data);
    } catch (err) {
      console.error(err);
      setError("Could not load stats.");
    }

    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
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
            <Link href="/admin" className="text-sm text-slate-400 hover:text-white">
              Coding Help
            </Link>
            <Link href="/admin/consultations" className="text-sm text-slate-400 hover:text-white">
              Consultations
            </Link>
            <Link href="/admin/exercises" className="text-sm text-slate-400 hover:text-white">
              Exercises
            </Link>
            <Link href="/admin/projects" className="text-sm text-slate-400 hover:text-white">
              Projects
            </Link>
            <Link href="/admin/slots" className="text-sm text-slate-400 hover:text-white">
              Slots
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
            <h1 className="text-3xl font-bold sm:text-4xl">Site Statistics</h1>
            <button
              onClick={loadStats}
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5"
            >
              ↻ Refresh
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {loading && (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">
            <p className="text-sm text-slate-500">Loading stats...</p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {!loading && !error && stats && (
          <div className="space-y-10">
            {/* Students */}
            <div>
              <h2 className="text-lg font-semibold text-slate-300">
                Students
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-500">Total accounts</p>
                  <p className="mt-2 text-3xl font-bold">{stats.totalStudents}</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                  <p className="text-sm text-slate-500">New this week</p>
                  <p className="mt-2 text-3xl font-bold text-emerald-300">
                    {stats.newStudentsThisWeek}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-500">
                    Learners with lesson progress
                  </p>
                  <p className="mt-2 text-3xl font-bold">{stats.uniqueLearners}</p>
                </div>
              </div>
            </div>

            {/* Coding Help */}
            <div>
              <h2 className="text-lg font-semibold text-slate-300">
                Coding Help Requests
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-500">Total requests</p>
                  <p className="mt-2 text-3xl font-bold">{stats.totalCodingHelp}</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                  <p className="text-sm text-slate-500">This week</p>
                  <p className="mt-2 text-3xl font-bold text-emerald-300">
                    {stats.codingHelpThisWeek}
                  </p>
                </div>
              </div>
            </div>

            {/* Consultations */}
            <div>
              <h2 className="text-lg font-semibold text-slate-300">
                Consultations
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-500">Total requests</p>
                  <p className="mt-2 text-3xl font-bold">{stats.totalConsultations}</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                  <p className="text-sm text-slate-500">Paid</p>
                  <p className="mt-2 text-3xl font-bold text-emerald-300">
                    {stats.paidConsultations}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-500">This week</p>
                  <p className="mt-2 text-3xl font-bold">
                    {stats.consultationsThisWeek}
                  </p>
                </div>
              </div>
            </div>

            {/* Learning activity */}
            <div>
              <h2 className="text-lg font-semibold text-slate-300">
                Learning Activity
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-500">Lessons completed</p>
                  <p className="mt-2 text-3xl font-bold">
                    {stats.totalLessonsCompleted}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-500">
                    Practice exercises completed
                  </p>
                  <p className="mt-2 text-3xl font-bold">
                    {stats.totalExercisesCompleted}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}