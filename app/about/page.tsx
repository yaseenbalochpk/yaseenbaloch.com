import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yaseenbalochpk",
    description: "Projects, code and development work",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-yaseen-b308b53b1",
    description: "Professional profile and technology journey",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@yaseenbalochpk",
    description: "Technology, learning and practical content",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BTi6rtPhD/",
    description: "Technology updates and community content",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/yaseenbalochpk",
    description: "Personal brand and visual content",
  },
  {
    name: "X",
    href: "https://x.com/yaseenbalochpk",
    description: "Technology thoughts and conversations",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML & CSS",
  "Git & GitHub",
  "REST APIs",
  "AI & Automation",
  "Software Development",
];

const focusAreas = [
  {
    number: "01",
    title: "Full-Stack Development",
    text: "Building modern, responsive and scalable web applications with a strong focus on clean architecture, usability and performance.",
  },
  {
    number: "02",
    title: "Python & Software Development",
    text: "Using Python to strengthen programming fundamentals, develop practical software and solve real-world problems.",
  },
  {
    number: "03",
    title: "AI & Automation",
    text: "Exploring AI-powered workflows, automation and intelligent tools that can improve productivity and simplify repetitive processes.",
  },
  {
    number: "04",
    title: "Technology Education",
    text: "Sharing practical knowledge, documenting the learning journey and helping others understand technology through real projects.",
  },
];

const journey = [
  {
    title: "Started with curiosity",
    text: "My journey began with a simple interest in understanding how technology works and how software can solve everyday problems.",
  },
  {
    title: "Moved into programming",
    text: "I started learning programming fundamentals with Python and gradually expanded into web development, software engineering and modern development tools.",
  },
  {
    title: "Built real projects",
    text: "Instead of learning only through theory, I began building projects, working with Git and GitHub, experimenting with different technologies and documenting what I learned.",
  },
  {
    title: "Building a long-term career",
    text: "Today, I am developing my skills as a Computer Science student and aspiring software engineer while building a professional technology brand around development, AI and education.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="border-b border-border/60">
          <Container>
            <div className="py-20 sm:py-24 lg:py-32">
              <div className="max-w-4xl">
                <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  Developer • Builder • Technology Creator
                </div>

                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                  I&apos;m building more than a career in technology.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  I&apos;m Yaseen Baloch — a Computer Science student,
                  developer and technology creator focused on building
                  software, exploring AI and automation, and sharing practical
                  knowledge with others.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#journey"
                    className="rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    Explore My Journey
                  </a>

                  <a
                    href="/contact"
                    className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted"
                  >
                    Let&apos;s Work Together
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Who I Am */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Who I Am
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A developer focused on building useful technology.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  I&apos;m Muhammad Yaseen, professionally known as Yaseen
                  Baloch. My work sits at the intersection of software
                  development, AI, automation and technology education.
                </p>

                <p>
                  I enjoy taking an idea, understanding the problem behind it,
                  and turning it into something practical — whether that means
                  a website, software project, automated workflow or educational
                  resource.
                </p>

                <p>
                  My goal is not simply to learn more technologies. It is to
                  develop the ability to use technology effectively, build
                  meaningful products and continuously improve through real
                  projects.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Journey */}
        <section id="journey" className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                My Journey
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Learning by building, improving through experience.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                My development journey is based on a simple principle:
                understand the fundamentals, build real things, learn from
                mistakes and keep moving forward.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {journey.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-7"
                >
                  <div className="text-sm font-semibold text-muted-foreground">
                    0{index + 1}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Academic Foundation */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Academic Foundation
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    BS Computer Science
                  </h2>
                </div>

                <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                  <p>
                    I am pursuing a Bachelor&apos;s degree in Computer Science,
                    strengthening my foundation in programming, computing,
                    problem solving and software development.
                  </p>

                  <p>
                    University education gives me the theoretical foundation,
                    while personal projects and practical development allow me
                    to turn that knowledge into real-world skills.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Skills */}
        <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Skills & Technology
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tools I use to learn, build and experiment.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                My technology stack continues to evolve. I focus on developing
                strong fundamentals while gaining practical experience with
                modern tools and frameworks.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* AI & Automation */}
            <div className="mt-12 rounded-3xl border border-border bg-background p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  AI & Automation
                </p>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Exploring smarter ways to build and work.
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  AI and automation are an important part of my technology
                  journey. I&apos;m exploring how intelligent systems,
                  automation workflows and modern AI tools can be combined with
                  software development to create faster, smarter and more useful
                  solutions.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Focus Areas */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Current Focus
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Where I&apos;m investing my time.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <article
                  key={area.number}
                  className="group rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    {area.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {area.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Philosophy */}
        <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                My Philosophy
              </p>

              <blockquote className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Learn the fundamentals. Build real projects. Share what you
                learn. Keep improving.
              </blockquote>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Technology changes quickly, so I believe long-term growth comes
                from strong fundamentals, consistent practice, curiosity and
                the willingness to keep learning.
              </p>
            </div>
          </Container>
        </section>

        {/* Learning & Building */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  How I Learn & Build
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Turning knowledge into practical experience.
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  "Understand the concept before relying on tools.",
                  "Build projects instead of learning only through theory.",
                  "Use Git and GitHub to document and manage development work.",
                  "Experiment with modern technologies and AI tools.",
                  "Review, improve and refactor existing work.",
                  "Share useful knowledge with the community.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <span className="shrink-0 text-sm font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Personal Brand */}
        <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Personal Brand
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Yaseen Baloch
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                Full-Stack Developer • AI & Automation Builder • Technology
                Educator
              </p>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                Through my personal brand, I document my development journey,
                publish practical technology content, build software projects
                and create learning resources designed to make technology more
                understandable and useful.
              </p>
            </div>
          </Container>
        </section>

        {/* Social Presence */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Social Presence
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Connect with my work.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground sm:text-lg">
                Follow my development journey, projects, educational content
                and technology updates across the platforms below.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:bg-muted"
                >
                  <h3 className="font-semibold">{social.name}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {social.description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-medium">
                    Visit profile →
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border/60 py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl bg-foreground px-7 py-12 text-background sm:px-10 sm:py-16 lg:px-16">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70">
                  Let&apos;s Build Something
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Have an idea, project or opportunity?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 opacity-75 sm:text-lg">
                  I&apos;m always interested in meaningful technology projects,
                  collaborations, learning opportunities and conversations around
                  software, AI and the future of technology.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="rounded-xl bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
                  >
                    Get in Touch
                  </a>

                  <a
                    href="/work"
                    className="rounded-xl border border-background/30 px-5 py-3 text-sm font-medium transition hover:bg-background/10"
                  >
                    View My Work
                  </a>
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