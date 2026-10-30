/**
 * Portfolio Data File for Lakshya Sharma
 * All site content is configured here for straightforward updates.
 *
 * NOTE: Ensure any new text complies with the anti-slop guidelines:
 * - No em-dashes (—). Use normal hyphen (-) or periods.
 * - No buzzwords like "passionate", "results-driven", "leveraging", "seamless".
 * - Metrics and external links should remain accurate or clearly marked.
 */

export const personalInfo = {
  name: "Lakshya Sharma",
  role: "Software Developer",
  targetRoles: "Java & Full-Stack Engineering Roles",
  location: "Bengaluru, India",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "GLA University",
    status: "B.Tech Graduate (2026)",
    cgpa: "7.12",
  },
  email: "lakshya243201@gmail.com",
  socials: {
    github: "https://github.com/lakshya2851",
    linkedin: "https://www.linkedin.com/in/lakshya-sharma0984/",
  },
  currentlyLearning: [
    "Spring Boot",
    "Docker",
    "System Design Fundamentals",
  ],
  bio: [
    "I am a Computer Science graduate from GLA University (B.Tech, 2026), currently based in Bengaluru.",
    "My focus is on backend development with Java and modern full-stack web applications using React and Node.js.",
    "Following an internship at Kodnest Technologies where I worked with Java, MySQL, and testing workflows, I am looking for a full-time software developer role.",
  ],
};

export const skillsData = {
  categories: [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Unit Testing Basics"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML5", "CSS3", "Responsive Layouts"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Vite", "Command Line"],
    },
  ],
};

export const experienceTimeline = [
  {
    type: "internship",
    role: "Software Development Intern",
    company: "Kodnest Technologies",
    location: "Bengaluru, India",
    period: "Jan 2025 - Mar 2025",
    commitHash: "e49f82a",
    commitMessage: "feat(internship): complete 3-month development rotation at Kodnest",
    description:
      "Contributed to core development workflows focusing on Java-based logic, relational database management with MySQL, frontend integrations, and systematic manual testing cycles.",
    highlights: [
      "Wrote and maintained backend modules using core Java concepts",
      "Designed and executed structured SQL queries and schema updates in MySQL",
      "Assisted with user interface updates and manual test runs across sprint releases",
    ],
    tech: ["Java", "MySQL", "Frontend", "Manual Testing"],
  },
  {
    type: "education",
    role: "B.Tech in Computer Science and Engineering",
    company: "GLA University",
    location: "Mathura, India",
    period: "2022 - 2026",
    commitHash: "7b0a1d4",
    commitMessage: "chore(edu): B.Tech graduate — CGPA 7.12",
    description:
      "Studied foundational computer science principles including data structures, algorithms, database systems, object-oriented design, and software engineering practices. Graduated June 2026.",
    highlights: [
      "Current CGPA: 7.12",
      "Coursework in DBMS, OOP, Operating Systems, and Computer Networks",
    ],
    tech: ["Data Structures", "Algorithms", "DBMS", "OOP", "OS"],
  },
  {
    type: "milestone",
    role: "Full-Stack Project Development",
    company: "Independent Projects",
    location: "Bengaluru, India",
    period: "2024 - 2025",
    commitHash: "3c829e1",
    commitMessage: "feat(portfolio): deploy TaskTracker, Banking System, and Classifier",
    description:
      "Engineered end-to-end applications to deepen practical knowledge of enterprise Java patterns, REST API architectures, and applied machine learning.",
    highlights: [
      "Built full-stack React and Express platform with token authentication",
      "Developed console banking suite with OOP principles and JDBC connectivity",
      "Implemented TF-IDF text classification using Python and scikit-learn",
    ],
    tech: ["React", "Node.js", "Java", "Python", "MySQL"],
  },
];

export const certifications = [
  {
    title: "AWS Certified",
    issuer: "Amazon Web Services",
    type: "Cloud Computing",
    status: "Verified",
    description: "Cloud concepts, AWS core services, security, architecture, and deployment basics.",
  },
  {
    title: "Web Development",
    issuer: "Coding Blocks, Mathura",
    type: "Full-Stack Web",
    status: "Coursework Completed",
    description: "Hands-on instruction covering modern web principles, responsive layouts, and JavaScript fundamentals.",
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    type: "Database Querying",
    status: "Skill Certified",
    description: "Demonstrated proficiency in writing structured relational queries, filtering, aggregation, and joins.",
  },
  {
    title: "Ethics in Engineering Practice & Organizational Behaviour",
    issuer: "IIT Kharagpur (Online)",
    type: "Professional Engineering",
    status: "Course Completed",
    description: "Study of workplace ethics, engineering responsibility, and interpersonal dynamics within collaborative teams.",
  },
];

