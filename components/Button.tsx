import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type CommonButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type ButtonElementProps = CommonButtonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className"
  > & {
    href?: never;
  };

type LinkButtonProps = CommonButtonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "className" | "href"
  > & {
    href: string;
  };

export type ButtonProps =
  | ButtonElementProps
  | LinkButtonProps;

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

const VARIANT_CLASSES: Record<
  ButtonVariant,
  string
> = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-600/10 hover:bg-blue-500 active:bg-blue-700",

  secondary:
    "bg-white/10 text-white hover:bg-white/15 active:bg-white/20",

  outline:
    "border border-white/10 bg-transparent text-white hover:border-blue-500/40 hover:bg-white/5 active:bg-white/10",

  ghost:
    "bg-transparent text-slate-300 hover:bg-white/5 hover:text-white active:bg-white/10",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm sm:text-base",
};

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  className?: string,
): string {
  return [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button(
  props: ButtonProps,
) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
  } = props;

  const buttonClassName = getButtonClasses(
    variant,
    size,
    fullWidth,
    className,
  );

  /*
   * Render an internal Next.js link when
   * an href is provided.
   */
  if (
    "href" in props &&
    typeof props.href === "string"
  ) {
    const {
      href,
      variant: _variant,
      size: _size,
      fullWidth: _fullWidth,
      className: _className,
      children: _children,
      ...linkProps
    } = props;

    return (
      <Link
        href={href}
        className={buttonClassName}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  /*
   * Otherwise render a native button.
   */
  const {
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    children: _children,
    ...buttonProps
  } = props;

  return (
    <button
      className={buttonClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}