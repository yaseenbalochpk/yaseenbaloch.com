export type ArticleBlock =
  | {
      type: "heading";
      level: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: readonly string[];
    }
  | {
      type: "code";
      language: string;
      code: string;
      caption?: string;
    }
  | {
      type: "callout";
      title: string;
      text: string;
      tone?: "info" | "tip" | "warning";
    };

export type ArticleContent = {
  slug: string;
  intro?: string;
  blocks: readonly ArticleBlock[];
};

export const articleContent = [
  {
    slug: "python-programming-foundations",

    intro:
      "Python is one of the most practical programming languages for beginners and developers. This guide introduces the core concepts you need to build a strong Python foundation and move toward real-world programming projects.",

    blocks: [
      {
        type: "heading",
        level: 2,
        text: "What Is Python?",
      },

      {
        type: "paragraph",
        text:
          "Python is a high-level, general-purpose programming language designed to make software development readable, practical, and productive. Its simple syntax makes it approachable for beginners while its ecosystem supports professional software development.",
      },

      {
        type: "paragraph",
        text:
          "Python is widely used in web development, automation, data science, artificial intelligence, scripting, testing, education, and many other areas of technology.",
      },

      {
        type: "callout",
        title: "Key Idea",
        text:
          "Learning Python is not only about memorizing syntax. The real goal is to develop programming logic, problem-solving skills, and the ability to build useful software.",
        tone: "tip",
      },

      {
        type: "heading",
        level: 2,
        text: "Why Learn Python?",
      },

      {
        type: "paragraph",
        text:
          "Python has become a popular choice for learning programming because its syntax is relatively easy to read and its ecosystem contains libraries and frameworks for many different types of projects.",
      },

      {
        type: "list",
        items: [
          "Readable and beginner-friendly syntax",
          "Large ecosystem of libraries and frameworks",
          "Useful for automation and scripting",
          "Widely used in artificial intelligence and data science",
          "Strong support for web development",
          "Useful for rapid prototyping and practical projects",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Where Is Python Used?",
      },

      {
        type: "paragraph",
        text:
          "Python can be used across many areas of software development. Understanding these areas can help learners decide which direction they want to explore after learning the fundamentals.",
      },

      {
        type: "list",
        items: [
          "Web development",
          "Artificial intelligence",
          "Machine learning",
          "Data science",
          "Automation",
          "Software development",
          "Testing",
          "Scripting and system utilities",
          "Education and research",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Your First Python Program",
      },

      {
        type: "paragraph",
        text:
          "A first program should be simple. The following example demonstrates how Python can display information on the screen.",
      },

      {
        type: "code",
        language: "python",
        code: 'print("Hello, World!")',
        caption: "A simple Python program",
      },

      {
        type: "paragraph",
        text:
          "The print function sends the provided value to the program output. Although the example is small, it introduces an important programming workflow: write code, run it, observe the result, and improve it.",
      },

      {
        type: "heading",
        level: 2,
        text: "Core Python Concepts",
      },

      {
        type: "paragraph",
        text:
          "After understanding the basic workflow, learners should gradually move through variables, data types, operators, conditions, loops, functions, data structures, files, modules, APIs, and practical projects.",
      },

      {
        type: "list",
        items: [
          "Variables and data types",
          "Input and output",
          "Operators",
          "Conditional statements",
          "Loops",
          "Functions",
          "Lists, tuples, sets, and dictionaries",
          "File handling",
          "Modules and packages",
          "APIs",
          "Object-oriented programming",
          "Practical projects",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Learn by Building",
      },

      {
        type: "paragraph",
        text:
          "Programming becomes much easier to understand when concepts are applied to real problems. After learning a concept, try using it in a small project instead of only reading about it.",
      },

      {
        type: "list",
        items: [
          "Calculator",
          "Number guessing game",
          "To-do application",
          "Expense tracker",
          "Quiz application",
          "File organizer",
          "Simple API-based application",
          "Automation scripts",
        ],
      },

      {
        type: "callout",
        title: "Practical Advice",
        text:
          "Do not try to learn every Python topic at once. Learn one concept, write code, make mistakes, debug it, and then build something small with it.",
        tone: "info",
      },

      {
        type: "heading",
        level: 2,
        text: "What Comes Next?",
      },

      {
        type: "paragraph",
        text:
          "Once the fundamentals are comfortable, you can choose a direction such as web development, automation, artificial intelligence, data science, or general software development.",
      },

      {
        type: "paragraph",
        text:
          "A strong Python foundation gives you the programming skills needed to explore these areas with greater confidence.",
      },
    ],
  },

  {
    slug: "how-modern-web-development-works",

    intro:
      "Modern websites are built from multiple technologies working together. Understanding how these technologies connect gives beginners a clearer picture of how professional web applications are developed.",

    blocks: [
      {
        type: "heading",
        level: 2,
        text: "What Is Web Development?",
      },

      {
        type: "paragraph",
        text:
          "Web development is the process of creating websites and web applications that run through web browsers. It can include frontend interfaces, backend systems, databases, APIs, authentication, deployment, and infrastructure.",
      },

      {
        type: "heading",
        level: 2,
        text: "Frontend Development",
      },

      {
        type: "paragraph",
        text:
          "Frontend development focuses on the part of a website that users see and interact with. HTML provides structure, CSS controls presentation, and JavaScript adds behavior and interaction.",
      },

      {
        type: "list",
        items: [
          "HTML — structure and semantic content",
          "CSS — styling and responsive layouts",
          "JavaScript — logic and interaction",
          "React — component-based user interfaces",
          "Next.js — modern React application development",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Backend Development",
      },

      {
        type: "paragraph",
        text:
          "The backend handles server-side logic and processes requests from applications or users. It can manage authentication, business logic, databases, files, APIs, and other services.",
      },

      {
        type: "heading",
        level: 2,
        text: "How Frontend and Backend Communicate",
      },

      {
        type: "paragraph",
        text:
          "A frontend application can communicate with a backend through HTTP requests and APIs. The backend processes the request and returns data or a response that the frontend can use.",
      },

      {
        type: "code",
        language: "javascript",
        code: `fetch("/api/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });`,
        caption: "A simple API request",
      },

      {
        type: "callout",
        title: "Important Concept",
        text:
          "A modern web application is usually not one single technology. It is a system of connected layers that work together.",
        tone: "tip",
      },

      {
        type: "heading",
        level: 2,
        text: "The Role of Databases",
      },

      {
        type: "paragraph",
        text:
          "Databases store information that applications need to retrieve, update, and manage. Examples include user accounts, products, posts, orders, messages, and application settings.",
      },

      {
        type: "list",
        items: [
          "Relational databases such as PostgreSQL and MySQL",
          "Document databases such as MongoDB",
          "Structured application data",
          "User and authentication data",
          "Business and transactional data",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "APIs",
      },

      {
        type: "paragraph",
        text:
          "An API provides a structured way for different software components to communicate. Web applications commonly use APIs to exchange data between frontend interfaces, backend services, databases, and external platforms.",
      },

      {
        type: "heading",
        level: 2,
        text: "Deployment",
      },

      {
        type: "paragraph",
        text:
          "After development, a website or application needs to be deployed so users can access it online. Deployment can involve hosting, domains, environment variables, databases, security, monitoring, and continuous updates.",
      },

      {
        type: "heading",
        level: 2,
        text: "A Typical Modern Web Stack",
      },

      {
        type: "list",
        items: [
          "HTML and CSS for foundational web structure",
          "JavaScript or TypeScript for application logic",
          "React for user interfaces",
          "Next.js for modern full-stack React applications",
          "Backend APIs for server-side functionality",
          "PostgreSQL or another database for persistent data",
          "Git and GitHub for version control",
          "Cloud hosting for deployment",
        ],
      },

      {
        type: "callout",
        title: "Learning Strategy",
        text:
          "Start with HTML and CSS, learn JavaScript, understand Git and GitHub, then move into React and modern frameworks. Learn backend and databases as your projects become more advanced.",
        tone: "info",
      },
    ],
  },

  {
    slug: "understanding-ai-and-automation",

    intro:
      "Artificial intelligence and automation are increasingly becoming part of modern software workflows. Understanding how they work together can help developers create more useful and efficient digital systems.",

    blocks: [
      {
        type: "heading",
        level: 2,
        text: "What Is Artificial Intelligence?",
      },

      {
        type: "paragraph",
        text:
          "Artificial intelligence is a broad field of computing focused on building systems that can perform tasks that traditionally require forms of human intelligence, such as recognizing patterns, generating content, understanding language, and making predictions.",
      },

      {
        type: "heading",
        level: 2,
        text: "What Is Automation?",
      },

      {
        type: "paragraph",
        text:
          "Automation means designing a workflow so that repetitive tasks can be performed with minimal manual intervention. Automation can involve simple scripts, APIs, scheduled processes, workflow platforms, or complete software systems.",
      },

      {
        type: "heading",
        level: 2,
        text: "AI + Automation",
      },

      {
        type: "paragraph",
        text:
          "AI and automation can be combined when a workflow needs both intelligent processing and automatic execution. For example, an automated system could receive information, use an AI model to classify or summarize it, and then send the result to another service.",
      },

      {
        type: "list",
        items: [
          "Collect information",
          "Process or transform the information",
          "Send relevant data to an AI model",
          "Interpret the AI response",
          "Perform an automated action",
          "Store or report the result",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "AI APIs",
      },

      {
        type: "paragraph",
        text:
          "Developers can integrate AI capabilities into applications through APIs. This allows software applications to send requests to AI services and use the returned results inside their own workflows.",
      },

      {
        type: "code",
        language: "python",
        code: `def process_result(result):
    print(result)

process_result("AI response received")`,
        caption: "A simplified Python workflow example",
      },

      {
        type: "heading",
        level: 2,
        text: "Practical AI Automation Examples",
      },

      {
        type: "list",
        items: [
          "Document summarization",
          "Customer support workflows",
          "Content classification",
          "Email processing",
          "Data extraction",
          "Report generation",
          "Content workflows",
          "Developer productivity tools",
        ],
      },

      {
        type: "callout",
        title: "Important",
        text:
          "AI should be treated as a component of a larger workflow rather than a complete solution by itself. Good automation starts with a clearly defined problem.",
        tone: "warning",
      },

      {
        type: "heading",
        level: 2,
        text: "Where Developers Fit In",
      },

      {
        type: "paragraph",
        text:
          "Developers are responsible for connecting AI capabilities with real applications. This can involve APIs, authentication, data processing, application logic, databases, user interfaces, testing, and monitoring.",
      },

      {
        type: "heading",
        level: 2,
        text: "Getting Started",
      },

      {
        type: "list",
        items: [
          "Learn basic programming concepts",
          "Learn Python or another suitable programming language",
          "Understand APIs and HTTP requests",
          "Experiment with AI tools",
          "Build small automation workflows",
          "Connect AI services to simple applications",
          "Gradually build larger practical projects",
        ],
      },
    ],
  },

  {
    slug: "computer-science-fundamentals",

    intro:
      "Computer science provides the conceptual foundation behind programming and software development. Understanding these fundamentals helps students move beyond writing code and understand how computing systems actually work.",

    blocks: [
      {
        type: "heading",
        level: 2,
        text: "What Is Computer Science?",
      },

      {
        type: "paragraph",
        text:
          "Computer science is the study of computation, algorithms, data, computer systems, software, and the methods used to solve problems using computers.",
      },

      {
        type: "heading",
        level: 2,
        text: "Computer Hardware",
      },

      {
        type: "paragraph",
        text:
          "Hardware refers to the physical components of a computer system. These components work together to receive input, process information, store data, and produce output.",
      },

      {
        type: "list",
        items: [
          "CPU",
          "RAM",
          "Storage",
          "Motherboard",
          "GPU",
          "Input devices",
          "Output devices",
          "Network hardware",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Software",
      },

      {
        type: "paragraph",
        text:
          "Software consists of instructions and programs that tell computer hardware what to do. Operating systems, applications, development tools, and utilities are examples of software.",
      },

      {
        type: "heading",
        level: 2,
        text: "Programming",
      },

      {
        type: "paragraph",
        text:
          "Programming is the process of creating instructions that a computer can execute. Programming languages provide the syntax and structures developers use to express those instructions.",
      },

      {
        type: "code",
        language: "cpp",
        code: `#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}`,
        caption: "A simple C++ program",
      },

      {
        type: "heading",
        level: 2,
        text: "Algorithms",
      },

      {
        type: "paragraph",
        text:
          "An algorithm is a structured sequence of steps used to solve a problem or perform a task. Algorithmic thinking helps developers break complex problems into smaller and more manageable steps.",
      },

      {
        type: "list",
        items: [
          "Understand the problem",
          "Identify the required input",
          "Define the expected output",
          "Break the solution into steps",
          "Implement the solution",
          "Test the result",
          "Improve the solution when necessary",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Data Structures",
      },

      {
        type: "paragraph",
        text:
          "Data structures provide ways to organize and manage information inside programs. Choosing an appropriate data structure can affect how efficiently a program stores and processes data.",
      },

      {
        type: "list",
        items: [
          "Arrays",
          "Lists",
          "Stacks",
          "Queues",
          "Linked lists",
          "Trees",
          "Graphs",
          "Hash tables",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Databases",
      },

      {
        type: "paragraph",
        text:
          "Databases allow applications to store and retrieve structured information. Understanding databases becomes increasingly important as software projects become larger and need persistent data.",
      },

      {
        type: "heading",
        level: 2,
        text: "Why Computer Science Fundamentals Matter",
      },

      {
        type: "paragraph",
        text:
          "Frameworks and programming languages change over time, but core concepts such as algorithms, data structures, computer architecture, operating systems, networking, and databases remain important throughout a developer's career.",
      },

      {
        type: "callout",
        title: "For Students",
        text:
          "Do not focus only on learning programming syntax. Build your understanding of how computers work, how problems are solved, and why software systems are designed in particular ways.",
        tone: "tip",
      },

      {
        type: "heading",
        level: 2,
        text: "A Strong Foundation",
      },

      {
        type: "paragraph",
        text:
          "A strong computer science foundation makes it easier to learn programming languages, frameworks, software engineering practices, artificial intelligence, databases, networking, and other advanced areas of technology.",
      },
    ],
  },
] as const satisfies readonly ArticleContent[];

export type ArticleContentSlug =
  (typeof articleContent)[number]["slug"];

export function getArticleContent(
  slug: string,
): ArticleContent | undefined {
  return articleContent.find(
    (article) => article.slug === slug,
  );
}
