import Link from "next/link";

const languages = [
  {
    name: "Java",
    level: "Beginner → Intermediate",
    description:
      "Learn programming fundamentals using Java, from variables and input to conditions, loops and methods.",
    topics: 10,
    icon: "☕",
    href: "/learn/java",
  },
  {
    name: "Python",
    level: "Beginner → Intermediate",
    description:
      "Build your programming skills with Python through simple examples, exercises and practical challenges.",
    topics: 10,
    icon: "🐍",
    href: "/learn/python",
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 transition hover:text-emerald-400"
          >
            ← Back to CodeSupport SA
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Learn Programming
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Learn at your own pace.
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Choose a programming language and work through lessons,
              examples and exercises designed for high-school learners.
            </p>
          </div>
        </div>
      </header>

      {/* Languages */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {languages.map((language) => (
            <Link
              key={language.name}
              href={language.href}
              className="group rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                  {language.icon}
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Available
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-bold">{language.name}</h2>

              <p className="mt-2 text-sm font-medium text-emerald-400">
                {language.level}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {language.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-slate-500">
                  {language.topics} topics
                </span>

                <span className="text-sm font-semibold text-white transition group-hover:text-emerald-400">
                  Start learning →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-bold">How learning works</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <div className="text-2xl">1️⃣</div>
              <h3 className="mt-5 font-bold">Learn</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Read a simple explanation and study a working example.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <div className="text-2xl">2️⃣</div>
              <h3 className="mt-5 font-bold">Practise</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Try exercises that test whether you understand the concept.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <div className="text-2xl">3️⃣</div>
              <h3 className="mt-5 font-bold">Build</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Use what you have learned to create your own projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <span>CodeSupport SA</span>
          <span>Learn. Practise. Build. Get Help.</span>
        </div>
      </footer>
    </main>
  );
}