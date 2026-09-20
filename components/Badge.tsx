import type {
  HTMLAttributes,
  ReactNode,
} from "react";

type BadgeVariant =
  | "default"
  | "accent"
  | "success"
  | "warning"
  | "muted";

type BadgeSize = "sm" | "md";

export type BadgeProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> & {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
};

const BASE_CLASSES =
  "inline-flex w-fit items-center gap-1.5 rounded-full border font-medium whitespace-nowrap";

const VARIANT_CLASSES: Record<
  BadgeVariant,
  string
> = {
  default:
    "border-white/10 bg-white/5 text-slate-300",

  accent:
    "border-blue-500/20 bg-blue-500/10 text-blue-400",

  success:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",

  warning:
    "border-amber-500/20 bg-amber-500/10 text-amber-400",

  muted:
    "border-white/5 bg-white/[0.02] text-slate-500",
};

const SIZE_CLASSES: Record<
  BadgeSize,
  string
> = {
  sm: "px-2.5 py-1 text-[11px]",
  md: "px-3 py-1.5 text-xs",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const badgeClassName = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={badgeClassName}
      {...props}
    >
      {children}
    </span>
  );
}