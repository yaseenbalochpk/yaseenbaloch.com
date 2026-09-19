import Link from "next/link";

type ResourceCategory = {
  number: string;
  title: string;
  description: string;
  resources: string[];
};

type ResourceItem = {
  type: string;
  title: string;
  description: string;
  category: string;
  status: "Available" | "Coming Soon";
};

const resourceCategories: ResourceCategory[] = [
  {
    number: "01",
    title: "Programming",
    description:
      "Practical material for building strong programming fundamentals and problem-solving skills.",
    resources: [
      "Programming fundamentals",
      "Python learning material",
      "Algorithms & problem solving",
      "Practice resources",
    ],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Structured resources for learning modern web development from fundamentals to full-stack applications.",
    resources: [
      "HTML & CSS",
      "JavaScript",
      "React & Next.js",
      "Git & GitHub",
    ],
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    description:
      "Learning resources around AI, automation, APIs, and practical applications of emerging technologies.",
    resources: [
      "AI fundamentals",
      "AI automation",
      "APIs & integrations",
      "Practical AI tools",
    ],
  },
  {
    number: "04",
    title: "Computer Science",
    description:
      "Concept-focused material designed to strengthen understanding of core computer science topics.",
    resources: [
      "Computer fundamentals",
      "Data structures",
      "Algorithms",
      "Software concepts",
    ],
  },
];

const featuredResources: ResourceItem[] = [
  {
    type: "ROADMAP",
    title: "Web Development Roadmap",
    description:
      "A structured path covering the major technologies and concepts needed to progress toward full-stack development.",
    category: "Web Development",
    status: "Available",
  },
  {
    type: "NOTES",
    title: "Computer Science Notes",
    description:
      "Clear, practical notes for understanding important computer science concepts without unnecessary complexity.",
    category: "Computer Science",
    status: "Coming Soon",
  },
  {
    type: "CHEAT SHEET",
    title: "Developer Cheat Sheets",
    description:
      "Quick-reference material for frequently used commands, concepts, syntax, and development workflows.",
    category: "Programming",
    status: "Coming Soon",
  },
  {
    type: "AI",
    title: "AI & Automation Resources",
    description:
      "A growing collection of tools, concepts, workflows, and practical resources for exploring AI automation.",
    category: "Artificial Intelligence",
    status: "Coming Soon",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-[-120px] top-[160px] h-[280px] w-[280px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              07 — Resources
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Learn faster with
              <span className="block text-slate-400">
                useful resources.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A growing collection of notes, roadmaps, cheat sheets,
              developer tools, learning material, and practical resources
              designed to make technology easier to understand and apply.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#resource-library"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Explore Resources
                <span aria-hidden="true" className="ml-2">
                  ↓
                </span>
              </a>

              <Link
                href="/learn"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Explore Learning
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / PHILOSOPHY
      ========================================================= */}
      <section className="border-b border-white/10">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Why this library
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Less noise.
                <span className="block text-slate-500">
                  More useful knowledge.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-slate-400 sm:text-lg">
                The goal is not to collect hundreds of random links. The
                goal is to build a carefully organized library of resources
                that can help students, developers, and technology
                learners understand concepts, build projects, and keep
                learning consistently.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-500">
                New resources will be added as they are created, tested,
                organized, and made useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section
        id="resource-library"
        className="border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Resource categories
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore by area.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Organized around the areas I am learning, building, and
              teaching.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-[#0d1422] sm:grid-cols-2">
            {resourceCategories.map((category) => (
              <article
                key={category.number}
                className="group border-b border-white/10 p-7 transition duration-300 hover:bg-white/[0.025] sm:p-8 sm:even:border-l lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-medium tracking-[0.2em] text-blue-400">
                    {category.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white sm:text-2xl">
                  {category.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                  {category.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {category.resources.map((resource) => (
                    <li
                      key={resource}
                      className="flex items-center gap-3 text-sm text-slate-500"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 rounded-full bg-blue-500"
                      />
                      {resource}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED RESOURCES
      ========================================================= */}
      <section className="border-b border-white/10">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Library
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Featured resources.
              </h2>
            </div>

            <span className="text-sm text-slate-500">
              Growing collection
            </span>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featuredResources.map((resource) => (
              <article
                key={resource.title}
                className="group rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-[#101827] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                    {resource.type}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-medium ${
                      resource.status === "Available"
                        ? "border-blue-500/20 bg-blue-500/10 text-blue-300"
                        : "border-white/10 bg-white/[0.03] text-slate-500"
                    }`}
                  >
                    {resource.status}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {resource.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {resource.description}
                </p>

                <div className="mt-7 border-t border-white/5 pt-5">
                  <span className="text-xs text-slate-500">
                    {resource.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESOURCE PRINCIPLES
      ========================================================= */}
      <section className="border-b border-white/10">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0d1422] p-7">
              <span className="text-xs font-semibold text-blue-400">
                01
              </span>

              <h3 className="mt-8 text-lg font-semibold">
                Practical
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Resources should help you understand something and use
                that knowledge in practice.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d1422] p-7">
              <span className="text-xs font-semibold text-blue-400">
                02
              </span>

              <h3 className="mt-8 text-lg font-semibold">
                Organized
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Information is grouped by topic so you can find what
                you need without unnecessary searching.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d1422] p-7">
              <span className="text-xs font-semibold text-blue-400">
                03
              </span>

              <h3 className="mt-8 text-lg font-semibold">
                Continuously improved
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                The library can grow over time as new projects,
                lessons, notes, and tools are created.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section>
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1422] px-6 py-16 text-center sm:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Keep learning
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Learn something useful.
                <span className="block text-slate-500">
                  Then build with it.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Explore the learning platform to follow structured
                learning paths and turn knowledge into practical work.
              </p>

              <div className="mt-8">
                <Link
                  href="/learn"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Explore Learning
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}