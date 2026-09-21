"use client";

import { FormEvent, useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

import {
  communityLinks,
  contactLinks,
  socialLinks,
} from "@/data/socials";
import { siteConfig } from "@/data/site";

const professionalPlatforms = ["github", "linkedin"] as const;

const contentPlatforms = [
  "youtube",
  "facebook",
  "instagram",
  "tiktok",
  "x",
] as const;

const freelancePlatforms = ["fiverr", "upwork"] as const;

const services = [
  "Web Development",
  "Python Development",
  "AI & Automation",
  "Landing Page",
  "Website Maintenance",
  "Other",
] as const;

const projectTypes = [
  "Personal Website",
  "Business Website",
  "Web Application",
  "Python Application",
  "AI / Automation",
  "Landing Page",
  "Other",
] as const;

const budgets = [
  "Under $100",
  "$100 – $300",
  "$300 – $500",
  "$500 – $1,000",
  "$1,000+",
  "Not decided yet",
] as const;

const platformShortLabels: Record<
  (typeof socialLinks)[number]["platform"],
  string
> = {
  github: "GH",
  linkedin: "in",
  youtube: "YT",
  facebook: "f",
  instagram: "IG",
  tiktok: "TT",
  x: "X",
  fiverr: "Fi",
  upwork: "Up",
};

function getSocialLink(
  platform: (typeof socialLinks)[number]["platform"],
) {
  return socialLinks.find(
    (social) => social.platform === platform,
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const whatsapp = contactLinks.find(
    (link) => link.type === "whatsapp",
  );

  const email = contactLinks.find(
    (link) => link.type === "email",
  );

  const professionalLinks = useMemo(
    () =>
      professionalPlatforms
        .map((platform) => getSocialLink(platform))
        .filter(Boolean),
    [],
  );

  const contentLinks = useMemo(
    () =>
      contentPlatforms
        .map((platform) => getSocialLink(platform))
        .filter(Boolean),
    [],
  );

  const freelanceLinks = useMemo(
    () =>
      freelancePlatforms
        .map((platform) => getSocialLink(platform))
        .filter(Boolean),
    [],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(
      formData.get("email") ?? "",
    ).trim();
    const service = String(
      formData.get("service") ?? "",
    ).trim();
    const projectType = String(
      formData.get("projectType") ?? "",
    ).trim();
    const budget = String(
      formData.get("budget") ?? "",
    ).trim();
    const message = String(
      formData.get("message") ?? "",
    ).trim();

    const subject = encodeURIComponent(
      `Project Inquiry — ${name || "Website Visitor"}`,
    );

    const body = encodeURIComponent(
      [
        `Hello Yaseen,`,
        ``,
        `I would like to discuss a project with you.`,
        ``,
        `Name: ${name}`,
        `Email: ${senderEmail}`,
        `Service: ${service}`,
        `Project Type: ${projectType}`,
        `Budget: ${budget}`,
        ``,
        `Message:`,
        message,
        ``,
        `Sent from yaseenbaloch.com`,
      ].join("\n"),
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
            CONTACT HERO
        ====================================================== */}
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-30 bg-[#070b14]"
          />

          <div
            aria-hidden="true"
            className="absolute right-[-12%] top-[-30%] -z-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.09] blur-3xl sm:h-[650px] sm:w-[650px]"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-30%] left-[-15%] -z-20 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-3xl"
          />

          <Container>
            <div className="max-w-4xl py-20 sm:py-24 lg:py-28">
              <div className="mb-7 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-blue-500"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400 sm:text-sm">
                  Contact
                </p>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Let&apos;s connect.
                <span className="block text-slate-400">
                  Let&apos;s build something useful.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Have a project, collaboration idea, question, or simply want
                to connect? Choose the platform that works best for you.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="accent">
                  Developer
                </Badge>

                <Badge variant="default">
                  AI &amp; Automation
                </Badge>

                <Badge variant="default">
                  Technology Education
                </Badge>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            DIRECT CONTACT
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="01 — Direct Contact"
              title="Reach me directly."
              description="For project discussions, collaboration, or a direct conversation, these are the fastest ways to get in touch."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {whatsapp && (
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={whatsapp.label}
                  className="group"
                >
                  <Card
                    interactive
                    padding="lg"
                    className="h-full"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-sm font-bold text-emerald-400">
                        WA
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-emerald-400"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      WhatsApp
                    </p>

                    <h2 className="mt-3 text-xl font-semibold text-white">
                      Chat directly
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      Start a direct conversation through WhatsApp.
                    </p>

                    <p className="mt-6 break-all text-sm font-medium text-slate-300">
                      +92 320 2121826
                    </p>
                  </Card>
                </a>
              )}

              {email && (
                <a
                  href={email.href}
                  aria-label={email.label}
                  className="group"
                >
                  <Card
                    interactive
                    padding="lg"
                    className="h-full"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-sm font-bold text-blue-400">
                        @
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </p>

                    <h2 className="mt-3 text-xl font-semibold text-white">
                      Send an email
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      Send a message directly to my professional inbox.
                    </p>

                    <p className="mt-6 break-all text-sm font-medium text-slate-300">
                      {email.href.replace("mailto:", "")}
                    </p>
                  </Card>
                </a>
              )}
            </div>
          </Container>
        </section>

        {/* =====================================================
            PROFESSIONAL NETWORKS
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="02 — Professional"
              title="Professional profiles."
              description="Explore my development work, professional journey, projects, and technical activity."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {professionalLinks.map((social) => {
                if (!social) return null;

                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group"
                  >
                    <Card
                      interactive
                      padding="lg"
                      className="h-full"
                    >
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-bold text-blue-400">
                            {platformShortLabels[social.platform]}
                          </span>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                              Professional
                            </p>

                            <h2 className="mt-1 text-xl font-semibold text-white">
                              {social.name}
                            </h2>
                          </div>
                        </div>

                        <span
                          aria-hidden="true"
                          className="text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                        >
                          ↗
                        </span>
                      </div>

                      <p className="mt-6 text-sm leading-7 text-slate-400">
                        {social.platform === "github"
                          ? "Explore my repositories, projects, experiments, and development journey."
                          : "Connect with me professionally and follow my technology journey."}
                      </p>
                    </Card>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =====================================================
            SOCIAL & CONTENT
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="03 — Social & Content"
              title="Follow the journey."
              description="Follow along for programming, technology, AI, projects, learning, and practical content."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contentLinks.map((social) => {
                if (!social) return null;

                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group"
                  >
                    <Card
                      interactive
                      padding="md"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold text-slate-300">
                          {platformShortLabels[social.platform]}
                        </span>

                        <span className="font-medium text-slate-200">
                          {social.name}
                        </span>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </Card>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =====================================================
            FREELANCE
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="04 — Freelance"
              title="Work with me."
              description="For freelance projects and development opportunities, you can also find me on these platforms."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {freelanceLinks.map((social) => {
                if (!social) return null;

                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group"
                  >
                    <Card
                      interactive
                      padding="lg"
                      className="h-full"
                    >
                      <div className="flex items-start justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-bold text-blue-400">
                          {platformShortLabels[social.platform]}
                        </span>

                        <span
                          aria-hidden="true"
                          className="text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                        >
                          ↗
                        </span>
                      </div>

                      <h2 className="mt-8 text-xl font-semibold text-white">
                        {social.name}
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        View my freelance profile and available services.
                      </p>

                      <div className="mt-6">
                        <Badge variant="muted" size="sm">
                          Open Profile
                        </Badge>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =====================================================
            PAKISTAN DEVELOPER HUB
        ====================================================== */}
        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="05 — Community"
              title="Pakistan Developer Hub."
              description="Join the community to learn, build, connect, and grow with other developers and technology learners."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {communityLinks.map((community) => (
                <a
                  key={community.platform}
                  href={community.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={community.label}
                  className="group"
                >
                  <Card
                    interactive
                    padding="md"
                    className="h-full"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Community
                        </p>

                        <h2 className="mt-2 font-semibold text-white">
                          {community.name}
                        </h2>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            PROJECT INQUIRY
        ====================================================== */}
        <section className="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="06 — Project Inquiry"
                  title="Have a project in mind?"
                  description="Share a few details about what you are building. Your email app will open with the information prepared for a direct conversation."
                />

                <div className="mt-8">
                  <div className="border-l border-blue-500/40 pl-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                      Direct email
                    </p>

                    <p className="mt-2 break-all text-sm font-medium text-slate-300">
                      {email?.href.replace("mailto:", "")}
                    </p>
                  </div>
                </div>
              </div>

              <Card
                padding="lg"
                className="border-white/10 bg-[#0d1422] sm:p-8"
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Service
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0d1422] px-4 text-sm text-slate-300 outline-none transition-colors focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Project Type
                      </label>

                      <select
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0d1422] px-4 text-sm text-slate-300 outline-none transition-colors focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>

                        {projectTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      required
                      defaultValue=""
                      className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0d1422] px-4 text-sm text-slate-300 outline-none transition-colors focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                    >
                      <option value="" disabled>
                        Select a budget range
                      </option>

                      {budgets.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project, goals, requirements, and timeline..."
                      className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-6 text-slate-500">
                      This form prepares an email in your default email
                      application. No information is stored on this website.
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      className="shrink-0"
                    >
                      {submitted
                        ? "Opening Email..."
                        : "Send Inquiry"}
                      <span aria-hidden="true">↗</span>
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FINAL CONTACT CTA
        ====================================================== */}
        <section className="pb-24 sm:pb-28 lg:pb-32">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/[0.06] px-7 py-14 text-center sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
              />

              <Badge variant="accent" size="sm">
                {siteConfig.tagline}
              </Badge>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Have a question?
                <span className="block text-blue-400">
                  Just reach out.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Choose WhatsApp for a direct conversation or email for a
                detailed project discussion.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {whatsapp && (
                  <Button
                    href={whatsapp.href}
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </Button>
                )}

                {email && (
                  <Button
                    href={email.href}
                    variant="outline"
                    size="lg"
                  >
                    Email Me
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}