"use client";

import { FormEvent, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import PlatformIcon from "@/components/PlatformIcon";

import {
  communityLinks,
  contactLinks,
  socialLinks,
} from "@/data/socials";

/* =========================================================
   PAGE OPTIONS
========================================================= */

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

/* =========================================================
   HELPERS
========================================================= */

function findSocial(
  platform: (typeof socialLinks)[number]["platform"],
) {
  return socialLinks.find(
    (item) => item.platform === platform,
  );
}

function findContact(
  type: (typeof contactLinks)[number]["type"],
) {
  return contactLinks.find(
    (item) => item.type === type,
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const [isOpeningEmail, setIsOpeningEmail] =
    useState(false);

  const whatsapp = findContact("whatsapp");
  const email = findContact("email");

  const github = findSocial("github");
  const linkedin = findSocial("linkedin");
  const youtube = findSocial("youtube");
  const facebook = findSocial("facebook");
  const instagram = findSocial("instagram");
  const tiktok = findSocial("tiktok");
  const x = findSocial("x");
  const fiverr = findSocial("fiverr");
  const upwork = findSocial("upwork");

  /* =======================================================
     PROJECT INQUIRY
  ======================================================= */

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget,
    );

    const name = String(
      formData.get("name") ?? "",
    ).trim();

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

    const recipient =
      email?.href.replace("mailto:", "") ??
      "yaseenonliepk@gmail.com";

    const subject = encodeURIComponent(
      `Project Inquiry — ${name || "Website Visitor"}`,
    );

    const body = encodeURIComponent(
      [
        "Hello Yaseen,",
        "",
        "I would like to discuss a project with you.",
        "",
        `Name: ${name}`,
        `Email: ${senderEmail}`,
        `Service: ${service}`,
        `Project Type: ${projectType}`,
        `Budget: ${budget}`,
        "",
        "Project Details:",
        message,
        "",
        "Sent from yaseenbaloch.com",
      ].join("\n"),
    );

    setIsOpeningEmail(true);

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Navbar />

      <main>
        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-30 bg-[#070b14]"
          />

          <div
            aria-hidden="true"
            className="absolute right-[-15%] top-[-25%] -z-20 h-[520px] w-[520px] rounded-full bg-blue-600/[0.09] blur-3xl sm:h-[680px] sm:w-[680px]"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-30%] left-[-15%] -z-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <Container>
            <div className="max-w-4xl py-20 sm:py-24 lg:py-32">
              <div className="mb-7 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-blue-500"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400 sm:text-sm">
                  Contact
                </p>
              </div>

              <h1 className="text-[3rem] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Let&apos;s connect.
                <span className="block text-slate-400">
                  Let&apos;s build something useful.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Have a project, collaboration idea, question,
                or simply want to connect? Choose the channel
                that works best for you.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <Badge variant="accent">
                  Development
                </Badge>

                <Badge>
                  AI &amp; Automation
                </Badge>

                <Badge>
                  Technology Education
                </Badge>
              </div>
            </div>
          </Container>
        </section>

        {/* ===================================================
            DIRECT CONTACT
        ==================================================== */}

        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="01 — Direct Contact"
              title="Reach me directly."
              description="For project discussions, collaborations, or a direct conversation, these are the most direct ways to get in touch."
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
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                        <PlatformIcon
                          platform="whatsapp"
                          size={28}
                          title="WhatsApp"
                        />
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-xl text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-emerald-400"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      WhatsApp
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      Chat directly
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                      Start a direct conversation with me
                      through WhatsApp.
                    </p>

                    <p className="mt-6 text-sm font-medium text-slate-300">
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
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                        <PlatformIcon
                          platform="email"
                          size={28}
                          title="Email"
                        />
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-xl text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      Send an email
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                      Send a message directly to my professional
                      inbox.
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

        {/* ===================================================
            PROFESSIONAL PROFILES
        ==================================================== */}

        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="02 — Professional"
              title="Professional profiles."
              description="Explore my development work, repositories, projects, professional journey, and technical activity."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={github.label}
                  className="group"
                >
                  <Card
                    interactive
                    padding="lg"
                    className="h-full"
                  >
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-200">
                          <PlatformIcon
                            platform="github"
                            size={27}
                            title="GitHub"
                          />
                        </span>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Professional
                          </p>

                          <h2 className="mt-1 text-xl font-semibold text-white">
                            GitHub
                          </h2>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-xl text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-400">
                      Explore repositories, projects,
                      experiments, and development work.
                    </p>
                  </Card>
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={linkedin.label}
                  className="group"
                >
                  <Card
                    interactive
                    padding="lg"
                    className="h-full"
                  >
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-200">
                          <PlatformIcon
                            platform="linkedin"
                            size={27}
                            title="LinkedIn"
                          />
                        </span>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Professional
                          </p>

                          <h2 className="mt-1 text-xl font-semibold text-white">
                            LinkedIn
                          </h2>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-xl text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-400">
                      Connect professionally and follow my
                      technology journey.
                    </p>
                  </Card>
                </a>
              )}
            </div>
          </Container>
        </section>

        {/* ===================================================
            SOCIAL & CONTENT
        ==================================================== */}

        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="03 — Social & Content"
              title="Follow the journey."
              description="Follow along for programming, technology, AI, projects, learning, and practical content."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {youtube && (
                <SocialCard
                  name="YouTube"
                  href={youtube.href}
                  label={youtube.label}
                  platform="youtube"
                />
              )}

              {facebook && (
                <SocialCard
                  name="Facebook"
                  href={facebook.href}
                  label={facebook.label}
                  platform="facebook"
                />
              )}

              {instagram && (
                <SocialCard
                  name="Instagram"
                  href={instagram.href}
                  label={instagram.label}
                  platform="instagram"
                />
              )}

              {tiktok && (
                <SocialCard
                  name="TikTok"
                  href={tiktok.href}
                  label={tiktok.label}
                  platform="tiktok"
                />
              )}

              {x && (
                <SocialCard
                  name="X"
                  href={x.href}
                  label={x.label}
                  platform="x"
                />
              )}
            </div>
          </Container>
        </section>

        {/* ===================================================
            FREELANCE
        ==================================================== */}

        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="04 — Freelance"
              title="Work with me."
              description="For freelance projects and development opportunities, you can also find me on these platforms."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {fiverr && (
                <FreelanceCard
                  name="Fiverr"
                  href={fiverr.href}
                  label={fiverr.label}
                  platform="fiverr"
                />
              )}

              {upwork && (
                <FreelanceCard
                  name="Upwork"
                  href={upwork.href}
                  label={upwork.label}
                  platform="upwork"
                />
              )}
            </div>
          </Container>
        </section>

        {/* ===================================================
            COMMUNITY
        ==================================================== */}

        <section className="section border-b border-white/10">
          <Container>
            <SectionHeading
              eyebrow="05 — Community"
              title="Pakistan Developer Hub."
              description="Join the community to learn, build, connect, and grow with other developers and technology learners."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {communityLinks.map(
                (community) => (
                  <CommunityCard
                    key={community.platform}
                    name={community.name}
                    href={community.href}
                    label={community.label}
                    platform={community.platform}
                  />
                ),
              )}
            </div>
          </Container>
        </section>

        {/* ===================================================
            PROJECT INQUIRY
        ==================================================== */}

        <section className="section border-b border-white/10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="06 — Project Inquiry"
                  title="Have a project in mind?"
                  description="Share a few details about what you are building. Your default email application will open with the information prepared for a direct conversation."
                />

                {email && (
                  <div className="mt-8 border-l border-blue-500/40 pl-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                      Direct email
                    </p>

                    <p className="mt-2 break-all text-sm font-medium text-slate-300">
                      {email.href.replace(
                        "mailto:",
                        "",
                      )}
                    </p>
                  </div>
                )}
              </div>

              <Card
                padding="lg"
                className="sm:p-8"
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* NAME / EMAIL */}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      id="name"
                      name="name"
                      label="Name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                    />

                    <FormField
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>

                  {/* SERVICE / PROJECT */}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <SelectField
                      id="service"
                      name="service"
                      label="Service"
                      options={services}
                    />

                    <SelectField
                      id="projectType"
                      name="projectType"
                      label="Project Type"
                      options={projectTypes}
                    />
                  </div>

                  {/* BUDGET */}

                  <SelectField
                    id="budget"
                    name="budget"
                    label="Budget"
                    options={budgets}
                  />

                  {/* MESSAGE */}

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

                  {/* SUBMIT */}

                  <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-6 text-slate-500">
                      This form opens your default email
                      application with the inquiry prepared.
                      No information is stored by this form.
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isOpeningEmail}
                      className="shrink-0"
                    >
                      {isOpeningEmail
                        ? "Opening Email..."
                        : "Send Inquiry"}

                      <span aria-hidden="true">
                        ↗
                      </span>
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </Container>
        </section>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <section className="section">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/[0.06] px-7 py-14 text-center sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
              />

              <Badge
                variant="accent"
                size="sm"
              >
                Let&apos;s Connect
              </Badge>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Have a question?
                <span className="block text-blue-400">
                  Just reach out.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Choose WhatsApp for a direct conversation
                or email for a detailed project discussion.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {whatsapp && (
                  <Button
                    href={whatsapp.href}
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlatformIcon
                      platform="whatsapp"
                      size={18}
                    />

                    WhatsApp
                  </Button>
                )}

                {email && (
                  <Button
                    href={email.href}
                    variant="outline"
                    size="lg"
                  >
                    <PlatformIcon
                      platform="email"
                      size={18}
                    />

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

/* =========================================================
   SOCIAL CARD
========================================================= */

type SocialCardProps = {
  name: string;
  href: string;
  label: string;
  platform:
    | "youtube"
    | "facebook"
    | "instagram"
    | "tiktok"
    | "x";
};

function SocialCard({
  name,
  href,
  label,
  platform,
}: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
    >
      <Card
        interactive
        padding="md"
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300">
            <PlatformIcon
              platform={platform}
              size={21}
              title={name}
            />
          </span>

          <span className="font-medium text-slate-200">
            {name}
          </span>
        </div>

        <span
          aria-hidden="true"
          className="text-xl text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
        >
          ↗
        </span>
      </Card>
    </a>
  );
}

/* =========================================================
   FREELANCE CARD
========================================================= */

type FreelanceCardProps = {
  name: string;
  href: string;
  label: string;
  platform: "fiverr" | "upwork";
};

function FreelanceCard({
  name,
  href,
  label,
  platform,
}: FreelanceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
    >
      <Card
        interactive
        padding="lg"
        className="h-full"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-200">
            <PlatformIcon
              platform={platform}
              size={27}
              title={name}
            />
          </span>

          <span
            aria-hidden="true"
            className="text-xl text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
          >
            ↗
          </span>
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-white">
          {name}
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          View my freelance profile and available services.
        </p>

        <div className="mt-6">
          <Badge
            variant="muted"
            size="sm"
          >
            Open Profile
          </Badge>
        </div>
      </Card>
    </a>
  );
}

