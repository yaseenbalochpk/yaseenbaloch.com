export type LearningLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type LearningStatus =
  | "active"
  | "planned"
  | "coming-soon";

export type LearningCategory =
  | "Programming"
  | "Web Development"
  | "Artificial Intelligence"
  | "Computer Science"
  | "Career & Freelancing";

export type LearningTopic = {
  slug: string;
  title: string;
  description: string;
  level: LearningLevel;
  status: LearningStatus;
  featured: boolean;
};

export type LearningPath = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: LearningCategory;
  level: LearningLevel;
  status: LearningStatus;
  featured: boolean;

  topics: readonly string[];

  skills: readonly string[];

  outcomes: readonly string[];

  prerequisites?: readonly string[];

  href: string;
};

export const learningPaths = [
  {
    slug: "python-programming",
    title: "Python Programming",
    shortDescription:
      "A practical path from Python fundamentals to building real-world programs and automation projects.",
    description:
      "Learn Python through programming fundamentals, problem solving, functions, data structures, file handling, APIs, and practical projects.",

    category: "Programming",
    level: "Beginner",
    status: "active",
    featured: true,

    topics: [
      "Python Fundamentals",
      "Variables and Data Types",
      "Conditions and Loops",
      "Functions",
      "Lists, Tuples, Sets, and Dictionaries",
      "File Handling",
      "Object-Oriented Programming",
      "APIs",
      "Automation",
      "Practical Projects",
    ],

    skills: [
      "Python Programming",
      "Problem Solving",
      "Debugging",
      "Code Organization",
      "Automation",
    ],

    outcomes: [
      "Understand core Python programming concepts",
      "Write structured Python programs",
      "Solve programming problems systematically",
      "Work with files and APIs",
      "Build practical Python projects",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Willingness to practice programming",
    ],

    href: "/learn/python",
  },

  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "A structured path for learning modern web development from HTML and CSS to JavaScript and full-stack foundations.",
    description:
      "Build a strong web development foundation by learning frontend technologies, responsive design, JavaScript, React, Next.js, APIs, and backend concepts.",

    category: "Web Development",
    level: "Beginner",
    status: "active",
    featured: true,

    topics: [
      "HTML Fundamentals",
      "Semantic HTML",
      "CSS Fundamentals",
      "Responsive Design",
      "Flexbox and Grid",
      "JavaScript Fundamentals",
      "DOM and Events",
      "APIs and Fetch",
      "Git and GitHub",
      "React",
      "Next.js",
      "Backend Foundations",
    ],

    skills: [
      "Frontend Development",
      "Responsive Design",
      "JavaScript",
      "React",
      "Next.js",
      "Git and GitHub",
    ],

    outcomes: [
      "Build responsive websites",
      "Understand modern frontend development",
      "Create interactive web interfaces",
      "Work with APIs",
      "Use Git and GitHub effectively",
      "Build projects with React and Next.js",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Basic familiarity with using a web browser",
    ],

    href: "/learn/web-development",
  },

  {
    slug: "computer-science-foundations",
    title: "Computer Science Foundations",
    shortDescription:
      "Build the core concepts needed to understand programming, computer systems, algorithms, and software development.",
    description:
      "A foundation-focused learning path covering essential computer science concepts that support long-term programming and software engineering growth.",

    category: "Computer Science",
    level: "Beginner",
    status: "active",
    featured: true,

    topics: [
      "Computer Fundamentals",
      "Types of Computers",
      "Computer Hardware",
      "Operating Systems",
      "Programming Fundamentals",
      "Algorithms",
      "Data Structures",
      "Databases",
      "Computer Networks",
      "Software Engineering",
    ],

    skills: [
      "Computational Thinking",
      "Programming Fundamentals",
      "Problem Solving",
      "Algorithms",
      "Computer Systems",
    ],

    outcomes: [
      "Understand fundamental computer science concepts",
      "Develop stronger programming foundations",
      "Understand how computer systems work",
      "Learn basic algorithmic thinking",
      "Build a foundation for advanced technical study",
    ],

    href: "/learn/computer-science",
  },

  {
    slug: "ai-and-automation",
    title: "AI & Automation",
    shortDescription:
      "Explore practical artificial intelligence concepts, AI tools, APIs, and automation workflows.",
    description:
      "Learn how AI tools and automation can be combined with programming to create practical digital workflows and software solutions.",

    category: "Artificial Intelligence",
    level: "Intermediate",
    status: "planned",
    featured: true,

    topics: [
      "AI Fundamentals",
      "Generative AI",
      "Prompt Engineering",
      "AI APIs",
      "Python for AI Workflows",
      "Automation Concepts",
      "Workflow Design",
      "AI-Assisted Development",
      "Practical AI Projects",
    ],

    skills: [
      "AI Concepts",
      "Prompt Engineering",
      "Python",
      "API Integration",
      "Automation",
      "Workflow Design",
    ],

    outcomes: [
      "Understand practical AI concepts",
      "Work with modern AI tools",
      "Connect applications with AI APIs",
      "Design useful automation workflows",
      "Build practical AI-assisted projects",
    ],

    prerequisites: [
      "Basic programming knowledge",
      "Basic Python familiarity is recommended",
    ],

    href: "/learn/ai",
  },

  {
    slug: "freelancing-and-remote-work",
    title: "Freelancing & Remote Work",
    shortDescription:
      "Learn the fundamentals of finding opportunities, presenting skills, communicating with clients, and working professionally online.",
    description:
      "A practical learning path covering freelancing fundamentals, service positioning, portfolios, client communication, proposals, project workflows, and professional remote work.",

    category: "Career & Freelancing",
    level: "Beginner",
    status: "planned",
    featured: false,

    topics: [
      "Understanding Freelancing",
      "Skills vs Services",
      "Choosing a Service",
      "Portfolio Development",
      "Personal Branding",
      "Freelance Platforms",
      "Client Communication",
      "Proposals",
      "Project Management",
      "Remote Work",
    ],

    skills: [
      "Communication",
      "Personal Branding",
      "Portfolio Building",
      "Client Management",
      "Remote Work",
    ],

    outcomes: [
      "Understand how freelancing works",
      "Turn technical skills into clear services",
      "Build a professional portfolio",
      "Communicate with potential clients",
      "Understand basic freelance project workflows",
    ],

    href: "/learn/freelancing",
  },
] as const satisfies readonly LearningPath[];