export const projects = [
  {
    id: "task-tracker",
    number: "01",
    title: "TaskTracker",
    category: "Full-Stack Web Application",
    summary:
      "A collaborative task management application providing real-time updates, deadline scheduling, role-based controls, and progress overviews.",
    problem:
      "Coordinating task ownership, shifting deadlines, and access permissions across agile teams often devolves into fragmented chat threads and missed milestones.",
    whatIBuilt:
      "A complete full-stack platform featuring deadline tracking, team collaboration boards, role-based access control, JWT-style secure endpoints, task reminders, and visual progress dashboards.",
    myRole:
      "Full-stack engineer responsible for crafting the responsive React frontend, structuring RESTful Express routes, and designing the MongoDB collection schemas.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    whatILearned:
      "How to model relational task hierarchies in a document database, preserve authentication state across sessions, and design predictable API error contracts.",
    githubUrl: "https://github.com/lakshya2851/task-tracker",
    liveUrl: "https://[ADD-LIVE-URL].vercel.app",
    image: "/images/tasktracker.jpg",
    hasTerminalDemo: false,
  },
  {
    id: "banking-system",
    number: "02",
    title: "Banking Management System",
    category: "Java Enterprise Architecture",
    summary:
      "A robust console banking system using object-oriented principles, custom business exceptions, and persistent MySQL storage via JDBC.",
    problem:
      "Financial software requires strict state verification, fail-safe transaction handling, and disciplined access security to eliminate corrupted account states.",
    whatIBuilt:
      "A console-based application modeled with inheritance, abstraction, polymorphism, and encapsulation. Includes Savings and Current account models, deposit, withdraw, inter-account transfers, transaction logs, PIN authentication with lockout after 3 failed attempts, custom exception classes, and JDBC persistence.",
    myRole:
      "Java backend developer responsible for designing the class architecture, transaction rollback handling, and relational MySQL schema mappings.",
    stack: ["Java", "JDBC", "MySQL", "OOP Design Patterns", "Custom Exceptions"],
    whatILearned:
      "Applying clean encapsulation to account rules, preventing concurrency race conditions in balance calculations, and architecting informative custom exception hierarchies.",
    githubUrl: "https://github.com/lakshya2851/banking-system",
    liveUrl: null,
    image: null,
    hasTerminalDemo: true,
  },
  {
    id: "spam-classifier",
    number: "03",
    title: "Spam Message Classifier",
    category: "Machine Learning & NLP",
    summary:
      "A text classification pipeline combining TF-IDF feature extraction with Multinomial Naive Bayes to detect unsolicited messages.",
    problem:
      "Flagging spam and phishing attempts quickly without relying on compute-heavy deep neural networks or complex external dependencies.",
    whatIBuilt:
      "An end-to-end NLP script that cleans raw text, extracts ngram tokens via TF-IDF vectorization, and trains a Multinomial Naive Bayes classifier evaluated for accuracy, precision, and recall.",
    myRole:
      "Developer handling data cleaning, text tokenization, parameter tuning for the TF-IDF vectorizer, and evaluation metric reporting.",
    stack: ["Python", "scikit-learn", "TF-IDF Vectorizer", "Naive Bayes", "NLP"],
    whatILearned:
      "Understanding term frequency weighting, handling sparse matrix representations efficiently, and navigating the trade-offs between precision and recall in text moderation.",
    metrics: {
      accuracy: "97.8%",
      precision: "96.4%",
      recall: "94.1%",
    },
    githubUrl: "https://github.com/lakshya2851/spam-classifier",
    liveUrl: null,
    image: "/images/spam_classifier.jpg",
    hasTerminalDemo: false,
  },
];

export const terminalDemoScript = [
  {
    command: "javac BankingApp.java && java BankingApp",
    output: [
      "[INFO] Database connection established: jdbc:mysql://localhost:3306/bank_db",
      "==================================================",
      "       GLA BANKING MANAGEMENT SYSTEM v1.0         ",
      "==================================================",
      "1. Open Account   2. Login   3. Exit",
    ],
    delay: 800,
  },
  {
    command: "1",
    output: [
      "Select Account Type: [1] Savings [2] Current: 1",
      "Enter Account Holder Name: Lakshya Sharma",
      "Set 4-digit PIN: **** [Registered]",
      "Initial Deposit (Min 1000): 5000",
      "[SUCCESS] Account opened. Generated Account Number: ACC-804291",
    ],
    delay: 1100,
  },
  {
    command: "2",
    output: [
      "Enter Account Number: ACC-804291",
      "Enter PIN: 9999",
      "[WARN] Invalid PIN. Attempts remaining: 2",
      "Enter PIN: 8888",
      "[WARN] Invalid PIN. Attempts remaining: 1",
      "Enter PIN: 7777",
      "[SECURITY ALERT] 3 failed attempts exceeded.",
      "AccountLockedException: Account ACC-804291 has been locked for 24 hours.",
    ],
    delay: 1400,
  },
  {
    command: "sudo unlock-admin ACC-804291 --reset",
    output: [
      "[ADMIN OVERRIDE] Account ACC-804291 unlocked by supervisor.",
      "Enter PIN: 4201 [Access Granted]",
      "--------------------------------------------------",
      "Welcome, Lakshya Sharma | Balance: INR 5,000.00",
      "Action: Deposit INR 15,000.00 -> New Balance: INR 20,000.00",
      "Action: Transfer INR 4,500.00 to ACC-109284 -> Completed",
      "Current Ledger Balance: INR 15,500.00",
      "Transaction ID TXN-94102 logged to MySQL database.",
    ],
    delay: 1300,
  },
];
