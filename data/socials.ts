export type SocialPlatform =
  | "github"
  | "linkedin"
  | "youtube"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "x"
  | "fiverr"
  | "upwork"
  | "whatsapp";

export type SocialLink = {
  platform: SocialPlatform;
  name: string;
  href: string;
  label: string;
  external: true;
};

export const socialLinks = [
  {
    platform: "github",
    name: "GitHub",
    href: "https://github.com/yaseenbal0chpk",
    label: "View my projects on GitHub",
    external: true,
  },
] as const satisfies readonly SocialLink[];

export type SocialPlatformKey =
  (typeof socialLinks)[number]["platform"];