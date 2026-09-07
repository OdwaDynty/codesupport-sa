"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
  admin_response: string | null;
  responded_at: string | null;
};

export default function RequestDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [request, setRequest] = useState<Request | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [response, setResponse] = useState("");
  const [savingResponse, setSavingResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    loadRequest();
  }, []);

  const loadRequest = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/admin/login");
      return;
    }

    const { data, error } = await supabase
      .from("coding_help_requests")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error) {
      console.error(error);
      setError("We could not load this request.");
      setLoading(false);
      return;
    }

    setRequest(data);
    setResponse(data.admin_response || "");
    setLoading(false);
  };

  const updateStatus = async (status: string) => {
    if (!request) return;

    const { error } = await supabase
      .from("coding_help_requests")
      .update({ status })
      .eq("id", request.id);

    if (error) {
      console.error(error);
      alert("Could not update the request status.");
      return;
    }

    setRequest({
      ...request,
      status,
    });
  };

  const saveResponse = async () => {
  if (!request) return;

  if (!response.trim()) {
    setResponseMessage("Please enter a response before saving.");
    return;
  }

  setSavingResponse(true);
  setResponseMessage("");

  const { error } = await supabase
    .from("coding_help_requests")
    .update({
      admin_response: response.trim(),
      responded_at: new Date().toISOString(),
      status: "Answered",
    })
    .eq("id", request.id);

  if (error) {
    setResponseMessage("Failed to save response. Please try again.");
    setSavingResponse(false);
    return;
  }

  setRequest({
    ...request,
    admin_response: response.trim(),
    responded_at: new Date().toISOString(),
    status: "Answered",
  });

  setResponseMessage("Response saved successfully.");
  setSavingResponse(false);
};

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-sm text-slate-500">
          Loading request...
        </p>
      </main>
    );
  }

  if (error || !request) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <p className="text-lg font-semibold">
            {error || "Request not found."}
          </p>

          <Link
            href="/admin"
            className="mt-6 inline-block rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <Link
            href="/admin"
            className="text-sm text-slate-400 transition hover:text-emerald-400"
          >
            ← Back to Requests
          </Link>

          <Link
            href="/"
            className="font-bold"
          >
            CodeSupport{" "}
            <span className="text-emerald-400">
              SA
            </span>
          </Link>

        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-10">

        {/* Header */}
        <div className="border-b border-white/10 pb-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Coding Help Request
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            {request.student_name}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">

            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              {request.grade}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-400">
              {request.language}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-400">
              {request.topic}
            </span>

          </div>

        </div>

        {/* Student Details */}
        <section className="mt-8">

          <h2 className="text-lg font-bold">
            Student Details
          </h2>

          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900 p-6">

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Email
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {request.email}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Submitted
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {new Date(
                    request.created_at
                  ).toLocaleString()}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Problem */}
        <section className="mt-8">

          <h2 className="text-lg font-bold">
            The Problem
          </h2>

          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900 p-6">

            <p className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
              {request.problem}
            </p>

          </div>

        </section>

        {/* Student Code */}
        {request.code && (
          <section className="mt-8">

            <h2 className="text-lg font-bold">
              Student Code
            </h2>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">

              <div className="border-b border-white/10 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {request.language}
                </p>
              </div>

              <pre className="overflow-auto p-6 font-mono text-sm leading-7 text-emerald-300">
                <code>
                  {request.code}
                </code>
              </pre>

            </div>
            <div className="mt-8 rounded-lg border border-slate-700 bg-slate-800 p-6">
  <h2 className="text-xl font-semibold text-white">
    Your Response
  </h2>

  <p className="mt-1 text-sm text-slate-400">
    Write a response to the student about their coding problem.
  </p>

  <textarea
    value={response}
    onChange={(e) => setResponse(e.target.value)}
    placeholder="Write your response to the student here..."
    rows={8}
    className="mt-4 w-full rounded-lg border border-slate-600 bg-slate-900 p-4 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
  />

  <div className="mt-4 flex items-center gap-4">
    <button
      onClick={saveResponse}
      disabled={savingResponse}
      className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {savingResponse ? "Saving..." : "Save Response"}
    </button>

    {responseMessage && (
      <p className="text-sm text-emerald-400">
        {responseMessage}
      </p>
    )}
  </div>

  {request?.responded_at && (
    <p className="mt-4 text-xs text-slate-500">
      Last responded:{" "}
      {new Date(request.responded_at).toLocaleString()}
    </p>
  )}
</div>

          </section>
        )}

        {/* Status Management */}
        <section className="mt-8">

          <h2 className="text-lg font-bold">
            Request Status
          </h2>

          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900 p-6">

            <label
              htmlFor="status"
              className="mb-3 block text-sm text-slate-400"
            >
              Update the current status
            </label>

            <select
              id="status"
              value={request.status}
              onChange={(event) =>
                updateStatus(event.target.value)
              }
              className="w-full max-w-sm rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
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

        </section>

      </section>

    </main>
  );
}