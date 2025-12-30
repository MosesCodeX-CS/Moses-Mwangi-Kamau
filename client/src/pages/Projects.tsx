import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    if (!projects) return [];
    const tags = new Set<string>();
    projects.forEach(p => {
      p.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!selectedTag || !projects) return projects;
    return projects.filter(p => p.tags?.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <PageTransition>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">My Work</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of projects exploring different technologies, design patterns, and problem-solving approaches.
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 rounded-xl bg-muted/30 border border-border"
          >
            {/* Use AnimatedCounter and start on mount so the counters run when the page loads */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">
                <AnimatedCounter target={filteredProjects?.length || 0} duration={2} startOnMount />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Total Projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">
                <AnimatedCounter target={allTags.length} duration={2} startOnMount />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Technologies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">
                <AnimatedCounter target={filteredProjects?.filter(p => p.featured).length || 0} duration={2} startOnMount />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Deployed</p>
            </motion.div>
          </motion.div>

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-12"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                selectedTag === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary text-muted-foreground hover:text-primary"
              }`}
            >
              All Projects
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary text-muted-foreground hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[400px] bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects?.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </div>

              {filteredProjects?.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 border border-dashed border-border rounded-2xl"
                >
                  <p className="text-muted-foreground">No projects found with the selected tag.</p>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
