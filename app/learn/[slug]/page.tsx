import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { courses } from "@/data/courses";

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
  if (category === "Programming") {
    return <CodeIcon />;
  }

  if (category === "Web Development") {
    return <BookIcon />;
  }

  if (category === "Computer Science") {
    return <TargetIcon />;
  }

  if (category === "Artificial Intelligence") {
    return <TargetIcon />;
  }

  return <BookIcon />;
}

function getCourseBySlug(slug: string) {
  return courses.find((course) => {
    const hrefSlug = course.href
      .split("/")
      .filter(Boolean)
      .pop();

    return course.slug === slug || hrefSlug === slug;
  });
}

export function generateStaticParams() {
  const slugs = courses.flatMap((course) => {
    const hrefSlug = course.href
      .split("/")
      .filter(Boolean)
      .pop();

    return [course.slug, hrefSlug].filter(
      (value): value is string => Boolean(value),
    );
  });

  return Array.from(new Set(slugs)).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Yaseen Baloch",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | Yaseen Baloch`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter(
      (item) =>
        item.pathSlug === course.pathSlug &&
        item.slug !== course.slug,
    )
    .slice(0, 3);

  const isActive = course.status === "active";

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* =========================================================
            BREADCRUMB
        ========================================================== */}
        <section className="border-b border-border/60">
          <Container>
            <div className="flex flex-wrap items-center gap-2 py-5 text-sm text-muted-foreground">
              <Link
                href="/learn"
                className="transition hover:text-foreground"
              >
                Learn
              </Link>

              <span>/</span>

              <Link
                href="/learn/courses"
                className="transition hover:text-foreground"
              >
                Courses
              </Link>

              <span>/</span>

              <span className="truncate text-foreground">
                {course.title}
              </span>
            </div>
          </Container>
        </section>

        {/* =========================================================
            COURSE HERO
        ========================================================== */}
        <section className="relative border-b border-border/60">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-0 top-48 h-[280px] w-[280px] rounded-full bg-cyan-400/5 blur-3xl" />
          </div>

          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
                {/* Main information */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground">
                      <CategoryIcon category={course.category} />
                      {course.category}
                    </span>

                    <span className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                      {course.level}
                    </span>

                    <span className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                      {course.format}
                    </span>

                    <span className="rounded-full border border-border px-3 py-1.5 text-xs font-medium capitalize text-muted-foreground">
                      {course.status}
                    </span>
                  </div>

                  <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {course.title}
                  </h1>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {course.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {isActive ? (
                      <Link
                        href="#course-content"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold !text-background transition hover:opacity-90"
                      >
                        Start Course
                        <ArrowIcon />
                      </Link>
                    ) : (
                      <span className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-muted px-6 py-3 text-sm font-semibold text-muted-foreground">
                        Course Coming Soon
                      </span>
                    )}

                    <Link
                      href="/learn/courses"
                      className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold !text-foreground transition hover:bg-muted"
                    >
                      All Courses
                    </Link>
                  </div>
                </div>

                {/* Course summary card */}
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                    <BookIcon />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-foreground">
                    Course Overview
                  </h2>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">
                        Level
                      </span>

                      <span className="text-sm font-semibold text-foreground">
                        {course.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">
                        Format
                      </span>

                      <span className="text-sm font-semibold text-foreground">
                        {course.format}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">
                        Duration
                      </span>

                      <span className="text-right text-sm font-semibold text-foreground">
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                      <span className="text-sm text-muted-foreground">
                        Lessons
                      </span>

                      <span className="text-sm font-semibold text-foreground">
                        {course.lessonsCount}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-muted-foreground">
                        Instructor
                      </span>

                      <span className="text-right text-sm font-semibold text-foreground">
                        {course.instructor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            COURSE CONTENT
        ========================================================== */}
        <section
          id="course-content"
          className="py-20 sm:py-24"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
              {/* Main content */}
              <div>
                {/* What you'll learn */}
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                    Learning outcomes
                  </span>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    What you will learn
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                    By completing this course, you will develop the following
                    knowledge and practical capabilities.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {course.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-blue-500">
                          <CheckIcon />
                        </span>

                        <span className="text-sm leading-6 text-foreground">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topics */}
                <div className="mt-20">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                    Curriculum
                  </span>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Course topics
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                    The course is organized around the following core topics.
                    Detailed lessons will be added as the education platform
                    develops.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
                    {course.topics.map((topic, index) => (
                      <div
                        key={topic}
                        className="flex items-center gap-4 border-b border-border p-5 last:border-b-0"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-medium text-foreground sm:text-base">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-20">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                    Skills
                  </span>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Skills you will develop
                  </h2>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                {course.prerequisites &&
                  course.prerequisites.length > 0 && (
                    <div className="mt-20">
                      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                        Before you start
                      </span>

                      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Prerequisites
                      </h2>

                      <div className="mt-7 space-y-3">
                        {course.prerequisites.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                          >
                            <span className="mt-0.5 text-blue-500">
                              <CheckIcon />
                            </span>

                            <span className="text-sm leading-6 text-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-3xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">
                    Course information
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-foreground">
                    {course.title}
                  </h3>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-xl border border-border bg-muted/40 p-4">
                      <p className="text-xs text-muted-foreground">
                        Learning level
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {course.level}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-muted/40 p-4">
                      <p className="text-xs text-muted-foreground">
                        Course format
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {course.format}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-muted/40 p-4">
                      <p className="text-xs text-muted-foreground">
                        Estimated duration
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {course.duration}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-muted/40 p-4">
                      <p className="text-xs text-muted-foreground">
                        Planned lessons
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {course.lessonsCount}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    {isActive ? (
                      <Link
                        href="#course-content"
                        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold !text-background transition hover:opacity-90"
                      >
                        Start Learning
                        <ArrowIcon />
                      </Link>
                    ) : (
                      <div className="rounded-xl border border-border bg-muted p-4 text-center">
                        <p className="text-sm font-semibold text-foreground">
                          Coming Soon
                        </p>

                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          This course is part of the future learning roadmap.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* =========================================================
            RELATED COURSES
        ========================================================== */}
        {relatedCourses.length > 0 && (
          <section className="border-y border-border/60 bg-muted/20 py-20 sm:py-24">
            <Container>
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                  Continue learning
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Related courses
                </h2>

                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Explore other courses connected to the same learning path.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {relatedCourses.map((relatedCourse) => (
                  <article
                    key={relatedCourse.slug}
                    className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/20"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">
                        {relatedCourse.level}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        {relatedCourse.lessonsCount} lessons
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {relatedCourse.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {relatedCourse.shortDescription}
                    </p>

                    <Link
                      href={relatedCourse.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold !text-foreground transition-all duration-300 group-hover:gap-3"
                    >
                      View course
                      <ArrowIcon />
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            FUTURE LESSON ENGINE
        ========================================================== */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                    Next learning layer
                  </span>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    This course page is ready for lessons.
                  </h2>

                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    The next stage can connect each course with individual
                    lessons, coding exercises, projects, quizzes, progress
                    tracking, and certificates without rebuilding the course
                    architecture.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {[
                      "Lessons",
                      "Exercises",
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
                  <BookIcon />
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
                Keep building
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learn the concept. Practice the skill. Build something real.
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Continue exploring courses and learning paths across the
                platform.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/learn/courses"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold !text-background transition hover:opacity-90"
                >
                  Explore All Courses
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
      </main>

      <Footer />
    </>
  );
}
