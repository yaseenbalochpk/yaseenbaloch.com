import Link from "next/link";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

const focusAreas = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and applications with a focus on usability, performance and maintainable code.",
  },
  {
    number: "02",
    title: "Python & Software",
    description:
      "Practical software development, programming fundamentals and problem-solving through real projects.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Exploring intelligent tools, automation workflows and AI-powered solutions for practical use cases.",
  },
  {
    number: "04",
    title: "Technology Education",
    description:
      "Turning what I learn into practical resources, explanations and educational content for others.",
  },
];

const statusLabels: Record<string, string> = {
  planned: "Planned",
  "in-progress": "In Development",
  completed: "Completed",
  maintenance: "Maintenance",
};

export default function WorkPage() {
  const featuredProjects = projects.filter((project) => project.featured);

  const projectCategories = Array.from(
    new Set(projects.map((project) => project.type)),
  );

  const technologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies)),
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="border-b border-border/60">
          <Container>
            <div className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative max-w-4xl">
                <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  Work • Projects • Experiments
                </span>

                <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                  Things I build,
                  <span className="block text-muted-foreground">
                    explore and improve.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  A growing collection of software, web development, AI,
                  automation and technology projects built through practical
                  learning and real-world problem solving.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#featured"
                    className="rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    Explore Projects
                  </a>

                  <a
                    href="https://github.com/yaseenbalochpk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Overview */}
        <section className="border-b border-border/60">
          <Container>
            <div className="grid grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
              <div className="px-4 py-8 first:pl-0 sm:px-8">
                <p className="text-2xl font-semibold">
                  {String(projects.length).padStart(2, "0")}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Projects
                </p>
              </div>

              <div className="px-4 py-8 sm:px-8">
                <p className="text-2xl font-semibold">
                  {String(featuredProjects.length).padStart(2, "0")}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Featured
                </p>
              </div>

              <div className="border-t border-border/60 px-4 py-8 sm:border-t-0 sm:px-8">
                <p className="text-2xl font-semibold">
                  {String(projectCategories.length).padStart(2, "0")}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Categories
                </p>
              </div>

              <div className="border-t border-border/60 px-4 py-8 sm:border-t-0 sm:px-8">
                <p className="text-2xl font-semibold">∞</p>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  More Ahead
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Projects */}
        <section id="featured" className="py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Featured Work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Building ideas into useful technology.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                Projects that represent my current development journey,
                technical interests and the direction I&apos;m building toward.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {featuredProjects.length > 0 ? (
                featuredProjects.map((project, index) => (
                  <article
                    key={project.slug}
                    className="overflow-hidden rounded-3xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                      <div className="border-b border-border bg-muted/30 p-8 sm:p-10 lg:border-b-0 lg:border-r">
                        <div className="flex h-full flex-col justify-between">
                          <div>
                            <span className="text-sm font-semibold text-muted-foreground">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                              {project.type}
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                              {project.title}
                            </h3>
                          </div>

                          <div className="mt-10">
                            <span className="inline-flex rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                              {statusLabels[project.status] ??
                                project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 sm:p-10">
                        <p className="max-w-2xl leading-7 text-muted-foreground">
                          {project.description}
                        </p>

                        {project.goal && (
                          <div className="mt-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              Goal
                            </p>

                            <p className="mt-3 leading-7 text-muted-foreground">
                              {project.goal}
                            </p>
                          </div>
                        )}

                        <div className="mt-8">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Technologies
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
                            >
                              View GitHub →
                            </a>
                          )}

                          {"liveUrl" in project && project.liveUrl && (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-muted"
  >
    Live Demo →
  </a>
)}
                      </div>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-3xl border border-border bg-card p-10 text-center">
                  <p className="text-muted-foreground">
                    Projects will appear here as they are added.
                  </p>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Project Categories */}
        <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Projects by Category
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Different projects, different challenges.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground sm:text-lg">
                My work is organized around the areas where I&apos;m building
                practical experience.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projectCategories.map((category, index) => {
                const count = projects.filter(
                  (project) => project.type === category,
                ).length;

                return (
                  <article
                    key={category}
                    className="rounded-2xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="text-sm font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold">{category}</h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {count} {count === 1 ? "project" : "projects"} currently
                      represented in this category.
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Technology Stack */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Technology Stack
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Technologies behind the work.
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                  My stack continues to evolve as I build, experiment and
                  develop stronger software engineering fundamentals.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.length > 0 ? (
                  technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium"
                    >
                      {technology}
                    </span>
                  ))
                ) : (
                  <p className="text-muted-foreground">
                    Technologies will appear as projects are added.
                  </p>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Focus Areas */}
        <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Areas of Focus
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Where I&apos;m investing my learning.
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                  These are the areas shaping my current development journey and
                  future project direction.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <article
                    key={area.number}
                    className="rounded-2xl border border-border bg-background p-6"
                  >
                    <span className="text-sm font-semibold text-muted-foreground">
                      {area.number}
                    </span>

                    <h3 className="mt-5 text-lg font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {area.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Case Studies */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Case Studies
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  More than just a project title.
                </h2>

                <p className="mt-5 leading-8 text-muted-foreground">
                  As projects mature, they can be presented as detailed case
                  studies covering the problem, goal, technical approach,
                  features, challenges, lessons learned and outcome.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Problem",
                  "Goal",
                  "Approach",
                  "Technology",
                  "Challenges",
                  "Outcome",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-background p-5"
                  >
                    <span className="text-xs font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Future Work */}
        <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Future Direction
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Building toward bigger ideas.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground sm:text-lg">
                The long-term direction is to move from learning projects
                toward complete software products, AI-powered tools, automation
                systems and useful digital platforms.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Full-Stack Applications",
                "AI Automation Tools",
                "SaaS Products",
                "Developer & Learning Tools",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <span className="text-xs font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-sm font-semibold">{item}</h3>

                  <p className="mt-3 text-xs text-muted-foreground">
                    Future direction
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl bg-foreground px-7 py-12 text-background sm:px-10 sm:py-16 lg:px-16">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70">
                  Let&apos;s Build
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Have an idea worth building?
                </h2>

                <p className="mt-5 max-w-2xl leading-8 opacity-75 sm:text-lg">
                  I&apos;m interested in meaningful software projects,
                  collaborations and opportunities to turn ideas into useful
                  digital products.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
                  >
                    Start a Conversation
                  </Link>

                  <a
                    href="https://github.com/yaseenbalochpk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-background/30 px-5 py-3 text-sm font-medium transition hover:bg-background/10"
                  >
                    Explore GitHub
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
