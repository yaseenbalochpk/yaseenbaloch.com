import Navbar from "@/components/Navbar";

const projects = [
  {
    number: "01",
    category: "PERSONAL PLATFORM",
    title: "YaseenBaloch.com",
    description:
      "A long-term personal platform bringing together my developer portfolio, technology journey, educational content, resources, and future digital products.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Development",
  },
  {
    number: "02",
    category: "PYTHON DEVELOPMENT",
    title: "Python Project Collection",
    description:
      "A growing collection of practical Python projects created to strengthen programming fundamentals, problem solving, automation, and software development skills.",
    technologies: ["Python", "Git", "GitHub"],
    status: "Growing",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Web Development Projects",
    description:
      "A collection of responsive websites and web applications built while learning modern frontend and full-stack development.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    status: "Growing",
  },
  {
    number: "04",
    category: "AI & AUTOMATION",
    title: "AI Automation Experiments",
    description:
      "Practical experiments exploring artificial intelligence, APIs, automation workflows, and ways to turn emerging technology into useful solutions.",
    technologies: ["AI", "APIs", "Automation"],
    status: "Exploring",
  },
];

const focusAreas = [
  "Web Development",
  "Python",
  "Artificial Intelligence",
  "Automation",
  "Computer Science",
  "Software Development",
];

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#070b14] text-white">
        {/* =========================================================
            PAGE HERO
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%)]" />

          <div className="container mx-auto py-24 md:py-32">
            <div className="max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                  Portfolio
                </p>
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[1] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                Work, projects
                <span className="block text-slate-500">
                  & experiments.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A growing collection of software projects and experiments
                created throughout my journey in computer science,
                development, and emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO / STATS
        ========================================================= */}
        <section className="border-b border-white/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
              <div className="px-4 py-8 first:pl-0 md:px-8">
                <p className="text-2xl font-bold text-white">04</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                  Current Areas
                </p>
              </div>

              <div className="px-4 py-8 md:px-8">
                <p className="text-2xl font-bold text-white">01</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                  Main Platform
                </p>
              </div>

              <div className="border-t border-white/10 px-4 py-8 md:border-t-0 md:px-8">
                <p className="text-2xl font-bold text-white">∞</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                  Learning Ahead
                </p>
              </div>

              <div className="border-t border-white/10 px-4 py-8 last:pr-0 md:border-t-0 md:px-8">
                <p className="text-2xl font-bold text-white">2026</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                  Current Journey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECTS
        ========================================================= */}
        <section className="section">
          <div className="container mx-auto">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Selected Projects
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Things I&apos;m building and exploring.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Each project represents a step in the journey — from learning
                fundamental concepts to building practical software.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1422] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  {/* Decorative glow */}
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/[0.05] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.1]" />

                  <div className="relative p-7 md:p-9">
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-xs font-semibold tracking-[0.25em] text-blue-400">
                        {project.number}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-slate-400">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-14 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="mt-5 min-h-[120px] max-w-xl text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-sm text-slate-500">
                        Detailed case study
                      </span>

                      <span className="text-sm font-medium text-slate-600">
                        Coming soon
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FOCUS AREAS
        ========================================================= */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="container mx-auto py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Areas of Focus
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Where I&apos;m
                  <span className="block text-slate-500">
                    investing my learning.
                  </span>
                </h2>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-center gap-5 bg-[#0d1422] p-6 transition hover:bg-[#111b2d]"
                  >
                    <span className="text-xs font-semibold text-blue-400">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-slate-200">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CASE STUDY SYSTEM
        ========================================================= */}
        <section className="section">
          <div className="container mx-auto">
            <div className="rounded-3xl border border-white/10 bg-[#0d1422] p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Future Case Studies
                </p>

                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                  Projects will tell the
                  <span className="block text-slate-500">
                    story behind the code.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  As projects mature, each important project will receive its
                  own detailed case study covering the problem, goals,
                  approach, architecture, technologies, challenges, lessons,
                  and final outcome.
                </p>
              </div>

              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Problem",
                  "Approach",
                  "Technology",
                  "Outcome",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="bg-[#0b111d] p-5"
                  >
                    <span className="text-xs font-semibold text-blue-400">
                      0{index + 1}
                    </span>

                    <p className="mt-4 text-sm font-medium text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="border-t border-white/10">
          <div className="container mx-auto py-20 md:py-28">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  What&apos;s Next
                </p>

                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                  More projects.
                  <span className="block text-slate-500">
                    More problems. More learning.
                  </span>
                </h2>
              </div>

              <a
                href="/#contact"
                className="inline-flex w-fit items-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Start a Conversation
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
