"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type RequestData = {
  id: string;
  student_name: string;
  grade: string;
  language: string;
  topic: string;
  problem: string;
  status: string;
  admin_response: string | null;
  created_at: string;
  responded_at: string | null;
  request_reference: string;
};

function RequestStatusContent() {
  const searchParams = useSearchParams();
  const initialReference = searchParams.get("reference") ?? "";

  const [reference, setReference] = useState(initialReference);
  const [request, setRequest] = useState<RequestData | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkRequest = async (refOverride?: string) => {
    const refToCheck = (refOverride ?? reference).trim();

    if (!refToCheck) {
      setErrorMessage("Please enter your request reference.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setRequest(null);

    try {
      const response = await fetch("/api/request-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: refToCheck }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Request could not be found.");
        return;
      }

      setRequest(data.request);
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-lookup once, only if a reference arrived via the URL
  useEffect(() => {
    if (initialReference) {
      checkRequest(initialReference);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Check My Coding Request</h1>
          <p className="mt-2 text-slate-400">
            Enter your request reference to check the status of your coding
            help request.
          </p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <label htmlFor="reference" className="block text-sm font-medium text-slate-300">
            Request Reference
          </label>

          <input
            id="reference"
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkRequest();
            }}
            placeholder="Example: CS-2026-0003"
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-emerald-500"
          />

          <button
            onClick={() => checkRequest()}
            disabled={loading}
            className="mt-4 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Checking..." : "Check Request"}
          </button>

          {errorMessage && (
            <div className="mt-4 rounded-lg border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
              {errorMessage}
            </div>
          )}
        </div>

        {request && (
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Request {request.request_reference}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Submitted {new Date(request.created_at).toLocaleString()}
                  </p>
                </div>

                <span className="inline-flex w-fit rounded-full bg-emerald-900/50 px-4 py-2 text-sm font-medium text-emerald-300">
                  {request.status}
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h2 className="text-lg font-semibold">Request Details</h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-slate-500">Student</p>
                  <p className="mt-1 text-slate-200">{request.student_name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Grade</p>
                  <p className="mt-1 text-slate-200">{request.grade}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Language</p>
                  <p className="mt-1 text-slate-200">{request.language}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-500">Topic</p>
                <p className="mt-1 text-slate-200">{request.topic}</p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-500">Your Problem</p>
                <div className="mt-2 whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-slate-300">
                  {request.problem}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h2 className="text-lg font-semibold">Response from CodeSupport SA</h2>

              {request.admin_response ? (
                <>
                  <div className="mt-4 whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-slate-300">
                    {request.admin_response}
                  </div>
                  {request.responded_at && (
                    <p className="mt-3 text-sm text-slate-500">
                      Responded {new Date(request.responded_at).toLocaleString()}
                    </p>
                  )}
                </>
              ) : (
                <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950 p-4 text-slate-400">
                  Your request is still being reviewed. A response will appear
                  here once it has been answered.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function RequestStatusPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-950" />}>
      <RequestStatusContent />
    </Suspense>
  );
}