import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const technologies = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML & CSS",
  "Git & GitHub",
  "AI & Automation",
];

const projects = [
  {
    number: "01",
    type: "WEB DEVELOPMENT",
    title: "Personal Developer Platform",
    description:
      "A long-term digital platform combining personal branding, development work, technology education, and professional opportunities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    type: "PYTHON",
    title: "Python Projects",
    description:
      "A growing collection of practical Python projects focused on programming fundamentals, problem solving, automation, and software development.",
    technologies: ["Python", "Git", "GitHub"],
  },
  {
    number: "03",
    type: "AI & AUTOMATION",
    title: "AI Experiments",
    description:
      "Exploring practical ways to combine artificial intelligence, automation, APIs, and software to solve real-world digital problems.",
    technologies: ["AI", "APIs", "Automation"],
  },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive websites and modern web applications built with clean architecture, usability, and performance in mind.",
  },
  {
    number: "02",
    title: "Python Development",
    description:
      "Python projects, automation scripts, programming solutions, and practical software experiments.",
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "Practical AI-powered workflows and automation concepts for productivity, content, and digital operations.",
  },
  {
    number: "04",
    title: "Digital Experiences",
    description:
      "Landing pages and digital experiences designed to communicate ideas clearly and create a strong online presence.",
  },
];

