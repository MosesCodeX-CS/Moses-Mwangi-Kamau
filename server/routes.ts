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
  }

  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    const skills = [
      { name: "React", category: "Frontend", proficiency: 90 },
      { name: "TypeScript", category: "Languages", proficiency: 85 },
      { name: "Node.js", category: "Backend", proficiency: 80 },
      { name: "PostgreSQL", category: "Backend", proficiency: 75 },
      { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
      { name: "Docker", category: "DevOps", proficiency: 70 },
      { name: "Figma", category: "Design", proficiency: 60 },
    ];
    for (const skill of skills) {
      await storage.createSkill(skill);
    }
  }

  const existingExp = await storage.getExperiences();
  if (existingExp.length === 0) {
    await storage.createExperience({
      role: "Senior Full Stack Engineer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      description: "Leading a team of 5 developers building scalable cloud solutions. Improved system performance by 40%."
    });
    await storage.createExperience({
      role: "Frontend Developer",
      company: "Creative Digital Agency",
      duration: "2019 - 2021",
      description: "Developed responsive websites for high-profile clients. Collaborated closely with designers to implement pixel-perfect UIs."
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
