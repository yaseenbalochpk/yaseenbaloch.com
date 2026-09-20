export type SkillCategory =
  | "Programming"
  | "Web Development"
  | "AI & Automation"
  | "Tools & Workflow"
  | "Computer Science";

export type SkillStatus =
  | "active"
  | "learning"
  | "exploring";

export type Skill = {
  slug: string;
  name: string;
  category: SkillCategory;
  status: SkillStatus;
  description: string;
  technologies: readonly string[];
  featured: boolean;
};

export const skills = [
  {
    slug: "python",
    name: "Python",
    category: "Programming",
    status: "active",
    description:
      "Python programming for practical software development, automation, problem solving, and application building.",
    technologies: [
      "Python",
      "Functions",
      "Object-Oriented Programming",
      "File Handling",
      "APIs",
    ],
    featured: true,
  },

  {
    slug: "web-development",
    name: "Web Development",
    category: "Web Development",
    status: "active",
    description:
      "Building responsive and maintainable web experiences using modern frontend technologies and component-based architecture.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    featured: true,
  },

  {
    slug: "javascript",
    name: "JavaScript",
    category: "Programming",
    status: "active",
    description:
      "JavaScript for interactive web interfaces, application logic, browser APIs, and modern web development.",
    technologies: [
      "JavaScript",
      "DOM",
      "ES6+",
      "Fetch API",
      "Async Programming",
    ],
    featured: true,
  },

  {
    slug: "typescript",
    name: "TypeScript",
    category: "Programming",
    status: "active",
    description:
      "Type-safe development for scalable JavaScript and React-based applications.",
    technologies: [
      "TypeScript",
      "Types",
      "Interfaces",
      "Generics",
      "Type-safe APIs",
    ],
    featured: true,
  },

  {
    slug: "react",
    name: "React",
    category: "Web Development",
    status: "active",
    description:
      "Component-based interface development with reusable UI patterns and structured application architecture.",
    technologies: [
      "React",
      "Components",
      "Props",
      "State",
      "Hooks",
    ],
    featured: true,
  },

  {
    slug: "nextjs",
    name: "Next.js",
    category: "Web Development",
    status: "active",
    description:
      "Modern full-stack web development with the Next.js App Router, reusable components, and production-oriented architecture.",
    technologies: [
      "Next.js",
      "App Router",
      "Server Components",
      "Metadata",
      "Routing",
    ],
    featured: true,
  },

  {
    slug: "ai-automation",
    name: "AI & Automation",
    category: "AI & Automation",
    status: "learning",
    description:
      "Exploring practical AI-assisted workflows, automation, API integrations, and intelligent digital processes.",
    technologies: [
      "AI Tools",
      "APIs",
      "Python",
      "Automation",
      "AI-assisted Workflows",
    ],
    featured: true,
  },

  {
    slug: "backend-development",
    name: "Backend Development",
    category: "Web Development",
    status: "learning",
    description:
      "Learning backend concepts for APIs, application logic, databases, authentication, and full-stack development.",
    technologies: [
      "Python",
      "Flask",
      "REST APIs",
      "Databases",
      "Authentication",
    ],
    featured: false,
  },

  {
    slug: "git-github",
    name: "Git & GitHub",
    category: "Tools & Workflow",
    status: "active",
    description:
      "Version control and collaborative development workflows for managing, tracking, and publishing software projects.",
    technologies: [
      "Git",
      "GitHub",
      "Branches",
      "Commits",
      "Pull Requests",
    ],
    featured: true,
  },

  {
    slug: "responsive-design",
    name: "Responsive Design",
    category: "Web Development",
    status: "active",
    description:
      "Designing interfaces that provide a consistent and usable experience across mobile, tablet, and desktop screens.",
    technologies: [
      "CSS",
      "Tailwind CSS",
      "Mobile-first Design",
      "Flexbox",
      "CSS Grid",
    ],
    featured: false,
  },

  {
    slug: "computer-science",
    name: "Computer Science",
    category: "Computer Science",
    status: "learning",
    description:
      "Building a strong computer science foundation through programming, computer systems, algorithms, data structures, and software engineering concepts.",
    technologies: [
      "Programming Fundamentals",
      "Data Structures",
      "Algorithms",
      "Computer Systems",
      "Software Engineering",
    ],
    featured: true,
  },

  {
    slug: "problem-solving",
    name: "Problem Solving",
    category: "Computer Science",
    status: "active",
    description:
      "Breaking technical problems into smaller parts and developing structured, testable solutions.",
    technologies: [
      "Logical Thinking",
      "Algorithms",
      "Debugging",
      "Code Analysis",
      "Problem Decomposition",
    ],
    featured: false,
  },
] as const satisfies readonly Skill[];

export type SkillSlug = (typeof skills)[number]["slug"];

export type FeaturedSkill = Extract<
  (typeof skills)[number],
  { featured: true }
>;