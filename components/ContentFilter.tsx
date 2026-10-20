
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
  types?: readonly string[];
  levels?: readonly string[];
  initialType?: string;
  initialLevel?: string;
  initialSort?: string;
};

export default function ContentFilter({
  categories,
  totalItems,
  initialQuery = "",
  initialCategory = "All",
  placeholder = "Search content...",
  types = [],
  levels = [],
  initialType = "All",
  initialLevel = "All",
  initialSort = "default",
}: ContentFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory || "All");
  const [type, setType] = useState(initialType || "All");
  const [level, setLevel] = useState(initialLevel || "All");
  const [sort, setSort] = useState(initialSort || "default");

  const [isPending, startTransition] = useTransition();

  function updateUrl(
    nextQuery: string,
    nextCategory: string,
    nextType: string,
    nextLevel: string,
    nextSort: string,
  ) {
    const searchParams = new URLSearchParams();
    const cleanQuery = nextQuery.trim();

    if (cleanQuery) searchParams.set("q", cleanQuery);
    if (nextCategory && nextCategory !== "All") {
      searchParams.set("category", nextCategory);
    }
    if (nextType && nextType !== "All") {
      searchParams.set("type", nextType);
    }
    if (nextLevel && nextLevel !== "All") {
      searchParams.set("level", nextLevel);
    }
    if (nextSort && nextSort !== "default") {
      searchParams.set("sort", nextSort);
    }

    const queryString = searchParams.toString();
    const destination = queryString
      ? `${pathname}?${queryString}`
      : pathname;

    startTransition(() => router.push(destination));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateUrl(query, category, type, level, sort);
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    setCategory(next);
    updateUrl(query, next, type, level, sort);
  }

  function handleTypeChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    setType(next);
    updateUrl(query, category, next, level, sort);
  }

  function handleLevelChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    setLevel(next);
    updateUrl(query, category, type, next, sort);
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    setSort(next);
    updateUrl(query, category, type, level, next);
  }

  function handleClear() {
    setQuery("");
    setCategory("All");
    setType("All");
    setLevel("All");
    setSort("default");

    startTransition(() => router.push(pathname));
  }

  const hasActiveFilters =
    query.trim().length > 0 ||
    category !== "All" ||
    type !== "All" ||
    level !== "All" ||
    sort !== "default";

  const selectClass =
    "h-12 w-full rounded-xl border border-white/10 bg-background/50 px-3 text-sm text-foreground outline-none transition focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/10";

  return (
    <section
      aria-label="Content search and filters"
      className="rounded-3xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor="content-search" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
              Search
            </label>
            <input
              id="content-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              autoComplete="off"
              className={`${selectClass} px-4`}
            />
          </div>

          <div>
            <label htmlFor="content-category" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
              Category
            </label>
            <select id="content-category" value={category} onChange={handleCategoryChange} className={selectClass}>
              <option value="All">All Categories</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="content-type" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
              Type
            </label>
            <select id="content-type" value={type} onChange={handleTypeChange} className={selectClass}>
              <option value="All">All Types</option>
              {types.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="content-level" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
              Level
            </label>
            <select id="content-level" value={level} onChange={handleLevelChange} className={selectClass}>
              <option value="All">All Levels</option>
              {levels.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="content-sort" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
              Sort
            </label>
            <select id="content-sort" value={sort} onChange={handleSortChange} className={selectClass}>
              <option value="default">Default Order</option>
              <option value="title-asc">Title A–Z</option>
              <option value="available">Available First</option>
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button type="submit" disabled={isPending} className="h-12 flex-1 rounded-xl border border-blue-400/20 bg-blue-400/10 px-4 text-sm font-semibold text-blue-300 transition hover:bg-blue-400/15 disabled:opacity-60">
              {isPending ? "Searching..." : "Search"}
            </button>
            {hasActiveFilters && (
              <button type="button" onClick={handleClear} disabled={isPending} className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-foreground/70 transition hover:bg-white/[0.08] disabled:opacity-60">
                Clear
              </button>
            )}
          </div>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
        <p className="text-sm text-foreground/45">
          Showing <span className="font-semibold text-foreground/75">{totalItems}</span>{" "}
          {totalItems === 1 ? "result" : "results"}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {query.trim() && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/60">Search: {query.trim()}</span>}
          {category !== "All" && <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs text-blue-300">{category}</span>}
          {type !== "All" && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/60">Type: {type}</span>}
          {level !== "All" && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/60">Level: {level}</span>}
        </div>
      </div>
    </section>
  );
}
