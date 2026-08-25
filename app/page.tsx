import Link from "next/link";

const languages = [
  {
    name: "Java",
    description: "Build a strong foundation in programming, logic and object-oriented development.",
    icon: "☕",
    href: "/learn/java",
    status: "Available",
  },
  {
    name: "Python",
    description: "Learn programming fundamentals using one of the world's most popular languages.",
    icon: "🐍",
    href: "/learn/python",
    status: "Available",
  },
  {
    name: "C++",
    description: "Strengthen your programming logic and learn the fundamentals of C++.",
    icon: "C++",
    href: "/learn/cpp",
    status: "Coming Soon",
  },
  {
    name: "JavaScript",
    description: "Learn the language that powers interactive websites and modern web applications.",
    icon: "JS",
    href: "/learn/javascript",
    status: "Coming Soon",
  },
];

const features = [
  {
    icon: "📚",
    title: "Learn",
    description:
      "Simple explanations, examples and lessons that help you understand programming concepts.",
    href: "/learn",
    link: "Start learning",
  },
  {
    icon: "✏️",
    title: "Practise",
    description:
      "Test your understanding with coding exercises, challenges and guided solutions.",
    href: "/practice",
    link: "Practise coding",
  },
  {
    icon: "🚀",
    title: "Build",
    description:
      "Put your skills to work by building practical programming projects.",
    href: "/projects",
    link: "View projects",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 font-bold text-slate-950">
              &lt;/&gt;
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight">
                CodeSupport <span className="text-emerald-400">SA</span>
              </div>
              <div className="hidden text-xs text-slate-400 sm:block">
                Learn. Practise. Build. Get Help.
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/learn"
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              Learn
            </Link>

            <Link
              href="/practice"
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              Practise
            </Link>

            <Link
              href="/projects"
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              Projects
            </Link>

            <Link
              href="/coding-help"
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              Coding Help
            </Link>

            <Link
              href="/support"
              className="rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              1-on-1 Support
            </Link>
          </div>

          <button className="rounded-lg border border-white/10 px-3 py-2 text-slate-300 md:hidden">
            Menu
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Free coding support for high-school learners
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Learn to code.
              <br />
              <span className="text-emerald-400">Build something.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              CodeSupport SA helps high-school learners understand
              programming, practise their skills and build real projects.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/learn"
                className="rounded-xl bg-emerald-400 px-6 py-3.5 text-center font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Start Learning →
              </Link>

              <Link
                href="/practice"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Practise Coding
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>✓ Beginner friendly</span>
              <span>✓ Learn at your own pace</span>
              <span>✓ South African focused</span>
            </div>
          </div>

          {/* Code window */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-emerald-950/20">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-slate-500">
                  Main.java
                </span>
              </div>

              <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
                <div>
                  <span className="text-purple-400">public class</span>{" "}
                  <span className="text-yellow-300">Main</span>{" "}
                  <span className="text-slate-400">{"{"}</span>
                </div>

                <div className="pl-5">
                  <span className="text-purple-400">public static void</span>{" "}
                  <span className="text-blue-300">main</span>
                  <span className="text-slate-400">()</span>{" "}
                  <span className="text-slate-400">{"{"}</span>
                </div>

                <div className="pl-10">
                  <span className="text-purple-400">int</span>{" "}
                  <span className="text-blue-300">mark</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-orange-300">75</span>
                  <span className="text-slate-400">;</span>
                </div>

                <div className="pl-10">
                  <span className="text-purple-400">if</span>{" "}
                  <span className="text-slate-400">(</span>
                  <span className="text-blue-300">mark</span>{" "}
                  <span className="text-slate-400">&gt;=</span>{" "}
                  <span className="text-orange-300">50</span>
                  <span className="text-slate-400">)</span>{" "}
                  <span className="text-slate-400">{"{"}</span>
                </div>

                <div className="pl-16 text-emerald-300">
                  System.out.println(<span className="text-orange-300">&quot;Pass!&quot;</span>
                  );
                </div>

                <div className="pl-10 text-slate-400">{"}"}</div>
                <div className="pl-5 text-slate-400">{"}"}</div>
                <div className="text-slate-400">{"}"}</div>
              </div>

              <div className="border-t border-white/10 bg-slate-950/60 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Output</span>
                  <span className="text-sm font-medium text-emerald-400">
                    ● Program completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Your coding journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Learn. Practise. Build.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Start with the basics, test what you know and use your skills
              to build something of your own.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-2xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="text-3xl">{feature.icon}</div>

                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 min-h-20 leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-emerald-400">
                  {feature.link} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Choose your language
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What are you learning?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Start with Java or Python. More programming languages will be
              added as the platform grows.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((language) => (
              <Link
                key={language.name}
                href={language.status === "Available" ? language.href : "#"}
                className={`rounded-2xl border p-6 transition ${
                  language.status === "Available"
                    ? "border-white/10 bg-slate-900 hover:-translate-y-1 hover:border-emerald-400/30"
                    : "cursor-default border-white/5 bg-slate-900/40 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-lg font-bold">
                    {language.icon}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      language.status === "Available"
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-white/5 text-slate-500"
                    }`}
                  >
                    {language.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{language.name}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {language.description}
                </p>

                {language.status === "Available" && (
                  <div className="mt-5 text-sm font-semibold text-emerald-400">
                    Start learning →
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Help */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Stuck on your code?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Don't just give up.
              <br />
              <span className="text-slate-400">Get help understanding it.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Tell us what you are trying to build, show us your code and
              explain where you are stuck. Start by using the free coding
              support resources.
            </p>

            <Link
              href="/coding-help"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Get Coding Help
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <div className="text-sm text-slate-500">Example problem</div>

            <div className="mt-4 rounded-xl bg-slate-900 p-5">
              <div className="text-sm font-medium text-white">
                Java • If Statements
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                &quot;My program keeps saying that the learner failed even
                when the mark is 75. What am I doing wrong?&quot;
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-white/5 p-3 text-center text-xs text-slate-400">
                💡 Hint
              </div>

              <div className="rounded-lg bg-white/5 p-3 text-center text-xs text-slate-400">
                📖 Learn
              </div>

              <div className="rounded-lg bg-emerald-400/10 p-3 text-center text-xs text-emerald-300">
                👨‍🏫 Get Help
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One-on-one support */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-2xl">
            👨‍🏫
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Need deeper support?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Get one-on-one coding help
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Sometimes you need someone to sit with you and work through the
            problem. Request a personal coding consultation when you need
            extra help.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-xl border border-white/10 bg-slate-900 px-6 py-4">
              <div className="text-sm text-slate-500">30 minutes</div>
              <div className="mt-1 text-xl font-bold">R100</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 px-6 py-4">
              <div className="text-sm text-slate-500">60 minutes</div>
              <div className="mt-1 text-xl font-bold">R180</div>
            </div>

            <Link
              href="/support"
              className="rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Request Support →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="font-bold">
              CodeSupport <span className="text-emerald-400">SA</span>
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Learn. Practise. Build. Get Help.
            </div>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} CodeSupport SA
          </div>
        </div>
      </footer>
    </main>
  );
}