"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { services } from "@/data/services";
import {
  communityLinks,
  contactLinks,
  socialLinks,
} from "@/data/socials";

/* =========================================================
   TYPES
========================================================= */

type IconName =
  | "mail"
  | "whatsapp"
  | "github"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "x"
  | "fiverr"
  | "upwork"
  | "arrow"
  | "check";

/* =========================================================
   ICON
   Self-contained SVG icons.
========================================================= */

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20.5 11.1a8.4 8.4 0 0 1-12.3 7.4L4 20l1.5-4.1A8.4 8.4 0 1 1 20.5 11.1Z" />
          <path d="M8.4 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.6.7c.5 1 1.3 1.8 2.4 2.3l.7-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.4.2-.9.3-1.4.2-2.9-.5-5.9-3.4-6.4-6.3-.1-.5 0-1 .2-1.4Z" />
        </svg>
      );

    case "github":
      return (
        <svg {...common}>
          <path d="M15 22v-3.4c0-1.1-.4-1.8-1-2.2 3.3-.4 6.8-1.6 6.8-7.1 0-1.6-.6-2.9-1.5-3.9.2-.4.7-1.9-.1-3.9 0 0-1.2-.4-4 1.5a13.7 13.7 0 0 0-7.2 0C5.2 1.1 4 1.5 4 1.5c-.8 2-.3 3.5-.1 3.9-.9 1-1.5 2.3-1.5 3.9 0 5.5 3.5 6.7 6.8 7.1-.6.5-1 1.2-1 2.4V22" />
          <path d="M8.2 18.2c-3 .9-3-1.4-4.2-1.8" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 10v6" />
          <path d="M8 7.5v.1" />
          <path d="M12 16v-3.2a2.3 2.3 0 0 1 4.6 0V16" />
          <path d="M12 10v6" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="m10 9 5 3-5 3V9Z" />
        </svg>
      );

    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a21 21 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.6v8" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.1" />
        </svg>
      );

    case "tiktok":
      return (
        <svg {...common}>
          <path d="M14 4v10.2a4 4 0 1 1-3-3.9" />
          <path d="M14 4c.5 2.3 1.8 3.7 4 4" />
        </svg>
      );

    case "x":
      return (
        <svg {...common}>
          <path d="M5 4 19 20" />
          <path d="M19 4 5 20" />
        </svg>
      );

    case "fiverr":
      return (
        <svg {...common}>
          <path d="M7 20V9.5A3.5 3.5 0 0 1 10.5 6H17" />
          <path d="M7 10h7" />
          <path d="M13 10v10" />
          <path d="M16 10v10" />
          <path d="M15.8 6H18" />
        </svg>
      );

    case "upwork":
      return (
        <svg {...common}>
          <path d="M4 15c1.8-1.5 3.1-3.8 3.6-6.7" />
          <path d="M7.6 8.3c.6 3.8 2.2 7.1 5.1 7.1 2.2 0 3.7-1.5 3.7-3.4 0-1.9-1.4-3.2-3.2-3.2-2.1 0-3.5 1.9-4.6 3.8" />
          <path d="M13.1 8.8c1.1-1.7 2.3-2.7 3.7-2.7 1.8 0 3.2 1.3 3.2 3.2 0 1.9-1.5 3.4-3.7 3.4" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );

    default:
      return null;
  }
}

/* =========================================================
   HELPERS
========================================================= */

function getSocialIcon(platform: string): IconName {
  switch (platform) {
    case "github":
      return "github";
    case "linkedin":
      return "linkedin";
    case "youtube":
      return "youtube";
    case "facebook":
      return "facebook";
    case "instagram":
      return "instagram";
    case "tiktok":
      return "tiktok";
    case "x":
      return "x";
    case "fiverr":
      return "fiverr";
    case "upwork":
      return "upwork";
    default:
      return "arrow";
  }
}

const inquiryTypes = [
  "Website",
  "Web Application",
  "Software Development",
  "AI / Automation",
  "Landing Page",
  "Website Maintenance",
  "Other",
] as const;

const budgetOptions = [
  "Under $100",
  "$100 - $300",
  "$300 - $700",
  "$700 - $1500",
  "$1500+",
  "Not decided yet",
] as const;

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const projectType = String(
      formData.get("projectType") ?? "",
    ).trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Project Inquiry — ${service || projectType || "New Project"}`,
    );

    const body = encodeURIComponent(
      `Hello Yaseen,

Name: ${name}
Email: ${email}
Service: ${service}
Project Type: ${projectType}
Budget: ${budget || "Not specified"}

Project Details:
${message}

