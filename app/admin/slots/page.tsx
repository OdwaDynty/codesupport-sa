"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Slot = {
  id: string;
  slot_time: string;
  duration_minutes: number;
  is_booked: boolean;
};

export default function AdminSlotsPage() {
  const router = useRouter();

  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");
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

    await loadSlots();
  };

  const loadSlots = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("available_slots")
      .select("*")
      .gte("slot_time", new Date().toISOString())
      .order("slot_time", { ascending: true });

    if (!error && data) {
      setSlots(data);
    }

    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const addSlot = async () => {
    if (!date || !time) {
      alert("Please choose both a date and a time.");
      return;
    }

    setSaving(true);

    const slotTime = new Date(`${date}T${time}:00`);

    const { error } = await supabase.from("available_slots").insert({
      slot_time: slotTime.toISOString(),
      duration_minutes: Number(duration),
    });

    if (error) {
      console.error(error);
      alert("Could not add slot.");
      setSaving(false);
      return;
    }

    setSaving(false);
    setDate("");
    setTime("");
    await loadSlots();
  };

  const deleteSlot = async (id: string) => {
    if (!confirm("Delete this slot?")) return;

    const { error } = await supabase
      .from("available_slots")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Could not delete slot — it may already be booked.");
      return;
    }

    await loadSlots();
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
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Available Consultation Slots
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Add times you're available. Students will only be able to pick
            from these when booking.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-8">
          <h2 className="text-lg font-bold">Add a new slot</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              >
                <option value="30">30 minutes</option>
                <option value="60">60 minutes</option>
              </select>
            </div>
          </div>

          <button
            onClick={addSlot}
            disabled={saving}
            className="mt-5 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Adding..." : "+ Add Slot"}
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Upcoming slots</h2>

          {loading && (
            <p className="mt-4 text-sm text-slate-500">Loading...</p>
          )}

          {!loading && slots.length === 0 && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
              <p className="text-sm text-slate-500">
                No upcoming slots. Add some above.
              </p>
            </div>
          )}

          {!loading && slots.length > 0 && (
            <div className="mt-4 space-y-3">
              {slots.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 p-5"
                >
                  <div>
                    <p className="font-semibold">
                      {new Date(slot.slot_time).toLocaleString("en-ZA", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {slot.duration_minutes} minutes
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {slot.is_booked ? (
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Booked
                      </span>
                    ) : (
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                        Open
                      </span>
                    )}

                    <button
                      onClick={() => deleteSlot(slot.id)}
                      className="rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-2 text-sm text-red-300 hover:bg-red-400/10"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}