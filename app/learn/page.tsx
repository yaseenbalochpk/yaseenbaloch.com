import Link from "next/link";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  learningPaths,
  learningTopics,
} from "@/data/learning";

const categoryDescriptions: Record<string, string> = {
  Programming:
    "Build strong programming foundations through practical concepts, problem solving, and real projects.",

  "Web Development":
    "Learn how modern websites and web applications are designed, developed, tested, and deployed.",

  "Artificial Intelligence":
    "Explore practical AI concepts, modern AI tools, APIs, and automation workflows.",

  "Computer Science":
    "Understand the core concepts behind computers, algorithms, systems, and software development.",

  "Career & Freelancing":
    "Develop professional skills for freelancing, remote work, portfolios, communication, and digital careers.",
};

const categoryIcons: Record<string, string> = {
  Programming: "</>",
  "Web Development": "01",
  "Artificial Intelligence": "AI",
  "Computer Science": "CS",
  "Career & Freelancing": "↗",
};

function StatusBadge({ status }: { status: string }) {
  const label =
    status === "active"
      ? "Available"
      : status === "planned"
        ? "Planned"
        : "Coming Soon";

  return (
    <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted">
      {label}
    </span>
  );
}

function LevelBadge({ level }: { level: string }) {
  return (
    <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary">
      {level}
    </span>
  );
}