const learningAreas = [
  {
    title: "Programming",
    description:
      "Building strong foundations in programming, algorithms, problem solving, and software development.",
  },
  {
    title: "Web Development",
    description:
      "From HTML and CSS to JavaScript, React, Next.js, APIs, databases, and deployment.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Learning how AI systems, automation, APIs, and intelligent applications can be used practically.",
  },
  {
    title: "Computer Science",
    description:
      "Developing a deeper understanding of computer systems, software, data, and computing concepts.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the problem, audience, goals, and requirements before writing code.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Break the idea into a clear structure, technology choices, and manageable steps.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the plan into clean, responsive, and practical software through iterative development.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Test, learn, refine, and continuously improve the product based on real usage.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 -z-20 bg-[#070b14]" />

          <div className="absolute right-[-15%] top-[-20%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-3xl" />

          <div className="absolute bottom-[-25%] left-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-3xl" />

          <div className="container mx-auto">
            <div className="flex min-h-[calc(100vh-80px)] items-center py-24 md:py-32">
              <div className="w-full">
                <div className="max-w-5xl">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="h-px w-10 bg-blue-500" />

                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                      Yaseen Baloch
                    </span>
                  </div>

                  <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                    I build software.
                    <span className="block text-slate-400">
                      I explore technology.
                    </span>
                    <span className="block text-blue-500">
                      I share what I learn.
                    </span>
                  </h1>

                  <div className="mt-10 max-w-2xl">
                    <p className="text-base leading-8 text-slate-300 sm:text-lg">
                      BS Computer Science student, developer, and technology
                      creator focused on programming, web development,
                      artificial intelligence, and practical digital
                      solutions.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#work"
                      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500"
                    >
                      Explore My Work
                      <span className="ml-2">↗</span>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-white/[0.05]"
                    >
                      Let&apos;s Connect
                    </a>
                  </div>
                </div>

                <div className="mt-20 grid max-w-4xl grid-cols-2 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      Software
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Exploring
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      AI & Automation
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Learning
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      Computer Science
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Building
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      Digital Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section id="about" className="section border-b border-white/10">
          <div className="container mx-auto">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  01 — About
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Building a career
                  <span className="block text-slate-500">
                    one project at a time.
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-slate-200">
                  I&apos;m Yaseen Baloch, a BS Computer Science student
                  interested in building useful software and understanding the
                  technology behind it.
                </p>

                <p className="mt-7 leading-8 text-slate-400">
                  My journey is centered around programming, web development,
                  Python, artificial intelligence, automation, and continuous
                  learning. Instead of only consuming tutorials, I focus on
                  turning what I learn into projects and practical experiments.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  This website is being built as a long-term home for that
                  journey — a place for my work, knowledge, experiments,
                  resources, and future products.
                </p>

                <div className="mt-8">
                  <a
                    href="#learn"
                    className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Explore my learning journey →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WORK
        ========================================================= */}
        <section id="work" className="section border-b border-white/10">
          <div className="container mx-auto">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  02 — Selected Work
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Things I&apos;m building.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-400">
                A growing collection of projects and experiments created while
                learning, building, and exploring new technologies.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/[0.05] blur-2xl transition group-hover:bg-blue-500/[0.1]" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                        {project.number}
                      </span>

                      <span className="text-slate-600 transition group-hover:text-blue-400">
                        ↗
                      </span>
                    </div>

                    <p className="mt-12 text-[11px] font-semibold tracking-[0.2em] text-slate-500">
                      {project.type}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300"
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

        {/* =========================================================
            TECHNOLOGY
        ========================================================= */}
        <section className="section border-b border-white/10">
          <div className="container mx-auto">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  03 — Technology
                </p>

                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                  Tools I use to turn ideas into software.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-500/40 hover:bg-blue-500/[0.05]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LEARN
        ========================================================= */}
        <section id="learn" className="section border-b border-white/10">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                04 — Learning
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
                Learn deeply.
                <span className="block text-slate-500">
                  Build practically.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Technology changes quickly. My goal is to build strong
                fundamentals while continuously experimenting with modern
                tools and real-world applications.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
              {learningAreas.map((area, index) => (
                <article
                  key={area.title}
                  className="bg-[#0d1422] p-8 transition hover:bg-[#111b2d]"
                >
                  <span className="text-xs font-semibold text-blue-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-7 text-xl font-semibold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================= */}
        <section id="services" className="section border-b border-white/10">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                05 — Services
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
                Turning technical skills
                <span className="block text-slate-500">
                  into useful solutions.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                A focused set of services that will grow with my experience,
                projects, and technical capabilities.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-blue-500/30 hover:bg-white/[0.04]"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                    {service.number}
                  </span>

                  <h3 className="mt-8 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================= */}
        <section className="section border-b border-white/10">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  06 — Process
                </p>

                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                  How I approach
                  <span className="block text-slate-500">
                    building things.
                  </span>
                </h2>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {process.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 py-7 sm:grid-cols-[70px_180px_1fr]"
                  >
                    <span className="text-sm font-semibold text-blue-400">
                      {step.number}
                    </span>

                    <h3 className="font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <section id="blog" className="section border-b border-white/10">
          <div className="container mx-auto">
            <div className="rounded-3xl border border-white/10 bg-[#0d1422] p-8 md:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    07 — Knowledge
                  </p>

                  <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
                    I learn by building
                    <span className="block text-slate-500">
                      and share by teaching.
                    </span>
                  </h2>

                  <p className="mt-6 leading-8 text-slate-400">
                    Future articles, tutorials, project breakdowns,
                    programming notes, AI experiments, roadmaps, and practical
                    lessons will live here.
                  </p>
                </div>

                <span className="inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-400">
                  Coming soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT
        ========================================================= */}
        <section id="contact" className="section">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/[0.06] px-7 py-16 text-center md:px-12 md:py-24">
              <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                08 — Contact
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <span className="block text-blue-400">
                  meaningful.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
                Whether it&apos;s a project, collaboration, learning
                opportunity, or simply a conversation about technology, I&apos;d
                be happy to connect.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Start a Conversation
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-white/[0.04]"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">
                Yaseen Baloch
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Software Developer & Technology Creator
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-slate-500">
              <a className="transition hover:text-white" href="#about">
                About
              </a>

              <a className="transition hover:text-white" href="#work">
                Work
              </a>

              <a className="transition hover:text-white" href="#learn">
                Learn
              </a>

              <a className="transition hover:text-white" href="#services">
                Services
              </a>

              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Yaseen Baloch. Built with Next.js
              and TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}