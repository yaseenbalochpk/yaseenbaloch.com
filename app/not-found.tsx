import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b14] px-4 py-16 text-white sm:px-6 lg:px-8">
      <section
        aria-labelledby="not-found-title"
        className="w-full max-w-2xl text-center"
      >
        {/* Status */}
        <div
          aria-hidden="true"
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10"
        >
          <span className="text-2xl font-bold tracking-tight text-blue-400">
            404
          </span>
        </div>

        {/* Heading */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Page not found
        </p>

        <h1
          id="not-found-title"
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          This page doesn&apos;t exist.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          The page you&apos;re looking for may have been moved, renamed,
          or is no longer available. Let&apos;s get you back to
          somewhere useful.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition-all duration-200 hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
          >
            Back to home
          </Link>

          <Link
            href="/work"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition-all duration-200 hover:border-blue-500/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
          >
            Explore my work
          </Link>
        </div>

        {/* Helpful navigation */}
        <nav
          aria-label="Helpful links"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          <Link
            href="/about"
            className="text-sm text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            About
          </Link>

          <Link
            href="/learn"
            className="text-sm text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Learn
          </Link>

          <Link
            href="/blog"
            className="text-sm text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-sm text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Contact
          </Link>
        </nav>
      </section>
    </main>
  );
}