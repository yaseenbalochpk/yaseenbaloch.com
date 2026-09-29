export type CourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type CourseStatus =
  | "active"
  | "planned"
  | "coming-soon";

export type CourseFormat =
  | "Course"
  | "Project-Based"
  | "Practical";

export type Course = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  pathSlug: string;
  category:
    | "Programming"
    | "Web Development"
    | "Artificial Intelligence"
    | "Computer Science"
    | "Career & Freelancing";

  level: CourseLevel;
  status: CourseStatus;
  featured: boolean;
  format: CourseFormat;

  instructor: string;

  duration: string;

  lessonsCount: number;

  skills: readonly string[];

  topics: readonly string[];

  outcomes: readonly string[];

  prerequisites?: readonly string[];

  href: string;
};

export const courses = [
  /* =========================================================
     PYTHON
  ========================================================= */

  {
    slug: "python-programming-fundamentals",
    title: "Python Programming Fundamentals",
    shortDescription:
      "Learn Python from the ground up through practical programming concepts, examples, and exercises.",

    description:
      "A beginner-friendly Python course covering syntax, variables, data types, operators, conditions, loops, functions, collections, and problem solving.",

    pathSlug: "python-programming",
    category: "Programming",

    level: "Beginner",
    status: "active",
    featured: true,
    format: "Course",

    instructor: "Yaseen Baloch",

    duration: "6–8 weeks",
    lessonsCount: 24,

    skills: [
      "Python",
      "Programming Fundamentals",
      "Problem Solving",
      "Debugging",
      "Code Organization",
    ],

    topics: [
      "Introduction to Python",
      "Variables and Data Types",
      "Input and Output",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Lists",
      "Tuples",
      "Sets",
      "Dictionaries",
      "Basic Problem Solving",
    ],

    outcomes: [
      "Understand Python syntax and core concepts",
      "Write structured Python programs",
      "Use conditions and loops effectively",
      "Create reusable functions",
      "Work with Python collections",
      "Solve beginner programming problems",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Willingness to practice programming",
    ],

    href: "/learn/python-programming",
  },

  {
    slug: "python-projects-and-automation",
    title: "Python Projects & Automation",
    shortDescription:
      "Move beyond Python fundamentals and build practical programs, utilities, and automation workflows.",

    description:
      "A practical course focused on applying Python to real-world problems through projects, file handling, APIs, automation, and reusable software utilities.",

    pathSlug: "python-programming",
    category: "Programming",

    level: "Intermediate",
    status: "planned",
    featured: true,
    format: "Project-Based",

    instructor: "Yaseen Baloch",

    duration: "6–8 weeks",
    lessonsCount: 20,

    skills: [
      "Python",
      "Automation",
      "File Handling",
      "APIs",
      "Project Development",
    ],

    topics: [
      "File Handling",
      "Exception Handling",
      "Modules and Packages",
      "Working with JSON",
      "APIs",
      "HTTP Requests",
      "Automation",
      "Data Processing",
      "Project Structure",
      "Practical Python Projects",
    ],

    outcomes: [
      "Build practical Python applications",
      "Work with files and structured data",
      "Connect Python applications with APIs",
      "Automate repetitive tasks",
      "Structure larger Python projects",
      "Build portfolio-ready projects",
    ],

    prerequisites: [
      "Python programming fundamentals",
      "Basic programming problem solving",
    ],

    href: "/learn/python-projects",
  },

  /* =========================================================
     C++
  ========================================================= */

  {
    slug: "cpp-programming-fundamentals",
    title: "C++ Programming Fundamentals",
    shortDescription:
      "Build a strong C++ programming foundation for university study, problem solving, and software development.",

    description:
      "A structured C++ course covering programming fundamentals, variables, data types, conditions, loops, functions, arrays, strings, pointers, and object-oriented programming foundations.",

    pathSlug: "computer-science-foundations",
    category: "Computer Science",

    level: "Beginner",
    status: "active",
    featured: true,
    format: "Course",

    instructor: "Yaseen Baloch",

    duration: "6–8 weeks",
    lessonsCount: 26,

    skills: [
      "C++",
      "Programming Fundamentals",
      "Problem Solving",
      "Object-Oriented Programming",
      "Debugging",
    ],

    topics: [
      "Introduction to C++",
      "C++ Program Structure",
      "Variables and Data Types",
      "Input and Output",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Arrays",
      "Strings",
      "Pointers",
      "References",
      "Structures",
      "Object-Oriented Programming",
    ],

    outcomes: [
      "Understand core C++ programming concepts",
      "Write and debug C++ programs",
      "Solve programming problems",
      "Work with arrays and strings",
      "Understand pointers and references",
      "Build a foundation for advanced C++ study",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Willingness to practice programming",
    ],

    href: "/learn/cpp",
  },

  /* =========================================================
     WEB DEVELOPMENT
  ========================================================= */

  {
    slug: "html-and-css-fundamentals",
    title: "HTML & CSS Fundamentals",
    shortDescription:
      "Learn how modern websites are structured, styled, and made responsive across different screen sizes.",

    description:
      "A practical frontend foundation covering semantic HTML, CSS, layouts, responsive design, Flexbox, Grid, forms, and accessible interfaces.",

    pathSlug: "web-development",
    category: "Web Development",

    level: "Beginner",
    status: "active",
    featured: true,
    format: "Course",

    instructor: "Yaseen Baloch",

    duration: "4–6 weeks",
    lessonsCount: 22,

    skills: [
      "HTML",
      "CSS",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Accessibility",
    ],

    topics: [
      "HTML Fundamentals",
      "Semantic HTML",
      "Links and Images",
      "Forms",
      "CSS Fundamentals",
      "Selectors",
      "Box Model",
      "Typography",
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
      "Accessibility Basics",
    ],

    outcomes: [
      "Build structured web pages",
      "Style professional interfaces",
      "Create responsive layouts",
      "Use Flexbox and Grid",
      "Build accessible basic interfaces",
      "Create a strong frontend foundation",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Basic familiarity with web browsers",
    ],

    href: "/learn/html-css",
  },

  {
    slug: "javascript-for-web-development",
    title: "JavaScript for Web Development",
    shortDescription:
      "Learn JavaScript fundamentals and use them to create interactive and dynamic web experiences.",

    description:
      "A structured JavaScript course covering programming fundamentals, DOM manipulation, events, arrays, objects, functions, asynchronous JavaScript, and APIs.",

    pathSlug: "web-development",
    category: "Web Development",

    level: "Intermediate",
    status: "active",
    featured: true,
    format: "Course",

    instructor: "Yaseen Baloch",

    duration: "5–7 weeks",
    lessonsCount: 24,

    skills: [
      "JavaScript",
      "DOM",
      "Events",
      "APIs",
      "Async Programming",
    ],

    topics: [
      "JavaScript Fundamentals",
      "Variables",
      "Data Types",
      "Functions",
      "Arrays",
      "Objects",
      "Loops",
      "DOM Manipulation",
      "Events",
      "Forms",
      "Fetch API",
      "Promises",
      "Async and Await",
    ],

    outcomes: [
      "Write JavaScript programs",
      "Create interactive web interfaces",
      "Manipulate the DOM",
      "Handle user events",
      "Work with APIs",
      "Build practical JavaScript projects",
    ],

    prerequisites: [
      "Basic HTML and CSS",
      "Basic programming concepts",
    ],

    href: "/learn/javascript",
  },

  {
    slug: "react-and-nextjs-development",
    title: "React & Next.js Development",
    shortDescription:
      "Learn component-based frontend development and modern web application architecture with React and Next.js.",

    description:
      "A practical course covering React components, state, props, hooks, routing, Next.js App Router, reusable UI, and modern application architecture.",

    pathSlug: "web-development",
    category: "Web Development",

    level: "Intermediate",
    status: "planned",
    featured: true,
    format: "Project-Based",

    instructor: "Yaseen Baloch",

    duration: "6–8 weeks",
    lessonsCount: 24,

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Components",
      "Application Architecture",
    ],

    topics: [
      "React Fundamentals",
      "Components",
      "Props",
      "State",
      "Hooks",
      "Forms",
      "Reusable Components",
      "Routing",
      "Next.js",
      "App Router",
      "TypeScript",
      "API Integration",
    ],

    outcomes: [
      "Build React applications",
      "Create reusable components",
      "Manage application state",
      "Build pages with Next.js",
      "Understand modern web architecture",
      "Create portfolio-ready applications",
    ],

    prerequisites: [
      "HTML and CSS fundamentals",
      "JavaScript fundamentals",
      "Basic Git and GitHub knowledge",
    ],

    href: "/learn/react-nextjs",
  },

  /* =========================================================
     COMPUTER SCIENCE
  ========================================================= */

  {
    slug: "computer-science-foundations",
    title: "Computer Science Foundations",
    shortDescription:
      "Understand the essential concepts behind computers, programming, algorithms, systems, and software development.",

    description:
      "A foundation course designed to strengthen computer science concepts for university students and aspiring software developers.",

    pathSlug: "computer-science-foundations",
    category: "Computer Science",

    level: "Beginner",
    status: "active",
    featured: true,
    format: "Course",

    instructor: "Yaseen Baloch",

    duration: "6–8 weeks",
    lessonsCount: 24,

    skills: [
      "Computer Science",
      "Computational Thinking",
      "Algorithms",
      "Data Structures",
      "Computer Systems",
    ],

    topics: [
      "Computer Fundamentals",
      "Types of Computers",
      "Computer Hardware",
      "CPU and Memory",
      "Operating Systems",
      "Programming Concepts",
      "Algorithms",
      "Data Structures",
      "Databases",
      "Computer Networks",
      "Software Engineering",
    ],

    outcomes: [
      "Understand core computer science concepts",
      "Explain how computer systems work",
      "Develop computational thinking",
      "Understand basic algorithms",
      "Build stronger programming foundations",
      "Prepare for advanced technical study",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    href: "/learn/computer-science",
  },

  /* =========================================================
     AI
  ========================================================= */

  {
    slug: "ai-and-automation-fundamentals",
    title: "AI & Automation Fundamentals",
    shortDescription:
      "Explore practical AI concepts, modern AI tools, APIs, and automation workflows.",

    description:
      "An introductory practical course covering generative AI, prompting, AI tools, APIs, automation concepts, and AI-assisted development.",

    pathSlug: "ai-and-automation",
    category: "Artificial Intelligence",

    level: "Intermediate",
    status: "planned",
    featured: true,
    format: "Practical",

    instructor: "Yaseen Baloch",

    duration: "6–8 weeks",
    lessonsCount: 20,

    skills: [
      "Artificial Intelligence",
      "Prompt Engineering",
      "AI Tools",
      "APIs",
      "Automation",
    ],

    topics: [
      "AI Fundamentals",
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "AI Tools",
      "AI APIs",
      "Python for AI Workflows",
      "Automation",
      "Workflow Design",
      "AI-Assisted Development",
    ],

    outcomes: [
      "Understand practical AI concepts",
      "Use modern AI tools effectively",
      "Design useful prompts",
      "Work with AI APIs",
      "Create automation workflows",
      "Build practical AI-assisted projects",
    ],

    prerequisites: [
      "Basic programming knowledge",
      "Basic Python familiarity is recommended",
    ],

    href: "/learn/ai",
  },

  /* =========================================================
     CAREER & FREELANCING
  ========================================================= */

  {
    slug: "freelancing-and-remote-work",
    title: "Freelancing & Remote Work",
    shortDescription:
      "Learn how to present your skills, build a professional portfolio, communicate with clients, and work online.",

    description:
      "A practical course covering freelancing fundamentals, service positioning, portfolio development, client communication, proposals, project workflows, and professional remote work.",

    pathSlug: "freelancing-and-remote-work",
    category: "Career & Freelancing",

    level: "Beginner",
    status: "planned",
    featured: false,
    format: "Practical",

    instructor: "Yaseen Baloch",

    duration: "4–6 weeks",
    lessonsCount: 18,

    skills: [
      "Freelancing",
      "Communication",
      "Personal Branding",
      "Portfolio Building",
      "Client Management",
      "Remote Work",
    ],

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

    outcomes: [
      "Understand how freelancing works",
      "Turn skills into clear services",
      "Build a professional portfolio",
      "Present your work professionally",
      "Communicate with potential clients",
      "Understand freelance project workflows",
    ],

    prerequisites: [
      "Basic digital skills",
      "A skill or service you want to develop",
    ],

    href: "/learn/freelancing",
  },
] as const satisfies readonly Course[];

export type CourseSlug = (typeof courses)[number]["slug"];
