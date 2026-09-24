// ============================================================
// Yaseen Baloch — Learning & Education Data Architecture
// Phase 7 — Learn / Education Platform
// ============================================================

// ------------------------------------------------------------
// Core Types
// ------------------------------------------------------------

export type LearningLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type LearningStatus =
  | "active"
  | "planned"
  | "coming-soon";

export type LearningCategory =
  | "Python"
  | "Web Development"
  | "Programming"
  | "Computer Science"
  | "Artificial Intelligence";

export type LearningCategorySlug =
  | "python"
  | "web-development"
  | "programming"
  | "computer-science"
  | "ai";


// ------------------------------------------------------------
// Category
// ------------------------------------------------------------

export type LearningCategoryItem = {
  slug: LearningCategorySlug;
  title: LearningCategory;
  shortDescription: string;
  description: string;
  icon: string;
  featured: boolean;
};


// ------------------------------------------------------------
// Learning Path
// ------------------------------------------------------------

export type LearningPath = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  category: LearningCategorySlug;
  level: LearningLevel;
  status: LearningStatus;
  featured: boolean;

  courseSlugs: readonly string[];

  skills: readonly string[];
  outcomes: readonly string[];
  prerequisites?: readonly string[];

  estimatedDuration?: string;

  href: string;
};


// ------------------------------------------------------------
// Course
// ------------------------------------------------------------

export type LearningCourse = {
  slug: string;
  pathSlug: string;

  title: string;
  shortDescription: string;
  description: string;

  level: LearningLevel;
  status: LearningStatus;
  featured: boolean;

  lessonSlugs: readonly string[];

  skills: readonly string[];
  outcomes: readonly string[];

  prerequisites?: readonly string[];

  estimatedDuration?: string;
  lessonCount?: number;

  href: string;
};


// ------------------------------------------------------------
// Lesson
// ------------------------------------------------------------

export type LearningLesson = {
  slug: string;
  courseSlug: string;

  title: string;
  description: string;

  level: LearningLevel;
  status: LearningStatus;

  order: number;
  duration?: string;

  topics: readonly string[];
  resourceSlugs?: readonly string[];

  href: string;
};


// ------------------------------------------------------------
// Resource
// ------------------------------------------------------------

export type LearningResourceType =
  | "Documentation"
  | "Practice"
  | "Project"
  | "Reference"
  | "Video"
  | "Tool";

export type LearningResource = {
  slug: string;

  title: string;
  description: string;

  type: LearningResourceType;
  category: LearningCategorySlug;

  href: string;
  external?: boolean;

  featured: boolean;
};


// ============================================================
// 1. LEARNING CATEGORIES
// ============================================================

export const learningCategories = [
  {
    slug: "python",
    title: "Python",
    shortDescription:
      "Learn Python from fundamentals to practical programming and automation.",
    description:
      "A structured Python learning area covering programming fundamentals, problem solving, data structures, APIs, automation, and practical projects.",
    icon: "python",
    featured: true,
  },

  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Build modern, responsive websites and web applications.",
    description:
      "Learn the technologies behind modern websites and web applications, from HTML and CSS to JavaScript, React, Next.js, APIs, and backend foundations.",
    icon: "web",
    featured: true,
  },

  {
    slug: "programming",
    title: "Programming",
    shortDescription:
      "Develop strong programming logic and problem-solving skills.",
    description:
      "Build a solid programming foundation through logical thinking, algorithms, data structures, programming concepts, and practical problem solving.",
    icon: "code",
    featured: true,
  },

  {
    slug: "computer-science",
    title: "Computer Science",
    shortDescription:
      "Understand the fundamental concepts behind computing and software.",
    description:
      "Explore computer systems, algorithms, data structures, databases, operating systems, networks, software engineering, and other core computer science concepts.",
    icon: "computer",
    featured: true,
  },

  {
    slug: "ai",
    title: "Artificial Intelligence",
    shortDescription:
      "Explore practical AI concepts, tools, APIs, and automation.",
    description:
      "Learn practical artificial intelligence concepts and explore how AI tools, APIs, programming, and automation can be combined to build useful digital solutions.",
    icon: "ai",
    featured: true,
  },
] as const satisfies readonly LearningCategoryItem[];


// ============================================================
// 2. LEARNING PATHS
// ============================================================

