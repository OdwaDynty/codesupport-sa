import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="font-bold hover:text-emerald-400">
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>
        </div>
      </nav>

      <section className="flex min-h-[75vh] items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-emerald-400/20 bg-slate-900 p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-3xl">
            ✓
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Payment received
          </p>

          <h1 className="mt-3 text-3xl font-bold">Thank you!</h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
            We&apos;ve received your payment. We&apos;ll email you shortly to
            confirm a time for your session.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}