import Link from "next/link";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { services } from "@/data/services";

function Icon({
  name,
  size = 20,
}: {
  name:
    | "arrow"
    | "check"
    | "code"
    | "spark"
    | "target"
    | "layers"
    | "workflow";
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common}>
          <path
            d="M5 12H19M13 6L19 12L13 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path
            d="M5 12.5L9.2 16.5L19 7.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "code":
      return (
        <svg {...common}>
          <path
            d="M8.5 8L4.5 12L8.5 16M15.5 8L19.5 12L15.5 16M13.5 5L10.5 19"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "spark":
      return (
        <svg {...common}>
          <path
            d="M12 3L13.6 8.4L19 10L13.6 11.6L12 17L10.4 11.6L5 10L10.4 8.4L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M19 15L19.8 17.2L22 18L19.8 18.8L19 21L18.2 18.8L16 18L18.2 17.2L19 15Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "target":
      return (
        <svg {...common}>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case "layers":
      return (
        <svg {...common}>
          <path
            d="M12 4L20 8L12 12L4 8L12 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M4 12L12 16L20 12M4 16L12 20L20 16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path
            d="M5 6H19M5 12H19M5 18H19"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="9" cy="6" r="2" fill="currentColor" />
          <circle cx="15" cy="12" r="2" fill="currentColor" />
          <circle cx="11" cy="18" r="2" fill="currentColor" />
        </svg>
      );
  }
}

const serviceIcons = {
  "web-development": "code",
  "python-development": "code",
  "ai-automation": "spark",
  "landing-pages": "target",
  "website-maintenance": "layers",
} as const;

const categoryDescriptions = {
  Web: "Modern digital experiences built for clarity, responsiveness, usability, and performance.",
  Development:
    "Practical software solutions focused on solving clearly defined technical problems.",
  "AI & Automation":
    "AI-assisted workflows and automation designed to reduce repetitive digital work.",
  Maintenance:
    "Focused technical improvements that keep existing websites useful, stable, and maintainable.",
} as const;

function getServiceIcon(slug: string) {
  return (
    serviceIcons[slug as keyof typeof serviceIcons] ?? "layers"
  );
}

export default function ServicesPage() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.14),transparent_62%)]"
          />

          <Container className="relative py-20 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
                Services & Solutions
              </span>

              <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                Turning ideas into
                <span className="block text-primary">
                  practical digital solutions.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Development and technology services focused on building useful
                websites, software, automation workflows, and digital
                experiences around real project goals.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-semibold !text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Start a Project
                  <Icon name="arrow" size={18} />
                </Link>

                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-surface px-7 py-3 text-sm font-semibold !text-foreground transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-surface p-5 text-center sm:text-left">
                <p className="text-2xl font-semibold text-foreground">
                  {services.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm text-muted">
                  Core services
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5 text-center sm:text-left">
                <p className="text-2xl font-semibold text-foreground">
                  Modern
                </p>
                <p className="mt-1 text-sm text-muted">
                  Development stack
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5 text-center sm:text-left">
                <p className="text-2xl font-semibold text-foreground">
                  Practical
                </p>
                <p className="mt-1 text-sm text-muted">
                  Goal-focused approach
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Approach Introduction */}
        <section>
          <Container className="py-20 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  My Approach
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Start with the problem, then choose the technology.
                </h2>
              </div>

              <div className="max-w-2xl space-y-5 text-base leading-8 text-muted">
                <p>
                  Good software is not simply a collection of technologies. It
                  should solve a clearly understood problem and provide a
                  useful experience for the people who use it.
                </p>

                <p>
                  That is why the process starts with understanding the goal,
                  audience, requirements, and constraints before moving into
                  implementation.
                </p>

                <p className="text-foreground">
                  The goal is simple:
                  <span className="font-medium text-primary">
                    {" "}
                    build something useful, understandable, and ready to grow.
                  </span>
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Overview */}
        <section
          id="services"
          className="scroll-mt-24 border-y border-border/60 bg-surface/30"
        >
          <Container className="py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Services
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Focused services for digital projects.
              </h2>

              <p className="mt-5 leading-7 text-muted">
                A focused service set covering websites, software development,
                AI automation, landing pages, and ongoing website support.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/[0.04] blur-2xl transition duration-300 group-hover:bg-primary/[0.08]"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                        <Icon
                          name={getServiceIcon(service.slug)}
                          size={21}
                        />
                      </div>

                      {service.featured && (
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {service.category}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-4 min-h-[112px] text-sm leading-7 text-muted">
                      {service.shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.technologies.slice(0, 5).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View service
                      <Icon name="arrow" size={16} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Services */}
        <section>
          <Container className="py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Core Services
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Development, automation, and digital experiences.
              </h2>

              <p className="mt-5 leading-7 text-muted">
                These featured services represent the main areas of my
                current development and technology work.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <div
                  key={service.slug}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <p className="text-sm font-medium text-primary">
                    {service.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.slice(0, 5).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Complete Service Details */}
        <section className="border-t border-border/60">
          <Container className="py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Service Details
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What each service includes.
              </h2>

              <p className="mt-5 leading-7 text-muted">
                Explore the scope, deliverables, technologies, ideal clients,
                and process behind each service.
              </p>
            </div>

            <div className="mt-14 space-y-8">
              {services.map((service, index) => (
                <article
                  id={service.slug}
                  key={service.slug}
                  className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-surface"
                >
                  {/* Service Header */}
                  <div className="border-b border-border p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-3xl">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm text-muted">
                            {service.category}
                          </span>

                          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                            {service.status === "available"
                              ? "Available"
                              : service.status === "coming-soon"
                                ? "Coming Soon"
                                : "Paused"}
                          </span>
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-base leading-7 text-muted">
                          {service.description}
                        </p>
                      </div>

                      <Link
                        href={service.href}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold !text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        Discuss This Service
                        <Icon name="arrow" size={17} />
                      </Link>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className="grid lg:grid-cols-2">
                    {/* Deliverables */}
                    <div className="border-b border-border p-6 sm:p-8 lg:border-r lg:p-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
                          <Icon name="check" size={19} />
                        </div>

                        <h4 className="text-lg font-semibold text-foreground">
                          Deliverables
                        </h4>
                      </div>

                      <ul className="mt-6 space-y-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="border-b border-border p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
                          <Icon name="code" size={19} />
                        </div>

                        <h4 className="text-lg font-semibold text-foreground">
                          Technologies
                        </h4>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {service.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-muted"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ideal Client */}
                    <div className="border-b border-border p-6 sm:p-8 lg:border-r lg:p-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
                          <Icon name="target" size={19} />
                        </div>

                        <h4 className="text-lg font-semibold text-foreground">
                          Ideal Client
                        </h4>
                      </div>

                      <ul className="mt-6 space-y-3">
                        {service.idealFor.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div className="border-b border-border p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
                          <Icon name="workflow" size={19} />
                        </div>

                        <h4 className="text-lg font-semibold text-foreground">
                          Process
                        </h4>
                      </div>

                      {service.process?.length ? (
                        <ol className="mt-6 space-y-4">
                          {service.process.map((step, stepIndex) => (
                            <li
                              key={step}
                              className="flex items-start gap-3 text-sm leading-6 text-muted"
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground">
                                {stepIndex + 1}
                              </span>

                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <p className="mt-6 text-sm leading-6 text-muted">
                          The project process will be defined according to
                          the scope and requirements.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service CTA */}
                  <div className="flex flex-col gap-4 bg-background p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Have a project in mind?
                      </p>

                      <p className="mt-1 text-sm text-muted">
                        Share your requirements and let&apos;s discuss the
                        right approach.
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold !text-foreground transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                      Start an Inquiry
                      <Icon name="arrow" size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Working Principles */}
        <section className="border-y border-border/60 bg-surface/30">
          <Container className="py-20 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Working Principles
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Build with purpose, not unnecessary complexity.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-muted">
                  The goal is not simply to use more technologies. It is to
                  choose the right tools for the problem and build something
                  useful, maintainable, and ready to evolve.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {[
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
                ].map((principle) => (
                  <article
                    key={principle.title}
                    className="bg-surface p-6 sm:p-7"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                      ✓
                    </div>

                    <h3 className="mt-5 font-semibold text-foreground">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Areas of Work */}
        <section>
          <Container className="py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Areas of Work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Different services, one practical approach.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(categoryDescriptions).map(
                ([category, description]) => (
                  <div
                    key={category}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <h3 className="font-semibold text-foreground">
                      {category}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border/60">
          <Container className="py-20 sm:py-24 lg:py-28">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface px-6 py-14 text-center sm:px-10 lg:px-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_58%)]"
              />

              <div className="relative mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Start a Project
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Have an idea worth building?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
                  Tell me what you are trying to build, improve, or automate.
                  Share the problem and requirements, and we can discuss the
                  right next step.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-semibold !text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Let&apos;s Work Together
                    <Icon name="arrow" size={18} />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-background px-7 py-3 text-sm font-semibold !text-foreground transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    View My Work
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
