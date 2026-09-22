import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const focusAreas = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Building modern, responsive, and scalable web experiences while continuously strengthening frontend, backend, API, database, and deployment knowledge.",
  },
  {
    number: "02",
    title: "Python & Software Development",
    description:
      "Using Python to strengthen programming fundamentals, problem solving, automation, scripting, backend development, and practical software projects.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Exploring practical AI systems, intelligent workflows, AI-assisted development, automation, and emerging technologies that can make digital work smarter and more efficient.",
  },
  {
    number: "04",
    title: "Technology Education",
    description:
      "Turning technical learning, experiments, and development experience into practical explanations, resources, tutorials, and educational content.",
  },
];

const technologies = [
  {
    number: "01",
    title: "Programming",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Programming Fundamentals",
      "Problem Solving",
    ],
  },
  {
    number: "02",
    title: "Modern Web",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Next.js",
      "Responsive Design",
    ],
  },
  {
    number: "03",
    title: "Development Workflow",
    items: [
      "Git",
      "GitHub",
      "REST APIs",
      "Deployment",
      "Project Structure",
      "Testing",
    ],
  },
  {
    number: "04",
    title: "AI & Automation",
    items: [
      "Artificial Intelligence",
      "AI Automation",
      "AI Tools",
      "Automation Workflows",
      "AI-Assisted Development",
    ],
  },
];

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build strong foundations by understanding concepts instead of only memorizing syntax.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Turn concepts into repeated practice, experiments, exercises, and small technical challenges.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Use real projects to connect individual technologies into complete, useful digital experiences.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Review the work, identify weaknesses, refactor where necessary, and continuously raise the quality.",
  },
  {
    number: "05",
    title: "Share",
    description:
      "Document useful lessons and turn practical experience into resources that can help others learn.",
  },
];

const philosophy = [
  "Learn deeply, not just quickly.",
  "Build instead of only watching tutorials.",
  "Use technology to solve practical problems.",
  "Treat every project as an opportunity to improve.",
  "Share useful knowledge while continuing to learn.",
];

