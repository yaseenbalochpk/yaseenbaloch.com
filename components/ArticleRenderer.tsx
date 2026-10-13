
import type { ArticleBlock } from "@/data/articleContent";

type ArticleRendererProps = {
  intro?: string;
  blocks: readonly ArticleBlock[];
};

function CodeBlockView({
  language,
  code,
  caption,
}: {
  language: string;
  code: string;
  caption?: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#080d18]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
          {language}
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </span>
      </div>

      <pre className="overflow-x-auto p-4 text-sm leading-7 text-slate-200 sm:p-6">
        <code className={`language-${language}`}>{code}</code>
      </pre>

      {caption ? (
        <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-foreground/50">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Callout({
  title,
  text,
  tone = "info",
}: {
  title: string;
  text: string;
  tone?: "info" | "tip" | "warning";
}) {
  const toneStyles = {
    info: "border-blue-400/30 bg-blue-400/[0.06]",
    tip: "border-emerald-400/30 bg-emerald-400/[0.06]",
    warning: "border-amber-400/30 bg-amber-400/[0.06]",
  };

  const toneLabels = {
    info: "Information",
    tip: "Practical tip",
    warning: "Important note",
  };

  return (
    <aside
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${toneStyles[tone]}`}
      aria-label={toneLabels[tone]}
    >
      <h3 className="mb-2 text-base font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-7 text-foreground/70">{text}</p>
    </aside>
  );
}

export default function ArticleRenderer({
  intro,
  blocks,
}: ArticleRendererProps) {
  return (
    <div className="min-w-0 text-foreground">
      {intro ? (
        <p className="mb-8 text-lg leading-8 text-foreground/75">
          {intro}
        </p>
      ) : null}

      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading": {
            if (block.level === 3) {
              return (
                <h3
                  key={key}
                  className="mb-4 mt-8 text-xl font-semibold tracking-tight text-foreground"
                >
                  {block.text}
                </h3>
              );
            }

            return (
              <h2
                key={key}
                className="mb-4 mt-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          }

          case "paragraph":
            return (
              <p
                key={key}
                className="mb-5 text-base leading-8 text-foreground/70"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul
                key={key}
                className="mb-8 ml-5 list-disc space-y-3 text-base leading-7 text-foreground/70 marker:text-blue-400"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={`${index}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            );

          case "code":
            return (
              <CodeBlockView
                key={key}
                language={block.language}
                code={block.code}
                caption={block.caption}
              />
            );

          case "callout":
            return (
              <Callout
                key={key}
                title={block.title}
                text={block.text}
                tone={block.tone}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

