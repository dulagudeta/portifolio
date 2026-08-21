export const personalInfo = {
  name: "Dula Gudeta",
  role: "Full-Stack Developer",
  status: "Open to remote work & full-time roles",
  location: "Addis Ababa, Ethiopia",
  timezone: "EAT (UTC+3)",
  workingHours: "09:00 - 19:00 EAT (Overlaps EU & US East mornings)",
  experienceYears: "2+",
  headline: "Full-Stack Developer building robust, production-grade platforms end to end.",
  valueProposition:
    "I build and deploy full-stack platforms end to end, from database architecture and secure APIs to responsive, polished user interfaces.",
  resumeUrl: "/Dula_Gudeta_Resume.pdf",
  bio: [
    "Full-stack developer with hands-on production experience building and deploying live platforms for hospitality and healthcare clients.",
    "Comfortable owning a feature end to end—from system architecture, API design, and database schema to cloud deployment and performance optimization.",
    "Currently shipping software at Yanol Tech while taking on select freelance client work."
  ],
  contacts: {
    email: "dulagudeta22@gmail.com",
    phone: "+251 900 000 000",
    github: "https://github.com/dulagudeta",
    githubUsername: "dulagudeta",
    location: "Addis Ababa, Ethiopia",
  },
  stats: [
    { label: "Experience", value: "2+ Years" },
    { label: "Domain Focus", value: "Hospitality & Healthcare" },
    { label: "Architecture", value: "End-to-End Ownership" },
    { label: "Availability", value: "Immediate / Remote" }
  ]
};

export const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "JavaScript (ES6+)", "HTML5 / CSS3"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "Django REST Framework", "FastAPI", "Python", "RESTful APIs"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ORM / Query Optimization"]
  },
  {
    category: "Payments & Integrations",
    skills: ["Chapa Payment Gateway", "Webhook Handlers", "Authentication (JWT / OAuth)", "Third-Party APIs"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Postman", "Docker", "Linux / Bash", "CI/CD Basics", "Vite"]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web & Platforms" },
  { id: "systems", label: "Systems & APIs" },
  { id: "bots", label: "Bots & Automation" }
];

