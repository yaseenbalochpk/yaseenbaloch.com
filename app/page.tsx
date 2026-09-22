import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";

const technologies = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "AI",
  "Automation",
] as const;

const projects = [
  {
    number: "01",
    type: "WEB DEVELOPMENT",
    title: "Yaseen Baloch Digital Platform",
    description:
      "A long-term personal technology platform bringing together software development, learning, resources, content, services, and future digital products.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    type: "PYTHON DEVELOPMENT",
    title: "Python Projects & Practice",
    description:
      "A growing collection of practical Python projects focused on programming fundamentals, problem solving, automation, and software development.",
    technologies: ["Python", "Git", "GitHub"],
  },
  {
    number: "03",
    type: "AI & AUTOMATION",
    title: "AI & Automation Exploration",
    description:
      "Practical experiments exploring AI tools, APIs, automation workflows, and useful applications of emerging technology.",
    technologies: ["AI", "APIs", "Automation"],
  },
] as const;

const learningAreas = [
  {
    number: "01",
    title: "Programming",
    description:
      "Programming fundamentals, problem solving, algorithms, data structures, and practical software development.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern web development with HTML, CSS, JavaScript, React, Next.js, APIs, databases, and deployment.",
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    description:
      "Exploring AI systems, AI tools, APIs, automation, and practical intelligent applications.",
  },
  {
    number: "04",
    title: "Computer Science",
    description:
      "Building deeper understanding of computer systems, software, data, networking, and core computing concepts.",
  },
] as const;

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive and maintainable websites built with modern web technologies, clear structure, usability, and performance in mind.",
  },
  {
    number: "02",
    title: "Python Development",
    description:
      "Practical Python applications, automation scripts, utilities, APIs, and programming solutions for clearly defined problems.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Practical AI-assisted workflows, API integrations, and automation solutions designed around useful digital processes.",
  },
  {
    number: "04",
    title: "Landing Pages",
    description:
      "Focused, responsive landing pages designed to communicate an idea, service, or product clearly across devices.",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the problem, audience, requirements, and desired outcome before development begins.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the structure, technology, user experience, and development approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the solution using clean structure, reusable components, and practical implementation.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Check functionality, responsiveness, accessibility, and overall technical quality.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Refine the result through testing, feedback, learning, and continuous improvement.",
  },
] as const;

