"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Request = {
  id: string;
  student_name: string;
  email: string;
  grade: string;
  language: string;
  topic: string;
  problem: string;
  code: string | null;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    checkUserAndLoadRequests();
  }, []);

  const checkUserAndLoadRequests = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/admin/login");
      return;
    }

    await loadRequests();
  };

  const loadRequests = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("coding_help_requests")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      setError(
        "We could not load the coding help requests."
      );
      setLoading(false);
      return;
    }

    setRequests(data || []);
    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    const { error } = await supabase
      .from("coding_help_requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Could not update the request.");
      return;
    }

    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );
  };

  const newCount = requests.filter(
    (request) => request.status === "New"
  ).length;

  const reviewingCount = requests.filter(
    (request) => request.status === "Reviewing"
  ).length;

  const paidCount = requests.filter(
    (request) => request.status === "Paid Support"
  ).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <Link
            href="/admin"
            className="font-bold"
          >
            CodeSupport{" "}
            <span className="text-emerald-400">
              SA
            </span>
            <span className="ml-2 text-xs font-normal text-slate-600">
              ADMIN
            </span>
          </Link>

          <button
            onClick={logout}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Admin Dashboard
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Coding Help Requests
              </h1>

              <p className="mt-3 text-sm text-slate-500">
                Review and manage student requests.
              </p>
            </div>

            <button
              onClick={loadRequests}
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5"
            >
              ↻ Refresh
            </button>
          </div>

        </div>
      </header>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-500">
              Total Requests
            </p>

            <p className="mt-2 text-3xl font-bold">
              {requests.length}
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm text-slate-500">
              New
            </p>

            <p className="mt-2 text-3xl font-bold text-yellow-300">
              {newCount}
            </p>
          </div>

          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5">
            <p className="text-sm text-slate-500">
              Reviewing
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-300">
              {reviewingCount}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <p className="text-sm text-slate-500">
              Paid Support
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-300">
              {paidCount}
            </p>
          </div>

        </div>
      </section>

      {/* Requests */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        {loading && (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">
            <p className="text-sm text-slate-500">
              Loading requests...
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-sm text-red-300">
              {error}
            </p>
          </div>
        )}

        {!loading &&
          !error &&
          requests.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-12 text-center">
              <p className="text-lg font-semibold">
                No coding requests yet.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                New student requests will appear here.
              </p>
            </div>
          )}

        {!loading &&
          !error &&
          requests.length > 0 && (
            <div className="space-y-4">

              {requests.map((request) => (
                <article
                  key={request.id}
                  className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-white/20"
                >

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    <div className="min-w-0">

                      <div className="flex flex-wrap items-center gap-2">

                        <h2 className="text-lg font-bold">
                          {request.student_name}
                        </h2>

                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                          {request.grade}
                        </span>

                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                          {request.language}
                        </span>

                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                          {request.topic}
                        </span>

                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {request.problem}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
                        <span>
                          {request.email}
                        </span>

                        <span>
                          {new Date(
                            request.created_at
                          ).toLocaleString()}
                        </span>

                        {request.code && (
                          <span className="text-emerald-400">
                            Code attached
                          </span>
                        )}
                      </div>

                    </div>

                    <div className="shrink-0">

                      <label
                        htmlFor={`status-${request.id}`}
                        className="mb-2 block text-xs text-slate-600"
                      >
                        Status
                      </label>

                      <select
                        id={`status-${request.id}`}
                        value={request.status}
                        onChange={(e) =>
                          updateStatus(
                            request.id,
                            e.target.value
                          )
                        }
                        className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                      >
                        <option value="New">
                          New
                        </option>

                        <option value="Reviewing">
                          Reviewing
                        </option>

                        <option value="Answered">
                          Answered
                        </option>

                        <option value="Paid Support">
                          Paid Support
                        </option>

                        <option value="Closed">
                          Closed
                        </option>
                      </select>

                    </div>

                  </div>

                  {/* Code preview */}
                  {request.code && (
                    <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-slate-950">

                      <div className="border-b border-white/10 px-4 py-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Student Code
                        </span>
                      </div>

                      <pre className="max-h-64 overflow-auto p-5 font-mono text-xs leading-6 text-emerald-300">
                        <code>
                          {request.code}
                        </code>
                      </pre>

                    </div>
                  )}

                </article>
              ))}

            </div>
          )}

      </section>

    </main>
  );
}