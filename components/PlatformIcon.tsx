import {
  siFacebook,
  siFiverr,
  siGithub,
  siInstagram,
  siLinkedin,
  siTiktok,
  siUpwork,
  siWhatsapp,
  siX,
  siYoutube,
} from "simple-icons";

type Platform =
  | "whatsapp"
  | "github"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "x"
  | "fiverr"
  | "upwork"
  | "email";

type PlatformIconProps = {
  platform: Platform;
  size?: number;
  className?: string;
  title?: string;
};

const platformIcons = {
  whatsapp: siWhatsapp,
  github: siGithub,
  linkedin: siLinkedin,
  youtube: siYoutube,
  facebook: siFacebook,
  instagram: siInstagram,
  tiktok: siTiktok,
  x: siX,
  fiverr: siFiverr,
  upwork: siUpwork,
} as const;

export default function PlatformIcon({
  platform,
  size = 24,
  className = "",
  title,
}: PlatformIconProps) {
  /*
   * Email uses a custom SVG because it is a contact method
   * rather than a social platform.
   */
  if (platform === "email") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={title ? undefined : true}
        role={title ? "img" : undefined}
        className={className}
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

  const icon = platformIcons[platform];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={className}
    >
      {title && <title>{title}</title>}

      <path d={icon.path} />
    </svg>
  );
}