import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
  "All",
  "Programming",
  "Web Development",
  "AI & Automation",
  "Computer Science",
  "Freelancing",
];

const featuredArticles = [
  {
    number: "01",
    category: "Programming",
    title: "Building Strong Programming Foundations",
    description:
      "Practical notes on programming fundamentals, problem solving, algorithms, and the habits that make learning to code more effective.",
    status: "Coming Soon",
  },
  {
    number: "02",
    category: "Web Development",
    title: "From HTML & CSS to Full-Stack Development",
    description:
      "A practical learning path covering modern web development, JavaScript, React, Next.js, APIs, databases, and deployment.",
    status: "Coming Soon",
  },
  {
    number: "03",
    category: "AI & Automation",
    title: "Exploring AI, APIs & Automation",
    description:
      "Exploring practical ways to combine artificial intelligence, APIs, and automation to build useful digital solutions.",
    status: "Coming Soon",
  },
];

const latestTopics = [
  {
    category: "Computer Science",
    title: "Computer Science Concepts I Am Learning",
    description:
      "Clear explanations and personal notes from my journey through computer science fundamentals.",
  },
  {
    category: "Web Development",
    title: "What I Am Building With Next.js",
    description:
      "Development notes, lessons, architecture decisions, and practical experiments from real projects.",
  },
  {
    category: "Freelancing",
    title: "Learning Freelancing Through Real Projects",
    description:
      "Practical observations about skills, services, client problems, portfolios, and remote work.",
  },
];

export const metadata = {
  title: "Blog",
  description:
    "Articles, notes, tutorials, project breakdowns, and practical technology insights from Yaseen Baloch.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#070b14] text-white">
        {/* Hero */}
        <section className="border-b border-white/10">
          <div className="container mx-auto px-6 py-24 sm:py-28 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                01 — Blog
              </p>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Ideas, lessons,
                <span className="block text-slate-500">
                  and things I&apos;m building.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A growing collection of programming notes, development
                tutorials, AI experiments, computer science concepts, and
                lessons from building real projects.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#featured"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore Articles
                  <span aria-hidden="true" className="ml-2">
                    ↓
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500/40 hover:bg-white/5 hover:text-white"
                >
                  Explore My Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-white/10">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                    index === 0
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                      : "border-white/10 bg-white/[0.02] text-slate-400"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section id="featured" className="section">
          <div className="container mx-auto">
            <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  02 — Featured
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  What I&apos;m exploring
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-500">
                These topics represent the areas I am actively learning,
                building, and preparing to write about.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <article
                  key={article.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#111b2d]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                      {article.number}
                    </span>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      {article.status}
                    </span>
                  </div>

                  <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {article.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-8 text-white">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {article.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <span className="text-xs font-medium text-slate-500">
                      Article in preparation
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Topics */}
        <section className="border-y border-white/10 bg-[#090e18]">
          <div className="container mx-auto px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  03 — Topics
                </p>

                <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Learn from what I learn.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                  The goal is simple: understand technology deeply, build with
                  it, and share useful knowledge in a way that other learners
                  can actually apply.
                </p>

                <Link
                  href="/learn"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Explore the learning hub
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1422]">
                {latestTopics.map((topic, index) => (
                  <article
                    key={topic.title}
                    className={`p-6 sm:p-7 ${
                      index !== latestTopics.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                          {topic.category}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-white">
                          {topic.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {topic.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs text-slate-600">
                        Soon
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Writing Philosophy */}
        <section className="section">
          <div className="container mx-auto">
            <div className="rounded-3xl border border-white/10 bg-[#0d1422] p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                04 — Writing Philosophy
              </p>

              <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end">
                <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  I don&apos;t want to just explain technology.
                  <span className="block text-slate-500">
                    I want to make it understandable.
                  </span>
                </h2>

                <p className="max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                  My writing will focus on practical explanations, real
                  projects, mistakes, lessons, and useful resources — not just
                  theory. The aim is to help learners move from understanding
                  an idea to actually building with it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10">
          <div className="container mx-auto px-6 py-24 text-center sm:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              05 — Keep Building
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
              Learn something.
              <span className="block text-slate-500">
                Build something with it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Explore my work, follow the learning journey, and come back as
              the blog grows with practical articles and project breakdowns.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View My Work
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/learn"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500/40 hover:bg-white/5"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}