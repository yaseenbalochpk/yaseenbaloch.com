import type { CSSProperties } from "react";
import type { SimpleIcon } from "simple-icons";
import * as simpleIcons from "simple-icons";

export type PlatformIconName =
  | "whatsapp"
  | "email"
  | "github"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "x"
  | "fiverr"
  | "upwork";

type PlatformIconProps = {
  platform: PlatformIconName;
  size?: number;
  className?: string;
  title?: string;
  style?: CSSProperties;
};

type SimpleIconsRegistry = Record<string, SimpleIcon>;

const icons = simpleIcons as unknown as SimpleIconsRegistry;

const PLATFORM_ICON_KEYS = {
  whatsapp: "siWhatsapp",
  github: "siGithub",
  youtube: "siYoutube",
  facebook: "siFacebook",
  instagram: "siInstagram",
  tiktok: "siTiktok",
  x: "siX",
  fiverr: "siFiverr",
  upwork: "siUpwork",
} as const;

function EmailIcon({
  size,
  className,
  title,
  style,
}: Omit<PlatformIconProps, "platform">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}

      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4.5 7L12 13L19.5 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon({
  size,
  className,
  title,
  style,
}: Omit<PlatformIconProps, "platform">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}

      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM3.559 20.452h3.558V8.999H3.559v11.453Z" />
    </svg>
  );
}

export default function PlatformIcon({
  platform,
  size = 24,
  className = "",
  title,
  style,
}: PlatformIconProps) {
  if (platform === "email") {
    return (
      <EmailIcon
        size={size}
        className={className}
        title={title}
        style={style}
      />
    );
  }

  if (platform === "linkedin") {
    return (
      <LinkedInIcon
        size={size}
        className={className}
        title={title}
        style={style}
      />
    );
  }

  const iconKey = PLATFORM_ICON_KEYS[platform];
  const icon = icons[iconKey];

  if (!icon) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}

      <path d={icon.path} />
    </svg>
  );
}
