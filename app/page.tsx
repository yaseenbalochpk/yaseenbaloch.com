import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const projects = [
  {
    number: "01",
    type: "Personal Platform",
    title: "Yaseen Baloch — Digital Home",
    description:
      "A long-term personal platform bringing together software development, technology learning, content, resources, services, and future digital products.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Personal Brand"],
    status: "Building",
    href: "/work",
  },
  {
    number: "02",
    type: "Python Development",
    title: "Python Projects & Problem Solving",
    description:
      "A growing collection of Python practice, programming exercises, automation ideas, and practical software projects built while strengthening core development skills.",
    tags: ["Python", "Programming", "Automation", "GitHub"],
    status: "Growing",
    href: "/work",
  },
  {
    number: "03",
    type: "Web Development",
    title: "Modern Web Experiences",
    description:
      "Responsive websites and digital experiences focused on clean interfaces, practical functionality, performance, and a professional user experience.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    status: "Expanding",
    href: "/work",
  },
];

const technologies = [
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "Programming Fundamentals"],
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
  },
  {
    category: "Development",
    items: ["Git", "GitHub", "REST APIs", "Responsive Design", "Deployment"],
  },
  {
    category: "Emerging Tech",
    items: ["Artificial Intelligence", "AI Automation", "AI Tools", "Automation Workflows"],
  },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web experiences designed around clear structure, usability, performance, and long-term scalability.",
    items: ["Landing Pages", "Business Websites", "Portfolio Websites", "Responsive UI"],
  },
  {
    number: "02",
    title: "Python Development",
    description:
      "Practical Python solutions ranging from programming projects and automation workflows to small utilities and backend-focused development.",
    items: ["Python Projects", "Automation", "Scripts", "Problem Solving"],
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Exploring practical ways to use AI and automation to reduce repetitive work, improve workflows, and build smarter digital experiences.",
    items: ["AI Workflows", "Automation", "AI-Assisted Systems", "Productivity"],
  },
  {
    number: "04",
    title: "Content & Technology",
    description:
      "Technology-focused educational content that turns development lessons, experiments, and practical discoveries into understandable resources.",
    items: ["Technical Content", "Tutorials", "YouTube", "Educational Resources"],
  },
];

const learningAreas = [
  {
    label: "01",
    title: "Programming",
    description:
      "Strengthening programming fundamentals through Python, problem solving, algorithms, data structures, and practical projects.",
  },
  {
    label: "02",
    title: "Web Development",
    description:
      "Building deeper knowledge across modern frontend development, React, Next.js, APIs, databases, and deployment.",
  },
  {
    label: "03",
    title: "AI & Automation",
    description:
      "Exploring artificial intelligence, automation workflows, AI-assisted development, and practical applications of emerging technology.",
  },
  {
    label: "04",
    title: "Software Engineering",
    description:
      "Developing the mindset required to move from writing code to designing maintainable, scalable, and useful software.",
  },
];

