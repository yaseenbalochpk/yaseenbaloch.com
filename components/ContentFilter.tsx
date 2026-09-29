"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useState,
  useTransition,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type ContentFilterProps = {
  categories: readonly string[];
  totalItems: number;
  initialQuery?: string;
  initialCategory?: string;
  placeholder?: string;
};

export default function ContentFilter({
  categories,
  totalItems,
  initialQuery = "",
  initialCategory = "All",
  placeholder = "Search content...",
}: ContentFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(
    initialCategory || "All",
  );

  const [isPending, startTransition] = useTransition();

  const categoryOptions = ["All", ...categories];

  function updateUrl(
    nextQuery: string,
    nextCategory: string,
  ) {
    const searchParams = new URLSearchParams();

    const cleanQuery = nextQuery.trim();

    if (cleanQuery) {
      searchParams.set("q", cleanQuery);
    }

    if (nextCategory && nextCategory !== "All") {
      searchParams.set("category", nextCategory);
    }

    const queryString = searchParams.toString();

    const destination = queryString
      ? `${pathname}?${queryString}`
      : pathname;

    startTransition(() => {
      router.push(destination);
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    updateUrl(query, category);
  }

  function handleCategoryChange(
    event: ChangeEvent<HTMLSelectElement>,
  ) {
    const nextCategory = event.target.value;

    setCategory(nextCategory);

    updateUrl(query, nextCategory);
  }

  function handleClear() {
    setQuery("");
    setCategory("All");

    startTransition(() => {
      router.push(pathname);
    });
  }

  const hasActiveFilters =
    query.trim().length > 0 || category !== "All";

  return (
    <section
      aria-label="Content search and filters"
      className="rounded-3xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          {/* Search */}
          <div className="flex-1">
            <label
              htmlFor="content-search"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45"
            >
              Search
            </label>

            <div className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/35"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <input
                id="content-search"
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder={placeholder}
                autoComplete="off"
                className="h-12 w-full rounded-xl border border-white/10 bg-background/50 pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-foreground/30 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/10"
              />
            </div>
          </div>

          {/* Category */}
          <div className="lg:w-64">
            <label
              htmlFor="content-category"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45"
            >
              Category
            </label>

            <select
              id="content-category"
              value={category}
              onChange={handleCategoryChange}
              className="h-12 w-full rounded-xl border border-white/10 bg-background/50 px-4 text-sm text-foreground outline-none transition focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/10"
            >
              {categoryOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-background text-foreground"
                >
                  {option === "All"
                    ? "All Categories"
                    : option}
                </option>
              ))}
            </select>
          </div>

          {/* Search button */}
          <button
            type="submit"
            disabled={isPending}
            className="h-12 rounded-xl border border-blue-400/20 bg-blue-400/10 px-6 text-sm font-semibold text-blue-300 transition hover:border-blue-400/30 hover:bg-blue-400/15 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Searching..." : "Search"}
          </button>

          {/* Clear */}
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={handleClear}
              disabled={isPending}
              className="h-12 rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-foreground/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              Clear
            </button>
          ) : null}
        </div>
      </form>

      {/* Results summary */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
        <p className="text-sm text-foreground/45">
          Showing{" "}
          <span className="font-semibold text-foreground/75">
            {totalItems}
          </span>{" "}
          {totalItems === 1 ? "result" : "results"}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {query.trim() ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/60">
              Search:{" "}
              <span className="font-medium text-foreground/85">
                {query.trim()}
              </span>
            </span>
          ) : null}

          {category !== "All" ? (
            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-300">
              {category}
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}