"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { syncLocalProgressToAccount } from "@/lib/progress";

type MyRequest = {
  id: string;
  request_reference: string;
  topic: string;
  language: string;
  status: string;
  created_at: string;
};

export default function AccountPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState<MyRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/account/login");
      return;
    }

    await syncLocalProgressToAccount(user);

    setName(user.user_metadata?.full_name || "there");
    setEmail(user.email || "");

    const { data } = await supabase
      .from("coding_help_requests")
      .select("id, request_reference, topic, language, status, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    setRequests(data || []);
    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-sm text-slate-500">Loading your account...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="font-bold hover:text-emerald-400">
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>

          <button
            onClick={logout}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            Sign Out
          </button>
        </div>
      </nav>

      <header className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            My Account
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Welcome back, {name}!
          </h1>

          <p className="mt-3 text-sm text-slate-500">{email}</p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/learn"
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-emerald-400/40"
          >
            <div className="text-2xl">📚</div>
            <h2 className="mt-4 text-lg font-bold">Continue Learning</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Pick up where you left off in Java or Python.
            </p>
          </Link>

          <Link
            href="/coding-help"
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-emerald-400/40"
          >
            <div className="text-2xl">💬</div>
            <h2 className="mt-4 text-lg font-bold">Get Coding Help</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Stuck on something? Submit a new request.
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold">Your Coding Help Requests</h2>

          {requests.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
              <p className="text-sm text-slate-500">
                You haven&apos;t submitted any requests while signed in yet.
              </p>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {requests.map((request) => (
                <Link
                  key={request.id}
                  href={`/request-status?reference=${encodeURIComponent(
                    request.request_reference
                  )}`}
                  className="flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-emerald-400/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="font-mono text-sm text-emerald-400">
                      {request.request_reference}
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      {request.language} • {request.topic}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {request.status}
                    </span>
                    <span className="text-xs text-slate-600">
                      {new Date(request.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}