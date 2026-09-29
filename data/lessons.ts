export type LessonType =
  | "Theory"
  | "Practical"
  | "Coding"
  | "Project";

export type LessonStatus =
  | "active"
  | "planned"
  | "coming-soon";

export type Lesson = {
  slug: string;
  courseSlug: string;

  title: string;
  shortDescription: string;
  description: string;

  order: number;

  type: LessonType;
  status: LessonStatus;

  duration: string;

  featured: boolean;

  objectives: readonly string[];

  topics: readonly string[];

  prerequisites?: readonly string[];

  href: string;
};

export const lessons = [
  // =========================================================
  // PYTHON PROGRAMMING FUNDAMENTALS
  // =========================================================

  {
    slug: "python-introduction",
    courseSlug: "python-programming-fundamentals",

    title: "Introduction to Python",
    shortDescription:
      "Understand what Python is, where it is used, and how Python programs are structured.",

    description:
      "Start your Python journey by understanding Python, its common use cases, the Python interpreter, basic program structure, and the workflow used to write and run Python code.",

    order: 1,

    type: "Theory",
    status: "active",

    duration: "25 min",

    featured: true,

    objectives: [
      "Understand what Python is",
      "Identify common Python use cases",
      "Understand the basic Python development workflow",
      "Write and run a simple Python program",
    ],

    topics: [
      "What is Python?",
      "Why Python is popular",
      "Python use cases",
      "Python interpreter",
      "Writing your first Python program",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    href: "/learn/python-programming-fundamentals/python-introduction",
  },

  {
    slug: "python-variables-data-types",
    courseSlug: "python-programming-fundamentals",

    title: "Variables and Data Types",
    shortDescription:
      "Learn how Python stores information using variables and different data types.",

    description:
      "Understand variables, values, naming conventions, and Python's fundamental data types through practical examples.",

    order: 2,

    type: "Coding",
    status: "active",

    duration: "35 min",

    featured: true,

    objectives: [
      "Create and use variables",
      "Understand common Python data types",
      "Use meaningful variable names",
      "Inspect values using Python code",
    ],

    topics: [
      "Variables",
      "Integers",
      "Floats",
      "Strings",
      "Booleans",
      "Type checking",
    ],

    href: "/learn/python-programming-fundamentals/python-variables-data-types",
  },

  {
    slug: "python-input-output",
    courseSlug: "python-programming-fundamentals",

    title: "Input and Output",
    shortDescription:
      "Learn how Python programs receive user input and display useful output.",

    description:
      "Build interactive Python programs using input and output operations, string formatting, and basic data conversion.",

    order: 3,

    type: "Coding",
    status: "active",

    duration: "30 min",

    featured: false,

    objectives: [
      "Use the input function",
      "Display information using print",
      "Convert user input into different data types",
      "Create simple interactive programs",
    ],

    topics: [
      "print()",
      "input()",
      "String formatting",
      "Type conversion",
      "Interactive programs",
    ],

    href: "/learn/python-programming-fundamentals/python-input-output",
  },

  {
    slug: "python-operators",
    courseSlug: "python-programming-fundamentals",

    title: "Operators in Python",
    shortDescription:
      "Understand arithmetic, comparison, assignment, and logical operators.",

    description:
      "Learn how Python operators work and how they are used to perform calculations, comparisons, assignments, and logical decisions.",

    order: 4,

    type: "Coding",
    status: "planned",

    duration: "35 min",

    featured: false,

    objectives: [
      "Understand arithmetic operators",
      "Use comparison operators",
      "Understand logical operators",
      "Use assignment operators",
    ],

    topics: [
      "Arithmetic operators",
      "Comparison operators",
      "Logical operators",
      "Assignment operators",
      "Operator precedence",
    ],

    href: "/learn/python-programming-fundamentals/python-operators",
  },

  {
    slug: "python-conditions",
    courseSlug: "python-programming-fundamentals",

    title: "Conditional Statements",
    shortDescription:
      "Learn how programs make decisions using if, elif, and else.",

    description:
      "Understand conditional logic and use if, elif, and else statements to control the behavior of Python programs.",

    order: 5,

    type: "Coding",
    status: "planned",

    duration: "40 min",

    featured: false,

    objectives: [
      "Understand conditional logic",
      "Use if statements",
      "Use elif and else",
      "Build decision-based programs",
    ],

    topics: [
      "if statement",
      "elif",
      "else",
      "Nested conditions",
      "Logical conditions",
    ],

    href: "/learn/python-programming-fundamentals/python-conditions",
  },

  {
    slug: "python-loops",
    courseSlug: "python-programming-fundamentals",

    title: "Loops and Repetition",
    shortDescription:
      "Learn how to repeat tasks efficiently using for and while loops.",

    description:
      "Explore Python loops and learn how repetition can be used to solve programming problems efficiently.",

    order: 6,

    type: "Coding",
    status: "planned",

    duration: "45 min",

    featured: false,

    objectives: [
      "Understand repetition in programming",
      "Use for loops",
      "Use while loops",
      "Control loop execution",
    ],

    topics: [
      "for loops",
      "while loops",
      "range()",
      "break",
      "continue",
    ],

    href: "/learn/python-programming-fundamentals/python-loops",
  },

  // =========================================================
  // C++ PROGRAMMING FUNDAMENTALS
  // =========================================================

  {
    slug: "cpp-introduction",
    courseSlug: "cpp-programming-fundamentals",

    title: "Introduction to C++",
    shortDescription:
      "Understand C++, its role in programming, and the structure of a basic C++ program.",

    description:
      "Begin C++ programming by learning what C++ is, where it is used, how a C++ program is structured, and how source code is compiled and executed.",

    order: 1,

    type: "Theory",
    status: "active",

    duration: "30 min",

    featured: true,

    objectives: [
      "Understand what C++ is",
      "Identify common C++ use cases",
      "Understand basic C++ program structure",
      "Compile and run a simple C++ program",
    ],

    topics: [
      "What is C++?",
      "C++ use cases",
      "Source code",
      "Compiler",
      "Basic program structure",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    href: "/learn/cpp-programming-fundamentals/cpp-introduction",
  },

  {
    slug: "cpp-variables-data-types",
    courseSlug: "cpp-programming-fundamentals",

    title: "Variables and Data Types in C++",
    shortDescription:
      "Learn how C++ stores and works with different types of data.",

    description:
      "Understand variables, constants, primitive data types, naming conventions, and basic type usage in C++.",

    order: 2,

    type: "Coding",
    status: "active",

    duration: "40 min",

    featured: true,

    objectives: [
      "Create variables in C++",
      "Understand common data types",
      "Use constants",
      "Choose appropriate data types",
    ],

    topics: [
      "int",
      "float",
      "double",
      "char",
      "bool",
      "Constants",
    ],

    href: "/learn/cpp-programming-fundamentals/cpp-variables-data-types",
  },

  {
    slug: "cpp-input-output",
    courseSlug: "cpp-programming-fundamentals",

    title: "Input and Output in C++",
    shortDescription:
      "Learn how to receive user input and display output using C++ streams.",

    description:
      "Build interactive C++ programs using standard input and output streams, including cin and cout.",

    order: 3,

    type: "Coding",
    status: "planned",

    duration: "35 min",

    featured: false,

    objectives: [
      "Use cout for output",
      "Use cin for input",
      "Understand basic stream operations",
      "Build interactive programs",
    ],

    topics: [
      "cout",
      "cin",
      "Input values",
      "Output formatting",
      "Interactive programs",
    ],

    href: "/learn/cpp-programming-fundamentals/cpp-input-output",
  },

  // =========================================================
  // HTML & CSS FUNDAMENTALS
  // =========================================================

  {
    slug: "html-introduction",
    courseSlug: "html-and-css-fundamentals",

    title: "Introduction to HTML",
    shortDescription:
      "Understand how HTML structures the content of modern websites.",

    description:
      "Learn the purpose of HTML, document structure, elements, tags, attributes, and the role of semantic markup.",

    order: 1,

    type: "Theory",
    status: "active",

    duration: "30 min",

    featured: true,

    objectives: [
      "Understand the role of HTML",
      "Create a basic HTML document",
      "Understand elements and attributes",
      "Use semantic structure",
    ],

    topics: [
      "HTML",
      "Elements",
      "Tags",
      "Attributes",
      "Document structure",
      "Semantic HTML",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Basic familiarity with web browsers",
    ],

    href: "/learn/html-and-css-fundamentals/html-introduction",
  },

  {
    slug: "html-links-images",
    courseSlug: "html-and-css-fundamentals",

    title: "Links and Images",
    shortDescription:
      "Learn how to connect pages and display images in HTML documents.",

    description:
      "Build richer HTML pages by working with links, images, alternative text, and basic navigation structures.",

    order: 2,

    type: "Practical",
    status: "active",

    duration: "35 min",

    featured: true,

    objectives: [
      "Create links",
      "Add images to webpages",
      "Use meaningful alternative text",
      "Build basic page navigation",
    ],

    topics: [
      "Anchor element",
      "href",
      "Images",
      "alt attribute",
      "Navigation",
    ],

    href: "/learn/html-and-css-fundamentals/html-links-images",
  },

  {
    slug: "css-fundamentals",
    courseSlug: "html-and-css-fundamentals",

    title: "CSS Fundamentals",
    shortDescription:
      "Learn how CSS controls the appearance and visual structure of webpages.",

    description:
      "Understand selectors, properties, values, the cascade, colors, spacing, typography, and the foundations of professional webpage styling.",

    order: 3,

    type: "Coding",
    status: "planned",

    duration: "45 min",

    featured: false,

    objectives: [
      "Understand the purpose of CSS",
      "Write CSS rules",
      "Use selectors",
      "Control colors and spacing",
      "Style webpage content",
    ],

    topics: [
      "CSS syntax",
      "Selectors",
      "Properties",
      "Values",
      "Colors",
      "Spacing",
      "Typography",
    ],

    href: "/learn/html-and-css-fundamentals/css-fundamentals",
  },

  // =========================================================
  // JAVASCRIPT
  // =========================================================

  {
    slug: "javascript-introduction",
    courseSlug: "javascript-for-web-development",

    title: "Introduction to JavaScript",
    shortDescription:
      "Understand JavaScript and its role in creating interactive web experiences.",

    description:
      "Learn what JavaScript is, how it works in the browser, and how it adds logic and interaction to webpages.",

    order: 1,

    type: "Theory",
    status: "active",

    duration: "30 min",

    featured: true,

    objectives: [
      "Understand the role of JavaScript",
      "Understand browser-based JavaScript",
      "Write basic JavaScript",
      "Connect JavaScript with HTML",
    ],

    topics: [
      "What is JavaScript?",
      "JavaScript in browsers",
      "Scripts",
      "Console",
      "Basic interaction",
    ],

    prerequisites: [
      "Basic HTML knowledge",
      "Basic CSS knowledge",
      "Basic programming concepts",
    ],

    href: "/learn/javascript-for-web-development/javascript-introduction",
  },

  {
    slug: "javascript-variables-functions",
    courseSlug: "javascript-for-web-development",

    title: "Variables and Functions",
    shortDescription:
      "Learn how JavaScript stores information and organizes reusable logic.",

    description:
      "Understand variables, constants, data types, functions, parameters, return values, and reusable programming logic in JavaScript.",

    order: 2,

    type: "Coding",
    status: "active",

    duration: "45 min",

    featured: true,

    objectives: [
      "Create variables and constants",
      "Understand basic JavaScript data types",
      "Create functions",
      "Use parameters and return values",
    ],

    topics: [
      "let",
      "const",
      "Data types",
      "Functions",
      "Parameters",
      "Return values",
    ],

    href: "/learn/javascript-for-web-development/javascript-variables-functions",
  },

  {
    slug: "javascript-dom",
    courseSlug: "javascript-for-web-development",

    title: "DOM Manipulation",
    shortDescription:
      "Learn how JavaScript can read and change webpage content dynamically.",

    description:
      "Understand the Document Object Model and use JavaScript to select, modify, create, and interact with HTML elements.",

    order: 3,

    type: "Practical",
    status: "planned",

    duration: "50 min",

    featured: false,

    objectives: [
      "Understand the DOM",
      "Select HTML elements",
      "Modify webpage content",
      "Change styles and attributes",
    ],

    topics: [
      "DOM",
      "Selectors",
      "querySelector",
      "Content manipulation",
      "Attributes",
      "Events",
    ],

    href: "/learn/javascript-for-web-development/javascript-dom",
  },

  // =========================================================
  // COMPUTER SCIENCE FOUNDATIONS
  // =========================================================

  {
    slug: "computer-fundamentals",
    courseSlug: "computer-science-foundations",

    title: "Computer Fundamentals",
    shortDescription:
      "Build a clear understanding of computers, their components, and how they process information.",

    description:
      "Learn the fundamental concepts of computing, including input, processing, output, storage, hardware, software, and basic computer organization.",

    order: 1,

    type: "Theory",
    status: "active",

    duration: "30 min",

    featured: true,

    objectives: [
      "Understand what a computer is",
      "Identify major computer components",
      "Understand input and output",
      "Differentiate hardware and software",
    ],

    topics: [
      "Computer basics",
      "Input",
      "Processing",
      "Output",
      "Storage",
      "Hardware",
      "Software",
    ],

    prerequisites: [
      "Basic computer knowledge",
    ],

    href: "/learn/computer-science-foundations/computer-fundamentals",
  },

  {
    slug: "cpu-and-memory",
    courseSlug: "computer-science-foundations",

    title: "CPU and Memory",
    shortDescription:
      "Understand how the CPU and memory work together to execute programs.",

    description:
      "Explore the basic role of the processor, registers, RAM, cache, and memory hierarchy in computer systems.",

    order: 2,

    type: "Theory",
    status: "active",

    duration: "40 min",

    featured: true,

    objectives: [
      "Understand the role of the CPU",
      "Understand basic memory concepts",
      "Differentiate RAM and storage",
      "Understand the relationship between CPU and memory",
    ],

    topics: [
      "CPU",
      "ALU",
      "Control Unit",
      "Registers",
      "RAM",
      "Cache",
      "Storage",
    ],

    href: "/learn/computer-science-foundations/cpu-and-memory",
  },

  {
    slug: "algorithms-introduction",
    courseSlug: "computer-science-foundations",

    title: "Introduction to Algorithms",
    shortDescription:
      "Learn how algorithms provide systematic ways to solve computational problems.",

    description:
      "Understand what algorithms are, how problems can be broken into steps, and why algorithmic thinking is important in software development.",

    order: 3,

    type: "Theory",
    status: "planned",

    duration: "40 min",

    featured: false,

    objectives: [
      "Define an algorithm",
      "Break problems into steps",
      "Understand algorithmic thinking",
      "Compare simple solution approaches",
    ],

    topics: [
      "Algorithms",
      "Problem solving",
      "Steps",
      "Pseudocode",
      "Algorithmic thinking",
    ],

    href: "/learn/computer-science-foundations/algorithms-introduction",
  },
] as const satisfies readonly Lesson[];

export type LessonSlug = (typeof lessons)[number]["slug"];
