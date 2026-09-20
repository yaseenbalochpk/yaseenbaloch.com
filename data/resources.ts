export type ResourceType =
  | "Guide"
  | "Notes"
  | "Roadmap"
  | "Cheat Sheet"
  | "Template"
  | "Tool"
  | "Reference";

export type ResourceCategory =
  | "Programming"
  | "Web Development"
  | "Artificial Intelligence"
  | "Computer Science"
  | "Freelancing"
  | "Developer Tools";

export type ResourceLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "All Levels";

export type ResourceStatus =
  | "available"
  | "coming-soon"
  | "planned";

export type Resource = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  type: ResourceType;
  category: ResourceCategory;
  level: ResourceLevel;
  status: ResourceStatus;

  featured: boolean;

  topics: readonly string[];
  tags: readonly string[];

  format?: "Article" | "PDF" | "Web Page" | "External Tool";

  author?: string;

  href?: string;
  externalUrl?: string;

  downloadable?: boolean;
};

export const resources = [
  {
    slug: "python-learning-roadmap",
    title: "Python Learning Roadmap",
    shortDescription:
      "A structured roadmap for progressing from Python fundamentals to practical programming projects.",
    description:
      "A practical learning roadmap covering Python fundamentals, problem solving, functions, data structures, file handling, APIs, automation, and project development.",

    type: "Roadmap",
    category: "Programming",
    level: "Beginner",
    status: "available",

    featured: true,

    topics: [
      "Python Fundamentals",
      "Programming Logic",
      "Functions",
      "Data Structures",
      "File Handling",
      "APIs",
      "Automation",
      "Projects",
    ],

    tags: [
      "Python",
      "Programming",
      "Roadmap",
      "Learning",
    ],

    format: "Web Page",
    href: "/learn/python",
    downloadable: false,
  },

  {
    slug: "web-development-roadmap",
    title: "Web Development Roadmap",
    shortDescription:
      "A structured path for learning modern web development from HTML and CSS to JavaScript, React, and full-stack foundations.",
    description:
      "A practical web development roadmap covering frontend fundamentals, responsive design, JavaScript, Git, React, Next.js, backend concepts, and deployment foundations.",

    type: "Roadmap",
    category: "Web Development",
    level: "Beginner",
    status: "available",

    featured: true,

    topics: [
      "HTML",
      "CSS",
      "Responsive Design",
      "JavaScript",
      "Git & GitHub",
      "React",
      "Next.js",
      "Backend Foundations",
      "Deployment",
    ],

    tags: [
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
    ],

    format: "Web Page",
    href: "/learn/web-development",
    downloadable: false,
  },

  {
    slug: "computer-science-notes",
    title: "Computer Science Notes",
    shortDescription:
      "Organized study material covering important computer science concepts and foundations.",
    description:
      "A growing collection of structured computer science notes covering computer fundamentals, hardware, software, operating systems, networking, databases, algorithms, and software engineering.",

    type: "Notes",
    category: "Computer Science",
    level: "All Levels",
    status: "coming-soon",

    featured: true,

    topics: [
      "Computer Fundamentals",
      "Hardware",
      "Software",
      "Operating Systems",
      "Computer Networks",
      "Databases",
      "Algorithms",
      "Software Engineering",
    ],

    tags: [
      "Computer Science",
      "CS Notes",
      "Study Material",
      "University",
    ],

    format: "Web Page",
    href: "/resources/computer-science-notes",
    downloadable: false,
  },

  {
    slug: "programming-cheat-sheets",
    title: "Programming Cheat Sheets",
    shortDescription:
      "Quick-reference material for commonly used programming concepts and syntax.",
    description:
      "A collection of concise programming references designed to help learners quickly review important syntax, concepts, commands, and development workflows.",

    type: "Cheat Sheet",
    category: "Programming",
    level: "All Levels",
    status: "coming-soon",

    featured: false,

    topics: [
      "Python Syntax",
      "JavaScript",
      "Git Commands",
      "HTML",
      "CSS",
      "Terminal Commands",
    ],

    tags: [
      "Cheat Sheet",
      "Programming",
      "Quick Reference",
      "Developer",
    ],

    format: "Web Page",
    href: "/resources/cheat-sheets",
    downloadable: false,
  },

  {
    slug: "developer-tools",
    title: "Developer Tools Collection",
    shortDescription:
      "A curated collection of useful tools for programming, development, design, testing, and productivity.",
    description:
      "A growing collection of developer tools and resources that can support different stages of the software development workflow.",

    type: "Tool",
    category: "Developer Tools",
    level: "All Levels",
    status: "coming-soon",

    featured: true,

    topics: [
      "Code Editors",
      "Version Control",
      "Deployment",
      "Design",
      "Testing",
      "Productivity",
      "AI Development Tools",
    ],

    tags: [
      "Developer Tools",
      "Productivity",
      "AI Tools",
      "Development",
    ],

    format: "Web Page",
    href: "/resources/developer-tools",
    downloadable: false,
  },

  {
    slug: "ai-tools-and-resources",
    title: "AI Tools & Resources",
    shortDescription:
      "A practical collection of AI tools, learning resources, and references for developers and creators.",
    description:
      "Explore useful AI tools and resources for learning, development, content workflows, automation, and experimentation.",

    type: "Reference",
    category: "Artificial Intelligence",
    level: "All Levels",
    status: "coming-soon",

    featured: true,

    topics: [
      "AI Assistants",
      "AI Development",
      "Automation",
      "Content Creation",
      "Prompting",
      "AI APIs",
    ],

    tags: [
      "Artificial Intelligence",
      "AI Tools",
      "Automation",
      "Developers",
    ],

    format: "Web Page",
    href: "/resources/ai-tools",
    downloadable: false,
  },

  {
    slug: "freelancing-resources",
    title: "Freelancing Resources",
    shortDescription:
      "Practical resources for understanding freelancing, portfolios, client communication, and remote work.",
    description:
      "A growing resource collection covering freelance fundamentals, personal branding, portfolio development, client communication, proposals, and remote work practices.",

    type: "Guide",
    category: "Freelancing",
    level: "Beginner",
    status: "coming-soon",

    featured: false,

    topics: [
      "Freelancing Fundamentals",
      "Personal Branding",
      "Portfolio",
      "Client Communication",
      "Proposals",
      "Remote Work",
    ],

    tags: [
      "Freelancing",
      "Remote Work",
      "Career",
      "Portfolio",
    ],

    format: "Web Page",
    href: "/resources/freelancing",
    downloadable: false,
  },
] as const satisfies readonly Resource[];

export type ResourceSlug =
  (typeof resources)[number]["slug"];

export type FeaturedResource = Extract<
  (typeof resources)[number],
  { featured: true }
>;