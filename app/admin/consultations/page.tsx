"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Consultation = {
  id: string;
  student_name: string;
  email: string;
  grade: string;
  duration_minutes: number;
  topic: string;
  message: string;
  status: string;
  payment_status: string;
  pf_payment_id: string | null;
  created_at: string;
};

export default function AdminConsultationsPage() {
  const router = useRouter();

  const [requests, setRequests] = useState<Consultation[]>([]);
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

    await loadRequests();
  };

  const loadRequests = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("consultation_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setError("We could not load consultation requests.");
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

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("consultation_requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Could not update the status.");
      return;
    }

    setRequests((current) =>
      current.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const paidCount = requests.filter((r) => r.payment_status === "Paid").length;
  const pendingCount = requests.filter(
    (r) => r.payment_status === "Pending"
  ).length;
  const failedCount = requests.filter(
    (r) => r.payment_status === "Failed" || r.payment_status === "Cancelled"
  ).length;

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
                Consultation Requests
              </h1>
              <p className="mt-3 text-sm text-slate-500">
                Review one-on-one consultation requests and payment status.
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

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-500">Total Requests</p>
            <p className="mt-2 text-3xl font-bold">{requests.length}</p>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <p className="text-sm text-slate-500">Paid</p>
            <p className="mt-2 text-3xl font-bold text-emerald-300">
              {paidCount}
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm text-slate-500">Awaiting Payment</p>
            <p className="mt-2 text-3xl font-bold text-yellow-300">
              {pendingCount}
            </p>
          </div>

          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
            <p className="text-sm text-slate-500">Failed / Cancelled</p>
            <p className="mt-2 text-3xl font-bold text-red-300">
              {failedCount}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        {loading && (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">
            <p className="text-sm text-slate-500">Loading requests...</p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {!loading && !error && requests.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-12 text-center">
            <p className="text-lg font-semibold">No consultation requests yet.</p>
            <p className="mt-2 text-sm text-slate-500">
              New requests will appear here.
            </p>
          </div>
        )}

        {!loading && !error && requests.length > 0 && (
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

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          request.payment_status === "Paid"
                            ? "bg-emerald-400/10 text-emerald-300"
                            : request.payment_status === "Failed" ||
                              request.payment_status === "Cancelled"
                            ? "bg-red-400/10 text-red-300"
                            : "bg-yellow-400/10 text-yellow-300"
                        }`}
                      >
                        {request.payment_status}
                      </span>

                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                        {request.grade}
                      </span>

                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                        {request.duration_minutes} min
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-medium text-slate-300">
                      {request.topic}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {request.message}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
                      <span>{request.email}</span>
                      <span>
                        {new Date(request.created_at).toLocaleString()}
                      </span>
                      {request.pf_payment_id && (
                        <span>PayFast ID: {request.pf_payment_id}</span>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <label
                      htmlFor={`status-${request.id}`}
                      className="mb-2 block text-xs text-slate-600"
                    >
                      Session Status
                    </label>

                    <select
                      id={`status-${request.id}`}
                      value={request.status}
                      onChange={(e) => updateStatus(request.id, e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}