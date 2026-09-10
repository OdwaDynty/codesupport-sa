"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AccountPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

    setName(user.user_metadata?.full_name || "there");
    setEmail(user.email || "");
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
      {/* Navigation */}
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

      {/* Header */}
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

      {/* Content */}
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

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
          <p className="text-sm text-slate-500">
            Your request history will appear here soon.
          </p>
        </div>
      </section>
    </main>
  );
}