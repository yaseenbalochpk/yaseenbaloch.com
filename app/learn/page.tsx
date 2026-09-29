import Link from "next/link";

import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { learningPaths, learningTopics } from "@/data/learning";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <path d="m16.24 16.24 2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="m16.24 7.76 2.83-2.83" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
      <path d="M4 5.5v14" />
      <path d="M8 7h8" />
      <path d="M8 11h7" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function CategoryIcon({ category }: { category: string }) {
  switch (category) {
    case "Programming":
      return <CodeIcon />;

    case "Web Development":
      return <BookIcon />;

    case "Artificial Intelligence":
      return <SparkIcon />;

    case "Computer Science":
      return <TargetIcon />;

    case "Career & Freelancing":
      return <TargetIcon />;

    default:
      return <BookIcon />;
  }
}

const categoryDescriptions: Record<string, string> = {
  Programming:
    "Build strong programming fundamentals and learn how to solve problems with code.",

  "Web Development":
    "Learn how modern websites and web applications are designed, developed, and deployed.",

  "Artificial Intelligence":
    "Explore practical AI concepts, tools, APIs, and automation workflows.",

  "Computer Science":
    "Understand the core concepts behind computers, algorithms, systems, and software.",

  "Career & Freelancing":
    "Develop professional skills for presenting your work and working effectively online.",
};

const categories = Array.from(
  new Set(learningPaths.map((path) => path.category)),
);

