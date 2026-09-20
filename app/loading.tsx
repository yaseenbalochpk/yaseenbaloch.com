export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading page"
      className="min-h-screen bg-[#070b14] text-white"
    >
      {/* Screen-reader status */}
      <div
        role="status"
        aria-live="polite"
        className="sr-only"
      >
        Loading page…
      </div>

      {/* Header skeleton */}
      <header className="border-b border-white/5">
        <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="h-10 w-10 animate-pulse rounded-xl bg-white/10" />

          <nav
            aria-hidden="true"
            className="hidden items-center gap-6 xl:flex"
          >
            <div className="h-3 w-12 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-14 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-12 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-14 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-16 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-12 animate-pulse rounded-full bg-white/10" />
          </nav>

          <div
            aria-hidden="true"
            className="h-10 w-10 animate-pulse rounded-xl bg-white/10 xl:hidden"
          />
        </div>
      </header>

      {/* Main content skeleton */}
      <section className="flex min-h-[calc(100vh-5rem)] items-center">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="h-4 w-36 animate-pulse rounded-full bg-blue-500/15" />

            {/* Heading */}
            <div className="mt-7 space-y-4">
              <div className="h-12 w-full max-w-3xl animate-pulse rounded-xl bg-white/10 sm:h-16" />
              <div className="h-12 w-4/5 max-w-2xl animate-pulse rounded-xl bg-blue-500/10 sm:h-16" />
            </div>

            {/* Description */}
            <div className="mt-8 max-w-2xl space-y-3">
              <div className="h-4 w-full animate-pulse rounded-full bg-white/5" />
              <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/5" />
              <div className="h-4 w-3/4 animate-pulse rounded-full bg-white/5" />
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <div className="h-12 w-full animate-pulse rounded-full bg-blue-500/15 sm:w-40" />
              <div className="h-12 w-full animate-pulse rounded-full bg-white/5 sm:w-36" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}