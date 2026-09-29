"use client";

import { useMemo, useState } from "react";

type ContentFilterProps = {
  categories: readonly string[];
  totalItems: number;
  placeholder?: string;
  onSearch?: (value: string) => void;
  onCategoryChange?: (category: string) => void;
};

export default function ContentFilter({
  categories,
  totalItems,
  placeholder = "Search content...",
  onSearch,
  onCategoryChange,
}: ContentFilterProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categoryOptions = useMemo(
    () => ["All", ...categories],
    [categories],
  );

  function handleSearch(value: string) {
    setSearch(value);
    onSearch?.(value);
  }

  function handleCategoryChange(value: string) {
    setCategory(value);
    onCategoryChange?.(value);
  }

  function clearFilters() {
    setSearch("");
    setCategory("All");

    onSearch?.("");
    onCategoryChange?.("All");
  }

  const hasFilters =
    search.trim().length > 0 || category !== "All";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <label
            htmlFor="content-search"
            className="sr-only"
          >
            Search content
          </label>

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
            value={search}
            onChange={(event) =>
              handleSearch(event.target.value)
            }
            placeholder={placeholder}
            autoComplete="off"
            className="h-12 w-full rounded-xl border border-white/10 bg-background/50 pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-foreground/30 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/10"
          />
        </div>

        {/* Category */}
        <div className="lg:w-64">
          <label
            htmlFor="content-category"
            className="sr-only"
          >
            Filter by category
          </label>

          <select
            id="content-category"
            value={category}
            onChange={(event) =>
              handleCategoryChange(event.target.value)
            }
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

        {/* Clear */}
        {hasFilters ? (
          <button
            type="button"
            onClick={clearFilters}
            className="h-12 shrink-0 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-foreground/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground"
          >
            Clear
          </button>
        ) : null}
      </div>

      {/* Filter summary */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-foreground/40">
          Showing{" "}
          <span className="font-semibold text-foreground/65">
            {totalItems}
          </span>{" "}
          {totalItems === 1 ? "item" : "items"}
        </p>

        {category !== "All" ? (
          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-300">
            {category}
          </span>
        ) : null}
      </div>
    </div>
  );
}