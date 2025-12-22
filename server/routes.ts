import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "E-commerce Analytics Dashboard",
      description: "A real-time dashboard for tracking sales, user engagement, and inventory levels. Built with React and Recharts.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["React", "TypeScript", "D3.js", "Node.js"],
      featured: true
    });
    
    await storage.createProject({
      title: "Social Connect App",
      description: "A modern social media platform connecting professionals. Features real-time messaging and feed updates.",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=2374&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      featured: true
    });

    await storage.createProject({
      title: "Task Master AI",
      description: "AI-powered task management application that automatically prioritizes your daily workflow.",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2372&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["Next.js", "OpenAI API", "Prisma"],
      featured: false
    });

    await storage.createProject({
      title: "Design System Component Library",
      description: "Comprehensive React component library with 50+ customizable components. Includes documentation, storybook integration, and accessibility features.",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
      featured: false
    });

    await storage.createProject({
      title: "Video Streaming Platform",
      description: "Scalable video streaming platform with adaptive bitrate streaming, user recommendations, and real-time chat integration.",
      imageUrl: "https://images.unsplash.com/photo-1533613220915-8f00cce9fda0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["Node.js", "PostgreSQL", "WebSocket", "FFmpeg"],
      featured: false
    });

    await storage.createProject({
      title: "Mobile Fitness Tracker",
      description: "Native iOS and Android fitness tracking app with workout planning, nutrition tracking, and social challenges.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      projectUrl: "#",
      repoUrl: "#",
      tags: ["React Native", "Firebase", "GraphQL", "Redux"],
      featured: false
    });
  }

  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    const skills = [
      { name: "PHP", category: "Languages", proficiency: 90 },
      { name: "Python", category: "Languages", proficiency: 90 },
      { name: "JavaScript", category: "Languages", proficiency: 90 },
      { name: "SQL", category: "Languages", proficiency: 80 },
      { name: "TypeScript", category: "Languages", proficiency: 75 },
      { name: "HTML5", category: "Languages", proficiency: 85 },
      { name: "CSS3", category: "Languages", proficiency: 85 },
      { name: "Django", category: "Frameworks", proficiency: 85 },
      { name: "Bootstrap", category: "Frameworks", proficiency: 85 },
      { name: "jQuery", category: "Frameworks", proficiency: 70 },
      { name: "MySQL", category: "Database", proficiency: 85 },
      { name: "PostgreSQL", category: "Database", proficiency: 75 },
      { name: "Git", category: "Tools", proficiency: 85 },
      { name: "GitHub", category: "Tools", proficiency: 85 },
      { name: "Docker", category: "Tools", proficiency: 75 },
      { name: "Linux", category: "Tools", proficiency: 80 },
      { name: "REST APIs", category: "Frameworks", proficiency: 80 },
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
      description: "Provided technical support and system maintenance for hospital ICT infrastructure. Assisted in resolving network and software issues to ensure seamless operations. Supported healthcare staff with IT-related challenges."
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

  return httpServer;
}
