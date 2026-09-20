export const siteConfig = {
  name: "Yaseen Baloch",

  brand: "Yaseen Baloch",

  title: "Developer & Technology Creator",

  url: "https://yaseenbaloch.com",

  description:
    "Yaseen Baloch is a developer and technology creator focused on programming, web development, artificial intelligence, automation, and practical technology education.",

  tagline: "Learn. Build. Share. Grow.",

  hero: {
    title:
      "I build software. I explore technology. I share what I learn.",

    description:
      "Developer and technology creator focused on programming, web development, artificial intelligence, automation, and practical digital solutions.",
  },

  navigation: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "Learn",
      href: "/learn",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Resources",
      href: "/resources",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],

  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/yaseenbal0chpk",
    },
  ],

  contact: {
    website: "https://yaseenbaloch.com",
  },

  footer: {
    description:
      "I build software, explore technology, and share what I learn through practical projects, programming, web development, AI, and technology education.",

    copyright:
      "Yaseen Baloch. All rights reserved.",
  },
} as const;

export type SiteConfig = typeof siteConfig;