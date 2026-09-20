export type ProjectStatus =
  | "planned"
  | "in-progress"
  | "completed"
  | "maintenance";

export type ProjectType =
  | "Personal Platform"
  | "Web Application"
  | "Website"
  | "Automation"
  | "Learning Project"
  | "Open Source";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  type: ProjectType;
  status: ProjectStatus;
  featured: boolean;

  technologies: readonly string[];

  problem?: string;
  goal?: string;
  approach?: string;
  features?: readonly string[];
  challenges?: readonly string[];
  outcome?: string;

  image?: string;
  githubUrl?: string;
  liveUrl?: string;

  links?: readonly ProjectLink[];
};

export const projects = [
  {
    slug: "yaseen-baloch-personal-platform",
    title: "Yaseen Baloch Personal Platform",
    shortDescription:
      "A modern personal platform combining developer portfolio, technology education, services, content, and future digital products.",
    description:
      "A long-term personal platform designed to bring development work, technology education, practical resources, content, and professional services together under one digital identity.",
    type: "Personal Platform",
    status: "in-progress",
    featured: true,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Git",
      "GitHub",
    ],

    problem:
      "A personal brand needs more than a simple portfolio. It should provide a clear place for development work, educational content, resources, services, and future digital products.",

    goal:
      "Build a scalable, professional, and maintainable digital platform that can grow with the Yaseen Baloch personal brand.",

    approach:
      "The platform is being developed with a component-based architecture, centralized data structures, reusable UI systems, responsive design, accessibility considerations, and a foundation for future product features.",

    features: [
      "Responsive personal website",
      "Developer portfolio",
      "Project and case-study structure",
      "Technology education section",
      "Services section",
      "Blog and content architecture",
      "Developer resources section",
      "Professional contact system foundation",
      "Reusable component system",
      "Centralized content architecture",
    ],

    challenges: [
      "Designing a structure that can support multiple purposes without making the interface complicated.",
      "Creating reusable components that remain flexible as the platform grows.",
      "Keeping the codebase maintainable while preparing for future features.",
    ],

    outcome:
      "The platform is being developed as a long-term foundation for a personal brand, developer portfolio, education platform, and future digital products.",

    githubUrl:
      "https://github.com/yaseenbal0chpk/yaseenbaloch.com",
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];