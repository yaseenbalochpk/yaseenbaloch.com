import Link from "next/link";
import Navbar from "@/components/Navbar";

type ContactMethod = {
  number: string;
  title: string;
  description: string;
  href: string;
  label: string;
};

const contactMethods: ContactMethod[] = [
  {
    number: "01",
    title: "Email",
    description:
      "For project inquiries, collaborations, professional discussions, and other serious opportunities.",
    href: "mailto:hello@yaseenbaloch.com",
    label: "Send an Email",
  },
  {
    number: "02",
    title: "LinkedIn",
    description:
      "Connect with me professionally and follow my work, learning journey, and technology updates.",
    href: "https://www.linkedin.com/",
    label: "Connect on LinkedIn",
  },
  {
    number: "03",
    title: "GitHub",
    description:
      "Explore my projects, programming work, experiments, and open-source development.",
    href: "https://github.com/yaseenbal0chpk",
    label: "View GitHub",
  },
];

const projectTypes = [
  "Website Development",
  "Web Application",
  "Python Development",
  "AI & Automation",
  "Landing Page",
  "Other",
];

const budgetRanges = [
  "Under $100",
  "$100 – $300",
  "$300 – $500",
  "$500 – $1,000",
  "$1,000+",
  "Not decided yet",
];

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Yaseen Baloch for web development, Python development, AI automation, collaborations, and technology projects.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        />

        <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Contact
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Let&apos;s build something
              <span className="block text-blue-400">
                meaningful together.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Have a project, idea, collaboration, or technical question?
              Share what you&apos;re working on and let&apos;s explore how
              technology can turn the idea into something practical.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Get in touch
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Choose the way that works for you.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Whether you want to discuss a project, connect professionally,
              or explore an idea, you can reach me through the channels below.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.number}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#111b2d]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                    {method.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {method.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-400">
                  {method.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-blue-400">
                  {method.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Project Inquiry */}
      <section className="border-y border-white/10 bg-[#0a101c]">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* Intro */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Project Inquiry
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Tell me about your project.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                A clear project brief helps me understand what you need,
                what you are trying to achieve, and which technology may be
                suitable for the project.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Describe the problem you want to solve.",
                  "Tell me what you want to build.",
                  "Share your preferred timeline or budget.",
                  "Include any useful links or references.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-semibold text-blue-400">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                <p className="text-sm font-semibold text-white">
                  What happens next?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  I&apos;ll review the information and use it to understand
                  the project scope before discussing the next steps.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-white/10 bg-[#0d1422] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  Project Brief
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Share the basic details of your project.
                </p>
              </div>

              <form className="space-y-6">
                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">
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
                      placeholder="Muhammad Yaseen"
                      autoComplete="name"
                      className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Service + Project Type */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Web Development</option>
                      <option>Python Development</option>
                      <option>AI & Automation</option>
                      <option>Landing Page</option>
                      <option>Website Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>

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
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>

                      {projectTypes.map((type) => (
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
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="" disabled>
                      Select an estimated budget
                    </option>

                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
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
                    rows={6}
                    placeholder="Tell me about your project, goals, features, timeline, or any important requirements..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm leading-6 text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Current backend state */}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs leading-5 text-slate-500">
                    The contact form interface is ready. Secure form
                    submission and email delivery will be connected during
                    the backend integration phase.
                  </p>
                </div>

                <button
                  type="button"
                  disabled
                  className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-blue-600/50 px-6 py-3.5 text-sm font-semibold text-white/70"
                >
                  Send Project Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Working Together */}
      <section className="section">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1422] to-[#0a101c] px-6 py-14 text-center sm:px-10 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s work together
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have an idea worth building?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              From websites and software projects to Python development and
              AI automation, I&apos;m interested in practical technology that
              solves real problems.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:border-blue-500/40 hover:bg-white/5"
              >
                Explore My Work
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:bg-blue-500"
              >
                View Services
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8 text-center sm:px-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Yaseen Baloch. Built with purpose,
            curiosity, and code.
          </p>
        </div>
      </footer>
    </main>
  );
}