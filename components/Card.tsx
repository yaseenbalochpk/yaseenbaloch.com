import type {
  HTMLAttributes,
  ReactNode,
} from "react";

type CardVariant =
  | "default"
  | "subtle"
  | "outlined"
  | "interactive";

type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
};

const BASE_CLASSES =
  "w-full rounded-2xl transition-all duration-300";

const VARIANT_CLASSES: Record<
  CardVariant,
  string
> = {
  default:
    "border border-white/10 bg-[#0d1422]",

  subtle:
    "border border-white/5 bg-white/[0.02]",

  outlined:
    "border border-white/10 bg-transparent",

  interactive:
    "border border-white/10 bg-[#0d1422] hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#111b2d] hover:shadow-xl hover:shadow-black/20",
};

const PADDING_CLASSES: Record<
  CardPadding,
  string
> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  variant = "default",
  padding = "md",
  interactive = false,
  className,
  ...props
}: CardProps) {
  const resolvedVariant: CardVariant =
    interactive ? "interactive" : variant;

  const cardClassName = [
    BASE_CLASSES,
    VARIANT_CLASSES[resolvedVariant],
    PADDING_CLASSES[padding],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cardClassName}
      {...props}
    >
      {children}
    </div>
  );
}