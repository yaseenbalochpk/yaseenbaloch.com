export type ServiceStatus =
  | "available"
  | "coming-soon"
  | "paused";

export type ServiceCategory =
  | "Development"
  | "AI & Automation"
  | "Web"
  | "Maintenance";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  category: ServiceCategory;
  status: ServiceStatus;
  featured: boolean;

  deliverables: readonly string[];
  technologies: readonly string[];

  idealFor: readonly string[];

  process?: readonly string[];

  startingPrice?: string;
  turnaround?: string;

  href: string;
};

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, responsive websites and web interfaces built around clear goals, clean structure, and a strong user experience.",
    description:
      "Build responsive and maintainable web experiences using modern frontend technologies, with a focus on performance, accessibility, usability, and scalable architecture.",

    category: "Web",
    status: "available",
    featured: true,

    deliverables: [
      "Responsive website development",
      "Landing pages",
      "Personal and professional websites",
      "Portfolio websites",
      "Reusable UI components",
      "Mobile-friendly interfaces",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],

    idealFor: [
      "Personal brands",
      "Developers and creators",
      "Small businesses",
      "Startups",
      "Professional portfolios",
    ],

    process: [
      "Understand the requirements",
      "Plan the structure and user experience",
      "Build the interface",
      "Test responsiveness and functionality",
      "Refine and prepare for deployment",
    ],

    href: "/contact",
  },

  {
    slug: "python-development",
    title: "Python Development",
    shortDescription:
      "Python-based development for practical applications, automation, data handling, and backend-oriented projects.",
    description:
      "Develop practical Python solutions with clean code and a focus on solving clearly defined problems.",

    category: "Development",
    status: "available",
    featured: true,

    deliverables: [
      "Python applications",
      "Automation scripts",
      "Data processing utilities",
      "Backend development foundations",
      "API integrations",
      "Small software tools",
    ],

    technologies: [
      "Python",
      "Flask",
      "REST APIs",
      "Git",
      "GitHub",
    ],

    idealFor: [
      "Students and learners",
      "Small software projects",
      "Automation workflows",
      "Internal tools",
      "Prototype applications",
    ],

    process: [
      "Understand the problem",
      "Define the required functionality",
      "Plan the implementation",
      "Develop and test the solution",
      "Document the final result",
    ],

    href: "/contact",
  },

  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortDescription:
      "Practical AI-assisted workflows and automation ideas designed to reduce repetitive work and improve digital processes.",
    description:
      "Explore and build practical AI and automation workflows where they provide a clear benefit, while keeping reliability, usability, and maintainability in mind.",

    category: "AI & Automation",
    status: "available",
    featured: true,

    deliverables: [
      "AI-assisted workflows",
      "Task automation",
      "API-based integrations",
      "Content workflow automation",
      "AI tool integration",
      "Workflow improvement",
    ],

    technologies: [
      "Python",
      "APIs",
      "AI Tools",
      "Automation",
      "JavaScript",
    ],

    idealFor: [
      "Creators",
      "Small businesses",
      "Digital teams",
      "Content workflows",
      "Repetitive digital tasks",
    ],

    process: [
      "Identify the repetitive task",
      "Evaluate whether automation is appropriate",
      "Design the workflow",
      "Build and test the automation",
      "Document how the workflow works",
    ],

    href: "/contact",
  },

  {
    slug: "landing-pages",
    title: "Landing Pages",
    shortDescription:
      "Focused landing pages designed to communicate an offer clearly and provide a strong experience across devices.",
    description:
      "Create responsive landing pages with clear content hierarchy, focused calls to action, and a professional visual structure.",

    category: "Web",
    status: "available",
    featured: false,

    deliverables: [
      "Responsive landing page",
      "Hero section",
      "Feature sections",
      "Call-to-action sections",
      "Contact or inquiry section",
      "Mobile optimization",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],

    idealFor: [
      "Products",
      "Services",
      "Personal brands",
      "Campaigns",
      "New business ideas",
    ],

    process: [
      "Understand the offer",
      "Plan the page structure",
      "Build the interface",
      "Test across screen sizes",
      "Refine the final experience",
    ],

    href: "/contact",
  },

  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    shortDescription:
      "Ongoing improvements, content updates, bug fixes, and technical maintenance for existing websites.",
    description:
      "Help keep existing websites updated and maintainable through focused improvements, content changes, troubleshooting, and technical maintenance.",

    category: "Maintenance",
    status: "available",
    featured: false,

    deliverables: [
      "Content updates",
      "UI improvements",
      "Bug fixing",
      "Responsive fixes",
      "Small feature updates",
      "Technical cleanup",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Git",
      "GitHub",
    ],

    idealFor: [
      "Existing websites",
      "Personal websites",
      "Small business websites",
      "Portfolio websites",
      "Projects needing ongoing improvements",
    ],

    process: [
      "Review the existing website",
      "Identify the required changes",
      "Implement and test the updates",
      "Check responsive behavior",
      "Deliver the updated version",
    ],

    href: "/contact",
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof services)[number]["slug"];