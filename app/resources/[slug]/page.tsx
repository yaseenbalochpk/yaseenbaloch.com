import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  resources,
  type Resource,
} from "@/data/resources";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getResource(slug: string): Resource | undefined {
  const resource = resources.find(
    (item) => item.slug === slug,
  );

  return resource;
}

function getStatusLabel(
  status: Resource["status"],
) {
  if (status === "available") {
    return "Available";
  }

  if (status === "coming-soon") {
    return "Coming Soon";
  }

  return "Planned";
}

function getStatusClass(
  status: Resource["status"],
) {
  if (status === "available") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  if (status === "planned") {
    return "border-amber-400/20 bg-amber-400/10 text-amber-300";
  }

  return "border-blue-400/20 bg-blue-400/10 text-blue-300";
}

function getTypeIcon(type: Resource["type"]) {
  switch (type) {
    case "Roadmap":
      return "↗";

    case "Notes":
      return "N";

    case "Cheat Sheet":
      return "#";

    case "Template":
      return "▦";

    case "Tool":
      return "⚙";

    case "Reference":
      return "R";

    case "Guide":
      return "G";

    default:
      return "•";
  }
}

function getExternalUrl(resource: Resource) {
  if ("externalUrl" in resource) {
    return resource.externalUrl;
  }

  return undefined;
}

function getAuthor(resource: Resource) {
  if ("author" in resource) {
    return resource.author;
  }

  return undefined;
}

function getFormat(resource: Resource) {
  if ("format" in resource) {
    return resource.format;
  }

  return undefined;
}

export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps) {
  const { slug } = await params;

  const resource = getResource(slug);

  if (!resource) {
    return {
      title: "Resource Not Found | Yaseen Baloch",
      description:
        "The requested resource could not be found.",
    };
  }

  return {
    title: `${resource.title} | Yaseen Baloch`,
    description: resource.description,
  };
}

