import Link from "next/link";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  resources,
  type ResourceCategory,
} from "@/data/resources";

const categories: ResourceCategory[] = [
  "Programming",
  "Web Development",
  "Artificial Intelligence",
  "Computer Science",
  "Freelancing",
  "Developer Tools",
];

const categoryDescriptions: Record<
  ResourceCategory,
  string
> = {
  Programming:
    "Programming references, roadmaps, notes, and practical learning material.",
  "Web Development":
    "Resources for frontend, backend, responsive design, and modern web development.",
  "Artificial Intelligence":
    "AI tools, references, automation resources, and practical learning material.",
  "Computer Science":
    "Foundational computer science notes, concepts, and academic resources.",
  Freelancing:
    "Resources for portfolios, clients, personal branding, and remote work.",
  "Developer Tools":
    "Useful tools and references for coding, development, testing, and productivity.",
};

function getStatusLabel(status: string) {
  if (status === "available") return "Available";
  if (status === "coming-soon") return "Coming Soon";
  if (status === "planned") return "Planned";

  return status;
}

function getStatusClass(status: string) {
  if (status === "available") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  if (status === "planned") {
    return "border-amber-400/20 bg-amber-400/10 text-amber-300";
  }

  return "border-blue-400/20 bg-blue-400/10 text-blue-300";
}

function getTypeIcon(type: string) {
  if (type === "Roadmap") return "↗";
  if (type === "Notes") return "N";
  if (type === "Cheat Sheet") return "#";
  if (type === "Tool") return "⚙";
  if (type === "Template") return "▦";
  if (type === "Reference") return "R";

  return "G";
}

export default function ResourcesPage() {
  const featuredResources = resources.filter(
    (resource) => resource.featured,
  );

  const availableResources = resources.filter(
    (resource) => resource.status === "available",
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-180px] h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-[-120px] top-1/2 h-[320px] w-[320px] rounded-full bg-emerald-400/5 blur-3xl" />
          </div>

          <Container>
            <div className="relative py-20 sm:py-24 lg:py-28">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Developer Resources
                </div>

                <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Resources to help you{" "}
                  <span className="text-foreground/50">
                    learn, build, and grow.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/65 sm:text-lg">
                  A growing collection of practical roadmaps, notes,
                  references, tools, cheat sheets, and learning resources
                  for developers, students, creators, and technology
                  learners.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#featured"
                    className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                  >
                    Explore Resources
                  </a>

                  <Link
                    href="/learn"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    Explore Learning
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            OVERVIEW
        ===================================================== */}
        <section className="border-b border-white/10 py-12">
          <Container>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-3xl font-semibold text-foreground">
                  {resources.length}
                </p>

                <p className="mt-1 text-sm text-foreground/50">
                  Resources planned
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-3xl font-semibold text-foreground">
                  {availableResources.length}
                </p>

                <p className="mt-1 text-sm text-foreground/50">
                  Currently available
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-3xl font-semibold text-foreground">
                  {categories.length}
                </p>

                <p className="mt-1 text-sm text-foreground/50">
                  Resource categories
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FEATURED
        ===================================================== */}
        <section
          id="featured"
          className="scroll-mt-20 py-16 sm:py-20"
        >
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Featured Resources
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Start with these resources
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
                  Carefully structured resources that connect learning,
                  development, and practical technology work.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((resource) => (
                <article
                  key={resource.slug}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-sm font-semibold text-blue-300">
                      {getTypeIcon(resource.type)}
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClass(
                        resource.status,
                      )}`}
                    >
                      {getStatusLabel(resource.status)}
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/40">
                      {resource.type} · {resource.category}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {resource.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-foreground/55">
                      {resource.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {resource.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-foreground/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    {resource.status === "available" &&
                    resource.href ? (
                      <Link
                        href={resource.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-blue-300"
                      >
                        Explore Resource
                        <span className="transition group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-foreground/35">
                        Coming in a future stage
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            CATEGORIES
        ===================================================== */}
        <section className="border-y border-white/10 bg-white/[0.015] py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Explore by Category
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Find resources for your current goal.
              </h2>

              <p className="mt-4 text-sm leading-7 text-foreground/55 sm:text-base">
                The resource library is organized around the areas that
                support long-term technical learning and professional
                growth.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const count = resources.filter(
                  (resource) => resource.category === category,
                ).length;

                return (
                  <div
                    key={category}
                    className="rounded-2xl border border-white/10 bg-background/40 p-5 transition hover:border-white/20 hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground">
                        {category}
                      </h3>

                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/40">
                        {count}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-foreground/50">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =====================================================
            ALL RESOURCES
        ===================================================== */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Resource Library
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Browse the full collection
              </h2>

              <p className="mt-4 text-sm leading-7 text-foreground/55 sm:text-base">
                Explore roadmaps, notes, references, tools, and guides
                as the resource library continues to grow.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
              <div className="divide-y divide-white/10">
                {resources.map((resource) => (
                  <div
                    key={resource.slug}
                    className="group flex flex-col gap-5 p-5 transition hover:bg-white/[0.025] sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  >
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-sm font-semibold text-foreground/60">
                        {getTypeIcon(resource.type)}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-foreground">
                            {resource.title}
                          </h3>

                          <span
                            className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${getStatusClass(
                              resource.status,
                            )}`}
                          >
                            {getStatusLabel(resource.status)}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-foreground/45">
                          {resource.type} · {resource.category} ·{" "}
                          {resource.level}
                        </p>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/55">
                          {resource.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 sm:pl-6">
                      {resource.status === "available" &&
                      resource.href ? (
                        <Link
                          href={resource.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-blue-300"
                        >
                          Open
                          <span>→</span>
                        </Link>
                      ) : (
                        <span className="text-sm text-foreground/30">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            LEARNING CONNECTION
        ===================================================== */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-blue-400/15 bg-blue-400/[0.04] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Learn
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                  Follow structured learning paths.
                </h2>

                <p className="mt-4 text-sm leading-7 text-foreground/55">
                  Resources work alongside courses, lessons, and learning
                  paths to create a more complete learning experience.
                </p>

                <Link
                  href="/learn"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.08]"
                >
                  Explore Learning
                  <span>→</span>
                </Link>
              </div>

              <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.04] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Build
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                  Turn knowledge into real projects.
                </h2>

                <p className="mt-4 text-sm leading-7 text-foreground/55">
                  Use practical references, developer tools, and guides
                  while building your portfolio and software projects.
                </p>

                <Link
                  href="/work"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.08]"
                >
                  Explore My Work
                  <span>→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FUTURE DIRECTION
        ===================================================== */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-12 lg:p-14">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Future Resource Platform
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  A resource library that grows with the platform.
                </h2>

                <p className="mt-5 text-sm leading-7 text-foreground/55 sm:text-base">
                  The current resource architecture is designed to support
                  future guides, downloadable PDFs, templates, external
                  tools, cheat sheets, curated collections, and dedicated
                  resource detail pages.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Resource detail pages",
                    "Downloadable learning material",
                    "Developer tool collections",
                    "Programming cheat sheets",
                    "Curated AI resources",
                    "Search and filtering",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-4"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />

                      <span className="text-sm text-foreground/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Learn · Build · Grow
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Use the right resources at the right stage of your journey.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
                Explore the resource library, follow structured learning
                paths, and keep building practical technology skills.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/learn"
                  className="rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Start Learning
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