export default function LearnPage() {
  const featuredPaths = learningPaths.filter((path) => path.featured);

  const activePaths = learningPaths.filter(
    (path) => path.status === "active",
  );

  const featuredTopics = learningTopics.filter(
    (topic) => topic.featured,
  );

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative border-b border-border/60">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-0 top-40 h-[280px] w-[280px] rounded-full bg-cyan-400/5 blur-3xl" />
          </div>

          <Container>
            <div className="mx-auto max-w-4xl py-20 text-center sm:py-24 lg:py-28">
              <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
                Learn • Build • Practice • Grow
              </span>

              <h1 className="mt-7 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Learn technology by{" "}
                <span className="text-blue-500">
                  building real things.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Practical learning paths designed to help you understand
                technology, develop useful skills, and apply what you learn
                through projects and real-world practice.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#learning-paths"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold !text-background transition hover:opacity-90"
                >
                  Explore Learning Paths
                  <ArrowIcon />
                </Link>

                <Link
                  href="#topics"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold !text-foreground transition hover:bg-muted"
                >
                  Explore Topics
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            LEARNING SYSTEM
        ========================================================== */}
        <section className="border-b border-border/60 bg-muted/20">
          <Container>
            <div className="grid gap-6 py-14 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                  <BookIcon />
                </div>

                <h2 className="text-lg font-semibold text-foreground">
                  Structured Paths
                </h2>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Follow an organized sequence instead of jumping randomly
                  between unrelated topics.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                  <CodeIcon />
                </div>

                <h2 className="text-lg font-semibold text-foreground">
                  Practical Skills
                </h2>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Focus on concepts that can be applied through programming,
                  projects, and practical exercises.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                  <TargetIcon />
                </div>

                <h2 className="text-lg font-semibold text-foreground">
                  Long-Term Growth
                </h2>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Build foundations first, then progress toward advanced
                  development, AI, and professional skills.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            OVERVIEW
        ========================================================== */}
        <section className="border-b border-border/60">
          <Container>
            <div className="grid gap-4 py-12 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {learningPaths.length}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Learning Paths
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {learningTopics.length}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Core Topics
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {activePaths.length}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Active Paths
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            CATEGORIES
        ========================================================== */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Explore by category
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Choose the area you want to grow in.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                The learning platform is organized around practical areas of
                technology and professional development.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const pathCount = learningPaths.filter(
                  (path) => path.category === category,
                ).length;

                return (
                  <div
                    key={category}
                    className="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/20"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                        <CategoryIcon category={category} />
                      </div>

                      <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                        {pathCount}{" "}
                        {pathCount === 1 ? "path" : "paths"}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-foreground">
                      {category}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =========================================================
            LEARNING PATHS
        ========================================================== */}
        <section
          id="learning-paths"
          className="border-y border-border/60 bg-muted/20 py-20 sm:py-24"
        >
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Learning paths
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Structured routes from fundamentals to practical skills.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Each path is designed around a clear area of learning, with
                topics, skills, outcomes, and practical direction.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featuredPaths.map((path) => (
                <article
                  key={path.slug}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                      {path.category}
                    </span>

                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {path.level}
                    </span>

                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium capitalize text-muted-foreground">
                      {path.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                    {path.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {path.shortDescription}
                  </p>

                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Skills
                      </p>

                      <ul className="mt-3 space-y-2">
                        {path.skills.slice(0, 4).map((skill) => (
                          <li
                            key={skill}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <span className="mt-0.5 shrink-0 text-blue-500">
                              <CheckIcon />
                            </span>

                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Outcomes
                      </p>

                      <ul className="mt-3 space-y-2">
                        {path.outcomes.slice(0, 4).map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <span className="mt-0.5 shrink-0 text-blue-500">
                              <CheckIcon />
                            </span>

                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <Link
                      href={path.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold !text-foreground transition-all duration-300 group-hover:gap-3"
                    >
                      Explore learning path
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            CORE TOPICS
        ========================================================== */}
        <section id="topics" className="py-20 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Core topics
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Build knowledge one important topic at a time.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                These topics form the foundation of the wider learning
                platform and can later grow into complete courses and lessons.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTopics.map((topic) => (
                <div
                  key={topic.slug}
                  className="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/20"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                      <CodeIcon />
                    </span>

                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {topic.level}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {topic.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            ACADEMIC FOUNDATION
        ========================================================== */}
        <section className="border-y border-border/60 bg-muted/20 py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                  Academic foundation
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Strong fundamentals create stronger developers.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  Alongside modern development technologies, the platform
                  gives importance to computer science fundamentals such as
                  programming, algorithms, data structures, systems, and
                  software engineering.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                  The goal is not simply to learn a tool. It is to understand
                  the concepts that make it easier to learn new technologies
                  throughout a software development career.
                </p>

                <Link
                  href="/learn/computer-science"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold !text-foreground transition hover:bg-muted"
                >
                  Explore Computer Science
                  <ArrowIcon />
                </Link>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
                <p className="text-sm font-semibold text-muted-foreground">
                  University & programming foundation
                </p>

                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  C++ Programming Fundamentals
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Build a strong foundation in C++ programming for university
                  study, problem solving, and future software development.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Variables & Data Types",
                    "Conditions & Loops",
                    "Functions",
                    "Arrays & Strings",
                    "Pointers & References",
                    "OOP Foundations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground"
                    >
                      <span className="shrink-0 text-blue-500">
                        <CheckIcon />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            FUTURE PLATFORM
        ========================================================== */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                    Platform direction
                  </span>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    A learning platform designed to grow over time.
                  </h2>

                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    The current learning hub is the foundation. Future stages
                    can introduce complete courses, detailed lessons,
                    exercises, quizzes, progress tracking, certificates,
                    accounts, and personalized learning experiences.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {[
                      "Courses",
                      "Lessons",
                      "Projects",
                      "Quizzes",
                      "Progress",
                      "Certificates",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted text-foreground">
                  <SparkIcon />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="border-t border-border/60 bg-muted/20 py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Start learning
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learn the fundamentals. Build projects. Keep growing.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Explore the available learning paths and choose the direction
                that matches your current goals.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="#learning-paths"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold !text-background transition hover:opacity-90"
                >
                  Explore Learning Paths
                  <ArrowIcon />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold !text-foreground transition hover:bg-muted"
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