export default async function ResourceDetailPage({
  params,
}: ResourcePageProps) {
  const { slug } = await params;

  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  const externalUrl = getExternalUrl(resource);
  const author = getAuthor(resource);
  const format = getFormat(resource);

  const relatedResources = resources
    .filter(
      (item) =>
        item.slug !== resource.slug &&
        item.category === resource.category,
    )
    .slice(0, 3);

  const isAvailable =
    resource.status === "available";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* =====================================================
            BREADCRUMB
        ===================================================== */}
        <section className="border-b border-white/10">
          <Container>
            <div className="flex flex-wrap items-center gap-2 py-5 text-sm">
              <Link
                href="/resources"
                className="text-foreground/50 transition hover:text-foreground"
              >
                Resources
              </Link>

              <span className="text-foreground/20">
                /
              </span>

              <span className="max-w-[260px] truncate text-foreground/80">
                {resource.title}
              </span>
            </div>
          </Container>
        </section>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-180px] h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-[-100px] top-1/3 h-[300px] w-[300px] rounded-full bg-emerald-400/5 blur-3xl" />
          </div>

          <Container>
            <div className="relative py-16 sm:py-20 lg:py-24">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                    <span>
                      {getTypeIcon(resource.type)}
                    </span>

                    {resource.type}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/65">
                    {resource.category}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/65">
                    {resource.level}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClass(
                      resource.status,
                    )}`}
                  >
                    {getStatusLabel(resource.status)}
                  </span>
                </div>

                <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {resource.title}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/65 sm:text-lg">
                  {resource.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {isAvailable &&
                  externalUrl ? (
                    <a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                    >
                      Visit Resource
                      <span>↗</span>
                    </a>
                  ) : null}

                  {resource.href ? (
                    <Link
                      href={resource.href}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.08]"
                    >
                      Open Resource
                      <span>→</span>
                    </Link>
                  ) : null}

                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground/70 transition hover:border-white/20 hover:text-foreground"
                  >
                    ← All Resources
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <section className="py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
              {/* =================================================
                  CONTENT
              ================================================= */}
              <div className="min-w-0 space-y-8">
                {/* Overview */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Resource Overview
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    About this resource
                  </h2>

                  <p className="mt-6 text-base leading-8 text-foreground/65">
                    {resource.description}
                  </p>
                </section>

                {/* Topics */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Topics
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    What you will find
                  </h2>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {resource.topics.map(
                      (topic: string) => (
                        <div
                          key={topic}
                          className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 p-4"
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />

                          <span className="text-sm leading-6 text-foreground/65">
                            {topic}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </section>

                {/* Tags */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                    Tags
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    Related keywords
                  </h2>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {resource.tags.map(
                      (tag: string) => (
                        <span
                          key={tag}
                          className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-foreground/60"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </section>

                {/* Resource Information */}
                <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                    Resource Information
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    Quick details
                  </h2>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-xs text-foreground/35">
                        Type
                      </p>

                      <p className="mt-2 text-sm font-medium text-foreground">
                        {resource.type}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-xs text-foreground/35">
                        Category
                      </p>

                      <p className="mt-2 text-sm font-medium text-foreground">
                        {resource.category}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-xs text-foreground/35">
                        Level
                      </p>

                      <p className="mt-2 text-sm font-medium text-foreground">
                        {resource.level}
                      </p>
                    </div>

                    {format ? (
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                        <p className="text-xs text-foreground/35">
                          Format
                        </p>

                        <p className="mt-2 text-sm font-medium text-foreground">
                          {format}
                        </p>
                      </div>
                    ) : null}

                    {author ? (
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4 sm:col-span-2">
                        <p className="text-xs text-foreground/35">
                          Author
                        </p>

                        <p className="mt-2 text-sm font-medium text-foreground">
                          {author}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </section>

                {/* Future / Available */}
                {!isAvailable ? (
                  <section className="rounded-3xl border border-amber-400/15 bg-amber-400/[0.04] p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                      Future Resource
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-foreground">
                      This resource is being prepared.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-foreground/55">
                      The resource is already part of the platform
                      architecture. Detailed content and additional
                      functionality will be developed in a future stage.
                    </p>
                  </section>
                ) : (
                  <section className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      Available
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-foreground">
                      This resource is ready to explore.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-foreground/55">
                      Use this resource as part of your learning,
                      development, or professional workflow.
                    </p>
                  </section>
                )}

                {/* Related Resources */}
                {relatedResources.length > 0 ? (
                  <section>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                      More Resources
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-foreground">
                      Related resources
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {relatedResources.map(
                        (item) => (
                          <Link
                            key={item.slug}
                            href={`/resources/${item.slug}`}
                            className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold text-foreground/60">
                                {getTypeIcon(item.type)}
                              </span>

                              <span className="text-xs text-foreground/35">
                                {item.level}
                              </span>
                            </div>

                            <h3 className="mt-5 font-semibold text-foreground">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-foreground/45">
                              {item.shortDescription}
                            </p>

                            <span className="mt-5 inline-flex text-sm font-semibold text-foreground transition group-hover:text-blue-300">
                              Explore →
                            </span>
                          </Link>
                        ),
                      )}
                    </div>
                  </section>
                ) : null}
              </div>

              {/* =================================================
                  SIDEBAR
              ================================================= */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="space-y-5">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/40">
                      Resource Details
                    </p>

                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-xs text-foreground/35">
                          Type
                        </p>

                        <p className="mt-1 text-sm font-medium text-foreground">
                          {resource.type}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-foreground/35">
                          Category
                        </p>

                        <p className="mt-1 text-sm font-medium text-foreground">
                          {resource.category}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-foreground/35">
                          Level
                        </p>

                        <p className="mt-1 text-sm font-medium text-foreground">
                          {resource.level}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-foreground/35">
                          Status
                        </p>

                        <span
                          className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${getStatusClass(
                            resource.status,
                          )}`}
                        >
                          {getStatusLabel(resource.status)}
                        </span>
                      </div>

                      {format ? (
                        <div>
                          <p className="text-xs text-foreground/35">
                            Format
                          </p>

                          <p className="mt-1 text-sm font-medium text-foreground">
                            {format}
                          </p>
                        </div>
                      ) : null}

                      {resource.downloadable !== undefined ? (
                        <div>
                          <p className="text-xs text-foreground/35">
                            Download
                          </p>

                          <p className="mt-1 text-sm font-medium text-foreground">
                            {resource.downloadable
                              ? "Available"
                              : "Web Based"}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/40">
                      Access
                    </p>

                    {isAvailable ? (
                      <>
                        <h3 className="mt-2 font-semibold text-foreground">
                          Ready to explore
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-foreground/50">
                          This resource is currently available in the
                          Yaseen Baloch resource library.
                        </p>

                        {externalUrl ? (
                          <a
                            href={externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background transition hover:opacity-90"
                          >
                            Visit External Resource ↗
                          </a>
                        ) : resource.href ? (
                          <Link
                            href={resource.href}
                            className="mt-5 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background transition hover:opacity-90"
                          >
                            Open Resource →
                          </Link>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <h3 className="mt-2 font-semibold text-foreground">
                          Coming in a future stage
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-foreground/50">
                          This resource is part of the platform roadmap
                          and will be developed further.
                        </p>
                      </>
                    )}
                  </div>

                  <Link
                    href="/resources"
                    className="block rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center text-sm font-medium text-foreground/65 transition hover:border-white/20 hover:text-foreground"
                  >
                    ← Browse All Resources
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Learn · Build · Grow
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Keep building your technology journey.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-foreground/55 sm:text-base">
                Explore more resources or continue with structured
                learning paths and practical development projects.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/resources"
                  className="rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Explore Resources
                </Link>

                <Link
                  href="/learn"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.08]"
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