export default function LearnPage() {
  const featuredPaths = learningPaths.filter((path) => path.featured);
  const activePaths = learningPaths.filter(
    (path) => path.status === "active",
  );

  const categories = Array.from(
    new Set(learningPaths.map((path) => path.category)),
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-background text-foreground">
        {/* HERO */}
        <section className="relative border-b border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <Container>
            <div className="relative py-24 sm:py-28 lg:py-36">
              <div className="mx-auto max-w-4xl text-center">
                <span className="inline-flex rounded-full border border-border bg-surface px-5 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted">
                  Learn • Build • Grow
                </span>

                <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Learn technology through{" "}
                  <span className="text-primary">practical paths.</span>
                </h1>

                <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  Structured learning paths for programming, web development,
                  computer science, artificial intelligence, and professional
                  digital skills.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="#learning-paths"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 font-medium !text-white transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore Learning Paths
                    <span className="ml-2 text-lg">→</span>
                  </Link>

                  <Link
                    href="#topics"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-7 py-3.5 font-medium !text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Explore Topics
                  </Link>
                </div>
              </div>

              {/* PLATFORM STATS */}
              <div className="mx-auto mt-20 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-border bg-surface/60 p-7 text-center">
                  <p className="text-3xl font-semibold">{learningPaths.length}</p>
                  <p className="mt-2 text-sm text-muted">Learning Paths</p>
                </div>

                <div className="rounded-3xl border border-border bg-surface/60 p-7 text-center">
                  <p className="text-3xl font-semibold">
                    {learningTopics.length}
                  </p>
                  <p className="mt-2 text-sm text-muted">Core Topics</p>
                </div>

                <div className="rounded-3xl border border-border bg-surface/60 p-7 text-center">
                  <p className="text-3xl font-semibold">{activePaths.length}</p>
                  <p className="mt-2 text-sm text-muted">Active Paths</p>
                </div>

                <div className="rounded-3xl border border-border bg-surface/60 p-7 text-center">
                  <p className="text-3xl font-semibold">V1</p>
                  <p className="mt-2 text-sm text-muted">Learning Platform</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* LEARNING MODEL */}
        <section className="border-b border-border">
          <Container>
            <div className="py-20 sm:py-24">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  Learning System
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A clear path from learning to building.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  The education platform is designed around a simple hierarchy
                  that can grow over time without making the learning
                  experience complicated.
                </p>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Learning Paths",
                    text: "Choose a structured direction based on your goals.",
                  },
                  {
                    number: "02",
                    title: "Courses",
                    text: "Move through focused courses inside each path.",
                  },
                  {
                    number: "03",
                    title: "Lessons",
                    text: "Learn concepts through organized lessons and practice.",
                  },
                  {
                    number: "04",
                    title: "Resources",
                    text: "Use references, tools, projects, and supporting material.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  >
                    <span className="text-sm font-medium text-primary">
                      {item.number}
                    </span>

                    <h3 className="mt-8 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CATEGORIES */}
        <section className="border-b border-border">
          <Container>
            <div className="py-20 sm:py-24">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  Categories
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Choose what you want to learn.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  The platform is organized around practical technical and
                  professional areas so learners can choose a clear direction.
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  >
                    <div className="absolute right-5 top-5 text-5xl font-semibold text-primary/10">
                      {categoryIcons[category] ?? "•"}
                    </div>

                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-sm font-semibold text-primary">
                        {categoryIcons[category] ?? "•"}
                      </div>

                      <h3 className="mt-7 text-xl font-semibold">
                        {category}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {categoryDescriptions[category] ??
                          "Explore practical learning material in this area."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FEATURED LEARNING PATHS */}
        <section id="learning-paths" className="border-b border-border">
          <Container>
            <div className="py-20 sm:py-24">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                    Learning Paths
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Structured paths for real skills.
                  </h2>

                  <p className="mt-5 text-base leading-8 text-muted">
                    Start with a clear path, understand the fundamentals, and
                    gradually move toward practical projects and advanced
                    concepts.
                  </p>
                </div>

                <span className="text-sm text-muted">
                  {featuredPaths.length} featured paths
                </span>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {featuredPaths.map((path) => (
                  <article
                    key={path.slug}
                    className="group rounded-[2rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 sm:p-9"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <LevelBadge level={path.level} />
                        <StatusBadge status={path.status} />
                      </div>

                      <span className="text-sm text-muted">
                        {path.category}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                      {path.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted">
                      {path.shortDescription}
                    </p>

                    <div className="mt-7">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                        What you will explore
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {path.topics.slice(0, 6).map((topic) => (
                          <span
                            key={topic}
                            className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-border pt-6">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted">
                            Skills
                          </p>

                          <p className="mt-2 text-sm leading-6">
                            {path.skills.slice(0, 3).join(" • ")}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted">
                            Outcome
                          </p>

                          <p className="mt-2 text-sm leading-6">
                            {path.outcomes[0]}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={path.href}
                      className="mt-8 inline-flex items-center font-medium !text-foreground transition-colors hover:!text-primary"
                    >
                      Explore path
                      <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* TOPICS */}
        <section id="topics" className="border-b border-border">
          <Container>
            <div className="py-20 sm:py-24">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  Core Topics
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Learn the technologies that matter.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  Topics are organized so you can build knowledge step by step,
                  from programming fundamentals to modern development and AI.
                </p>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {learningTopics.map((topic) => (
                  <div
                    key={topic.slug}
                    className="rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <LevelBadge level={topic.level} />
                      <StatusBadge status={topic.status} />
                    </div>

                    <h3 className="mt-7 text-xl font-semibold">
                      {topic.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* C++ / UNIVERSITY FOUNDATION */}
        <section className="border-b border-border">
          <Container>
            <div className="py-20 sm:py-24">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                    Academic Foundation
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    University learning belongs here too.
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                    The platform is not limited to modern frameworks. It also
                    supports the computer science fundamentals students study
                    at university, including programming concepts and
                    languages such as C++.
                  </p>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                    C++, algorithms, data structures, problem solving, and
                    computer science foundations can become dedicated courses
                    and lessons as the education platform grows.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-border bg-surface p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "C++",
                      "Python",
                      "JavaScript",
                      "Algorithms",
                      "Data Structures",
                      "Computer Science",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border bg-background p-5 text-center text-sm font-medium"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FUTURE PLATFORM */}
        <section className="border-b border-border">
          <Container>
            <div className="py-20 sm:py-24">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  Built to Grow
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A learning platform, not just a page.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  The current version focuses on a strong content architecture.
                  Future versions can add interactive learning features without
                  rebuilding the foundation.
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Quizzes",
                    text: "Practice concepts and test understanding.",
                  },
                  {
                    title: "Progress",
                    text: "Track lessons, courses, and learning paths.",
                  },
                  {
                    title: "Certificates",
                    text: "Recognize completed learning experiences.",
                  },
                  {
                    title: "Accounts",
                    text: "Create a personalized learner experience.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-border bg-surface p-7"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section>
          <Container>
            <div className="py-24 text-center sm:py-32">
              <span className="inline-flex rounded-full border border-border bg-surface px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-muted">
                Start Learning
              </span>

              <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Learn something useful. Then build with it.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Explore a learning path, strengthen your fundamentals, and
                turn knowledge into practical projects.
              </p>

              <div className="mt-9">
                <Link
                  href="#learning-paths"
                  className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-medium !text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore Learning Paths
                  <span className="ml-2">→</span>
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