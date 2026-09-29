import Link from "next/link";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContentFilter from "@/components/ContentFilter";
import {
  content,
  contentSeries,
  type Content,
  type ContentCategory,
} from "@/data/content";

const allContent: readonly Content[] = content;

const categories: readonly ContentCategory[] = [
  "Programming",
  "Web Development",
  "Artificial Intelligence",
  "Computer Science",
  "Freelancing",
  "Technology",
];

type BlogPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

function getTypeLabel(type: Content["type"]) {
  switch (type) {
    case "article":
      return "Article";

    case "video":
      return "Video";

    case "tutorial":
      return "Tutorial";

    case "series":
      return "Series";

    default:
      return "Content";
  }
}

function getStatusLabel(status: Content["status"]) {
  switch (status) {
    case "published":
      return "Published";

    case "coming-soon":
      return "Coming Soon";

    case "draft":
      return "Draft";

    default:
      return "Content";
  }
}

function getStatusClass(status: Content["status"]) {
  switch (status) {
    case "published":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";

    case "coming-soon":
      return "border-blue-400/20 bg-blue-400/10 text-blue-300";

    case "draft":
      return "border-amber-400/20 bg-amber-400/10 text-amber-300";

    default:
      return "border-white/10 bg-white/5 text-foreground/50";
  }
}

