import Link from "next/link";

const learningTracks = [
  {
    number: "01",
    title: "Python & Programming",
    description:
      "Build strong programming fundamentals through Python, problem-solving, automation, and practical projects.",
    topics: ["Python", "Programming Logic", "Automation", "Projects"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Learn how modern websites and web applications are designed, developed, tested, and deployed.",
    topics: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    number: "03",
    title: "Computer Science",
    description:
      "Understand the core concepts behind computers, software, algorithms, data structures, and systems.",
    topics: [
      "Programming",
      "Data Structures",
      "Algorithms",
      "Computer Systems",
    ],
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Explore artificial intelligence and practical automation workflows that solve real-world problems.",
    topics: ["AI", "AI Tools", "Automation", "APIs", "Workflows"],
  },
  {
    number: "05",
    title: "Developer Skills",
    description:
      "Develop the professional skills needed to build, document, publish, and maintain real software projects.",
    topics: ["Git", "GitHub", "Debugging", "Deployment", "Best Practices"],
  },
];

const learningProcess = [
  {
    number: "01",
    title: "Learn",
    description:
      "Understand the concept first instead of memorizing code without knowing why it works.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn knowledge into practical projects that demonstrate real problem-solving ability.",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Document what you build through projects, articles, tutorials, and useful resources.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Keep improving through practice, feedback, new technologies, and increasingly challenging projects.",
  },
];

const resources = [
  {
    label: "Notes",
    title: "Practical Learning Notes",
    description:
      "Clear explanations and structured notes designed to make difficult technical concepts easier to understand.",
  },
  {
    label: "Roadmaps",
    title: "Developer Roadmaps",
    description:
      "Step-by-step learning paths that help you understand what to learn, in what order, and why.",
  },
  {
    label: "Projects",
    title: "Project-Based Learning",
    description:
      "Learn by building useful projects instead of stopping at tutorials and theoretical knowledge.",
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.16),transparent_38%)]" />

        <div className="container relative mx-auto px-6 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Yaseen Baloch • Learning Hub
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Learn.
              <span className="text-blue-500"> Build.</span>
              <br />
              Master.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A practical learning space for programming, web development,
              computer science, AI, and modern developer skills — focused on
              understanding concepts and building real projects.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#tracks"
                className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Learning Tracks
              </a>

              <Link
                href="/work"
                className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-blue-500/40 hover:bg-white/[0.06] hover:text-white"
              >
                See My Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Why this platform
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Technology is easier to learn when you understand the why.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                Learning to code is not only about writing more code. It is
                about understanding how things work, solving problems, and
                gradually developing the ability to build useful software.
              </p>

              <p>
                This learning hub is being built around that philosophy:
                <span className="text-slate-200">
                  {" "}
                  learn the concept, build something with it, and use the
                  experience to grow.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section id="tracks" className="section border-y border-white/10 bg-white/[0.015]">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Learning Tracks
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Build your skills step by step.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Explore the areas that form the foundation of modern software
              development and technology.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {learningTracks.map((track) => (
              <article
                key={track.number}
                className="group rounded-2xl border border-white/10 bg-[#0d1422] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#101a2b]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-bold text-blue-500">
                    {track.number}
                  </span>

                  <span className="text-slate-600 transition group-hover:text-blue-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {track.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {track.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {track.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Method */}
      <section id="method" className="section">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Learning Method
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Learn less passively. Build more actively.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A simple process for turning information into practical
              capability.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learningProcess.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-[#0d1422] p-6"
              >
                <span className="text-sm font-bold text-blue-500">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section
        id="resources"
        className="section border-y border-white/10 bg-white/[0.015]"
      >
        <div className="container mx-auto">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Learning Resources
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Useful resources, built around real learning.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Notes, roadmaps, project ideas, and educational material will
                gradually become part of this learning ecosystem.
              </p>
            </div>

            <span className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-400">
              Growing over time
            </span>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.label}
                className="rounded-2xl border border-white/10 bg-[#0d1422] p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                  {resource.label}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {resource.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {resource.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Future Courses */}
      <section id="courses" className="section">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-[#0d1422] to-[#0d1422] p-8 sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Education Platform
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                A bigger learning platform is being built.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                The long-term vision is to turn this space into a structured
                education platform with courses, lessons, practical projects,
                quizzes, resources, and a personalized learning experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Courses",
                  "Lessons",
                  "Projects",
                  "Quizzes",
                  "Resources",
                  "Progress Tracking",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/10 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-white/10">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Keep Building
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Learning becomes valuable when you build with it.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Explore the work behind the learning and see how concepts turn
              into practical projects.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/work"
                className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore My Work
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
              >
                About Yaseen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
