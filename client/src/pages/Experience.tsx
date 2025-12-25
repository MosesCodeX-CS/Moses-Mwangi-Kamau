import { PageTransition } from "@/components/PageTransition";
import { useExperiences, useSkills } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Briefcase, Code, Database, PenTool, Terminal } from "lucide-react";

export default function Experience() {
  const { data: experiences, isLoading: loadingExp } = useExperiences();
  const { data: skills, isLoading: loadingSkills } = useSkills();

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc, skill) => {
    const cat = skill.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend': return <LayoutIcon className="w-5 h-5" />;
      case 'backend': return <Database className="w-5 h-5" />;
      case 'tools': return <Terminal className="w-5 h-5" />;
      case 'design': return <PenTool className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience & Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              My professional journey and technical arsenal. I'm constantly learning and expanding my skillset.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-display font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {[
                {
                  school: "Nachu Technical and Vocational College",
                  degree: "Diploma in Internet Communication Technology",
                  period: "2023 - Present",
                  details: "Focus on modern web development, networking, and system administration."
                }
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                    <span className="text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-semibold mb-2">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Experience Column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-primary" /> Work History
              </h2>
              
              <div className="space-y-12">
                {loadingExp ? (
                  [1, 2, 3].map(i => <div key={i} className="h-32 bg-muted animate-pulse rounded-xl" />)
                ) : (
                  experiences?.map((exp, idx) => (
                    <motion.div 
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-8 border-l-2 border-border pb-2 last:pb-0"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="text-sm font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <div className="text-lg font-medium text-primary mb-4">{exp.company}</div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Skills Column */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Code className="text-primary" /> Technical Skills
              </h2>

              <div className="space-y-8">
                {loadingSkills ? (
                  [1, 2, 3].map(i => <div key={i} className="h-40 bg-muted animate-pulse rounded-xl" />)
                ) : (
                  Object.entries(skillsByCategory || {}).map(([category, items], idx) => (
                    <motion.div 
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-4 capitalize font-bold text-lg">
                        {getCategoryIcon(category)}
                        {category}
                      </div>
                      
                      <div className="space-y-4">
                        {items.map(skill => (
                          <div key={skill.id}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.proficiency}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-primary rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}
