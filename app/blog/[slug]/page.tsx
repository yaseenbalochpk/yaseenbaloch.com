import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { content, type Content } from "@/data/content";
import {
  articleContent,
  type ArticleBlock,
} from "@/data/articleContent";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getContentBySlug(
  slug: string,
): Content | undefined {
  return content.find((item) => item.slug === slug);
}

function getArticleBySlug(slug: string) {
  return articleContent.find(
    (article) => article.slug === slug,
  );
}

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

function getTypeIcon(type: Content["type"]) {
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

function renderArticleBlock(
  block: ArticleBlock,
  index: number,
) {
  switch (block.type) {
    case "heading": {
      if (block.level === 3) {
        return (
          <h3
            key={`heading-${index}`}
            className="mt-10 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            {block.text}
          </h3>
        );
      }

      return (
        <h2
          key={`heading-${index}`}
          className="mt-12 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    }

    case "paragraph":
      return (
        <p
          key={`paragraph-${index}`}
          className="text-base leading-8 text-foreground/65"
        >
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul
          key={`list-${index}`}
          className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
        >
          {block.items.map((item, itemIndex) => (
            <li
              key={`${item}-${itemIndex}`}
              className="flex gap-3 text-sm leading-7 text-foreground/65 sm:text-base"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-300" />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <figure
          key={`code-${index}`}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b10]"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/40">
              {block.language}
            </span>

            <span className="text-xs text-foreground/30">
              Code Example
            </span>
          </div>

          <pre className="overflow-x-auto p-5 text-sm leading-7 text-foreground/75 sm:p-6">
            <code>{block.code}</code>
          </pre>

          {block.caption ? (
            <figcaption className="border-t border-white/10 px-5 py-3 text-xs text-foreground/35">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "callout": {
      const toneClass =
        block.tone === "tip"
          ? "border-emerald-400/20 bg-emerald-400/[0.05]"
          : block.tone === "warning"
            ? "border-amber-400/20 bg-amber-400/[0.05]"
            : "border-blue-400/20 bg-blue-400/[0.05]";

      const labelClass =
        block.tone === "tip"
          ? "text-emerald-300"
          : block.tone === "warning"
            ? "text-amber-300"
            : "text-blue-300";

      return (
        <aside
          key={`callout-${index}`}
          className={`rounded-2xl border p-5 sm:p-6 ${toneClass}`}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${labelClass}`}
          >
            {block.tone === "warning"
              ? "Important"
              : block.tone === "tip"
                ? "Practical Tip"
                : "Note"}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {block.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-foreground/60 sm:text-base">
            {block.text}
          </p>
        </aside>
      );
    }

    default:
      return null;
  }
}

export function generateStaticParams() {
  return content.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const item = getContentBySlug(slug);

  if (!item) {
    return {
      title: "Content Not Found | Yaseen Baloch",
      description:
        "The requested content could not be found.",
    };
  }

  return {
    title: `${item.title} | Yaseen Baloch`,
    description: item.description,
  };
}

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const item = getContentBySlug(slug);

  if (!item) {
    notFound();
  }

  const article = getArticleBySlug(slug);

  const relatedContent = content
    .filter(
      (other) =>
        other.slug !== item.slug &&
        other.category === item.category,
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* =====================================================
            BREADCRUMB
        ===================================================== */}
        <section className="border-b border-white/10">
          <Container>
            <div className="py-5">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm"
              >
                <Link
                  href="/"
                  className="text-foreground/40 transition hover:text-foreground"
                >
                  Home
                </Link>

                <span className="text-foreground/20">
                  /
                </span>

                <Link
                  href="/blog"
                  className="text-foreground/40 transition hover:text-foreground"
                >
                  Blog
                </Link>

                <span className="text-foreground/20">
                  /
                </span>

                <span className="max-w-[240px] truncate text-foreground/65">
                  {item.title}
                </span>
              </nav>
            </div>
          </Container>
        </section>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-220px] h-[500px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-[-160px] top-1/2 h-[360px] w-[360px] rounded-full bg-purple-500/5 blur-3xl" />
          </div>

          <Container>
            <div className="relative py-16 sm:py-20 lg:py-24">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-sm font-semibold text-blue-300">
                    {getTypeIcon(item.type)}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-foreground/60">
                    {getTypeLabel(item.type)}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClass(
                      item.status,
                    )}`}
                  >
                    {getStatusLabel(item.status)}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/50">
                    {item.category}
                  </span>
                </div>

                <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {item.title}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/65 sm:text-lg">
                  {item.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-foreground/45">
                  <span>
                    By{" "}
                    <strong className="font-semibold text-foreground/70">
                      {item.author}
                    </strong>
                  </span>

                  {item.publishedAt ? (
                    <span>
                      Published {item.publishedAt}
                    </span>
                  ) : null}

                  {item.updatedAt ? (
                    <span>
                      Updated {item.updatedAt}
                    </span>
                  ) : null}

                  {item.readingTime ? (
                    <span>{item.readingTime}</span>
                  ) : null}

                  {item.duration ? (
                    <span>{item.duration}</span>
                  ) : null}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            ARTICLE
        ===================================================== */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
              {/* MAIN ARTICLE */}
              <article className="min-w-0">
                {/* Overview */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Overview
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-foreground">
                    About this content
                  </h2>

                  <p className="mt-4 text-sm leading-8 text-foreground/60 sm:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Article Body */}
                {article ? (
                  <div className="mt-8">
                    {article.intro ? (
                      <div className="rounded-3xl border border-blue-400/15 bg-blue-400/[0.04] p-6 sm:p-8">
                        <p className="text-base leading-8 text-foreground/70 sm:text-lg">
                          {article.intro}
                        </p>
                      </div>
                    ) : null}

                    <div className="mt-8 space-y-7">
                      {article.blocks.map(
                        (block, index) =>
                          renderArticleBlock(
                            block,
                            index,
                          ),
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                      Content Preparation
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-foreground">
                      Detailed article content is coming soon.
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-foreground/55 sm:text-base">
                      This article is already part of the content
                      architecture. Its detailed material will be
                      expanded with explanations, examples, and
                      practical learning resources.
                    </p>
                  </div>
                )}

                {/* Practical Direction */}
                <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                    Practical Direction
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-foreground">
                    Learn → Build → Apply
                  </h2>

                  <p className="mt-4 text-sm leading-8 text-foreground/60 sm:text-base">
                    The goal is not only to read technical information.
                    Connect concepts with practical development,
                    experimentation, and real-world projects.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-background/40 p-5">
                      <p className="text-sm font-semibold text-foreground">
                        Learn
                      </p>

                      <p className="mt-2 text-sm leading-6 text-foreground/45">
                        Understand the core concepts.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-background/40 p-5">
                      <p className="text-sm font-semibold text-foreground">
                        Build
                      </p>

                      <p className="mt-2 text-sm leading-6 text-foreground/45">
                        Turn knowledge into practical work.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-background/40 p-5">
                      <p className="text-sm font-semibold text-foreground">
                        Apply
                      </p>

                      <p className="mt-2 text-sm leading-6 text-foreground/45">
                        Use the skill in real situations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/35">
                    Tags
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-foreground/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="space-y-5">
                  {/* Article Information */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Content Information
                    </p>

                    <div className="mt-5 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm text-foreground/40">
                          Type
                        </span>

                        <span className="text-right text-sm font-medium text-foreground/75">
                          {getTypeLabel(item.type)}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm text-foreground/40">
                          Category
                        </span>

                        <span className="text-right text-sm font-medium text-foreground/75">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm text-foreground/40">
                          Platform
                        </span>

                        <span className="text-right text-sm font-medium capitalize text-foreground/75">
                          {item.platform}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm text-foreground/40">
                          Status
                        </span>

                        <span className="text-right text-sm font-medium text-foreground/75">
                          {getStatusLabel(item.status)}
                        </span>
                      </div>

                      {item.readingTime ? (
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-sm text-foreground/40">
                            Reading
                          </span>

                          <span className="text-right text-sm font-medium text-foreground/75">
                            {item.readingTime}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      Author
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {item.author}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-foreground/45">
                      Developer, technology educator, and builder focused
                      on practical software and technology learning.
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                      Explore
                    </p>

                    <div className="mt-5 space-y-3">
                      <Link
                        href="/blog"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-foreground/70 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground"
                      >
                        <span>All Content</span>
                        <span>→</span>
                      </Link>

                      <Link
                        href="/learn"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-foreground/70 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground"
                      >
                        <span>Learning Hub</span>
                        <span>→</span>
                      </Link>

                      <Link
                        href="/resources"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-foreground/70 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground"
                      >
                        <span>Resources</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* =====================================================
            RELATED CONTENT
        ===================================================== */}
        {relatedContent.length > 0 ? (
          <section className="border-t border-white/10 py-16 sm:py-20">
            <Container>
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Continue Learning
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Related content
                </h2>

                <p className="mt-4 text-sm leading-7 text-foreground/55 sm:text-base">
                  Explore more content from the same technology category.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {relatedContent.map((related) => (
                  <article
                    key={related.slug}
                    className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-sm font-semibold text-blue-300">
                        {getTypeIcon(related.type)}
                      </span>

                      <span className="text-xs text-foreground/40">
                        {getTypeLabel(related.type)}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                      {related.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-foreground/50">
                      {related.excerpt}
                    </p>

                    <Link
                      href={`/blog/${related.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-blue-300"
                    >
                      Read More
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

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
                Continue your technology journey.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
                Connect this content with structured learning paths,
                practical resources, and real development projects.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/blog"
                  className="rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Back to Blog
                </Link>

                <Link
                  href="/learn"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Explore Learning
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