export const learningPaths = [
  {
    slug: "python-programming",
    title: "Python Programming",

    shortDescription:
      "A practical path from Python fundamentals to real-world programming and automation.",

    description:
      "Learn Python step by step through programming fundamentals, problem solving, functions, data structures, file handling, APIs, automation, and practical projects.",

    category: "python",
    level: "Beginner",
    status: "active",
    featured: true,

    courseSlugs: [
      "python-fundamentals",
      "python-problem-solving",
      "python-projects-and-automation",
    ],

    skills: [
      "Python Programming",
      "Problem Solving",
      "Debugging",
      "Data Structures",
      "File Handling",
      "API Integration",
      "Automation",
    ],

    outcomes: [
      "Understand core Python concepts",
      "Write structured Python programs",
      "Solve programming problems systematically",
      "Work with files and APIs",
      "Build practical Python projects",
      "Create basic automation workflows",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Willingness to practice programming",
    ],

    estimatedDuration: "8–12 weeks",

    href: "/learn/python",
  },

  {
    slug: "web-development",
    title: "Web Development",

    shortDescription:
      "A structured journey from HTML and CSS to modern frontend and full-stack foundations.",

    description:
      "Build a strong web development foundation by learning HTML, CSS, JavaScript, responsive design, Git, React, Next.js, APIs, and backend concepts.",

    category: "web-development",
    level: "Beginner",
    status: "active",
    featured: true,

    courseSlugs: [
      "html-and-css-foundations",
      "javascript-fundamentals",
      "react-and-nextjs",
    ],

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "React",
      "Next.js",
      "Git and GitHub",
    ],

    outcomes: [
      "Build responsive websites",
      "Create interactive web interfaces",
      "Understand modern frontend development",
      "Work with APIs",
      "Use Git and GitHub",
      "Build applications with React and Next.js",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Basic familiarity with web browsers",
    ],

    estimatedDuration: "10–16 weeks",

    href: "/learn/web-development",
  },

  {
    slug: "programming-foundations",
    title: "Programming Foundations",

    shortDescription:
      "Develop the programming logic required to understand and solve technical problems.",

    description:
      "Build strong programming fundamentals through variables, conditions, loops, functions, algorithms, data structures, debugging, and structured problem solving.",

    category: "programming",
    level: "Beginner",
    status: "active",
    featured: true,

    courseSlugs: [
      "programming-fundamentals",
      "algorithms-and-data-structures",
    ],

    skills: [
      "Programming Logic",
      "Problem Solving",
      "Algorithms",
      "Data Structures",
      "Debugging",
    ],

    outcomes: [
      "Understand fundamental programming concepts",
      "Break complex problems into smaller steps",
      "Write logical and maintainable code",
      "Understand basic algorithms",
      "Work with common data structures",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    estimatedDuration: "6–10 weeks",

    href: "/learn/programming",
  },

  {
    slug: "computer-science-foundations",
    title: "Computer Science Foundations",

    shortDescription:
      "Understand the core concepts that support programming and software engineering.",

    description:
      "Explore computer hardware, operating systems, algorithms, data structures, databases, networking, and software engineering concepts.",

    category: "computer-science",
    level: "Beginner",
    status: "active",
    featured: true,

    courseSlugs: [
      "computer-fundamentals",
      "algorithms-and-data-structures",
      "software-engineering-foundations",
    ],

    skills: [
      "Computational Thinking",
      "Computer Systems",
      "Algorithms",
      "Data Structures",
      "Databases",
      "Software Engineering",
    ],

    outcomes: [
      "Understand how computer systems work",
      "Build stronger technical foundations",
      "Understand algorithms and data structures",
      "Learn fundamental software engineering concepts",
      "Prepare for advanced computer science study",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    estimatedDuration: "8–14 weeks",

    href: "/learn/computer-science",
  },

  {
    slug: "ai-and-automation",
    title: "AI & Automation",

    shortDescription:
      "Explore practical artificial intelligence, AI tools, APIs, and automation workflows.",

    description:
      "Learn practical AI concepts and discover how programming, APIs, AI tools, and automation can be combined to build useful digital workflows.",

    category: "ai",
    level: "Intermediate",
    status: "planned",
    featured: true,

    courseSlugs: [
      "ai-fundamentals",
      "ai-tools-and-apis",
      "automation-workflows",
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

    estimatedDuration: "8–12 weeks",

    href: "/learn/ai",
  },
] as const satisfies readonly LearningPath[];


// ============================================================
// 3. COURSES
// ============================================================

export const learningCourses = [
  // ------------------------- Python -------------------------

  {
    slug: "python-fundamentals",
    pathSlug: "python-programming",

    title: "Python Fundamentals",

    shortDescription:
      "Learn the core concepts required to start programming confidently with Python.",

    description:
      "A beginner-friendly course covering Python syntax, variables, data types, operators, conditions, loops, functions, collections, and basic debugging.",

    level: "Beginner",
    status: "active",
    featured: true,

    lessonSlugs: [
      "python-introduction",
      "python-variables-and-data-types",
      "python-conditions",
      "python-loops",
      "python-functions",
    ],

    skills: [
      "Python Syntax",
      "Variables",
      "Data Types",
      "Conditions",
      "Loops",
      "Functions",
    ],

    outcomes: [
      "Write basic Python programs",
      "Understand Python syntax",
      "Use variables and data types",
      "Create conditions and loops",
      "Write reusable functions",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    estimatedDuration: "3–4 weeks",
    lessonCount: 5,

    href: "/learn/python/courses/python-fundamentals",
  },

  {
    slug: "python-problem-solving",
    pathSlug: "python-programming",

    title: "Python Problem Solving",

    shortDescription:
      "Use Python to develop logical thinking and solve practical programming problems.",

    description:
      "Practice structured problem solving using Python, collections, functions, debugging techniques, and algorithmic thinking.",

    level: "Beginner",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "python-collections",
      "python-file-handling",
      "python-debugging",
    ],

    skills: [
      "Problem Solving",
      "Lists",
      "Dictionaries",
      "File Handling",
      "Debugging",
    ],

    outcomes: [
      "Approach programming problems systematically",
      "Use Python collections effectively",
      "Read and write files",
      "Debug common programming errors",
    ],

    prerequisites: [
      "Python Fundamentals",
    ],

    estimatedDuration: "3–4 weeks",
    lessonCount: 3,

    href: "/learn/python/courses/problem-solving",
  },

  // ------------------------- Web -------------------------

  {
    slug: "html-and-css-foundations",
    pathSlug: "web-development",

    title: "HTML & CSS Foundations",

    shortDescription:
      "Learn how modern websites are structured, styled, and made responsive.",

    description:
      "Build a strong frontend foundation with semantic HTML, forms, layouts, CSS, Flexbox, Grid, responsive design, and basic animations.",

    level: "Beginner",
    status: "active",
    featured: true,

    lessonSlugs: [
      "html-structure",
      "html-semantic-elements",
      "css-fundamentals",
      "css-flexbox-and-grid",
      "responsive-web-design",
    ],

    skills: [
      "HTML",
      "CSS",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
    ],

    outcomes: [
      "Structure webpages correctly",
      "Create professional layouts",
      "Build responsive interfaces",
      "Use Flexbox and Grid",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    estimatedDuration: "3–5 weeks",
    lessonCount: 5,

    href: "/learn/web-development/courses/html-css",
  },

  {
    slug: "javascript-fundamentals",
    pathSlug: "web-development",

    title: "JavaScript Fundamentals",

    shortDescription:
      "Learn JavaScript and use it to create interactive web experiences.",

    description:
      "Understand JavaScript fundamentals, functions, arrays, objects, DOM manipulation, events, asynchronous programming, and APIs.",

    level: "Intermediate",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "javascript-basics",
      "javascript-functions",
      "javascript-arrays-and-objects",
      "javascript-dom",
      "javascript-fetch-api",
    ],

    skills: [
      "JavaScript",
      "DOM",
      "Events",
      "APIs",
      "Async Programming",
    ],

    outcomes: [
      "Write JavaScript programs",
      "Manipulate webpage elements",
      "Handle user interactions",
      "Work with APIs",
      "Build interactive web applications",
    ],

    prerequisites: [
      "HTML and CSS foundations",
    ],

    estimatedDuration: "4–6 weeks",
    lessonCount: 5,

    href: "/learn/web-development/courses/javascript",
  },

  {
    slug: "react-and-nextjs",
    pathSlug: "web-development",

    title: "React & Next.js",

    shortDescription:
      "Learn component-based development and modern application architecture.",

    description:
      "Explore React components, state, props, routing, data fetching, and Next.js application architecture.",

    level: "Intermediate",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "react-components",
      "react-state-and-props",
      "react-routing",
      "nextjs-fundamentals",
    ],

    skills: [
      "React",
      "Components",
      "State",
      "Next.js",
      "Application Architecture",
    ],

    outcomes: [
      "Build reusable React components",
      "Manage application state",
      "Create modern web applications",
      "Understand Next.js architecture",
    ],

    prerequisites: [
      "HTML and CSS",
      "JavaScript fundamentals",
    ],

    estimatedDuration: "4–6 weeks",
    lessonCount: 4,

    href: "/learn/web-development/courses/react-nextjs",
  },

  // ------------------------- Programming -------------------------

  {
    slug: "programming-fundamentals",
    pathSlug: "programming-foundations",

    title: "Programming Fundamentals",

    shortDescription:
      "Build the logical foundation required for learning any programming language.",

    description:
      "Learn variables, operators, conditions, loops, functions, input/output, debugging, and structured problem solving.",

    level: "Beginner",
    status: "active",
    featured: true,

    lessonSlugs: [
      "programming-logic",
      "programming-variables",
      "programming-conditions",
      "programming-loops",
      "programming-functions",
    ],

    skills: [
      "Programming Logic",
      "Problem Solving",
      "Debugging",
      "Algorithms",
    ],

    outcomes: [
      "Understand programming logic",
      "Solve basic programming problems",
      "Build structured programs",
      "Transfer concepts between languages",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    estimatedDuration: "4–6 weeks",
    lessonCount: 5,

    href: "/learn/programming/courses/fundamentals",
  },

  {
    slug: "algorithms-and-data-structures",
    pathSlug: "programming-foundations",

    title: "Algorithms & Data Structures",

    shortDescription:
      "Learn how data is organized and how algorithms solve computational problems.",

    description:
      "Study fundamental data structures and algorithmic concepts that support efficient programming and software engineering.",

    level: "Intermediate",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "algorithmic-thinking",
      "arrays-and-lists",
      "stacks-and-queues",
      "searching-and-sorting",
    ],

    skills: [
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "Computational Thinking",
    ],

    outcomes: [
      "Understand common data structures",
      "Analyze basic algorithms",
      "Choose suitable structures for problems",
      "Improve problem-solving skills",
    ],

    prerequisites: [
      "Programming Fundamentals",
    ],

    estimatedDuration: "5–8 weeks",
    lessonCount: 4,

    href: "/learn/programming/courses/algorithms",
  },

  // ------------------------- Computer Science -------------------------

  {
    slug: "computer-fundamentals",
    pathSlug: "computer-science-foundations",

    title: "Computer Fundamentals",

    shortDescription:
      "Understand computers, hardware, software, operating systems, and basic networking.",

    description:
      "Build a clear understanding of how computers work and how major hardware and software components interact.",

    level: "Beginner",
    status: "active",
    featured: true,

    lessonSlugs: [
      "types-of-computers",
      "computer-hardware",
      "cpu-and-memory",
      "operating-systems",
    ],

    skills: [
      "Computer Hardware",
      "Software",
      "Operating Systems",
      "Computer Systems",
    ],

    outcomes: [
      "Understand major computer components",
      "Explain how hardware and software interact",
      "Understand CPU and memory",
      "Understand the role of operating systems",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    estimatedDuration: "3–4 weeks",
    lessonCount: 4,

    href: "/learn/computer-science/courses/computer-fundamentals",
  },

  {
    slug: "software-engineering-foundations",
    pathSlug: "computer-science-foundations",

    title: "Software Engineering Foundations",

    shortDescription:
      "Learn the principles behind planning, building, testing, and maintaining software.",

    description:
      "Understand software development processes, requirements, version control, testing, architecture, and maintainable development practices.",

    level: "Intermediate",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "software-development-lifecycle",
      "requirements-and-planning",
      "version-control",
      "software-testing",
    ],

    skills: [
      "Software Engineering",
      "Planning",
      "Git",
      "Testing",
      "Maintainable Code",
    ],

    outcomes: [
      "Understand software development workflows",
      "Plan software projects",
      "Use version control effectively",
      "Understand basic testing practices",
    ],

    prerequisites: [
      "Basic programming knowledge",
    ],

    estimatedDuration: "4–6 weeks",
    lessonCount: 4,

    href: "/learn/computer-science/courses/software-engineering",
  },

  // ------------------------- AI -------------------------

  {
    slug: "ai-fundamentals",
    pathSlug: "ai-and-automation",

    title: "AI Fundamentals",

    shortDescription:
      "Build a practical understanding of artificial intelligence and modern AI systems.",

    description:
      "Explore fundamental AI concepts, generative AI, language models, AI-assisted development, and practical use cases.",

    level: "Intermediate",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "ai-introduction",
      "generative-ai",
      "language-models",
      "ai-assisted-development",
    ],

    skills: [
      "AI Concepts",
      "Generative AI",
      "Prompt Engineering",
      "AI-Assisted Development",
    ],

    outcomes: [
      "Understand modern AI concepts",
      "Understand generative AI",
      "Use AI tools more effectively",
      "Identify practical AI use cases",
    ],

    prerequisites: [
      "Basic programming knowledge recommended",
    ],

    estimatedDuration: "3–5 weeks",
    lessonCount: 4,

    href: "/learn/ai/courses/fundamentals",
  },

  {
    slug: "ai-tools-and-apis",
    pathSlug: "ai-and-automation",

    title: "AI Tools & APIs",

    shortDescription:
      "Learn how applications can connect with modern AI tools and APIs.",

    description:
      "Explore AI APIs, integrations, structured workflows, and practical development patterns for AI-powered applications.",

    level: "Intermediate",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "ai-api-concepts",
      "working-with-ai-apis",
      "structured-ai-workflows",
    ],

    skills: [
      "AI APIs",
      "API Integration",
      "Python",
      "Workflow Design",
    ],

    outcomes: [
      "Understand AI API concepts",
      "Connect applications to AI services",
      "Design structured AI workflows",
      "Build practical AI integrations",
    ],

    prerequisites: [
      "Basic Python",
      "Basic API knowledge",
    ],

    estimatedDuration: "3–5 weeks",
    lessonCount: 3,

    href: "/learn/ai/courses/apis",
  },

  {
    slug: "automation-workflows",
    pathSlug: "ai-and-automation",

    title: "Automation Workflows",

    shortDescription:
      "Turn repetitive digital tasks into structured and practical automation workflows.",

    description:
      "Learn how to identify repetitive tasks, design workflows, connect tools, use APIs, and build practical automation systems.",

    level: "Intermediate",
    status: "planned",
    featured: true,

    lessonSlugs: [
      "automation-concepts",
      "workflow-design",
      "automation-projects",
    ],

    skills: [
      "Automation",
      "Workflow Design",
      "APIs",
      "Python",
      "AI Tools",
    ],

    outcomes: [
      "Identify automation opportunities",
      "Design reliable workflows",
      "Connect multiple digital tools",
      "Build practical automation projects",
    ],

    prerequisites: [
      "Basic programming knowledge",
    ],

    estimatedDuration: "3–5 weeks",
    lessonCount: 3,

    href: "/learn/ai/courses/automation",
  },
] as const satisfies readonly LearningCourse[];