const contentAreas = [
  {
    number: "01",
    title: "Programming & Development",
    description:
      "Practical programming lessons, project breakdowns, coding concepts, and development notes.",
  },
  {
    number: "02",
    title: "Web & Software",
    description:
      "Modern web development, software engineering concepts, tools, workflows, and real projects.",
  },
  {
    number: "03",
    title: "AI & Technology",
    description:
      "AI tools, automation experiments, emerging technologies, and practical digital workflows.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section
          id="hero"
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-30 bg-[#070b14]"
          />

          <div
            aria-hidden="true"
            className="absolute right-[-12%] top-[-18%] -z-20 h-[520px] w-[520px] rounded-full bg-blue-600/[0.09] blur-3xl sm:h-[650px] sm:w-[650px]"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-20%] left-[-15%] -z-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-3xl sm:h-[520px] sm:w-[520px]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <Container>
            <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28 xl:py-32">
              {/* Hero Content */}
              <div className="max-w-4xl">
                <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-blue-500"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400 sm:text-sm">
                    {siteConfig.name}
                  </p>
                </div>

                <p className="mb-6 text-sm font-medium text-slate-400 sm:text-base">
                  Developer
                  <span className="mx-2 text-slate-600">•</span>
                  AI &amp; Automation Builder
                  <span className="mx-2 text-slate-600">•</span>
                  Technology Educator
                </p>

                <h1 className="max-w-4xl text-[3.2rem] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem]">
                  I build software.
                  <span className="block text-slate-400">
                    I explore technology.
                  </span>
                  <span className="block text-blue-500">
                    I share what I learn.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:mt-10 sm:text-lg">
                  {siteConfig.hero.description}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
                  <Button
                    href="/work"
                    size="lg"
                    aria-label="Explore Yaseen Baloch's work"
                  >
                    View My Work
                    <span aria-hidden="true">↗</span>
                  </Button>

                  <Button
                    href="/contact"
                    variant="outline"
                    size="lg"
                    aria-label="Work with Yaseen Baloch"
                  >
                    Let&apos;s Work Together
                  </Button>
                </div>

                {socialLinks.length > 0 && (
                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                      Find me on
                    </span>

                    {socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070b14]"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Hero Visual */}
              <div className="relative hidden lg:block">
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[2rem] bg-blue-500/[0.04] blur-3xl"
                />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 shadow-2xl shadow-black/20 backdrop-blur-sm xl:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Current Focus
                    </span>

                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-emerald-400"
                      />
                      Building
                    </span>
                  </div>

                  <div className="py-7">
                    <div className="border-l border-blue-500/40 pl-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                        Development
                      </p>

                      <p className="mt-2 text-xl font-semibold text-white">
                        Software &amp; Web
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Building practical software with modern development
                        tools.
                      </p>
                    </div>

                    <div className="mt-7 border-l border-white/10 pl-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Exploring
                      </p>

                      <p className="mt-2 text-xl font-semibold text-slate-200">
                        AI &amp; Automation
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Exploring useful ways to apply AI and automation to
                        real digital workflows.
                      </p>
                    </div>

                    <div className="mt-7 border-l border-white/10 pl-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Sharing
                      </p>

                      <p className="mt-2 text-xl font-semibold text-slate-200">
                        Learning &amp; Education
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Turning projects and lessons into practical knowledge
                        others can learn from.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">
                        Learn. Build. Share. Grow.
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-lg text-blue-500"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* =========================================================
    ABOUT PREVIEW
========================================================= */}
<section
  id="about"
  className="section border-b border-white/10"
>
  <Container>
    <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      {/* =====================================================
          LEFT — INTRODUCTION
      ====================================================== */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400 sm:text-sm">
          01 — About
        </p>

        <h2 className="mt-5 max-w-lg text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Building with purpose.
          <span className="mt-1 block text-slate-400">
            Learning by building.
          </span>
        </h2>

        <p className="mt-6 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          A developer journey driven by curiosity, practical projects,
          continuous learning, and a desire to create useful technology.
        </p>

        <div className="mt-8">
          <Button
            href="/about"
            variant="outline"
            size="sm"
            aria-label="Learn more about Yaseen Baloch"
          >
            More About Me
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>

      {/* =====================================================
          RIGHT — STORY
      ====================================================== */}
      <div className="max-w-3xl">
        <p className="text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">
          I&apos;m {siteConfig.name}, a BS Computer Science student, developer,
          and technology creator focused on building practical software,
          exploring emerging technologies, and sharing what I learn.
        </p>

        <p className="mt-7 leading-8 text-slate-400">
          My journey is centered around programming, web development, Python,
          software engineering, artificial intelligence, and automation. I
          learn through hands-on projects, experimentation, and solving
          practical problems with technology.
        </p>

        <p className="mt-5 leading-8 text-slate-400">
          I&apos;m building this platform as a long-term digital home for my
          work, learning, resources, content, services, and future digital
          products — bringing everything together in one place as the journey
          continues.
        </p>

        {/* =================================================
            FOCUS AREAS
        ================================================== */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="group rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-200 hover:border-blue-500/25 hover:bg-white/[0.04]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400">
              Build
            </p>

            <p className="mt-3 text-sm font-semibold text-white">
              Software &amp; Web
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Practical digital products and modern web experiences.
            </p>
          </div>

          <div className="group rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-200 hover:border-blue-500/25 hover:bg-white/[0.04]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400">
              Explore
            </p>

            <p className="mt-3 text-sm font-semibold text-white">
              AI &amp; Automation
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Exploring useful applications of intelligent technology.
            </p>
          </div>

          <div className="group rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-200 hover:border-blue-500/25 hover:bg-white/[0.04]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400">
              Share
            </p>

            <p className="mt-3 text-sm font-semibold text-white">
              Technology &amp; Learning
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Turning lessons and projects into practical knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

        {/* =========================================================
            FEATURED WORK
        ========================================================== */}
        <section
          id="work"
          className="section border-b border-white/10"
        >
          <Container>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="02 — Selected Work"
                title="Things I&apos;m building."
                description="A growing collection of projects and experiments created while learning, building, and exploring new technologies."
              />

              <Button href="/work" variant="ghost" size="sm">
                View All Work →
              </Button>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.number}
                  interactive
                  padding="lg"
                  className="group relative overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/[0.05] blur-2xl transition duration-300 group-hover:bg-blue-500/[0.1]"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <Badge variant="accent" size="sm">
                        {project.number}
                      </Badge>

                      <span
                        aria-hidden="true"
                        className="text-slate-600 transition-colors duration-200 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-10 text-[11px] font-semibold tracking-[0.2em] text-slate-500">
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
                        <Badge
                          key={technology}
                          variant="muted"
                          size="sm"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            SKILLS
        ========================================================== */}
        <section
          id="skills"
          className="section border-b border-white/10"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <SectionHeading
                eyebrow="03 — Skills"
                title="Tools I use to turn ideas into software."
                description="A growing technical toolkit shaped by projects, practice, and continuous learning."
              />

              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="default"
                    size="md"
                    className="px-5 py-3 text-sm"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}
        <section
          id="services"
          className="section border-b border-white/10"
        >
          <Container>
            <SectionHeading
              eyebrow="04 — Services"
              title="Turning technical skills into useful solutions."
              description="A focused set of development and technology services designed around clearly defined problems and practical outcomes."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <Card
                  key={service.number}
                  interactive
                  padding="lg"
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

                  <div className="mt-7">
                    <Button
                      href="/contact"
                      variant="ghost"
                      size="sm"
                    >
                      Discuss a Project →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
            </div>
          </Container>
        </section>

        {/* =========================================================
            LEARNING
        ========================================================== */}
        <section
          id="learn"
          className="section border-b border-white/10"
        >
          <Container>
            <SectionHeading
              eyebrow="05 — Learning"
              title="Learn deeply. Build practically."
              description="Strong fundamentals combined with practical projects, experimentation, and continuous exploration of modern technology."
            />

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
              {learningAreas.map((area) => (
                <article
                  key={area.number}
                  className="bg-[#0d1422] p-8 transition-colors duration-200 hover:bg-[#111b2d]"
                >
                  <span className="text-xs font-semibold text-blue-400">
                    {area.number}
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

            <div className="mt-8">
              <Button href="/learn" variant="outline">
                Explore Learning
              </Button>
            </div>
          </Container>
        </section>

        {/* =========================================================
            LATEST CONTENT
        ========================================================== */}
        <section
          id="blog"
          className="section border-b border-white/10"
        >
          <Container>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="06 — Latest Content"
                title="Learning, building, and sharing."
                description="Practical content around programming, web development, AI, software, and the lessons behind real projects."
              />

              <Button href="/blog" variant="ghost" size="sm">
                Visit Blog →
              </Button>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {contentAreas.map((content) => (
                <Card
                  key={content.number}
                  interactive
                  padding="lg"
                >
                  <Badge variant="accent" size="sm">
                    {content.number}
                  </Badge>

                  <h3 className="mt-7 text-xl font-semibold text-white">
                    {content.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {content.description}
                  </p>

                  <div className="mt-7">
                    <Button href="/blog" variant="ghost" size="sm">
                      Explore Content →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================== */}
        <section
          id="process"
          className="section border-b border-white/10"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <SectionHeading
                eyebrow="07 — Process"
                title="A practical approach to building things."
                description="Good software starts with understanding the problem and improves through structured development and testing."
              />

              <div className="divide-y divide-white/10 border-y border-white/10">
                {processSteps.map((step) => (
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
          </Container>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section
          id="contact"
          className="section"
        >
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/[0.06] px-7 py-16 text-center md:px-12 md:py-24">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
              />

              <Badge variant="accent" size="sm">
                08 — Let&apos;s Connect
              </Badge>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Have an idea?
                <span className="block text-blue-400">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
                Whether you have a project, collaboration opportunity,
                learning idea, or simply want to talk technology, I&apos;d be
                happy to connect.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>

                <Button href="/work" variant="outline" size="lg">
                  View My Work
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
