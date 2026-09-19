import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Yaseen Baloch, a BS Computer Science student, developer, and technology creator focused on software development, web development, programming, AI, and practical technology.",
  alternates: {
    canonical: "/about",
  },
};

const focusAreas = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building a strong foundation in software engineering, programming concepts, problem solving, and practical application development.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Learning modern web technologies and building responsive, accessible, and maintainable digital experiences.",
  },
  {
    number: "03",
    title: "Python & Programming",
    description:
      "Using Python to strengthen programming fundamentals, automation, problem solving, and software development skills.",
  },
  {
    number: "04",
    title: "Artificial Intelligence",
    description:
      "Exploring AI concepts, practical applications, APIs, automation, and the evolving role of intelligent software.",
  },
  {
    number: "05",
    title: "Computer Science",
    description:
      "Developing deeper understanding of algorithms, data structures, computer systems, databases, and core CS concepts.",
  },
  {
    number: "06",
    title: "Technology Education",
    description:
      "Documenting what I learn and turning technical knowledge into practical resources that can help other learners.",
  },
];

const principles = [
  {
    number: "01",
    title: "Learn deeply",
    description:
      "I focus on understanding the concepts behind the tools rather than simply using them. Strong fundamentals create better developers.",
  },
  {
    number: "02",
    title: "Build practically",
    description:
      "Projects turn knowledge into experience. I use practical work to test ideas, solve problems, and understand how systems work together.",
  },
  {
    number: "03",
    title: "Keep improving",
    description:
      "Technology changes continuously. I treat development as a long-term learning process and keep improving through practice and experimentation.",
  },
  {
    number: "04",
    title: "Share knowledge",
    description:
      "I believe learning becomes more valuable when it is shared. I document lessons, projects, ideas, and useful resources for other learners.",
  },
];

const journey = [
  {
    label: "Education",
    value: "BS Computer Science",
  },
  {
    label: "Primary Direction",
    value: "Software Development",
  },
  {
    label: "Learning",
    value: "Web • Python • AI",
  },
  {
    label: "Platform",
    value: "YaseenBaloch.com",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#070b14] text-white">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          aria-labelledby="about-heading"
          className="relative overflow-hidden border-b border-white/10"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_35%)]"
          />

          <div className="container mx-auto py-24 md:py-32">
            <div className="max-w-5xl">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-blue-500"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                  About Me
                </p>
              </div>

              <h1
                id="about-heading"
                className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl"
              >
                Learning technology.
                <span className="block text-slate-500">
                  Building my future.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m Yaseen Baloch, a BS Computer Science student,
                developer, and technology creator focused on learning,
                building, and sharing practical technology.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            JOURNEY SNAPSHOT
        ========================================================= */}
        <section
          aria-label="Journey overview"
          className="border-b border-white/10"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {journey.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-0 py-8 sm:px-7 ${
                    index === 0 ? "lg:pl-0" : ""
                  } ${index === journey.length - 1 ? "lg:pr-0" : ""}`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </p>

                  <p className="mt-3 text-sm font-medium leading-6 text-slate-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            STORY
        ========================================================= */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  My Journey
                </p>

                <h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  From learning
                  <span className="block text-slate-500">
                    to building.
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl space-y-6 text-base leading-8 text-slate-400">
                <p>
                  My journey in technology is built around a simple process:
                  learn a concept, understand how it works, build something
                  with it, and share what I discover.
                </p>

                <p>
                  I&apos;m currently studying Computer Science while developing
                  practical skills across programming, web development,
                  software development, artificial intelligence, and
                  automation.
                </p>

                <p>
                  My goal is to combine strong computer science fundamentals
                  with practical development experience so that I can
                  eventually build useful software and digital products that
                  solve real problems.
                </p>

                <p>
                  YaseenBaloch.com is being developed alongside that journey as
                  a long-term home for my projects, learning resources,
                  technical writing, experiments, and future work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CURRENT FOCUS
        ========================================================= */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="container mx-auto py-20 md:py-24">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Current Focus
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Areas I&apos;m
                <span className="block text-slate-500">
                  actively developing.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                These are the technical areas currently shaping my learning
                and development journey.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area) => (
                <article
                  key={area.number}
                  className="group bg-[#0d1422] p-7 transition duration-300 hover:bg-[#111b2d]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                      {area.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-slate-700 transition group-hover:text-blue-500"
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-lg font-semibold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PRINCIPLES
        ========================================================= */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  How I Learn
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Principles behind
                  <span className="block text-slate-500">
                    the journey.
                  </span>
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="border-t border-white/10 pt-6"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                      {principle.number}
                    </span>

                    <h3 className="mt-6 text-lg font-semibold text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LONG-TERM VISION
        ========================================================= */}
        <section className="border-t border-white/10">
          <div className="container mx-auto py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Long-Term Vision
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
                Become a stronger developer.
                <span className="block text-slate-500">
                  Build useful technology.
                </span>
                <span className="block text-slate-500">
                  Help others learn.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400">
                The long-term goal is to grow from a student and learner into
                a capable software engineer and technology builder while
                creating practical resources that make technology easier to
                understand.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="border-t border-white/10">
          <div className="container mx-auto py-20 md:py-24">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Explore
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  See what I&apos;m building.
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Explore the projects, experiments, and technologies that are
                  part of my development journey.
                </p>
              </div>

              <a
                href="/work"
                className="inline-flex w-fit items-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-500"
              >
                Explore My Work
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