// ============================================================
// 4. LESSONS
// ============================================================

export const learningLessons = [
  // Python
  {
    slug: "python-introduction",
    courseSlug: "python-fundamentals",
    title: "Introduction to Python",
    description:
      "Understand what Python is, where it is used, and how to write your first Python program.",
    level: "Beginner",
    status: "active",
    order: 1,
    duration: "20 min",
    topics: ["Python", "Programming", "Syntax"],
    href: "/learn/python/lessons/introduction",
  },

  {
    slug: "python-variables-and-data-types",
    courseSlug: "python-fundamentals",
    title: "Variables & Data Types",
    description:
      "Learn how Python stores and works with different types of data.",
    level: "Beginner",
    status: "active",
    order: 2,
    duration: "30 min",
    topics: ["Variables", "Strings", "Numbers", "Booleans"],
    href: "/learn/python/lessons/variables-data-types",
  },

  {
    slug: "python-conditions",
    courseSlug: "python-fundamentals",
    title: "Conditions & Decision Making",
    description:
      "Learn how programs make decisions using if, elif, and else.",
    level: "Beginner",
    status: "active",
    order: 3,
    duration: "30 min",
    topics: ["if", "elif", "else", "Logic"],
    href: "/learn/python/lessons/conditions",
  },

  {
    slug: "python-loops",
    courseSlug: "python-fundamentals",
    title: "Loops",
    description:
      "Understand repetition using for and while loops.",
    level: "Beginner",
    status: "active",
    order: 4,
    duration: "35 min",
    topics: ["for", "while", "Iteration"],
    href: "/learn/python/lessons/loops",
  },

  {
    slug: "python-functions",
    courseSlug: "python-fundamentals",
    title: "Functions",
    description:
      "Learn how to create reusable blocks of Python code.",
    level: "Beginner",
    status: "active",
    order: 5,
    duration: "35 min",
    topics: ["Functions", "Parameters", "Return Values"],
    href: "/learn/python/lessons/functions",
  },

  // HTML & CSS
  {
    slug: "html-structure",
    courseSlug: "html-and-css-foundations",
    title: "HTML Structure",
    description:
      "Learn how webpages are structured using HTML elements.",
    level: "Beginner",
    status: "active",
    order: 1,
    duration: "30 min",
    topics: ["HTML", "Elements", "Document Structure"],
    href: "/learn/web-development/lessons/html-structure",
  },

  {
    slug: "html-semantic-elements",
    courseSlug: "html-and-css-foundations",
    title: "Semantic HTML",
    description:
      "Learn how semantic HTML improves structure, accessibility, and maintainability.",
    level: "Beginner",
    status: "active",
    order: 2,
    duration: "30 min",
    topics: ["Semantic HTML", "Accessibility"],
    href: "/learn/web-development/lessons/semantic-html",
  },

  {
    slug: "css-fundamentals",
    courseSlug: "html-and-css-foundations",
    title: "CSS Fundamentals",
    description:
      "Learn how CSS controls the appearance and layout of webpages.",
    level: "Beginner",
    status: "active",
    order: 3,
    duration: "40 min",
    topics: ["CSS", "Selectors", "Box Model"],
    href: "/learn/web-development/lessons/css-fundamentals",
  },

  {
    slug: "css-flexbox-and-grid",
    courseSlug: "html-and-css-foundations",
    title: "Flexbox & CSS Grid",
    description:
      "Build modern layouts using Flexbox and CSS Grid.",
    level: "Beginner",
    status: "active",
    order: 4,
    duration: "45 min",
    topics: ["Flexbox", "Grid", "Layout"],
    href: "/learn/web-development/lessons/flexbox-grid",
  },

  {
    slug: "responsive-web-design",
    courseSlug: "html-and-css-foundations",
    title: "Responsive Web Design",
    description:
      "Learn how to create interfaces that work across mobile, tablet, and desktop screens.",
    level: "Beginner",
    status: "active",
    order: 5,
    duration: "40 min",
    topics: ["Responsive Design", "Media Queries", "Mobile First"],
    href: "/learn/web-development/lessons/responsive-design",
  },

  // Programming
  {
    slug: "programming-logic",
    courseSlug: "programming-fundamentals",
    title: "Programming Logic",
    description:
      "Understand how programmers break problems into logical steps.",
    level: "Beginner",
    status: "active",
    order: 1,
    duration: "30 min",
    topics: ["Logic", "Problem Solving", "Algorithms"],
    href: "/learn/programming/lessons/logic",
  },

  {
    slug: "programming-variables",
    courseSlug: "programming-fundamentals",
    title: "Variables & Data",
    description:
      "Understand variables, values, and basic data concepts used across programming languages.",
    level: "Beginner",
    status: "active",
    order: 2,
    duration: "25 min",
    topics: ["Variables", "Data Types"],
    href: "/learn/programming/lessons/variables",
  },

  {
    slug: "programming-conditions",
    courseSlug: "programming-fundamentals",
    title: "Conditions",
    description:
      "Learn how programs make decisions using conditional logic.",
    level: "Beginner",
    status: "active",
    order: 3,
    duration: "30 min",
    topics: ["Conditions", "Logic"],
    href: "/learn/programming/lessons/conditions",
  },

  {
    slug: "programming-loops",
    courseSlug: "programming-fundamentals",
    title: "Loops",
    description:
      "Understand repetition and iteration in programming.",
    level: "Beginner",
    status: "active",
    order: 4,
    duration: "30 min",
    topics: ["Loops", "Iteration"],
    href: "/learn/programming/lessons/loops",
  },

  {
    slug: "programming-functions",
    courseSlug: "programming-fundamentals",
    title: "Functions",
    description:
      "Learn how functions improve code organization and reuse.",
    level: "Beginner",
    status: "active",
    order: 5,
    duration: "35 min",
    topics: ["Functions", "Parameters", "Reusability"],
    href: "/learn/programming/lessons/functions",
  },

  // Computer Science
  {
    slug: "types-of-computers",
    courseSlug: "computer-fundamentals",
    title: "Types of Computers",
    description:
      "Understand major types of computers and their common uses.",
    level: "Beginner",
    status: "active",
    order: 1,
    duration: "25 min",
    topics: ["Computer Types", "Supercomputers", "Mainframes", "PCs"],
    href: "/learn/computer-science/lessons/types-of-computers",
  },

  {
    slug: "computer-hardware",
    courseSlug: "computer-fundamentals",
    title: "Computer Hardware",
    description:
      "Learn about the physical components that make up a computer system.",
    level: "Beginner",
    status: "active",
    order: 2,
    duration: "30 min",
    topics: ["Hardware", "CPU", "Memory", "Storage"],
    href: "/learn/computer-science/lessons/hardware",
  },

  {
    slug: "cpu-and-memory",
    courseSlug: "computer-fundamentals",
    title: "CPU & Memory",
    description:
      "Understand how processors and memory work together.",
    level: "Beginner",
    status: "active",
    order: 3,
    duration: "30 min",
    topics: ["CPU", "RAM", "Processing"],
    href: "/learn/computer-science/lessons/cpu-memory",
  },

  {
    slug: "operating-systems",
    courseSlug: "computer-fundamentals",
    title: "Operating Systems",
    description:
      "Understand the purpose and major responsibilities of an operating system.",
    level: "Beginner",
    status: "active",
    order: 4,
    duration: "30 min",
    topics: ["Operating Systems", "Windows", "Linux", "macOS"],
    href: "/learn/computer-science/lessons/operating-systems",
  },

  // AI
  {
    slug: "ai-introduction",
    courseSlug: "ai-fundamentals",
    title: "Introduction to AI",
    description:
      "Understand what artificial intelligence is and where it is used.",
    level: "Intermediate",
    status: "planned",
    order: 1,
    duration: "30 min",
    topics: ["AI", "Machine Learning", "Applications"],
    href: "/learn/ai/lessons/introduction",
  },

  {
    slug: "generative-ai",
    courseSlug: "ai-fundamentals",
    title: "Generative AI",
    description:
      "Understand how modern AI systems can generate text, images, code, and other content.",
    level: "Intermediate",
    status: "planned",
    order: 2,
    duration: "35 min",
    topics: ["Generative AI", "LLMs", "AI Tools"],
    href: "/learn/ai/lessons/generative-ai",
  },

  {
    slug: "language-models",
    courseSlug: "ai-fundamentals",
    title: "Language Models",
    description:
      "Explore the basic idea behind modern language models and AI assistants.",
    level: "Intermediate",
    status: "planned",
    order: 3,
    duration: "35 min",
    topics: ["LLMs", "Language Models", "AI"],
    href: "/learn/ai/lessons/language-models",
  },

  {
    slug: "ai-assisted-development",
    courseSlug: "ai-fundamentals",
    title: "AI-Assisted Development",
    description:
      "Learn practical ways AI can support software development without replacing engineering judgment.",
    level: "Intermediate",
    status: "planned",
    order: 4,
    duration: "35 min",
    topics: ["AI Coding", "Developer Tools", "Productivity"],
    href: "/learn/ai/lessons/ai-assisted-development",
  },
] as const satisfies readonly LearningLesson[];