const contentAreas = [
  {
    type: "Blog",
    title: "What I’m Learning",
    description:
      "Practical notes, development lessons, concepts, experiments, and useful technology insights from the journey.",
    href: "/blog",
  },
  {
    type: "YouTube",
    title: "Building in Public",
    description:
      "Development, technology, learning journeys, tutorials, experiments, and practical project-based content.",
    href: "https://youtube.com/@yaseenbalochpk",
  },
  {
    type: "Resources",
    title: "Useful Learning Resources",
    description:
      "Curated and self-created resources designed to make programming and technology easier to understand and practice.",
    href: "/resources",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the objective, audience, problem, requirements, and the outcome the project needs to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Break the idea into a clear structure, technology choices, features, priorities, and an achievable development path.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the plan into a clean, responsive, functional digital experience using modern development practices.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Check functionality, responsiveness, usability, performance, and the details that make the experience feel polished.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Refine the product through feedback, iteration, better structure, and continuous technical improvement.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M14 5h5v5M19 5l-8 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.18c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.39.96.1-.75.4-1.26.74-1.55-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.54.11-3.03 0 0 .98-.31 3.17 1.18a10.97 10.97 0 0 1 5.76 0c2.19-1.49 3.17-1.18 3.17-1.18.63 1.49.23 2.73.11 3.03.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.69.41.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M5.2 3.3A2.2 2.2 0 1 1 .8 3.3a2.2 2.2 0 0 1 4.4 0ZM1 8h4.2v13H1V8Zm6.8 0h4v1.78h.06c.56-1.05 1.93-2.16 3.98-2.16 4.25 0 5.04 2.8 5.04 6.44V21h-4.18v-6.15c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.37 1.61-2.37 3.25V21H7.8V8Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58a3 3 0 0 0 2.12-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function ArrowButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const content = (
    <>
      <span>{children}</span>
      {external ? <ExternalIcon /> : <ArrowIcon />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-blue-400/40 hover:bg-blue-500/10"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-blue-400/40 hover:bg-blue-500/10"
    >
      {content}
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative border-b border-white/10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-3xl" />
            <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl" />
          </div>

          <Container>
            <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 lg:py-28">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Full-Stack Development • AI • Technology
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Yaseen Baloch
                </p>

                <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                  I build software.
                  <span className="block text-slate-400">
                    I explore technology.
                  </span>
                  <span className="block text-blue-400">
                    I share what I learn.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  A BS Computer Science student, developer, and technology
                  creator building practical software, exploring AI and
                  automation, and turning real learning into useful digital
                  experiences.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
                  >
                    Explore My Work
                    <ArrowIcon />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    Start a Conversation
                    <ArrowIcon />
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                  <span>Learn • Build • Share • Grow</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Based in Pakistan • Building for the world</span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Current Focus
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Building the next version
                      </p>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blue-400/80" />
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-700" />
                    </div>
                  </div>

                  <div className="space-y-3 py-6">
                    {[
                      ["01", "Software & Web Development"],
                      ["02", "Python & Programming"],
                      ["03", "AI & Automation"],
                      ["04", "Technology Education"],
                    ].map(([number, label]) => (
                      <div
                        key={number}
                        className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/10 px-4 py-4"
                      >
                        <span className="text-xs font-semibold text-blue-400">
                          {number}
                        </span>
                        <span className="text-sm font-medium text-slate-200">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-blue-400/15 bg-blue-500/[0.05] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Direction
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      From learning individual technologies to designing,
                      building, and shipping complete digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            SOCIAL / TRUST STRIP
        ====================================================== */}
        <section className="border-b border-white/10">
          <Container>
            <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Find me online
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Follow the journey, projects, experiments, and technology
                  content.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/yaseenbalochpk"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <GitHubIcon />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-yaseen-b308b53b1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>

                <a
                  href="https://youtube.com/@yaseenbalochpk"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <YouTubeIcon />
                  YouTube
                </a>

                <a
                  href="https://www.instagram.com/yaseenbalochpk"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            ABOUT PREVIEW
        ====================================================== */}
        <section id="about" className="section border-b border-white/10">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400 sm:text-sm">
                  01 — About
                </p>

                <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Building with purpose.
                  <span className="mt-2 block text-slate-400">
                    Learning by building.
                  </span>
                  <span className="mt-2 block text-blue-400">
                    Growing through every project.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  My journey is not only about learning technologies. It is
                  about turning knowledge into projects, projects into
                  experience, and experience into useful things that can help
                  other people.
                </p>

                <div className="mt-8">
                  <ArrowButton href="/about">
                    More About Me
                  </ArrowButton>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">
                  I&apos;m Yaseen Baloch, a BS Computer Science student,
                  developer, and technology creator focused on building
                  practical software, exploring emerging technologies, and
                  sharing what I learn along the way.
                </p>

                <p className="mt-7 leading-8 text-slate-400">
                  My current journey combines programming, web development,
                  Python, software engineering, artificial intelligence,
                  automation, Git and GitHub, and modern development tools. I
                  learn by building instead of only studying theory — creating
                  projects, testing ideas, solving problems, and improving the
                  way I write and structure software.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  Every project is another opportunity to understand how real
                  software is designed, developed, tested, deployed, and
                  improved. That mindset is helping me move from simply
                  learning code toward becoming a developer who can think in
                  terms of products, systems, users, and outcomes.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  I&apos;m also building this website as a long-term digital
                  home for my work, learning resources, services, technical
                  content, experiments, and future products — a platform that
                  can grow with my skills and career.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      label: "Build",
                      title: "Software & Web",
                      text: "Practical digital products and modern web experiences.",
                    },
                    {
                      label: "Explore",
                      title: "AI & Automation",
                      text: "Useful applications of intelligent technology and automation.",
                    },
                    {
                      label: "Share",
                      title: "Technology & Learning",
                      text: "Turning lessons, projects, and experiments into useful knowledge.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-200 hover:border-blue-500/25 hover:bg-white/[0.04]"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FEATURED WORK
        ====================================================== */}
        <section id="work" className="section border-b border-white/10">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  02 — Featured Work
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  From learning to{" "}
                  <span className="text-slate-400">building.</span>
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                  A growing portfolio of projects, experiments, and digital
                  products that demonstrate how I learn, build, and turn ideas
                  into working experiences.
                </p>
              </div>

              <ArrowButton href="/work">
                View All Work
              </ArrowButton>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-400">
                      {project.number}
                    </span>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 bg-white/[0.025] px-2.5 py-1 text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
                    >
                      Explore Project
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            SKILLS & TECHNOLOGIES
        ====================================================== */}
        <section id="skills" className="section border-b border-white/10">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                03 — Skills & Technologies
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                A growing technical toolkit.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                I&apos;m continuously expanding my technical foundation — from
                programming fundamentals to modern full-stack development, AI,
                automation, and software engineering practices.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {technologies.map((technology, index) => (
                <div
                  key={technology.category}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {technology.category}
                    </h3>

                    <span className="text-xs font-semibold text-blue-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {technology.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <section id="services" className="section border-b border-white/10">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  04 — Services
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Turning technical skills into{" "}
                  <span className="text-slate-400">useful solutions.</span>
                </h2>

                <p className="mt-5 leading-8 text-slate-500">
                  I&apos;m building my professional capabilities around
                  development, automation, AI, and technology content — with a
                  focus on solving real problems and creating digital value.
                </p>
              </div>

              <ArrowButton href="/services">
                Explore Services
              </ArrowButton>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="bg-[#090d16] p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-blue-400">
                      {service.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-blue-400/70" />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            LEARNING / EDUCATION
        ====================================================== */}
        <section id="learn" className="section border-b border-white/10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  05 — Learning & Education
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Learn it.
                  <span className="block text-slate-400">Build it.</span>
                  <span className="block text-blue-400">Teach it.</span>
                </h2>

                <p className="mt-6 max-w-md leading-8 text-slate-500">
                  Education is becoming a major part of my digital platform:
                  practical learning paths, development lessons, resources,
                  experiments, and project-based knowledge.
                </p>

                <div className="mt-8">
                  <ArrowButton href="/learn">
                    Explore Learning
                  </ArrowButton>
                </div>
              </div>

              <div className="grid gap-3">
                {learningAreas.map((area) => (
                  <div
                    key={area.label}
                    className="group grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-200 hover:border-blue-400/20 hover:bg-white/[0.04] sm:grid-cols-[70px_1fr]"
                  >
                    <span className="text-sm font-semibold text-blue-400">
                      {area.label}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {area.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            LATEST CONTENT
        ====================================================== */}
        <section id="content" className="section border-b border-white/10">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  06 — Latest Content
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Building, learning,{" "}
                  <span className="text-slate-400">sharing.</span>
                </h2>

                <p className="mt-5 leading-8 text-slate-500">
                  My content journey is growing alongside my development
                  journey — documenting what I learn, explaining useful
                  concepts, sharing projects, and creating practical technology
                  content.
                </p>
              </div>

              <ArrowButton href="/blog">
                Visit Blog
              </ArrowButton>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {contentAreas.map((content) => {
                const external = content.href.startsWith("http");

                return (
                  <article
                    key={content.type}
                    className="flex min-h-[260px] flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      {content.type}
                    </span>

                    <h3 className="mt-6 text-xl font-bold text-white">
                      {content.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
                      {content.description}
                    </p>

                    <div className="mt-7">
                      <ArrowButton href={content.href} external={external}>
                        {external ? "Visit Channel" : "Explore Content"}
                      </ArrowButton>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =====================================================
            HOW I WORK
        ====================================================== */}
        <section id="process" className="section border-b border-white/10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  07 — How I Work
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Clear thinking.
                  <span className="block text-slate-400">
                    Practical building.
                  </span>
                </h2>

                <p className="mt-6 max-w-md leading-8 text-slate-500">
                  Whether I&apos;m learning a technology or developing a
                  project, I try to follow a structured process that keeps the
                  work focused, testable, and continuously improving.
                </p>
              </div>

              <div className="space-y-3">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[70px_1fr] sm:p-6"
                  >
                    <span className="text-sm font-semibold text-blue-400">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section id="contact" className="section">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-blue-500/[0.045] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-3xl"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-cyan-400/[0.035] blur-3xl"
              />

              <div className="relative max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  08 — Let&apos;s Build Something
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have an idea, project, or opportunity?
                  <span className="block text-slate-400">
                    Let&apos;s turn it into something useful.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                  Whether you want to discuss a website, software idea,
                  automation workflow, technology project, collaboration, or
                  simply connect with me, I&apos;d be glad to hear from you.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
                  >
                    Contact Me
                    <ArrowIcon />
                  </Link>

                  <a
                    href="https://wa.me/9232021212826"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    WhatsApp
                    <ExternalIcon />
                  </a>
                </div>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Yaseen Baloch
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Full-Stack Developer • AI & Automation Builder •
                        Technology Educator
                      </p>
                    </div>

                    <a
                      href="mailto:yaseenonliepk@gmail.com"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      yaseenonliepk@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}