export const learningTopics = [
  {
    slug: "programming-fundamentals",
    title: "Programming Fundamentals",
    description:
      "Learn variables, data types, conditions, loops, functions, and structured problem solving.",
    level: "Beginner",
    status: "active",
    featured: true,
  },

  {
    slug: "web-fundamentals",
    title: "Web Fundamentals",
    description:
      "Understand HTML, CSS, responsive design, and the foundations of modern websites.",
    level: "Beginner",
    status: "active",
    featured: true,
  },

  {
    slug: "javascript",
    title: "JavaScript",
    description:
      "Learn JavaScript fundamentals and use them to create interactive web experiences.",
    level: "Intermediate",
    status: "active",
    featured: true,
  },

  {
    slug: "react-and-nextjs",
    title: "React & Next.js",
    description:
      "Explore component-based development and modern application architecture with React and Next.js.",
    level: "Intermediate",
    status: "active",
    featured: true,
  },

  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Explore practical AI concepts, tools, APIs, and AI-assisted development workflows.",
    level: "Intermediate",
    status: "planned",
    featured: true,
  },

  {
    slug: "computer-science",
    title: "Computer Science",
    description:
      "Study the foundations of computing, algorithms, data structures, systems, and software engineering.",
    level: "Beginner",
    status: "active",
    featured: true,
  },
] as const satisfies readonly LearningTopic[];

export type LearningPathSlug =
  (typeof learningPaths)[number]["slug"];

export type LearningTopicSlug =
  (typeof learningTopics)[number]["slug"];