/* =========================================================
   COMMUNITY CARD
========================================================= */

type CommunityCardProps = {
  name: string;
  href: string;
  label: string;
  platform:
    | "whatsapp"
    | "linkedin"
    | "facebook";
};

function CommunityCard({
  name,
  href,
  label,
  platform,
}: CommunityCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
    >
      <Card
        interactive
        padding="md"
        className="h-full"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300">
              <PlatformIcon
                platform={platform}
                size={21}
                title={name}
              />
            </span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Community
              </p>

              <h2 className="mt-1 font-semibold text-white">
                {name}
              </h2>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="text-xl text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
          >
            ↗
          </span>
        </div>
      </Card>
    </a>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email";
  placeholder: string;
  autoComplete?: string;
};

function FormField({
  id,
  name,
  label,
  type,
  placeholder,
  autoComplete,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-blue-500/10"
      />
    </div>
  );
}

/* =========================================================
   SELECT FIELD
========================================================= */

type SelectFieldProps = {
  id: string;
  name: string;
  label: string;
  options: readonly string[];
};

function SelectField({
  id,
  name,
  label,
  options,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <select
        id={id}
        name={name}
        required
        defaultValue=""
        className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0d1422] px-4 text-sm text-slate-300 outline-none transition-colors focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
      >
        <option
          value=""
          disabled
        >
          Select {label.toLowerCase()}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}