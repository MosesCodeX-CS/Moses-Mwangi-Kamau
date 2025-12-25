import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  technologies: string[];
  index: number;
}

export function SkillCard({ title, description, icon, technologies, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary mb-6 transition-colors"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <h3 className="relative z-10 text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-muted-foreground text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium border border-secondary/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