export const projectsData = [
  {
    id: "noora-resort",
    title: "Noora Resort",
    tagline: "Full-Stack Resort Management & Virtual Experience Platform",
    categories: ["web", "systems"],
    description:
      "Comprehensive resort operations platform featuring room booking, staff management, fully editable CMS, smart QR-code menu with Chapa payment integration and live kitchen order screens, plus an interactive 360-degree virtual tour.",
    highlights: [
      "Hotel & room reservations engine with dynamic availability calendar",
      "Live kitchen display system (KDS) synced with real-time QR ordering",
      "Integrated Chapa payments for instant checkout & settlement",
      "Interactive 360° virtual property tour rendered with Three.js",
      "Role-based staff management and modular content management system"
    ],
    architecture: {
      database: "Normalized MySQL relational schema with index optimization for high-concurrency room reservations and menu catalog lookups.",
      backend: "Node.js / Express REST API with webhook signature validation for Chapa transactions, stateful order queue, and JWT auth.",
      frontend: "Modular React frontend with Three.js equirectangular panorama projection and real-time order status polling."
    },
    techStack: ["React", "Node.js", "Express", "MySQL", "Three.js", "Chapa"],
    status: "Live Production",
    statusType: "live",
    codeAccess: "private",
    company: "Noora Resort",
    liveUrl: "https://nooraresort.com",
    githubUrl: null,
    featured: true
  },
  {
    id: "medischedule",
    title: "MediSchedule",
    tagline: "Hospital Appointment Booking & Subscription Platform",
    categories: ["web", "systems"],
    description:
      "Modern patient booking platform engineered with a polished, fluid React frontend and secure Chapa payment integration handling consultation fees and recurring medical subscriptions.",
    highlights: [
      "Real-time doctor schedule slot booking with automated conflict avoidance",
      "Chapa gateway integration for upfront booking fees & monthly subscriptions",
      "Accessible, responsive patient dashboard with instant confirmation receipts",
      "Automated SMS / email booking reminders and doctor schedule sync"
    ],
    architecture: {
      database: "PostgreSQL with composite indexes on physician availability slots to prevent double-booking anomalies.",
      backend: "Node.js service with idempotent Chapa payment verification and automated email receipt dispatchers.",
      frontend: "Optimized React UI with keyboard navigation, custom date-time pickers, and lightweight state containers."
    },
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Chapa API"],
    status: "Live Production",
    statusType: "live",
    codeAccess: "private",
    company: "Client Production",
    liveUrl: "https://medischedule.example.com",
    githubUrl: null,
    featured: true
  },
  {
    id: "yannet-hospital",
    title: "Yannet General Hospital Platform",
    tagline: "Patient Portal, Clinical Admin & AI Diagnostic Triage Bot",
    categories: ["web", "systems", "bots"],
    description:
      "Enterprise healthcare portal featuring department directories, physician profiles, multi-branch locator, patient appointment scheduling, and an automated symptom-to-department triage bot that guides patients to the correct clinic.",
    highlights: [
      "AI-assisted triage bot routing patients to suitable medical departments based on symptoms",
      "Multi-branch clinic locator with interactive department schedules",
      "Secure document and lab result upload pipeline with patient privacy guards",
      "Protected staff & physician admin dashboard for schedule management"
    ],
    architecture: {
      database: "PostgreSQL structured storage for clinical department hierarchies, doctor schedules, and patient intake logs.",
      backend: "Next.js / Node.js backend with secured file storage endpoints, role-based middleware, and AI inference triage integration.",
      frontend: "Next.js server-rendered pages for medical SEO, instant branch location mapping, and multi-step intake flows."
    },
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AI Triage Engine"],
    status: "Live Production",
    statusType: "live",
    codeAccess: "private",
    company: "Yannet General Hospital",
    liveUrl: "https://yannethospital.example.com",
    githubUrl: null,
    featured: true
  },
  {
    id: "komii-backend",
    title: "Komii Backend API",
    tagline: "Open-Source Community Issue Resolution & Civic Reporting Engine",
    categories: ["systems"],
    description:
      "Robust, open-source RESTful backend for community issue tracking and municipal complaints. Built with Django REST Framework featuring role-based access control, issue status lifecycle management, and clean modular architecture.",
    highlights: [
      "Role-based permission architecture (Citizens, Field Operators, Admins)",
      "Strict data validation, pagination, and filtering endpoints",
      "Automated unit testing suite with comprehensive coverage",
      "Containerized with Docker for seamless development and deployment"
    ],
    architecture: {
      database: "PostgreSQL with spatial indexing considerations and relational integrity across users, departments, and tickets.",
      backend: "Django REST Framework with custom permission classes, token authentication, and Django signals for status transition hooks.",
      frontend: "Decoupled architecture serving standard JSON REST API schema with Swagger / OpenAPI documentation."
    },
    techStack: ["Django", "Django REST Framework", "PostgreSQL", "Docker", "Python"],
    status: "Open Source",
    statusType: "open-source",
    codeAccess: "public",
    liveUrl: null,
    githubUrl: "https://github.com/DulaGudeta/komii-backend-api",
    featured: false
  },
  {
    id: "telegram-order-bot",
    title: "Telegram Commercial Dispatcher Bot",
    tagline: "Automated Commerce & Order Notification Bot Engine",
    categories: ["bots", "systems"],
    description:
      "High-throughput Telegram webhook bot engineered to automate customer inquiries, order dispatch notifications, and real-time inventory alerts for local merchants.",
    highlights: [
      "Asynchronous webhook processing with low-latency response delivery",
      "Interactive inline menus and conversational command parsing",
      "Automated order status dispatchers and merchant channel broadcasts",
      "Robust error handling and session recovery"
    ],
    architecture: {
      database: "Redis for fast session state tracking and SQLite / PostgreSQL for persistent command logs.",
      backend: "Python / Node.js async event loop utilizing Telegram Bot API with webhook secret validation.",
      frontend: "Native Telegram client rich UI components (Inline Keyboards, Dynamic WebApp integration)."
    },
    techStack: ["Python", "Telegram Bot API", "Webhooks", "Redis", "Node.js"],
    status: "Active Bot",
    statusType: "live",
    codeAccess: "public",
    liveUrl: "https://t.me/example_demo_bot",
    githubUrl: "https://github.com/DulaGudeta/telegram-dispatcher-bot",
    featured: false
  }
];

export const experienceData = [
  {
    role: "Full-Stack Developer",
    company: "Yanol Tech",
    period: "Feb 2026 – Present",
    type: "Full-time",
    location: "Addis Ababa, Ethiopia",
    description:
      "Designing, architecting, and deploying full-stack client solutions and internal tools across React, Node.js, and Django. Leading backend API design and integrating local payment infrastructure."
  },
  {
    role: "Backend Developer Intern",
    company: "Debo Engineering",
    period: "Sep 2025 – Feb 2026",
    type: "Internship",
    location: "Addis Ababa, Ethiopia",
    description:
      "Contributed to core backend APIs, database schema modeling, and microservice endpoints. Focused on request optimization, API security, and database indexing."
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent / Client Projects",
    period: "2024 – Present",
    type: "Freelance",
    location: "Remote",
    description:
      "Delivering custom web platforms end to end for hospitality, healthcare, and commercial businesses. Specializing in payment gateways (Chapa), real-time booking engines, and responsive UIs."
  }
];

export const educationData = [
  {
    degree: "BSc in Software Engineering",
    institution: "Jimma University",
    period: "2022 – Present",
    location: "Jimma, Ethiopia",
    notes: "Focus on Distributed Systems, Software Architecture, Database Management, and Algorithms."
  }
];
