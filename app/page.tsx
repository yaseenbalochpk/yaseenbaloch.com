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
  "HTML & CSS",
  "Git & GitHub",
  "AI & Automation",
] as const;

const projects = [
  {
    number: "01",
    type: "WEB DEVELOPMENT",
    title: "Yaseen Baloch Digital Platform",
    description:
      "A long-term personal platform being developed to bring together software development, technology education, content, resources, and future digital products.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    type: "PYTHON",
    title: "Python Projects & Practice",
    description:
      "A growing collection of practical Python work focused on programming fundamentals, problem solving, automation, and software development.",
    technologies: ["Python", "Git", "GitHub"],
  },
  {
    number: "03",
    type: "AI & AUTOMATION",
    title: "AI & Automation Exploration",
    description:
      "Practical experiments exploring artificial intelligence, APIs, automation workflows, and modern technology applications.",
    technologies: ["AI", "APIs", "Automation"],
  },
] as const;

const learningAreas = [
  {
    number: "01",
    title: "Programming",
    description:
      "Building strong foundations in programming, algorithms, problem solving, and software development.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Learning modern web development from HTML and CSS through JavaScript, React, Next.js, APIs, databases, and deployment.",
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    description:
      "Exploring AI systems, automation, APIs, and practical intelligent applications.",
  },
  {
    number: "04",
    title: "Computer Science",
    description:
      "Developing a deeper understanding of computer systems, software, data, and computing concepts.",
  },
] as const;

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive websites and modern web interfaces built with a focus on clean structure, usability, and performance.",
  },
  {
    number: "02",
    title: "Python Development",
    description:
      "Python projects, automation scripts, programming solutions, and practical software development.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Exploring practical AI-powered workflows, automation concepts, APIs, and digital productivity solutions.",
  },
  {
    number: "04",
    title: "Landing Pages",
    description:
      "Focused digital experiences designed to communicate ideas clearly and establish a professional online presence.",
  },
] as const;

const processSteps = [
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
      "Test, refine, learn, and continuously improve the product through real usage.",
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
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[#070b14]"
          />

          <div
            aria-hidden="true"
            className="absolute right-[-15%] top-[-20%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-25%] left-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-3xl"
          />

          <Container>
            <div className="flex min-h-[calc(100vh-80px)] items-center py-24 md:py-32">
              <div className="w-full">
                <div className="max-w-5xl">
                  <div className="mb-7 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-blue-500"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                      {siteConfig.name}
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

                  <p className="mt-10 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    {siteConfig.hero.description}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button
                      href="/work"
                      size="lg"
                      aria-label="Explore my work"
                    >
                      Explore My Work
                      <span aria-hidden="true">↗</span>
                    </Button>

                    <Button
                      href="/contact"
                      variant="outline"
                      size="lg"
                      aria-label="Contact Yaseen Baloch"
                    >
                      Let&apos;s Connect
                    </Button>
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

                {socialLinks.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-xs font-medium text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================== */}
        <section
          id="about"
          className="section border-b border-white/10"
        >
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <SectionHeading
                eyebrow="01 — About"
                title="Building a career one project at a time."
              />

              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-slate-200">
                  I&apos;m {siteConfig.name}, a BS Computer Science student,
                  developer, and technology creator interested in building
                  useful software and understanding the technology behind it.
                </p>

                <p className="mt-7 leading-8 text-slate-400">
                  My journey is centered around programming, web development,
                  Python, artificial intelligence, automation, and continuous
                  learning. I focus on turning what I learn into practical
                  projects and experiments.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  This website is being developed as a long-term digital home
                  for my work, learning, resources, content, and future
                  products.
                </p>

                <div className="mt-8">
                  <Button href="/about" variant="ghost" size="sm">
                    More About Me →
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            WORK
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
            TECHNOLOGY
        ========================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <SectionHeading
                eyebrow="03 — Technology"
                title="Tools I use to turn ideas into software."
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
            LEARNING
        ========================================================== */}
        <section
          id="learn"
          className="section border-b border-white/10"
        >
          <Container>
            <SectionHeading
              eyebrow="04 — Learning"
              title="Learn deeply. Build practically."
              description="Technology changes quickly. My goal is to build strong fundamentals while continuously experimenting with modern tools and real-world applications."
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
            SERVICES
        ========================================================== */}
        <section
          id="services"
          className="section border-b border-white/10"
        >
          <Container>
            <SectionHeading
              eyebrow="05 — Services"
              title="Turning technical skills into useful solutions."
              description="A focused set of technology services that can grow with experience, projects, and technical capabilities."
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
            PROCESS
        ========================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <SectionHeading
                eyebrow="06 — Process"
                title="How I approach building things."
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
            KNOWLEDGE / BLOG
        ========================================================== */}
        <section
          id="blog"
          className="section border-b border-white/10"
        >
          <Container>
            <Card
              padding="lg"
              className="rounded-3xl md:p-12 lg:p-16"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <Badge variant="accent" size="sm">
                    07 — Knowledge
                  </Badge>

                  <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
                    I learn by building
                    <span className="block text-slate-500">
                      and share by teaching.
                    </span>
                  </h2>

                  <p className="mt-6 leading-8 text-slate-400">
                    Articles, tutorials, project breakdowns, programming
                    notes, AI experiments, roadmaps, and practical lessons
                    will become part of this platform.
                  </p>
                </div>

                <Button href="/blog" variant="outline">
                  Explore the Blog
                </Button>
              </div>
            </Card>
          </Container>
        </section>

        {/* =========================================================
            CONTACT
        ========================================================== */}
        <section id="contact" className="section">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/[0.06] px-7 py-16 text-center md:px-12 md:py-24">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
              />

              <Badge variant="accent" size="sm">
                08 — Contact
              </Badge>

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