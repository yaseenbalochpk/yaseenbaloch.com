import Link from "next/link";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { courses } from "@/data/courses";

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
    "Build programming skills through structured concepts, exercises, and practical development.",

  "Web Development":
    "Learn modern web development from HTML and CSS to JavaScript, React, and Next.js.",

  "Artificial Intelligence":
    "Explore practical AI concepts, modern AI tools, APIs, prompting, and automation.",

  "Computer Science":
    "Strengthen the technical foundations behind programming, systems, algorithms, and software.",

  "Career & Freelancing":
    "Develop professional skills for freelancing, remote work, communication, and personal branding.",
};

export default function CoursesPage() {
  const featuredCourses = courses.filter((course) => course.featured);

  const activeCourses = courses.filter(
    (course) => course.status === "active",
  );

  const plannedCourses = courses.filter(
    (course) => course.status === "planned",
  );

  const categories = Array.from(
    new Set(courses.map((course) => course.category)),
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
                Courses • Projects • Practical Learning
              </span>

              <h1 className="mt-7 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Learn through{" "}
                <span className="text-blue-500">
                  structured courses.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Practical courses designed to turn concepts into useful
                technical skills through structured learning, exercises, and
                project-based practice.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#courses"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold !text-background transition hover:opacity-90"
                >
                  Explore Courses
                  <ArrowIcon />
                </Link>

                <Link
                  href="/learn"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold !text-foreground transition hover:bg-muted"
                >
                  Learning Hub
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            COURSE STATS
        ========================================================== */}
        <section className="border-b border-border/60">
          <Container>
            <div className="grid gap-4 py-12 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {courses.length}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Total Courses
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {activeCourses.length}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Active Courses
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {plannedCourses.length}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Planned Courses
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
                Course categories
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Choose your learning direction.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Courses are organized into focused areas so you can build
                technical and professional skills with a clear direction.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const count = courses.filter(
                  (course) => course.category === category,
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
                        {count} {count === 1 ? "course" : "courses"}
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
            FEATURED COURSES
        ========================================================== */}
        <section
          id="courses"
          className="border-y border-border/60 bg-muted/20 py-20 sm:py-24"
        >
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Featured courses
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Build skills with focused, practical courses.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Each course is organized around a clear skill area, learning
                level, practical topics, and measurable outcomes.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featuredCourses.map((course) => (
                <article
                  key={course.slug}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 sm:p-8"
                >
                  {/* Course labels */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                      {course.category}
                    </span>

                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {course.level}
                    </span>

                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {course.format}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {course.shortDescription}
                  </p>

                  {/* Course metadata */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-border bg-muted/40 p-4">
                      <p className="text-xs text-muted-foreground">
                        Duration
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {course.duration}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-muted/40 p-4">
                      <p className="text-xs text-muted-foreground">
                        Lessons
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {course.lessonsCount}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-muted/40 p-4">
                      <p className="text-xs text-muted-foreground">
                        Instructor
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-foreground">
                        {course.instructor}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Skills
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {course.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      What you will learn
                    </p>

                    <ul className="mt-3 space-y-2">
                      {course.outcomes.slice(0, 3).map((outcome) => (
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

                  {/* Action */}
                  <div className="mt-auto border-t border-border pt-6">
                    {course.status === "active" ? (
                      <Link
                        href={course.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold !text-foreground transition-all duration-300 group-hover:gap-3"
                      >
                        View course
                        <ArrowIcon />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center rounded-xl border border-border bg-muted px-4 py-2.5 text-sm font-medium text-muted-foreground">
                        Coming in a future stage
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            LEARNING MODEL
        ========================================================== */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Learning model
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learn the concept. Practice it. Build with it.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                The goal is to turn learning into practical technical ability,
                not simply passive content consumption.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-7">
                <span className="text-sm font-bold text-blue-500">
                  01
                </span>

                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Understand
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Learn the core concept through structured explanations,
                  examples, and demonstrations.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7">
                <span className="text-sm font-bold text-blue-500">
                  02
                </span>

                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Practice
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Reinforce knowledge through exercises, coding tasks, and
                  focused practice.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7">
                <span className="text-sm font-bold text-blue-500">
                  03
                </span>

                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Build
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Apply your knowledge through practical projects and
                  portfolio-ready work.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            COURSE STRUCTURE
        ========================================================== */}
        <section className="border-y border-border/60 bg-muted/20 py-20 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                  Course structure
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  A foundation for a complete education platform.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Courses are connected to learning paths and are designed to
                  become the foundation for detailed lessons, exercises,
                  projects, quizzes, and future learner progress.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Learning Path",
                  "Course",
                  "Lessons",
                  "Exercises",
                  "Projects",
                  "Quizzes",
                  "Progress",
                  "Certificates",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            FUTURE DIRECTION
        ========================================================== */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12">
              <div className="max-w-3xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                  Future direction
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  From course catalog to complete learning experience.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Future versions can introduce detailed course pages,
                  lesson navigation, coding exercises, quizzes, learner
                  accounts, progress tracking, certificates, and personalized
                  learning experiences.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Detailed Lessons",
                    "Coding Exercises",
                    "Quizzes",
                    "Progress Tracking",
                    "Certificates",
                    "Learner Accounts",
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
                Keep learning
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Choose a course and start building your skills.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Explore the available courses or return to the learning hub
                to choose a broader learning path.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="#courses"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold !text-background transition hover:opacity-90"
                >
                  Explore Courses
                  <ArrowIcon />
                </Link>

                <Link
                  href="/learn"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold !text-foreground transition hover:bg-muted"
                >
                  Back to Learning Hub
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