// ============================================================
// 5. LEARNING RESOURCES
// ============================================================

export const learningResources = [
  {
    slug: "python-documentation",
    title: "Python Documentation",
    description:
      "Official Python documentation for language reference and learning.",
    type: "Documentation",
    category: "python",
    href: "https://docs.python.org/3/",
    external: true,
    featured: true,
  },

  {
    slug: "mdn-web-docs",
    title: "MDN Web Docs",
    description:
      "A comprehensive reference for HTML, CSS, JavaScript, and web technologies.",
    type: "Documentation",
    category: "web-development",
    href: "https://developer.mozilla.org/",
    external: true,
    featured: true,
  },

  {
    slug: "javascript-reference",
    title: "JavaScript Reference",
    description:
      "Reference material for modern JavaScript concepts and APIs.",
    type: "Reference",
    category: "web-development",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    external: true,
    featured: true,
  },

  {
    slug: "github-docs",
    title: "GitHub Documentation",
    description:
      "Learn GitHub workflows, repositories, collaboration, and development practices.",
    type: "Documentation",
    category: "programming",
    href: "https://docs.github.com/",
    external: true,
    featured: true,
  },

  {
    slug: "react-documentation",
    title: "React Documentation",
    description:
      "Official documentation for learning React and component-based development.",
    type: "Documentation",
    category: "web-development",
    href: "https://react.dev/",
    external: true,
    featured: true,
  },

  {
    slug: "nextjs-documentation",
    title: "Next.js Documentation",
    description:
      "Official documentation for building modern React applications with Next.js.",
    type: "Documentation",
    category: "web-development",
    href: "https://nextjs.org/docs",
    external: true,
    featured: true,
  },

  {
    slug: "python-practice",
    title: "Python Practice",
    description:
      "A dedicated space for Python exercises and practical programming practice.",
    type: "Practice",
    category: "python",
    href: "/learn/python/practice",
    featured: true,
  },

  {
    slug: "web-development-projects",
    title: "Web Development Projects",
    description:
      "Practical project ideas for turning web development concepts into real applications.",
    type: "Project",
    category: "web-development",
    href: "/learn/web-development/projects",
    featured: true,
  },

  {
    slug: "computer-science-notes",
    title: "Computer Science Notes",
    description:
      "Structured notes covering important computer science concepts.",
    type: "Reference",
    category: "computer-science",
    href: "/learn/computer-science/resources",
    featured: true,
  },

  {
    slug: "ai-learning-resources",
    title: "AI Learning Resources",
    description:
      "Curated resources for understanding practical artificial intelligence concepts.",
    type: "Reference",
    category: "ai",
    href: "/learn/ai/resources",
    featured: true,
  },
] as const satisfies readonly LearningResource[];


