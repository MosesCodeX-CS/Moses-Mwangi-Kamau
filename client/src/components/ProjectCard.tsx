import type { Project } from "@shared/schema";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/30 text-secondary-foreground/50">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <ArrowUpRight size={20} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors flex-1">
            {project.title}
          </h3>
          {project.featured && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-2.5 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-semibold whitespace-nowrap border border-accent/30"
            >
              Featured
            </motion.span>
          )}
        </div>
        <p className="text-muted-foreground line-clamp-2 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs font-medium font-mono border border-secondary hover:bg-secondary transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
