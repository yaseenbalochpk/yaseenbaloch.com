export type ContentType =
  | "article"
  | "video"
  | "tutorial"
  | "series";

export type ContentCategory =
  | "Programming"
  | "Web Development"
  | "Artificial Intelligence"
  | "Computer Science"
  | "Freelancing"
  | "Technology";

export type ContentStatus =
  | "draft"
  | "published"
  | "coming-soon";

export type ContentPlatform =
  | "website"
  | "youtube"
  | "linkedin"
  | "facebook";

export type Content = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;

  type: ContentType;
  category: ContentCategory;
  status: ContentStatus;
  platform: ContentPlatform;

  featured: boolean;

  tags: readonly string[];

  author: string;

  publishedAt?: string;
  updatedAt?: string;

  readingTime?: string;
  duration?: string;

  thumbnail?: string;

  href: string;
  externalUrl?: string;
};

export type ContentSeries = {
  slug: string;
  title: string;
  description: string;

  category: ContentCategory;
  status: ContentStatus;
  featured: boolean;

  platform: ContentPlatform;

  totalItems?: number;

  topics: readonly string[];

  href: string;
};

export const content = [
  {
    slug: "python-programming-foundations",
    title: "Python Programming Foundations",
    excerpt:
      "A practical introduction to the core concepts every beginner should understand before moving into advanced Python development.",
    description:
      "Explore Python fundamentals through clear explanations, programming examples, problem solving, and practical exercises.",

    type: "tutorial",
    category: "Programming",
    status: "coming-soon",
    platform: "website",

    featured: true,

    tags: [
      "Python",
      "Programming",
      "Beginners",
      "Problem Solving",
    ],

    author: "Yaseen Baloch",

    href: "/blog/python-programming-foundations",
  },

  {
    slug: "how-modern-web-development-works",
    title: "How Modern Web Development Works",
    excerpt:
      "Understand the main technologies and concepts behind modern websites and web applications.",
    description:
      "A beginner-friendly explanation of frontend development, backend systems, APIs, databases, frameworks, and deployment.",

    type: "article",
    category: "Web Development",
    status: "coming-soon",
    platform: "website",

    featured: true,

    tags: [
      "Web Development",
      "Frontend",
      "Backend",
      "APIs",
      "JavaScript",
    ],

    author: "Yaseen Baloch",

    href: "/blog/how-modern-web-development-works",
  },

  {
    slug: "understanding-ai-and-automation",
    title: "Understanding AI & Automation",
    excerpt:
      "Learn how artificial intelligence and automation can be combined to solve practical digital problems.",
    description:
      "Explore practical concepts behind AI-assisted workflows, automation, APIs, and intelligent software solutions.",

    type: "article",
    category: "Artificial Intelligence",
    status: "coming-soon",
    platform: "website",

    featured: true,

    tags: [
      "AI",
      "Artificial Intelligence",
      "Automation",
      "APIs",
      "Technology",
    ],

    author: "Yaseen Baloch",

    href: "/blog/understanding-ai-and-automation",
  },

  {
    slug: "computer-science-fundamentals",
    title: "Computer Science Fundamentals",
    excerpt:
      "Build a stronger understanding of the fundamental concepts behind computers, programming, and software.",
    description:
      "Practical explanations of computer science concepts designed to help students build a stronger technical foundation.",

    type: "tutorial",
    category: "Computer Science",
    status: "coming-soon",
    platform: "website",

    featured: false,

    tags: [
      "Computer Science",
      "Programming",
      "Students",
      "CS Fundamentals",
    ],

    author: "Yaseen Baloch",

    href: "/blog/computer-science-fundamentals",
  },
] as const satisfies readonly Content[];

export const contentSeries = [
  {
    slug: "21-day-freelancing-remote-work",
    title: "21-Day Freelancing & Remote Work Learning Series",
    description:
      "A structured learning series covering freelancing fundamentals, services, portfolios, client communication, proposals, and professional remote work.",

    category: "Freelancing",
    status: "published",
    featured: true,

    platform: "website",

    totalItems: 21,

    topics: [
      "Freelancing Fundamentals",
      "Market Understanding",
      "Skills vs Services",
      "Client Problems",
      "Personal Branding",
      "Portfolio",
      "Freelance Platforms",
      "Client Communication",
      "Proposals",
      "Remote Work",
    ],

    href: "/learn/freelancing",
  },

  {
    slug: "python-practice",
    title: "Python Practice Series",
    description:
      "A structured programming practice journey focused on building consistency through Python exercises and practical projects.",

    category: "Programming",
    status: "published",
    featured: true,

    platform: "website",

    topics: [
      "Python Fundamentals",
      "Programming Practice",
      "Problem Solving",
      "Projects",
      "GitHub",
    ],

    href: "/learn/python",
  },
] as const satisfies readonly ContentSeries[];

export type ContentSlug =
  (typeof content)[number]["slug"];

export type ContentSeriesSlug =
  (typeof contentSeries)[number]["slug"];

export type FeaturedContent = Extract<
  (typeof content)[number],
  { featured: true }
>;

export const featuredContent = content.filter(
  (item) => item.featured,
);