// ============================================================
// 6. TOPIC DIRECTORY
// ------------------------------------------------------------
// Kept as a lightweight topic layer for the Learn homepage,
// filters, search, and future discovery features.
// ============================================================

export type LearningTopic = {
  slug: string;
  title: string;
  description: string;
  category: LearningCategorySlug;
  level: LearningLevel;
  status: LearningStatus;
  featured: boolean;
};

export const learningTopics = [
  {
    slug: "python-programming",
    title: "Python Programming",
    description:
      "Learn Python fundamentals, problem solving, automation, APIs, and practical projects.",
    category: "python",
    level: "Beginner",
    status: "active",
    featured: true,
  },

  {
    slug: "web-fundamentals",
    title: "Web Fundamentals",
    description:
      "Understand HTML, CSS, responsive design, and the foundations of modern websites.",
    category: "web-development",
    level: "Beginner",
    status: "active",
    featured: true,
  },

  {
    slug: "javascript",
    title: "JavaScript",
    description:
      "Learn JavaScript fundamentals and use them to create interactive web experiences.",
    category: "web-development",
    level: "Intermediate",
    status: "planned",
    featured: true,
  },

  {
    slug: "react-and-nextjs",
    title: "React & Next.js",
    description:
      "Explore component-based development and modern application architecture.",
    category: "web-development",
    level: "Intermediate",
    status: "planned",
    featured: true,
  },

  {
    slug: "programming-fundamentals",
    title: "Programming Fundamentals",
    description:
      "Develop logical thinking and problem-solving skills through programming.",
    category: "programming",
    level: "Beginner",
    status: "active",
    featured: true,
  },

  {
    slug: "algorithms-and-data-structures",
    title: "Algorithms & Data Structures",
    description:
      "Understand how algorithms and data structures help solve computational problems.",
    category: "programming",
    level: "Intermediate",
    status: "planned",
    featured: true,
  },

  {
    slug: "computer-science",
    title: "Computer Science",
    description:
      "Study computing foundations, algorithms, systems, databases, and software engineering.",
    category: "computer-science",
    level: "Beginner",
    status: "active",
    featured: true,
  },

  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Explore practical AI concepts, tools, APIs, and AI-assisted development.",
    category: "ai",
    level: "Intermediate",
    status: "planned",
    featured: true,
  },
] as const satisfies readonly LearningTopic[];


// ============================================================
// 7. TYPE-SAFE SLUG TYPES
// ------------------------------------------------------------
// These make future dynamic routes and lookups safer.
// ============================================================

export type LearningCategorySlugType =
  (typeof learningCategories)[number]["slug"];

export type LearningPathSlug =
  (typeof learningPaths)[number]["slug"];

export type LearningCourseSlug =
  (typeof learningCourses)[number]["slug"];

export type LearningLessonSlug =
  (typeof learningLessons)[number]["slug"];

export type LearningResourceSlug =
  (typeof learningResources)[number]["slug"];

export type LearningTopicSlug =
  (typeof learningTopics)[number]["slug"];


// ============================================================
// 8. CENTRALIZED EDUCATION COUNTS
// ------------------------------------------------------------
// Useful for statistics on the /learn page.
// ============================================================

export const learningStats = {
  categories: learningCategories.length,
  learningPaths: learningPaths.length,
  courses: learningCourses.length,
  lessons: learningLessons.length,
  resources: learningResources.length,
} as const;