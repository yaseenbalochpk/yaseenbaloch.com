import Link from "next/link";

const services = [
  {
    number: "01",
    category: "Development",
    title: "Web Development",
    description:
      "Responsive websites and modern web applications designed around clear goals, strong usability, and maintainable code.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    number: "02",
    category: "Software",
    title: "Python Development",
    description:
      "Practical Python solutions for automation, scripting, APIs, backend systems, and software projects.",
    technologies: ["Python", "APIs", "Automation", "Backend"],
  },
  {
    number: "03",
    category: "AI & Automation",
    title: "AI & Automation",
    description:
      "Practical AI-powered workflows that connect tools, automate repetitive processes, and turn ideas into useful systems.",
    technologies: ["AI", "APIs", "Automation", "Workflows"],
  },
  {
    number: "04",
    category: "Web Design",
    title: "Landing Pages",
    description:
      "Focused landing pages that communicate a product, service, or idea clearly across mobile, tablet, and desktop.",
    technologies: ["UI Design", "Responsive", "SEO", "Performance"],
  },
  {
    number: "05",
    category: "Support",
    title: "Website Maintenance",
    description:
      "Technical updates, improvements, bug fixes, content changes, and ongoing maintenance for existing websites.",
    technologies: ["Updates", "Bug Fixes", "Optimization", "Maintenance"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the idea, problem, audience, requirements, and desired outcome before deciding what to build.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the scope, structure, technology, priorities, and development approach for the project.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the plan into a responsive and functional product with clean, understandable, and maintainable code.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Test the experience, identify issues, improve performance, and prepare the solution for its next stage.",
  },
];

const principles = [
  {
    title: "Clear Communication",
    description:
      "Keep requirements, progress, and decisions understandable throughout the project.",
  },
  {
    title: "Practical Solutions",
    description:
      "Choose technology according to the problem instead of adding complexity without purpose.",
  },
  {
    title: "Responsive Experience",
    description:
      "Design and develop experiences that work naturally across different screen sizes.",
  },
  {
    title: "Maintainable Code",
    description:
      "Build with structure and clarity so the project can be understood and improved later.",
  },
  {
    title: "Performance Awareness",
    description:
      "Consider loading speed, usability, accessibility, and technical quality during development.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Where appropriate, structure projects so they have room to evolve as requirements grow.",
  },
];

const projectTypes = [
  "Business Website",
  "Portfolio Website",
  "Landing Page",
  "Web Application",
  "Python Project",
  "Automation Workflow",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.16),transparent_60%)]"
        />

        <div className="container mx-auto px-6 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-blue-500"
              />
              Services
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Turning ideas into
              <span className="block text-blue-500">
                practical digital solutions.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Development and technology services focused on building useful
              websites, software, automation workflows, and digital
              experiences.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
              >
                Explore Services
              </a>

              <Link
                href="/work"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500/40 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
              >
                View Selected Work
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Approach
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Start with the problem, then choose the technology.
              </h2>
            </div>

            <div className="max-w-2xl space-y-5 text-base leading-8 text-slate-400">
              <p>
                Good software is not simply a collection of technologies. It
                should solve a clearly understood problem and provide a useful
                experience for the people who use it.
              </p>

              <p>
                That is why the process starts with understanding the goal,
                audience, requirements, and constraints before moving into
                implementation.
              </p>

              <p className="text-slate-300">
                The goal is simple:
                <span className="text-white">
                  {" "}
                  build something useful, understandable, and ready to grow.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        className="section border-y border-white/10 bg-white/[0.015]"
      >
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              What I Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Focused services for digital projects.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A focused service set based on my current development direction,
              with room to expand as the platform and capabilities grow.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#101a2b]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.04] blur-2xl transition duration-300 group-hover:bg-blue-500/[0.08]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-wider text-blue-500">
                      {service.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-lg text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {service.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to working solution.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A structured process helps keep the project clear from the first
              conversation to the final refinement.
            </p>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-white/10 lg:block"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-white/10 bg-[#0d1422] p-7"
                >
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-[#0d1422] text-xs font-bold text-blue-400">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section border-y border-white/10 bg-white/[0.015]">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Project Types
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                What are you trying to build?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Whether you have a clear specification or only an early idea,
                the first step is understanding what the project actually
                needs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {projectTypes.map((projectType) => (
                <div
                  key={projectType}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0d1422] px-5 py-4 transition hover:border-blue-500/30"
                >
                  <span className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                    {projectType}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-500"
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Working Principles
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How I approach projects.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="bg-[#0d1422] p-7"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-sm text-blue-400">
                  ✓
                </div>

                <h3 className="mt-5 font-semibold text-white">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0d1422] px-7 py-14 text-center sm:px-10 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.14),transparent_55%)]"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Start a Project
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Have an idea worth building?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
                Tell me what you are trying to build, what problem you want to
                solve, or where you are currently stuck. We can start by
                understanding the project.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1422]"
                >
                  Let&apos;s Work Together
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </a>

                <Link
                  href="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1422]"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