Sent from yaseenbaloch.com`,
    );

    setSubmitted(true);

    window.location.href =
      `mailto:yaseenonliepk@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
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
                Let&apos;s Build Together
              </span>

              <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Let&apos;s work{" "}
                <span className="text-primary">together.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Have a project, collaboration idea, freelance opportunity, or
                simply want to connect? Tell me what you are working on and
                let&apos;s start the conversation.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={contactLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold !text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Icon name="whatsapp" size={19} />
                  Message on WhatsApp
                </a>

                <a
                  href={contactLinks[1].href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold !text-foreground transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Icon name="mail" size={19} />
                  Send an Email
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            DIRECT CONTACT
        ===================================================== */}
        <section>
          <Container className="py-20 sm:py-24">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Direct Contact
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Choose the way that works for you.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-muted">
                For project discussions and professional communication, you
                can reach me directly through WhatsApp or email.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <a
                href={contactLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name="whatsapp" size={24} />
                  </div>

                  <Icon name="arrow" size={20} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  WhatsApp
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Quick communication and project discussions.
                </p>

                <p className="mt-5 text-sm font-medium text-primary">
                  +92 320 21212826
                </p>
              </a>

              <a
                href={contactLinks[1].href}
                className="group rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name="mail" size={24} />
                  </div>

                  <Icon name="arrow" size={20} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  Email
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  For detailed project requirements and professional inquiries.
                </p>

                <p className="mt-5 break-all text-sm font-medium text-primary">
                  yaseenonliepk@gmail.com
                </p>
              </a>
            </div>
          </Container>
        </section>

        {/* =====================================================
            PROJECT INQUIRY
        ===================================================== */}
        <section className="border-y border-border/60 bg-surface/30">
          <Container className="py-20 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              {/* Form Introduction */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Project Inquiry
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Tell me about your project.
                </h2>

                <p className="mt-5 leading-7 text-muted">
                  Share the basic details of your project. This gives me a
                  clearer understanding of your requirements before we discuss
                  the next steps.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Websites and web applications",
                    "Python and software development",
                    "AI and automation projects",
                    "Landing pages and digital experiences",
                    "Website maintenance and improvements",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon name="check" size={14} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-black/5 sm:p-7">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate={false}
                >
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Muhammad Yaseen"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Service + Project Type */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Service
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service.slug}
                            value={service.title}
                          >
                            {service.title}
                          </option>
                        ))}

                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Project Type
                      </label>

                      <select
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>

                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Budget Range
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>

                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Project Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell me about your project, goals, required features, timeline, or anything else I should know..."
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold !text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-surface"
                  >
                    Send Project Inquiry
                    <Icon name="arrow" size={18} />
                  </button>

                  {/* Success State */}
                  {submitted && (
                    <div
                      role="status"
                      className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-emerald-600 dark:text-emerald-300"
                    >
                      Your email application should open with the inquiry
                      details prepared. If it does not open, please contact me
                      directly through WhatsApp or email.
                    </div>
                  )}

                  <p className="text-center text-xs leading-5 text-muted">
                    Your inquiry is currently prepared through your device&apos;s
                    default email application. A dedicated backend/email
                    system can be integrated later.
                  </p>
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            SOCIAL / PROFESSIONAL
        ===================================================== */}
        <section>
          <Container className="py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Connect
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Find me across the web.
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Follow my development journey, projects, educational content,
                and professional work.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-muted transition group-hover:bg-primary/10 group-hover:text-primary">
                    <Icon
                      name={getSocialIcon(social.platform)}
                      size={20}
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {social.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-muted">
                      Connect with Yaseen
                    </p>
                  </div>

                  <span className="text-muted transition group-hover:text-primary">
                    <Icon name="arrow" size={17} />
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            PAKISTAN DEVELOPER HUB
        ===================================================== */}
        <section className="border-y border-border/60 bg-surface/30">
          <Container className="py-20 sm:py-24">
            <div className="rounded-3xl border border-primary/10 bg-primary/[0.04] p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Community
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    Pakistan Developer Hub
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-muted">
                    A professional technology community focused on learning,
                    building, connecting, and growing through practical
                    development and technology education.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:w-[420px]">
                  {communityLinks.map((community) => (
                    <a
                      key={community.platform}
                      href={community.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={community.label}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/30 hover:bg-primary/5"
                    >
                      <Icon
                        name={
                          community.platform === "whatsapp"
                            ? "whatsapp"
                            : community.platform === "linkedin"
                              ? "linkedin"
                              : "facebook"
                        }
                        size={17}
                      />

                      <span>
                        {community.platform === "whatsapp"
                          ? "WhatsApp"
                          : community.platform === "linkedin"
                            ? "LinkedIn"
                            : "Facebook"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section>
          <Container className="py-20 sm:py-24 lg:py-28">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface px-6 py-14 text-center sm:px-10 lg:px-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-3xl"
              />

              <div className="relative mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Have an Idea?
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s turn it into something real.
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
                  Whether you need a developer, want to collaborate, or simply
                  want to discuss an idea, I&apos;d be happy to hear from you.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={contactLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold !text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <Icon name="whatsapp" size={18} />
                    Start a Conversation
                  </a>

                  <Link
                    href="/work"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold !text-foreground transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Explore My Work
                    <Icon name="arrow" size={18} />
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
