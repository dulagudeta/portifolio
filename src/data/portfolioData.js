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
    "I am a full-stack software engineer dedicated to designing, building, and deploying resilient web applications and robust digital platforms.",
    "My engineering philosophy is rooted in end-to-end ownership, from conceptualizing system architecture and clean data models to delivering polished, intuitive user interfaces.",
    "I focus on writing clean, maintainable code, optimizing system performance, and building scalable software that solves real-world challenges."
  ],
  contacts: {
    email: "dulagudeta22@gmail.com",
    phone: "+251 900 000 000",
    github: "https://github.com/dulagudeta",
    githubUsername: "dulagudeta",
    linkedin: "https://linkedin.com/in/dulagudeta22",
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
    liveUrl: "https://medischedule.matinsun.com/",
    githubUrl: null,
    featured: true
  },
  {
    id: "yannet-hospital",
    title: "Yannet General Hospital Platform",
    tagline: "Patient Portal, Clinical Admin & AI Diagnostic Triage Bot",
    categories: ["web", "systems",],
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
    liveUrl: "https://yannet.vercel.app/",
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
    githubUrl: "https://github.com/dulagudeta/komii-backend-api",
    featured: false
  },
  {
    id: "LNSS",
    title: "Local-Network-Security-Scanner-LNSS",
    tagline: "A defensive cybersecurity tool that scans a local network ].",
    categories: ["systems"],
    description:
      "A defensive cybersecurity tool that scans a local network to identify connected devices, exposed services, and potential security risks. built with python",
    highlights: [
      "Detects Which devices are connected to ypur network?",
      "identify What services and ports are exposed?",
      "Tell insecure or risky configurations?",
      "Nmap used"
    ],

    techStack: ["Python", "CLI", "NMap"],
    status: "Open Source",
    statusType: "open-source",
    codeAccess: "public",
    liveUrl: null,
    githubUrl: "https://github.com/dulagudeta/Local-Network-Security-Scanner-LNSS-",
    featured: false
  },
  {
    id: "Telegram-Auto-Reply-Bot",
    title: "Telegram-Auto-Reply-Bot",
    tagline: "A simple Python bot that automatically replies to messages when you're offline",
    categories: ["bots", "systems"],
    description:
      "A simple bot that replies to messages when you're offline Because sometimes you need a digital secretary",
    highlights: [
      "Automatically reply to private messages",
      "Let people know you'll get back to them later",
      "Forward urgent messages to you immediately",
      "Pretend to be typing (like a real person would)"
    ],
    architecture: {
      database: "Redis for fast session state tracking and SQLite / PostgreSQL for persistent command logs.",
      backend: "Python  async event loop utilizing Telegram Bot API with webhook secret validation.",
      frontend: "Native Telegram client rich UI components (Inline Keyboards, Dynamic WebApp integration)."
    },
    techStack: ["Python", "Telegram Bot API", "Webhooks", "Redis",],
    status: "Active Bot",
    statusType: "live",
    codeAccess: "public",
    liveUrl: null,
    githubUrl: "https://github.com/dulagudeta/Telegram-Auto-Reply-Bot",
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
      "Delivering custom web platforms end to end for hospitality, healthcare, and commercial businesses. Specializing in payment gateways, real-time booking engines, and responsive UIs."
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

export const testimonialsData = [
  {
    id: "testimonial-1",
    name: "Ayana Besha",
    role: "CTO",
    company: "Yanol Tech",
    content:
      "Dula is a high-ownership engineer. He architected our full-stack solutions and payment integrations with exceptional code quality and speed.",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    initials: "AB"
  },
  {
    id: "testimonial-2",
    name: "Debela Fufa",
    role: "Client",
    company: "Independent Project",
    content:
      "Dula delivered our digital platform ahead of schedule with seamless payment integration. Highly dependable, skilled, and communicative throughout.",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #059669, #10b981)",
    initials: "DF"
  },
  {
    id: "testimonial-3",
    name: "Ebisa Berhanu",
    role: "Software Engineer",
    company: "Jimma Institute of Technology (JIT)",
    content:
      "Collaborating with Dula on engineering projects is a breeze. He brings strong backend design, clean architecture, and rapid problem-solving skills.",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    initials: "EB"
  }
];