const socialLinks = [
  {
    name: "GitHub",
    description: "Projects, code, experiments, and development work.",
    href: "https://github.com/yaseenbalochpk",
  },
  {
    name: "LinkedIn",
    description: "Professional profile, development journey, and opportunities.",
    href: "https://www.linkedin.com/in/muhammad-yaseen-b308b53b1",
  },
  {
    name: "YouTube",
    description: "Technology, learning, development, and educational content.",
    href: "https://youtube.com/@yaseenbalochpk",
  },
  {
    name: "Instagram",
    description: "Technology, personal brand, projects, and updates.",
    href: "https://www.instagram.com/yaseenbalochpk",
  },
  {
    name: "Facebook",
    description: "Technology content, community, and personal updates.",
    href: "https://www.facebook.com/share/1BTi6rtPhD/",
  },
  {
    name: "X",
    description: "Technology thoughts, learning, and professional updates.",
    href: "https://x.com/yaseenbalochpk",
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

export default function AboutPage() {
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
            <div className="absolute left-1/2 top-0 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-3xl" />
            <div className="absolute right-0 top-48 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl" />
          </div>

          <Container>
            <div className="py-24 sm:py-28 lg:py-36">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Developer • Builder • Technology Creator
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400 sm:text-sm">
                  About Yaseen Baloch
                </p>

                <h1 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  I&apos;m building more than
                  <span className="block text-slate-400">
                    a career in technology.
                  </span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                  I&apos;m building the skills, projects, systems, and
                  knowledge that will shape my future as a software developer —
                  while creating a digital platform where technology,
                  learning, AI, automation, and practical development come
                  together.
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
                    Let&apos;s Connect
                    <ArrowIcon />
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                  <span>Learn • Build • Share • Grow</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>BS Computer Science</span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <span>Pakistan • Building for the world</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            WHO IS YASEEN BALOCH
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  01 — Who I Am
                </p>

                <h2 className="mt-5 max-w-md text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  A developer in the making.
                  <span className="mt-2 block text-slate-400">
                    A builder by practice.
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">
                  I&apos;m Yaseen Baloch — a BS Computer Science student,
                  developer, and technology creator focused on turning
                  curiosity into practical technical ability.
                </p>

                <p className="mt-7 leading-8 text-slate-400">
                  My focus is not limited to learning programming languages or
                  collecting technology names. I&apos;m interested in
                  understanding how software works, how products are designed,
                  how systems connect, how automation can improve workflows,
                  and how technology can solve problems for real people.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  I&apos;m developing my foundation across programming, web
                  development, Python, software engineering, AI, automation,
                  Git and GitHub, and modern development workflows. Each
                  project gives me another opportunity to move from theory
                  toward practical engineering.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  The long-term goal is to grow into a developer who can think
                  beyond individual pieces of code — someone who can understand
                  a problem, design a solution, build it, test it, improve it,
                  and eventually turn useful ideas into reliable digital
                  products.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            DEVELOPER JOURNEY
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                02 — Developer Journey
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                From learning code to thinking like a builder.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                My development journey is built around a simple principle:
                knowledge becomes more valuable when it can be applied. That
                is why I continuously move between learning concepts,
                practicing them, building projects, and improving what I have
                already created.
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-5">
              {journey.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-200 hover:border-blue-400/20 hover:bg-white/[0.04]"
                >
                  <span className="text-xs font-semibold text-blue-400">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/[0.05] blur-3xl"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                    03 — Academic Foundation
                  </p>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    BS Computer Science
                  </h2>

                  <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                    My BS Computer Science journey is strengthening the
                    theoretical and analytical foundation behind the practical
                    development work I&apos;m doing outside the classroom.
                  </p>

                  <p className="mt-4 max-w-3xl leading-8 text-slate-500">
                    Alongside university learning, I continue developing
                    programming skills, working on projects, exploring modern
                    technologies, and building a deeper understanding of
                    software and computing.
                  </p>
                </div>

                <div className="w-fit rounded-full border border-blue-400/15 bg-blue-500/[0.05] px-4 py-2 text-xs font-semibold text-blue-300">
                  Computer Science • Development • Technology
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            SKILLS & TECHNOLOGY
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                04 — Skills & Technology
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Building a modern technical foundation.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                My technical toolkit is continuously evolving. I&apos;m
                building breadth across modern development while going deeper
                into the areas that matter most for becoming a capable software
                developer and technology builder.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {technologies.map((technology) => (
                <div
                  key={technology.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {technology.title}
                    </h3>

                    <span className="text-xs font-semibold text-blue-400">
                      {technology.number}
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

            <div className="mt-8 rounded-3xl border border-blue-400/15 bg-blue-500/[0.04] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                AI & Automation
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Exploring smarter ways to build and work.
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                AI and automation are an important part of my technical
                direction. I&apos;m exploring how AI-assisted development,
                intelligent workflows, automation tools, APIs, and emerging
                technologies can be combined to create faster, smarter, and
                more useful digital systems.
              </p>
            </div>
          </Container>
        </section>

        {/* =====================================================
            PHILOSOPHY
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  05 — Philosophy
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Learn deeply.
                  <span className="block text-slate-400">
                    Build practically.
                  </span>
                  <span className="block text-blue-400">
                    Improve continuously.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-3xl leading-8 text-slate-400">
                  Technology changes quickly, but the ability to learn,
                  understand problems, build solutions, and improve over time
                  remains valuable. That is the mindset I&apos;m trying to
                  develop throughout my journey.
                </p>

                <div className="mt-8 space-y-3">
                  {philosophy.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                    >
                      <span className="mt-0.5 text-xs font-semibold text-blue-400">
                        0{index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            CURRENT FOCUS
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  06 — Current Focus
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Where I&apos;m putting my energy now.
                </h2>

                <p className="mt-6 max-w-md leading-8 text-slate-500">
                  The current stage of my journey is about turning individual
                  skills into stronger development capability and complete
                  digital products.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div
                    key={area.number}
                    className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 transition-all duration-200 hover:border-blue-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-blue-400">
                        {area.number}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                    </div>

                    <h3 className="mt-7 text-lg font-bold text-white">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            LEARNING & BUILDING APPROACH
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                07 — Learning & Building
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Experience grows through repetition.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                I try to make every learning cycle practical: understand the
                concept, write the code, build something with it, test the
                result, learn from mistakes, and document what matters.
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Learn the concept and understand why it works.",
                },
                {
                  number: "02",
                  title: "Practice",
                  text: "Strengthen understanding through repeated hands-on practice.",
                },
                {
                  number: "03",
                  title: "Build",
                  text: "Apply the knowledge to real projects and useful ideas.",
                },
                {
                  number: "04",
                  title: "Share",
                  text: "Turn useful lessons into resources and practical content.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <span className="text-xs font-semibold text-blue-400">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            PERSONAL BRAND POSITIONING
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-blue-500/[0.045] p-7 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-3xl"
              />

              <div className="relative max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  08 — Personal Brand
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Yaseen Baloch
                </h2>

                <p className="mt-4 text-lg font-medium leading-8 text-slate-300 sm:text-xl">
                  Full-Stack Developer • AI & Automation Builder • Technology
                  Educator
                </p>

                <p className="mt-6 max-w-3xl leading-8 text-slate-400">
                  Yaseen Baloch is being built as a long-term technology
                  personal brand around software development, AI and
                  automation, practical learning, educational content, digital
                  products, and real-world problem solving.
                </p>

                <p className="mt-4 max-w-3xl leading-8 text-slate-500">
                  The vision is to grow from individual projects and learning
                  experiments into a broader digital ecosystem where people
                  can discover useful software, practical resources,
                  development knowledge, and future products in one place.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            SOCIAL PRESENCE
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  09 — Social Presence
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Follow the journey.
                </h2>

                <p className="mt-5 leading-8 text-slate-500">
                  I&apos;m building my professional presence across developer,
                  professional, and content platforms — sharing projects,
                  learning, experiments, and technology.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                Get in Touch
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-200 hover:border-blue-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white">
                      {social.name}
                    </h3>

                    <ExternalIcon />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {social.description}
                  </p>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="section">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/[0.05] blur-3xl"
              />

              <div className="relative max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
                  Keep Exploring
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  The journey is still being built.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-slate-500">
                  Explore the projects, services, learning resources, and
                  technology content that are becoming part of the Yaseen
                  Baloch platform.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400"
                  >
                    Explore My Work
                    <ArrowIcon />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    Explore Services
                    <ArrowIcon />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    Contact Me
                    <ArrowIcon />
                  </Link>
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