import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { pool } from "./db";
import { api } from "@shared/routes";
import { z } from "zod";
import fs from "fs";
import path from "path";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "WiFi Billing Management System",
      description: "A comprehensive billing and management system for WiFi services. Automated billing calculations, customer management, and real-time usage tracking.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      featured: true
    });
    
    await storage.createProject({
      title: "Supermarket POS System",
      description: "Full-featured Point of Sale system for retail management. Handles transactions, inventory tracking, sales reports, and customer management with an intuitive interface.",
      imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["Python", "Django", "PostgreSQL", "JavaScript"],
      featured: true
    });

    await storage.createProject({
      title: "Kenyan Phishing Detector",
      description: "Web security tool that detects and warns users about phishing websites targeting Kenyan users. Uses pattern recognition and machine learning techniques.",
      imageUrl: "https://images.unsplash.com/photo-1563206766-5b64e2b84a71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["Python", "BeautifulSoup", "JavaScript", "Security"],
      featured: false
    });

    await storage.createProject({
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution featuring product catalog, shopping cart, order management, and payment integration for online retail businesses.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      featured: false
    });
  }

  // Ensure other projects from projects.csv are present in the DB (useful when migrating from CSV)
  const existing = await storage.getProjects();
  const titles = new Set(existing.map(p => p.title));
  console.log('seed: existing project titles ->', Array.from(titles));

  // Ensure the projects sequence is in sync with max(id) to avoid duplicate key errors
  try {
    await pool.query("SELECT setval(pg_get_serial_sequence('projects','id'), (SELECT COALESCE(MAX(id),0) FROM projects));");
    console.log('seed: projects id sequence reset');
  } catch (e) {
    console.warn('seed: failed to reset projects id sequence', e);
  }

  const extraProjects = [
    {
      title: "Chess Analysis Pro",
      description: "Production-grade chess analysis tool: sync Chess.com games, analyze with Stockfish, opening explorer and training workflows.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "https://github.com/MosesCodeX-CS/Chess-analysis-pro",
      tags: ["Python", "Stockfish", "FastAPI", "React"],
      featured: true,
    },
    {
      title: "ShopHub (E-Commerce)",
      description: "Full-featured e-commerce platform with cart, checkout, PayPal and M-PESA integrations and an admin dashboard for product and order management.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "https://github.com/MosesCodeX-CS/ShopHub",
      tags: ["PHP", "MySQL", "Bootstrap", "Payments"],
      featured: true,
    },
    {
      title: "Prime Nova",
      description: "Production-ready Next.js website template with App Router, auth, blog system, and deployment-ready configuration for Vercel.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "https://github.com/MosesCodeX-CS/Prime-Nova",
      tags: ["Next.js", "TypeScript", "Vercel", "Tailwind"],
      featured: false,
    },
    {
      title: "Ecommerce Page",
      description: "A simple but complete PHP/MySQL e-commerce site with product listings, cart, checkout and admin features designed for teaching and demos.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "https://github.com/MosesCodeX-CS/Ecommerce_Page",
      tags: ["PHP", "MySQL", "Bootstrap", "Demo"],
      featured: false,
    },
    {
      title: "Portfolio Page",
      description: "A smaller experimental portfolio site and research notes repository used to prototype ideas and design experiments for personal branding.",
      imageUrl: "https://images.unsplash.com/photo-1520975914249-0c68a47a8686?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "https://github.com/MosesCodeX-CS/Portfolio-page",
      tags: ["JavaScript", "Portfolio", "Design"],
      featured: false,
    },
  ];

  for (const p of extraProjects) {
    if (!titles.has(p.title)) {
      console.log('seed: inserting project ->', p.title);
      // eslint-disable-next-line no-await-in-loop
      await storage.createProject(p as any);
    }
  }

  // Ensure specific projects have more representative images
  try {
    await pool.query(
      `UPDATE projects SET image_url = $1 WHERE title = $2`,
      [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
        'Kenyan Phishing Detector',
      ],
    );

    await pool.query(
      `UPDATE projects SET image_url = $1 WHERE title = $2`,
      ['/profilepic.png', 'Portfolio Page'],
    );

    console.log('seed: updated image URLs for Kenyan Phishing Detector and Portfolio Page');
  } catch (e) {
    console.warn('seed: failed to update project images', e);
  }

  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    const skills = [
      { name: "PHP", category: "Languages", proficiency: 95 },
      { name: "Python", category: "Languages", proficiency: 95 },
      { name: "JavaScript", category: "Languages", proficiency: 95 },
      { name: "HTML5", category: "Languages", proficiency: 90 },
      { name: "CSS3", category: "Languages", proficiency: 90 },
      { name: "SQL", category: "Languages", proficiency: 85 },
      { name: "TypeScript", category: "Languages", proficiency: 75 },
      { name: "Bash Scripting", category: "Languages", proficiency: 70 },
      { name: "Django", category: "Backend", proficiency: 90 },
      { name: "REST APIs", category: "Backend", proficiency: 85 },
      { name: "Bootstrap", category: "Frontend", proficiency: 90 },
      { name: "jQuery", category: "Frontend", proficiency: 80 },
      { name: "MySQL", category: "Database", proficiency: 90 },
      { name: "PostgreSQL", category: "Database", proficiency: 85 },
      { name: "Git", category: "Tools", proficiency: 90 },
      { name: "GitHub", category: "Tools", proficiency: 90 },
      { name: "Docker", category: "Tools", proficiency: 80 },
      { name: "Linux", category: "Tools", proficiency: 85 },
      { name: "VS Code", category: "Tools", proficiency: 90 },
      { name: "Apache", category: "Tools", proficiency: 75 },
      { name: "Problem Solving", category: "Professional", proficiency: 95 },
      { name: "Project Management", category: "Professional", proficiency: 85 },
      { name: "Communication", category: "Professional", proficiency: 90 },
    ];
    for (const skill of skills) {
      await storage.createSkill(skill);
    }
  }

  const existingExp = await storage.getExperiences();
  if (existingExp.length === 0) {
    await storage.createExperience({
      role: "Freelance Software Developer",
      company: "Self-Employed",
      duration: "2023 – Present",
      description: "Full-Stack Development: Designed and developed 5+ web applications from concept to deployment. Created customized solutions for local businesses including WiFi billing systems and POS platforms. Managed complete project lifecycle from requirements gathering to post-deployment support. Advised clients on optimal technology solutions for their business needs. Implemented testing protocols ensuring 95%+ bug-free deployment."
    });
    await storage.createExperience({
      role: "ICT Technical Support",
      company: "Kijabe Hospital",
      duration: "January 2025 – April 2025",
      description: "Provided technical support and system maintenance for hospital ICT infrastructure. Resolved network and software issues, ensuring seamless operations. Supported healthcare staff with IT-related challenges and system optimization."
    });
    await storage.createExperience({
      role: "Student | Diploma in Internet Communication Technology",
      company: "Nachu Technical and Vocational College",
      duration: "2023 – 2026 (Expected)",
      description: "Pursuing advanced technical education in ICT. Gold Medal winner in ICT Web Development at KATTI National TVET Fairs & Competitions 2025. Silver Medal in ICT Software Solutions for Business. Academic Secretary of Student Council."
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed data on startup
  await seedDatabase();

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  });
  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.experiences.list.path, async (req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  // Debug: check CV file presence and path (temporary)
  app.get("/internal/debug/cv", async (_req, res) => {
    const uploadedPdf = path.resolve(process.cwd(), "attached_assets", "Moses_Mwangi_CV.pdf");
    const exists = fs.existsSync(uploadedPdf);
    let size = null;
    try {
      if (exists) size = fs.statSync(uploadedPdf).size;
    } catch (e) {
      // ignore
    }
    res.json({ cwd: process.cwd(), path: uploadedPdf, exists, size });
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // CV Download endpoint
  app.get("/api/download-cv", async (req, res) => {
    const experiences = await storage.getExperiences();
    const skills = await storage.getSkills();

    const cv = `MOSES MWANGI KAMAU
Software Developer | Full-Stack Web & Systems Specialist

CONTACT INFORMATION
Phone: +254 742 784 172
Email: mwangimoses372@gmail.com
Location: Kijabe, Kenya
GitHub: github.com/MosesCodeX-CS
LinkedIn: linkedin.com/in/moses-mwangi-a5a2a9316

PROFESSIONAL SUMMARY
Innovative software developer with proven ability to transform complex problems into efficient digital solutions. Combines technical expertise in full-stack development with strong analytical thinking and effective communication skills. Demonstrated excellence through national competition victories and practical implementation of real-world systems.

PROFESSIONAL EXPERIENCE
${experiences.map(exp => `${exp.role}
${exp.company} | ${exp.duration}
${exp.description}`).join("\n\n")}

TECHNICAL SKILLS
${["Languages", "Backend", "Frontend", "Database", "Tools", "Professional"]
  .map(category => {
    const categorySkills = skills.filter(s => s.category === category);
    if (categorySkills.length === 0) return "";
    return `${category}:\n${categorySkills.map(s => `• ${s.name} (${s.proficiency}%)`).join("\n")}`;
  })
  .filter(Boolean)
  .join("\n\n")}

ACHIEVEMENTS & COMPETITIONS
• Gold Medal – ICT Web Development (KATTI National TVET Fairs & Competitions, 2025)
• Silver Medal – ICT Software Solutions for Business (KATTI Research & Innovation Competitions, 2025)

EDUCATION
Nachu Technical and Vocational College
Diploma in Internet Communication Technology (ICT)
2023 – 2026 (Expected)

Generated from portfolio: moses-dev.replit.dev`;

    // If an uploaded PDF exists in attached_assets, serve it directly
    const uploadedPdf = path.resolve(process.cwd(), "attached_assets", "Moses_Mwangi_CV.pdf");
    if (fs.existsSync(uploadedPdf)) {
      return res.download(uploadedPdf, "Moses-Mwangi-CV.pdf");
    }

      // If uploaded PDF is missing, fallback to providing a text (.txt) CV download
      res.setHeader("Content-Disposition", "attachment; filename=Moses-Mwangi-CV.txt");
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(cv);
  });

  return httpServer;
}
