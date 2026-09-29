import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { courses } from "@/data/courses";
import { lessons } from "@/data/lessons";

type LessonPageProps = {
  params: Promise<{
    courseSlug: string;
    lessonSlug: string;
  }>;
};

function findCourse(slug: string) {
  return courses.find((course) => {
    const hrefSlug = course.href.split("/").filter(Boolean).pop();

    return course.slug === slug || hrefSlug === slug;
  });
}

function findLesson(courseSlug: string, lessonSlug: string) {
  return lessons.find(
    (lesson) =>
      lesson.courseSlug === courseSlug &&
      lesson.slug === lessonSlug,
  );
}

function getLessonUrl(
  courseSlug: string,
  lessonSlug: string,
) {
  return `/learn/course/${courseSlug}/lesson/${lessonSlug}`;
}

function getStatusLabel(status: string) {
  if (status === "active") return "Available";
  if (status === "planned") return "Planned";
  if (status === "coming-soon") return "Coming Soon";

  return status;
}

function getStatusClass(status: string) {
  if (status === "active") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  if (status === "planned") {
    return "border-amber-400/20 bg-amber-400/10 text-amber-300";
  }

  return "border-blue-400/20 bg-blue-400/10 text-blue-300";
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    courseSlug: lesson.courseSlug,
    lessonSlug: lesson.slug,
  }));
}

