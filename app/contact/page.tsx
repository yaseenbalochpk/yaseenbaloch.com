"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
   Self-contained SVG icons — no external icon package needed.
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

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const projectType = String(formData.get("projectType") ?? "");
    const budget = String(formData.get("budget") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(
      `Project Inquiry — ${projectType || "New Project"}`
    );

    const body = encodeURIComponent(
      `Hello Yaseen,

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Budget: ${budget}

Project Details:
${message}

Sent from yaseenbaloch.com`
    );

    window.location.href = `mailto:yaseenonliepk@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />
            <div className="absolute right-[-120px] top-[100px] h-[280px] w-[280px] rounded-full bg-blue-400/[0.05] blur-3xl" />
          </div>

          <div className="container py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-sm font-medium text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Let&apos;s build something meaningful
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s work{" "}
                <span className="text-blue-400">together.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Have a project, collaboration idea, freelance opportunity, or
                simply want to connect? Send me a message and let&apos;s start
                the conversation.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={contactLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  <Icon name="whatsapp" size={19} />
                  Message on WhatsApp
                </a>

                <a
                  href={contactLinks[1].href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <Icon name="mail" size={19} />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIRECT CONTACT
        ===================================================== */}
        <section className="section">
          <div className="container">
            <div className="mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Direct Contact
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Choose the way that works for you.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                For project discussions and important communication, you can
                reach me directly through WhatsApp or email.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <a
                href={contactLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon name="whatsapp" size={24} />
                  </div>

                  <Icon
                    name="arrow"
                    size={20}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  WhatsApp
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Quick communication and project discussions.
                </p>

                <p className="mt-5 text-sm font-medium text-blue-300">
                  +92 320 21212826
                </p>
              </a>

              <a
                href={contactLinks[1].href}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon name="mail" size={24} />
                  </div>

                  <Icon name="arrow" size={20} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  Email
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  For detailed project requirements and professional inquiries.
                </p>

                <p className="mt-5 break-all text-sm font-medium text-blue-300">
                  yaseenonliepk@gmail.com
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT INQUIRY FORM
        ===================================================== */}
        <section className="section border-y border-white/[0.06] bg-white/[0.012]">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Project Inquiry
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Tell me about your project.
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Share the basic details of your idea. I&apos;ll use the
                  information to understand your requirements before we discuss
                  the next steps.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Websites and web applications",
                    "Software development",
                    "AI and automation projects",
                    "Freelance development work",
                    "Technical collaborations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                        <Icon name="check" size={14} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#0b111d] p-5 shadow-2xl shadow-black/20 sm:p-7">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-200"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Muhammad Yaseen"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-400/50 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-200"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-400/50 focus:bg-white/[0.05]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-sm font-medium text-slate-200"
                      >
                        Project Type
                      </label>

                      <select
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#0d1422] px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-400/50"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option value="Website">Website</option>
                        <option value="Web Application">
                          Web Application
                        </option>
                        <option value="Software Development">
                          Software Development
                        </option>
                        <option value="AI / Automation">
                          AI / Automation
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium text-slate-200"
                      >
                        Budget Range
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#0d1422] px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-blue-400/50"
                      >
                        <option value="" disabled>
                          Select budget
                        </option>
                        <option value="Under $100">Under $100</option>
                        <option value="$100 - $300">$100 - $300</option>
                        <option value="$300 - $700">$300 - $700</option>
                        <option value="$700 - $1500">$700 - $1500</option>
                        <option value="$1500+">$1500+</option>
                        <option value="Not decided yet">
                          Not decided yet
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Project Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell me about your project, goals, features, timeline, or anything else I should know..."
                      className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white placeholder:text-slate-600 outline-none transition focus:border-blue-400/50 focus:bg-white/[0.05]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-[#0b111d]"
                  >
                    Send Project Inquiry
                    <Icon name="arrow" size={18} />
                  </button>

                  {submitted && (
                    <p className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm leading-6 text-emerald-300">
                      Your email app should open now with the project details
                      prepared. If it did not open, contact me directly through
                      WhatsApp or email.
                    </p>
                  )}

                  <p className="text-center text-xs leading-5 text-slate-500">
                    This form prepares an email using your device&apos;s
                    default mail application. A dedicated backend form can be
                    added later.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SOCIAL / PROFESSIONAL
        ===================================================== */}
        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Connect
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find me across the web.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
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
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-white/[0.045]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-300 transition group-hover:bg-blue-500/10 group-hover:text-blue-400">
                    <Icon
                      name={getSocialIcon(social.platform)}
                      size={20}
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      {social.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-slate-500">
                      Connect with Yaseen
                    </p>
                  </div>

                  <Icon name="arrow" size={17} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PAKISTAN DEVELOPER HUB
        ===================================================== */}
        <section className="section border-y border-white/[0.06] bg-white/[0.012]">
          <div className="container">
            <div className="rounded-3xl border border-blue-400/10 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                    Community
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Pakistan Developer Hub
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
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
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
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
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="section">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1422] px-6 py-14 text-center sm:px-10 lg:px-16">
              <div className="absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Have an idea?
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let&apos;s turn it into something real.
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
                  Whether you need a developer, want to collaborate, or simply
                  want to discuss an idea, I&apos;d be happy to hear from you.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={contactLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    <Icon name="whatsapp" size={18} />
                    Start a Conversation
                  </a>

                  <Link
                    href="/work"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    Explore My Work
                    <Icon name="arrow" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
