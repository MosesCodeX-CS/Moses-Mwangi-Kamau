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
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["Python", "Django", "PostgreSQL", "JavaScript"],
    featured: true
  },
  {
    id: 3,
    title: "Kenyan Phishing Detector",
    description: "Web security tool that detects and warns users about phishing websites targeting Kenyan users. Uses pattern recognition and machine learning techniques.",
    imageUrl: "https://images.unsplash.com/photo-1563206766-5b64e2b84a71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["Python", "BeautifulSoup", "JavaScript", "Security"],
    featured: false
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Complete e-commerce solution featuring product catalog, shopping cart, order management, and payment integration for online retail businesses.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    projectUrl: "#",
    repoUrl: "#",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
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
