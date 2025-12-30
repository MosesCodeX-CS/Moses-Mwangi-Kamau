// Static portfolio data for when API is unavailable (static hosting)

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string | null;
  repoUrl: string | null;
  tags: string[] | null;
  featured: boolean | null;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number | null;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export const staticProjects: Project[] = [
  {
    id: 1,
    title: "WiFi Billing Management System",
    description: "A comprehensive billing and management system for WiFi services. Automated billing calculations, customer management, and real-time usage tracking.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    featured: true
  },
  {
    id: 2,
    title: "Supermarket POS System",
    description: "Full-featured Point of Sale system for retail management. Handles transactions, inventory tracking, sales reports, and customer management with an intuitive interface.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["Python", "Django", "PostgreSQL", "JavaScript"],
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Complete e-commerce solution featuring product catalog, shopping cart, order management, and payment integration for online retail businesses.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    featured: false
  },
  {
    id: 4,
    title: "Chess Analysis Pro",
    description: "Production-grade chess analysis tool: sync Chess.com games, analyze with Stockfish, opening explorer and training workflows.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/Chess-analysis-pro",
    tags: ["Python", "Stockfish", "FastAPI", "React"],
    featured: true
  },
  {
    id: 5,
    title: "Kenyan Phishing Detector",
    description: "AI-powered system to detect and explain localized phishing attempts (SMS, WhatsApp, email) targeting Kenyan users with a tailored dataset and model.",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/Kenyan-Phishing-Detector",
    tags: ["Python", "NLP", "Security", "FastAPI"],
    featured: true
  },
  {
    id: 6,
    title: "ShopHub (E-Commerce)",
    description: "Full-featured e-commerce platform with cart, checkout, PayPal and M-PESA integrations and an admin dashboard for product and order management.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/ShopHub",
    tags: ["PHP", "MySQL", "Bootstrap", "Payments"],
    featured: true
  },
  {
    id: 7,
    title: "WiFi Billing System",
    description: "Hotspot billing and management with M-Pesa reconciliation, RouterOS integration, cron reconciliation, and a web admin portal.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "https://wifi-billing-system-alpha.vercel.app",
    repoUrl: "https://github.com/MosesCodeX-CS/wifi-billing-system",
    tags: ["PHP", "MPESA", "RouterOS", "Billing"],
    featured: true
  },
  {
    id: 8,
    title: "Prime Nova",
    description: "Production-ready Next.js website template with App Router, auth, blog system, and deployment-ready configuration for Vercel.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/Prime-Nova",
    tags: ["Next.js", "TypeScript", "Vercel", "Tailwind"],
    featured: false
  },
  {
    id: 9,
    title: "Portfolio Page",
    description: "A smaller experimental portfolio site and research notes repository used to prototype ideas and design experiments for personal branding.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/Portfolio-page",
    tags: ["JavaScript", "Portfolio", "Design"],
    featured: false
  },
  {
    id: 10,
    title: "Algorithm Visualizer",
    description: "Interactive web application for visualizing sorting algorithms, pathfinding algorithms, and data structures with step-by-step execution controls.",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/Algorithm-Visualizer",
    tags: ["JavaScript", "React", "Algorithms", "Education"],
    featured: false
  },
  {
    id: 11,
    title: "RetailHub POS & E-Commerce",
    description: "Unified retail management platform combining POS and e-commerce. Features inventory management, multi-channel sales, real-time reporting, and seamless online-offline sync.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/RetailHub",
    tags: ["Python", "Django", "React", "E-commerce", "POS"],
    featured: true
  },
  {
    id: 12,
    title: "Task Management System",
    description: "Full-featured project and task management application with team collaboration, kanban boards, deadline tracking, and progress analytics.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "https://github.com/MosesCodeX-CS/Task-Manager",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    featured: false
  }
];

export const staticSkills: Skill[] = [
  { id: 1, name: "PHP", category: "Languages", proficiency: 95 },
  { id: 2, name: "Python", category: "Languages", proficiency: 95 },
  { id: 3, name: "JavaScript", category: "Languages", proficiency: 95 },
  { id: 4, name: "HTML5", category: "Languages", proficiency: 90 },
  { id: 5, name: "CSS3", category: "Languages", proficiency: 90 },
  { id: 6, name: "SQL", category: "Languages", proficiency: 85 },
  { id: 7, name: "TypeScript", category: "Languages", proficiency: 75 },
  { id: 8, name: "Bash Scripting", category: "Languages", proficiency: 70 },
  { id: 9, name: "Django", category: "Backend", proficiency: 90 },
  { id: 10, name: "REST APIs", category: "Backend", proficiency: 85 },
  { id: 11, name: "Bootstrap", category: "Frontend", proficiency: 90 },
  { id: 12, name: "jQuery", category: "Frontend", proficiency: 80 },
  { id: 13, name: "MySQL", category: "Database", proficiency: 90 },
  { id: 14, name: "PostgreSQL", category: "Database", proficiency: 85 },
  { id: 15, name: "Git", category: "Tools", proficiency: 90 },
  { id: 16, name: "GitHub", category: "Tools", proficiency: 90 },
  { id: 17, name: "Docker", category: "Tools", proficiency: 80 },
  { id: 18, name: "Linux", category: "Tools", proficiency: 85 },
  { id: 19, name: "VS Code", category: "Tools", proficiency: 90 },
  { id: 20, name: "Apache", category: "Tools", proficiency: 75 },
  { id: 21, name: "Problem Solving", category: "Professional", proficiency: 95 },
  { id: 22, name: "Project Management", category: "Professional", proficiency: 85 },
  { id: 23, name: "Communication", category: "Professional", proficiency: 90 },
];

export const staticExperiences: Experience[] = [
  {
    id: 1,
    role: "Freelance Software Developer",
    company: "Self-Employed",
    duration: "2023 – Present",
    description: "Full-Stack Development: Designed and developed 5+ web applications from concept to deployment. Created customized solutions for local businesses including WiFi billing systems and POS platforms. Managed complete project lifecycle from requirements gathering to post-deployment support. Advised clients on optimal technology solutions for their business needs. Implemented testing protocols ensuring 95%+ bug-free deployment."
  },
  {
    id: 2,
    role: "ICT Technical Support",
    company: "Kijabe Hospital",
    duration: "January 2025 – April 2025",
    description: "Provided technical support and system maintenance for hospital ICT infrastructure. Resolved network and software issues, ensuring seamless operations. Supported healthcare staff with IT-related challenges and system optimization."
  },
  {
    id: 3,
    role: "Student | Diploma in Internet Communication Technology",
    company: "Nachu Technical and Vocational College",
    duration: "2023 – 2026 (Expected)",
    description: "Pursuing advanced technical education in ICT. Gold Medal winner in ICT Web Development at KATTI National TVET Fairs & Competitions 2025. Silver Medal in ICT Software Solutions for Business. Academic Secretary of Student Council."
  }
];
