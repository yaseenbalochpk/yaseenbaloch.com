export type NavigationItem = {
  name: string;
  href: string;
  description?: string;
};

export const navigationItems = [
  {
    name: "Home",
    href: "/",
    description: "Return to the homepage.",
  },
  {
    name: "About",
    href: "/about",
    description: "Learn more about Yaseen Baloch.",
  },
  {
    name: "Work",
    href: "/work",
    description: "Explore projects and development work.",
  },
  {
    name: "Learn",
    href: "/learn",
    description: "Explore learning paths and technology education.",
  },
  {
    name: "Services",
    href: "/services",
    description: "Explore development and technology services.",
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Read articles and technology insights.",
  },
  {
    name: "Resources",
    href: "/resources",
    description: "Explore practical learning and developer resources.",
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Get in touch about projects and collaborations.",
  },
] as const satisfies readonly NavigationItem[];

export type NavigationHref =
  (typeof navigationItems)[number]["href"];