export async function generateMetadata({
  params,
}: LessonPageProps) {
  const { courseSlug, lessonSlug } = await params;

  const course = findCourse(courseSlug);

  if (!course) {
    return {
      title: "Lesson Not Found | Yaseen Baloch",
      description: "The requested lesson could not be found.",
    };
  }

  const lesson = findLesson(course.slug, lessonSlug);

  if (!lesson) {
    return {
      title: "Lesson Not Found | Yaseen Baloch",
      description: "The requested lesson could not be found.",
    };
  }

  return {
    title: `${lesson.title} | ${course.title} | Yaseen Baloch`,
    description: lesson.description,
  };
}

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { courseSlug, lessonSlug } = await params;

  const course = findCourse(courseSlug);

  if (!course) {
    notFound();
  }

  const lesson = findLesson(course.slug, lessonSlug);

  if (!lesson) {
    notFound();
  }

  const courseLessons = lessons
    .filter((item) => item.courseSlug === course.slug)
    .sort((a, b) => a.order - b.order);

  const currentIndex = courseLessons.findIndex(
    (item) => item.slug === lesson.slug,
  );

  const previousLesson =
    currentIndex > 0
      ? courseLessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex >= 0 &&
    currentIndex < courseLessons.length - 1
      ? courseLessons[currentIndex + 1]
      : null;

  const currentLessonNumber =
    currentIndex >= 0 ? currentIndex + 1 : 1;

  const progress =
    courseLessons.length > 0
      ? Math.round(
          (currentLessonNumber / courseLessons.length) * 100,
        )
      : 0;

  /*
   * Some lessons have prerequisites while others do not.
   * This check safely handles both cases.
   */
  const prerequisites =
    "prerequisites" in lesson
      ? lesson.prerequisites
      : undefined;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <section className="border-b border-white/10">
          <Container>
            <div className="flex flex-wrap items-center gap-2 py-5 text-sm">
              <Link
                href="/learn"
                className="text-foreground/50 transition hover:text-foreground"
              >
                Learn
              </Link>

              <span className="text-foreground/20">/</span>

              <Link
                href="/learn/courses"
                className="text-foreground/50 transition hover:text-foreground"
              >
                Courses
              </Link>

              <span className="text-foreground/20">/</span>

              <Link
                href={`/learn/${course.slug}`}
                className="max-w-[220px] truncate text-foreground/50 transition hover:text-foreground"
              >
                {course.title}
              </Link>

              <span className="text-foreground/20">/</span>

              <span className="max-w-[220px] truncate text-foreground/80">
                {lesson.title}
              </span>
            </div>
          </Container>
        </section>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-0 top-1/3 h-[260px] w-[260px] rounded-full bg-emerald-400/5 blur-3xl" />
          </div>

          <Container>
            <div className="relative py-16 sm:py-20 lg:py-24">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
                    Lesson {lesson.order}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/70">
                    {lesson.type}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/70">
                    {lesson.duration}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClass(
                      lesson.status,
                    )}`}
                  >
                    {getStatusLabel(lesson.status)}
                  </span>
                </div>

                <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {lesson.title}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/65 sm:text-lg">
                  {lesson.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={`/learn/${course.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    ← Back to Course
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Main */}
        <section className="py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
              {/* Main Content */}
              <div className="min-w-0 space-y-8">
                {/* Overview */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Lesson Overview
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    What you will learn
                  </h2>

                  <p className="mt-6 text-base leading-8 text-foreground/65">
                    {lesson.description}
                  </p>
                </section>

                {/* Objectives */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Learning Objectives
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    By the end of this lesson
                  </h2>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {lesson.objectives.map(
                      (objective: string) => (
                        <div
                          key={objective}
                          className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 p-4"
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />

                          <p className="text-sm leading-6 text-foreground/70">
                            {objective}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </section>

                {/* Topics */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Lesson Topics
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    Topics Covered
                  </h2>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {lesson.topics.map((topic: string) => (
                      <span
                        key={topic}
                        className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-foreground/70"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Content Foundation */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                    Lesson Content
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    Learn. Practice. Build.
                  </h2>

                  <div className="mt-7 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                      <p className="font-semibold text-foreground">
                        01 — Understand
                      </p>

                      <p className="mt-2 text-sm leading-6 text-foreground/55">
                        Build a clear conceptual understanding of the
                        topic before moving into implementation.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                      <p className="font-semibold text-foreground">
                        02 — Practice
                      </p>

                      <p className="mt-2 text-sm leading-6 text-foreground/55">
                        Apply the concept through practical examples
                        and development exercises.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                      <p className="font-semibold text-foreground">
                        03 — Build
                      </p>

                      <p className="mt-2 text-sm leading-6 text-foreground/55">
                        Turn knowledge into practical skills through
                        coding tasks and projects.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-5">
                    <p className="text-sm leading-7 text-foreground/50">
                      Detailed explanations, examples, coding exercises,
                      quizzes, and interactive features will be added as
                      the learning platform grows.
                    </p>
                  </div>
                </section>

                {/* Prerequisites */}
                {prerequisites &&
                  prerequisites.length > 0 && (
                    <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                        Before You Start
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold text-foreground">
                        Recommended Prerequisites
                      </h2>

                      <div className="mt-6 space-y-3">
                        {prerequisites.map(
                          (item: string) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-sm text-foreground/65"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />

                              {item}
                            </div>
                          ),
                        )}
                      </div>
                    </section>
                  )}

                {/* Previous / Next */}
                <div className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
                  {previousLesson ? (
                    <Link
                      href={getLessonUrl(
                        course.slug,
                        previousLesson.slug,
                      )}
                      className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <p className="text-xs uppercase tracking-[0.15em] text-foreground/40">
                        Previous Lesson
                      </p>

                      <p className="mt-3 font-semibold text-foreground">
                        ← {previousLesson.title}
                      </p>

                      <p className="mt-2 text-xs text-foreground/40">
                        Lesson {previousLesson.order}
                      </p>
                    </Link>
                  ) : (
                    <Link
                      href={`/learn/${course.slug}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20"
                    >
                      <p className="text-xs uppercase tracking-[0.15em] text-foreground/40">
                        Course
                      </p>

                      <p className="mt-3 font-semibold text-foreground">
                        ← Back to Course
                      </p>
                    </Link>
                  )}

                  {nextLesson ? (
                    <Link
                      href={getLessonUrl(
                        course.slug,
                        nextLesson.slug,
                      )}
                      className="rounded-2xl border border-blue-400/15 bg-blue-400/[0.04] p-5 text-right transition hover:border-blue-400/30"
                    >
                      <p className="text-xs uppercase tracking-[0.15em] text-blue-300/70">
                        Next Lesson
                      </p>

                      <p className="mt-3 font-semibold text-foreground">
                        {nextLesson.title} →
                      </p>

                      <p className="mt-2 text-xs text-foreground/40">
                        Lesson {nextLesson.order}
                      </p>
                    </Link>
                  ) : (
                    <Link
                      href={`/learn/${course.slug}`}
                      className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5 text-right transition hover:border-emerald-400/30"
                    >
                      <p className="text-xs uppercase tracking-[0.15em] text-emerald-300/70">
                        Course
                      </p>

                      <p className="mt-3 font-semibold text-foreground">
                        Course Overview →
                      </p>
                    </Link>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="space-y-5">
                  {/* Course */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-foreground/40">
                      Current Course
                    </p>

                    <h2 className="mt-2 font-semibold text-foreground">
                      {course.title}
                    </h2>

                    <div className="mt-6">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-foreground/40">
                          Curriculum Progress
                        </span>

                        <span className="text-foreground/70">
                          {progress}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-blue-400"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>

                      <p className="mt-2 text-xs text-foreground/35">
                        Lesson {currentLessonNumber} of{" "}
                        {courseLessons.length}
                      </p>
                    </div>

                    <Link
                      href={`/learn/${course.slug}`}
                      className="mt-5 block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-foreground transition hover:bg-white/[0.08]"
                    >
                      View Course
                    </Link>
                  </div>

                  {/* Lessons */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-3">
                    <div className="px-3 pb-3 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/40">
                        Course Lessons
                      </p>
                    </div>

                    <nav className="max-h-[520px] space-y-1 overflow-y-auto">
                      {courseLessons.map((item) => {
                        const active =
                          item.slug === lesson.slug;

                        return (
                          <Link
                            key={item.slug}
                            href={getLessonUrl(
                              course.slug,
                              item.slug,
                            )}
                            className={`block rounded-2xl p-3 transition ${
                              active
                                ? "border border-blue-400/20 bg-blue-400/10"
                                : "border border-transparent hover:border-white/10 hover:bg-white/[0.04]"
                            }`}
                          >
                            <div className="flex gap-3">
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                                  active
                                    ? "bg-blue-400/15 text-blue-300"
                                    : "bg-white/5 text-foreground/40"
                                }`}
                              >
                                {String(item.order).padStart(
                                  2,
                                  "0",
                                )}
                              </span>

                              <div className="min-w-0">
                                <p
                                  className={`text-sm font-medium ${
                                    active
                                      ? "text-foreground"
                                      : "text-foreground/60"
                                  }`}
                                >
                                  {item.title}
                                </p>

                                <p className="mt-1 text-xs text-foreground/35">
                                  {item.duration} · {item.type}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </nav>
                  </div>

                  {/* Future Features */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                      Coming Later
                    </p>

                    <h3 className="mt-2 font-semibold text-foreground">
                      Interactive Learning
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-foreground/50">
                      Quizzes, coding exercises, progress tracking,
                      completion status, and certificates will be added
                      in future stages.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Keep Learning
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Learn the concept. Practice the skill. Build the project.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-foreground/55 sm:text-base">
                Continue exploring the course and turn every lesson into
                practical development experience.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href={`/learn/${course.slug}`}
                  className="rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Back to Course
                </Link>

                <Link
                  href="/learn"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.08]"
                >
                  Explore Learning
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