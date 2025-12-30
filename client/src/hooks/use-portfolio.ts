import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import {
  staticProjects,
  staticSkills,
  staticExperiences,
  type Project,
  type Skill,
  type Experience
} from "@/data/portfolio-data";

// ============================================
// PROJECTS
// ============================================

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.projects.list.path);
        if (!res.ok) {
          // If API fails, return static data
          return staticProjects;
        }
        const data = await res.json();
        // Check if response is valid JSON array, not HTML
        if (Array.isArray(data)) {
          return data;
        }
        return staticProjects;
      } catch (error) {
        // If fetch fails entirely, return static data
        return staticProjects;
      }
    },
    // Initialize with static data while loading
    initialData: staticProjects,
  });
}

export function useProject(id: number) {
  return useQuery<Project | null>({
    queryKey: [api.projects.get.path, id],
    queryFn: async () => {
      try {
        const path = api.projects.get.path.replace(':id', id.toString());
        const res = await fetch(path);
        if (res.status === 404) return null;
        if (!res.ok) {
          return staticProjects.find(p => p.id === id) || null;
        }
        const data = await res.json();
        if (data && typeof data === 'object' && 'id' in data) {
          return data;
        }
        return staticProjects.find(p => p.id === id) || null;
      } catch (error) {
        return staticProjects.find(p => p.id === id) || null;
      }
    },
    initialData: () => staticProjects.find(p => p.id === id) || null,
  });
}

// ============================================
// SKILLS
// ============================================

export function useSkills() {
  return useQuery<Skill[]>({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.skills.list.path);
        if (!res.ok) {
          return staticSkills;
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          return data;
        }
        return staticSkills;
      } catch (error) {
        return staticSkills;
      }
    },
    initialData: staticSkills,
  });
}

// ============================================
// EXPERIENCES
// ============================================

export function useExperiences() {
  return useQuery<Experience[]>({
    queryKey: [api.experiences.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.experiences.list.path);
        if (!res.ok) {
          return staticExperiences;
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          return data;
        }
        return staticExperiences;
      } catch (error) {
        return staticExperiences;
      }
    },
    initialData: staticExperiences,
  });
}

// ============================================
// CONTACT / MESSAGES
// ============================================

export function useContactForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
