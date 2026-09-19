export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Muhammad Yaseen
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl">
              Software Developer
              <br />
              <span className="text-blue-600">
                Builder & Educator
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              I build modern digital experiences, learn emerging technologies,
              and share practical knowledge to help students and businesses
              grow in the digital world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 text-sm text-gray-500">
              <span>Python</span>
              <span>Web Development</span>
              <span>AI Automation</span>
              <span>Computer Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Learning, building and sharing.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am a BS Computer Science student passionate about software
              development, programming, artificial intelligence and technology
              education.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="section">
        <div className="container mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Projects & Experiments
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Web Development
              </h3>
              <p className="mt-3 text-gray-600">
                Modern responsive websites and web applications.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Python Projects
              </h3>
              <p className="mt-3 text-gray-600">
                Practical Python projects and programming experiments.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                AI & Automation
              </h3>
              <p className="mt-3 text-gray-600">
                Exploring AI tools, automation and intelligent solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="section border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            For projects, collaborations, education and professional
            opportunities.
          </p>

          <a
            href="mailto:hello@yaseenbaloch.com"
            className="mt-8 inline-block rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammad Yaseen. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
