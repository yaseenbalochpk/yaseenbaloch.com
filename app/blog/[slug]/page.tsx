import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ArticleRenderer from "@/components/ArticleRenderer";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { getArticleContent } from "@/data/articleContent";
import { content, type Content } from "@/data/content";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://yaseenbaloch.com";
const SITE_NAME = "Yaseen Baloch";

function getContentBySlug(slug: string): Content | undefined {
  return content.find((item) => item.slug === slug);
}

function getTypeLabel(type: Content["type"]): string {
  const labels: Record<Content["type"], string> = {
    article: "Article",
    video: "Video",
    tutorial: "Tutorial",
    series: "Series",
  };

  return labels[type];
}

function getStatusLabel(status: Content["status"]): string {
  const labels: Record<Content["status"], string> = {
    draft: "Draft",
    published: "Published",
    "coming-soon": "Coming Soon",
  };

  return labels[status];
}

function getStatusClass(status: Content["status"]): string {
  const styles: Record<Content["status"], string> = {
    draft: "border-white/10 bg-white/5 text-white/60",
    published:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    "coming-soon":
      "border-amber-400/20 bg-amber-400/10 text-amber-300",
  };

  return styles[status];
}

export function generateStaticParams() {
  return content.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug(slug);

  if (!item || item.status === "draft") {
    return {
      title: `Content Not Found | ${SITE_NAME}`,
      description: "The requested content could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/blog/${item.slug}`;

  return {
    title: `${item.title} | ${SITE_NAME}`,
    description: item.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "article",
      authors: [item.author],
      tags: [...item.tags],
      ...(item.publishedAt
        ? { publishedTime: item.publishedAt }
        : {}),
      ...(item.updatedAt
        ? { modifiedTime: item.updatedAt }
        : {}),
    },
    twitter: {
      card: "summary",
      title: item.title,
      description: item.description,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;
  const item = getContentBySlug(slug);

  if (!item || item.status === "draft") {
    notFound();
  }

  const article = getArticleContent(item.slug);

  // Filter related content without comparing incompatible status types.
  const relatedContent = content
    .filter((candidate) => {
      if (candidate.slug === item.slug) return false;
      if (candidate.category !== item.category) return false;

      // Use the status field's actual declared type.
      const status: string = candidate.status;
      return status === "published";
    })
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        <Container>
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            {/* Breadcrumb navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/blog"
                className="transition-colors hover:text-foreground"
              >
                Blog
              </Link>

              <span aria-hidden="true">/</span>

              <span
                aria-current="page"
                className="max-w-[220px] truncate text-foreground"
              >
                {item.title}
              </span>
            </nav>

            {/* Article header */}
            <header className="mx-auto max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium">
                  {getTypeLabel(item.type)}
                </span>

                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                  {item.category}
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusClass(item.status)}`}
                >
                  {getStatusLabel(item.status)}
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                {item.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                {item.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/10 pb-7 text-sm text-muted-foreground">
                <span>
                  By{" "}
                  <span className="font-medium text-foreground">
                    {item.author}
                  </span>
                </span>

                {item.publishedAt && (
                  <time dateTime={item.publishedAt}>
                    {new Date(item.publishedAt).toLocaleDateString("en", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                )}

                {item.readingTime && (
                  <span>{item.readingTime} read</span>
                )}

                {item.duration && <span>{item.duration}</span>}
              </div>
            </header>

            {/* Main article and sidebar */}
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
              <article className="min-w-0">
                {/* Article overview */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Article Overview
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </section>

                {/* Article body */}
                {article ? (
                  <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-8">
                    <ArticleRenderer
                      intro={article.intro}
                      blocks={article.blocks}
                    />
                  </div>
                ) : (
                  <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      Content in Progress
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold">
                      This content is being prepared.
                    </h2>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      Explore the learning platform while this content
                      is being developed.
                    </p>

                    <Link
                      href="/learn"
                      className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                    >
                      Explore Learning Resources
                    </Link>
                  </section>
                )}

                {/* Practical learning CTA */}
                <section className="mt-8 rounded-3xl border border-blue-400/20 bg-blue-400/[0.05] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Learn · Build · Apply
                  </p>

                  <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
                    Turn knowledge into practical skills.
                  </h2>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Practice what you learn, build small projects, and
                    apply your knowledge to real-world problems.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/learn"
                      className="inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-semibold !text-background transition-opacity hover:opacity-90"
                    >
                      Start Learning
                    </Link>

                    <Link
                      href="/work"
                      className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
                    >
                      Explore Projects
                    </Link>
                  </div>
                </section>

                {/* Article tags */}
                {item.tags.length > 0 && (
                  <section className="mt-8">
                    <h2 className="text-sm font-semibold">
                      Topics Covered
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?q=${encodeURIComponent(tag)}`}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-blue-400/30 hover:text-foreground"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Related articles */}
                {relatedContent.length > 0 && (
                  <section className="mt-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      Keep Exploring
                    </p>

                    <h2 className="mt-3 text-2xl font-bold">
                      Related Articles
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Discover more content from the same category.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {relatedContent.map((related) => (
                        <Link
                          key={related.slug}
                          href={related.href}
                          className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-blue-400/30 hover:bg-white/[0.04]"
                        >
                          <span className="text-xs font-medium text-blue-300">
                            {related.category}
                          </span>

                          <h3 className="mt-3 font-semibold leading-6 transition-colors group-hover:text-blue-300">
                            {related.title}
                          </h3>

                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                            {related.excerpt}
                          </p>

                          <span className="mt-5 inline-flex text-sm font-medium">
                            Read more →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </article>

              {/* Sidebar */}
              <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
                <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <h2 className="font-semibold">Content Information</h2>

                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="mt-1 font-medium">{item.category}</dd>
                    </div>

                    <div>
                      <dt className="text-muted-foreground">Content Type</dt>
                      <dd className="mt-1 font-medium">
                        {getTypeLabel(item.type)}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="mt-1 font-medium">
                        {getStatusLabel(item.status)}
                      </dd>
                    </div>

                    {item.readingTime && (
                      <div>
                        <dt className="text-muted-foreground">
                          Reading Time
                        </dt>
                        <dd className="mt-1 font-medium">
                          {item.readingTime}
                        </dd>
                      </div>
                    )}
                  </dl>
                </section>

                <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    About the Author
                  </p>

                  <h2 className="mt-3 text-lg font-semibold">
                    {item.author}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Full-Stack Developer, AI & Automation Builder, and
                    Technology Educator sharing practical knowledge
                    through projects and learning resources.
                  </p>

                  <Link
                    href="/about"
                    className="mt-5 inline-flex text-sm font-medium transition-colors hover:text-blue-300"
                  >
                    More About Yaseen →
                  </Link>
                </section>

                <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <h2 className="font-semibold">Explore More</h2>

                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <Link
                      href="/blog"
                      className="block transition-colors hover:text-foreground"
                    >
                      All Articles →
                    </Link>

                    <Link
                      href="/learn"
                      className="block transition-colors hover:text-foreground"
                    >
                      Learning Platform →
                    </Link>

                    <Link
                      href="/resources"
                      className="block transition-colors hover:text-foreground"
                    >
                      Developer Resources →
                    </Link>

                    <Link
                      href="/contact"
                      className="block transition-colors hover:text-foreground"
                    >
                      Get in Touch →
                    </Link>
                  </div>
                </section>
              </aside>
            </div>

            {/* Bottom CTA */}
            <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center sm:px-10 sm:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Yaseen Baloch
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
                Keep learning. Keep building. Keep growing.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Explore practical tutorials, developer resources, and
                projects designed to turn knowledge into real skills.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/blog"
                  className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold !text-background transition-opacity hover:opacity-90"
                >
                  Explore Blog
                </Link>

                <Link
                  href="/learn"
                  className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
                >
                  Browse Learning
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
