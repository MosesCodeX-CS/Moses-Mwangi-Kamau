import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary/50"></div>

      <div className="space-y-12 relative">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`flex ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12`}
          >
            {/* Content */}
            <div className="flex-1 md:flex-1 pl-8 md:pl-0">
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="text-sm font-mono text-primary font-bold mb-2">{item.year}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            </div>

            {/* Dot */}
            <div className="flex justify-center md:flex-1">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, type: "spring" }}
                className="relative"
              >
                <div className="w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg relative z-10"></div>
                {item.icon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-xs">{item.icon}</div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Placeholder for layout */}
            <div className="hidden md:block flex-1"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
