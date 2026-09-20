"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b14] px-4 py-16 text-white sm:px-6 lg:px-8">
      <section
        role="alert"
        aria-labelledby="error-title"
        className="w-full max-w-2xl text-center"
      >
        {/* Error indicator */}
        <div
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-2xl font-bold text-red-400"
        >
          !
        </div>

        {/* Content */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Something went wrong
        </p>

        <h1
          id="error-title"
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          We couldn&apos;t load this page.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          An unexpected error occurred while loading this page.
          Please try again, or return to the homepage and continue
          exploring.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition-all duration-200 hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
          >
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition-all duration-200 hover:border-blue-500/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
          >
            Back to home
          </Link>
        </div>

        {/* Developer reference */}
        {error.digest && (
          <p className="mt-8 text-xs text-slate-600">
            Reference: {error.digest}
          </p>
        )}
      </section>
    </main>
  );
}