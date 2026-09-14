"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Feedback = {
  id: string;
  page_context: string | null;
  rating: string | null;
  message: string;
  created_at: string;
};

export default function AdminFeedbackPage() {
  const router = useRouter();

  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

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

    await loadFeedback();
  };

  const loadFeedback = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("site_feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setFeedback(data);
    }

    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const deleteFeedback = async (id: string) => {
    if (!confirm("Delete this feedback?")) return;

    await supabase.from("site_feedback").delete().eq("id", id);
    await loadFeedback();
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
            <Link href="/admin/stats" className="text-sm text-slate-400 hover:text-white">
              Stats
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
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Admin Dashboard
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Feedback</h1>
          <p className="mt-3 text-sm text-slate-500">
            {feedback.length} messages received.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        {loading && (
          <p className="text-sm text-slate-500">Loading...</p>
        )}

        {!loading && feedback.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-10 text-center">
            <p className="text-sm text-slate-500">No feedback yet.</p>
          </div>
        )}

        {!loading && feedback.length > 0 && (
          <div className="space-y-4">
            {feedback.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-slate-900 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  {item.rating === "positive" && (
                    <span className="text-2xl">👍</span>
                  )}
                  {item.rating === "negative" && (
                    <span className="text-2xl">👎</span>
                  )}

                  {item.page_context && (
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {item.page_context}
                    </span>
                  )}

                  <span className="ml-auto text-xs text-slate-600">
                    {new Date(item.created_at).toLocaleString()}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.message}
                </p>

                <button
                  onClick={() => deleteFeedback(item.id)}
                  className="mt-4 text-sm text-red-400 hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}