function getContentIcon(type: Content["type"]) {
  switch (type) {
    case "article":
      return "A";

    case "video":
      return "▶";

    case "tutorial":
      return "T";

    case "series":
      return "S";

    default:
      return "•";
  }
}

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;

  const searchQuery = (params.q ?? "").trim().toLowerCase();

  const selectedCategory =
    params.category &&
    categories.includes(params.category as ContentCategory)
      ? params.category
      : "All";

  const filteredContent = allContent.filter((item) => {
    const matchesSearch =
      searchQuery.length === 0 ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.excerpt.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery),
      );

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredContent = allContent.filter(
    (item) => item.featured,
  );

  const publishedContent = allContent.filter(
    (item) => item.status === "published",
  );

  const featuredSeries = contentSeries.filter(
    (series) => series.featured,
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-180px] h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-[-120px] top-1/3 h-[320px] w-[320px] rounded-full bg-purple-500/5 blur-3xl" />
          </div>

          <Container>
            <div className="relative py-20 sm:py-24 lg:py-28">
              <div className="max-w-4xl">
                <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Yaseen Baloch · Blog &amp; Content
                </div>

                <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Learn through{" "}
                  <span className="text-foreground/50">
                    practical technology content.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/65 sm:text-lg">
                  Practical articles, tutorials, videos, and learning
                  series covering programming, web development, AI,
                  computer science, freelancing, and modern technology.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#featured"
                    className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-[#070a12] transition hover:opacity-90"
                  >
                    Explore Content
                  </a>

                  <Link
                    href="/learn"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    Explore Learning
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}
        <section className="border-b border-white/10 py-12">
          <Container>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-3xl font-semibold text-foreground">
                  {allContent.length}
                </p>

                <p className="mt-1 text-sm text-foreground/50">
                  Content pieces
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-3xl font-semibold text-foreground">
                  {publishedContent.length}
                </p>

                <p className="mt-1 text-sm text-foreground/50">
                  Published
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-3xl font-semibold text-foreground">
                  {contentSeries.length}
                </p>

                <p className="mt-1 text-sm text-foreground/50">
                  Learning series
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FEATURED CONTENT
        ===================================================== */}
        <section
          id="featured"
          className="scroll-mt-20 py-16 sm:py-20"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Featured Content
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Start with the featured content.
              </h2>

              <p className="mt-4 text-sm leading-7 text-foreground/55 sm:text-base">
                A growing collection of practical content designed to
                make technical concepts easier to understand and apply.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredContent.map((item) => (
                <article
                  key={item.slug}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-sm font-semibold text-blue-300">
                      {getContentIcon(item.type)}
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClass(
                        item.status,
                      )}`}
                    >
                      {getStatusLabel(item.status)}
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/35">
                      <span>{getTypeLabel(item.type)}</span>

                      <span>·</span>

                      <span>{item.category}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-foreground/55">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-foreground/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <Link
                      href={`/blog/${item.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-blue-300"
                    >
                      Explore Content

                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            CATEGORIES
        ===================================================== */}
        <section className="border-y border-white/10 bg-white/[0.015] py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Explore by Category
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Learn according to your current goal.
              </h2>

              <p className="mt-4 text-sm leading-7 text-foreground/55 sm:text-base">
                Content is organized around practical technical and
                professional areas.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const count = allContent.filter(
                  (item) => item.category === category,
                ).length;

                return (
                  <Link
                    key={category}
                    href={`/blog?category=${encodeURIComponent(category)}`}
                    className="group rounded-2xl border border-white/10 bg-background/40 p-5 transition hover:border-white/20 hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground transition group-hover:text-blue-300">
                        {category}
                      </h3>

                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/40">
                        {count}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-foreground/50">
                      Explore practical content and future learning
                      material in this area.
                    </p>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =====================================================
            LEARNING SERIES
        ===================================================== */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                Learning Series
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Learn through structured series.
              </h2>

              <p className="mt-4 text-sm leading-7 text-foreground/55 sm:text-base">
                Multi-part learning experiences designed to take a
                topic from fundamentals toward practical application.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {featuredSeries.map((series) => (
                <article
                  key={series.slug}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-xs font-semibold text-purple-300">
                      Series
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/50">
                      {series.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-foreground">
                    {series.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-foreground/55">
                    {series.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {series.topics.slice(0, 6).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-foreground/45"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={series.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-purple-300"
                  >
                    Explore Series
                    <span>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            CONTENT LIBRARY
        ===================================================== */}
        <section
          id="content-library"
          className="border-t border-white/10 py-16 sm:py-20"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Content Library
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Browse the full content library.
              </h2>

              <p className="mt-4 text-sm leading-7 text-foreground/55 sm:text-base">
                Articles, tutorials, videos, and practical technical
                content will continue to grow as the platform develops.
              </p>
            </div>

            {/* Search & Filter */}
            <div className="mt-10">
              <ContentFilter
                categories={categories}
                totalItems={filteredContent.length}
                initialQuery={params.q ?? ""}
                initialCategory={selectedCategory}
              />
            </div>

            {filteredContent.length > 0 ? (
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
                <div className="divide-y divide-white/10">
                  {filteredContent.map((item) => (
                    <div
                      key={item.slug}
                      className="group flex flex-col gap-5 p-5 transition hover:bg-white/[0.025] sm:flex-row sm:items-center sm:justify-between sm:p-6"
                    >
                      <div className="flex min-w-0 gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-sm font-semibold text-foreground/60">
                          {getContentIcon(item.type)}
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold text-foreground">
                              {item.title}
                            </h3>

                            <span
                              className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${getStatusClass(
                                item.status,
                              )}`}
                            >
                              {getStatusLabel(item.status)}
                            </span>
                          </div>

                          <p className="mt-1 text-sm text-foreground/45">
                            {getTypeLabel(item.type)} · {item.category} ·{" "}
                            {item.platform}
                          </p>

                          <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/55">
                            {item.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 sm:pl-6">
                        <Link
                          href={`/blog/${item.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-blue-300"
                        >
                          Open
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-14 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground/40">
                  <svg
                    width="24"
                    height="24"
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
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  No matching content found.
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-foreground/45">
                  Try another search term or choose a different category.
                </p>

                <Link
                  href="/blog"
                  className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground"
                >
                  View All Content
                </Link>
              </div>
            )}
          </Container>
        </section>

        {/* =====================================================
            CONTENT PHILOSOPHY
        ===================================================== */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Learn
                </p>

                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  Understand the concepts.
                </h3>

                <p className="mt-3 text-sm leading-7 text-foreground/50">
                  Clear explanations focused on building strong technical
                  foundations.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Build
                </p>

                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  Apply knowledge through projects.
                </h3>

                <p className="mt-3 text-sm leading-7 text-foreground/50">
                  Practical development remains at the center of the
                  learning experience.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                  Share
                </p>

                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  Share what you learn.
                </h3>

                <p className="mt-3 text-sm leading-7 text-foreground/50">
                  Content connects personal learning with the wider
                  technology community.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Learn · Build · Share · Grow
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Keep learning. Keep building. Keep sharing.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
                Explore practical content and connect it with structured
                learning paths, resources, and real development projects.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/learn"
                  className="rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-[#070a12] transition hover:opacity-90"
                >
                  Explore Learning
                </Link>

                <Link
                  href="/resources"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Explore Resources
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
