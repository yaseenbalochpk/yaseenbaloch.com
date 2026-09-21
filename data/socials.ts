/**
 * Centralized Social, Contact & Community Links
 *
 * Keep all external profile and community URLs in this file.
 * UI components should consume this data instead of hard-coding URLs.
 */

/* =========================================================
   SOCIAL / PROFESSIONAL PLATFORMS
========================================================= */

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "x"
  | "fiverr"
  | "upwork";

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
    href: "https://github.com/yaseenbalochpk",
    label: "View Yaseen Baloch on GitHub",
    external: true,
  },
  {
    platform: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-yaseen-b308b53b1",
    label: "Connect with Yaseen Baloch on LinkedIn",
    external: true,
  },
  {
    platform: "youtube",
    name: "YouTube",
    href: "https://youtube.com/@yaseenbalochpk",
    label: "Visit Yaseen Baloch on YouTube",
    external: true,
  },
  {
    platform: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/share/1BTi6rtPhD/",
    label: "Visit Yaseen Baloch on Facebook",
    external: true,
  },
  {
    platform: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/yaseenbalochpk",
    label: "Follow Yaseen Baloch on Instagram",
    external: true,
  },
  {
    platform: "tiktok",
    name: "TikTok",
    href: "https://www.tiktok.com/@yaseenbalochpk",
    label: "Follow Yaseen Baloch on TikTok",
    external: true,
  },
  {
    platform: "x",
    name: "X",
    href: "https://x.com/yaseenbalochpk",
    label: "Follow Yaseen Baloch on X",
    external: true,
  },
  {
    platform: "fiverr",
    name: "Fiverr",
    href: "https://www.fiverr.com/s/9d9Xmwa",
    label: "View Yaseen Baloch on Fiverr",
    external: true,
  },
  {
    platform: "upwork",
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~0135efbd4da234f4e4",
    label: "View Yaseen Baloch on Upwork",
    external: true,
  },
] as const satisfies readonly SocialLink[];

export type SocialPlatformKey =
  (typeof socialLinks)[number]["platform"];

/* =========================================================
   DIRECT CONTACT
========================================================= */

export type ContactLink = {
  name: string;
  href: string;
  label: string;
  type: "whatsapp" | "email";
};

export const contactLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/9232021212826",
    label: "Contact Yaseen Baloch on WhatsApp",
    type: "whatsapp",
  },
  {
    name: "Email",
    href: "mailto:yaseenonliepk@gmail.com",
    label: "Email Yaseen Baloch",
    type: "email",
  },
] as const satisfies readonly ContactLink[];

/* =========================================================
   PAKISTAN DEVELOPER HUB
========================================================= */

export type CommunityPlatform =
  | "whatsapp"
  | "linkedin"
  | "facebook";

export type CommunityLink = {
  platform: CommunityPlatform;
  name: string;
  href: string;
  label: string;
  external: true;
};

export const communityLinks = [
  {
    platform: "whatsapp",
    name: "WhatsApp Community",
    href: "https://chat.whatsapp.com/Ggt0ayrjZTrEpQjNVGFeVl",
    label: "Join the Pakistan Developer Hub WhatsApp Community",
    external: true,
  },
  {
    platform: "linkedin",
    name: "LinkedIn Community",
    href: "https://www.linkedin.com/groups/39563021/",
    label: "Join the Pakistan Developer Hub LinkedIn Community",
    external: true,
  },
  {
    platform: "facebook",
    name: "Facebook Community",
    href: "https://m.facebook.com/groups/828549033098832/",
    label: "Join the Pakistan Developer Hub Facebook Community",
    external: true,
  },
] as const satisfies readonly CommunityLink[];

export type CommunityPlatformKey =
  (typeof communityLinks)[number]["platform"];

/* =========================================================
   SOCIAL GROUPS
========================================================= */

export const socialGroups = {
  professional: socialLinks.filter(
    (link) =>
      link.platform === "github" ||
      link.platform === "linkedin",
  ),

  content: socialLinks.filter(
    (link) =>
      link.platform === "youtube" ||
      link.platform === "facebook" ||
      link.platform === "instagram" ||
      link.platform === "tiktok" ||
      link.platform === "x",
  ),

  freelance: socialLinks.filter(
    (link) =>
      link.platform === "fiverr" ||
      link.platform === "upwork",
  ),
} as const;