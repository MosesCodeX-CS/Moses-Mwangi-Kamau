import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Code, Briefcase, Target, Heart, Lightbulb, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Timeline } from "@/components/Timeline";

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Moses</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A full-stack developer passionate about creating efficient, scalable digital solutions that solve real-world problems. National competition winner with a proven track record of delivering high-quality applications.
            </p>
          </motion.div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started my tech journey with a passion for solving problems and creating tools that make a difference. What began as curiosity has evolved into a professional career in full-stack development.
                </p>
                <p>
                  Currently pursuing a Diploma in Internet Communication Technology at Nachu Technical and Vocational College, I've already shipped 5+ production applications and won national recognition for my technical excellence.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code and designing user-centric solutions that deliver real value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">What Drives Me</h2>
              <div className="space-y-6">
                {[
                  { icon: Code, title: "Clean Code", desc: "Writing maintainable, efficient code that stands the test of time" },
                  { icon: Target, title: "Problem Solving", desc: "Transforming complex challenges into elegant digital solutions" },
                  { icon: Briefcase, title: "Professional Growth", desc: "Continuously learning and expanding my technical capabilities" },
                  { icon: Heart, title: "User Experience", desc: "Creating applications that users love to interact with" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                        <item.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 py-16 border-t border-b border-border"
          >
            {[
              { number: 5, label: "Projects Deployed", suffix: "+" },
              { number: 2, label: "National Awards", suffix: "" },
              { number: 95, label: "Bug-Free Deployments", suffix: "%+" },
              { number: 4, label: "Years of Tech", suffix: "" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter 
                    target={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-12">My Journey</h2>
            <Timeline
              items={[
                {
                  year: "2020",
                  title: "Started Learning Web Development",
                  description: "Began self-learning HTML, CSS, and JavaScript, building first projects and establishing foundation."
                },
                {
                  year: "2023",
                  title: "Enrolled in Technical College",
                  description: "Pursuing Diploma in Internet Communication Technology at Nachu Technical and Vocational College."
                },
                {
                  year: "2024",
                  title: "National Competition Winner",
                  description: "Won gold medal in KATTI national web development competition against 50+ institutions."
                },
                {
                  year: "2024",
                  title: "Shipped 5+ Production Apps",
                  description: "Delivered WiFi billing systems, POS applications, and full-stack solutions for real clients."
                }
              ]}
            />
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-display font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Languages", items: ["PHP", "Python", "JavaScript", "SQL", "HTML/CSS"] },
                { title: "Frameworks & Tools", items: ["Django", "Bootstrap", "jQuery", "Git", "Docker"] },
                { title: "Databases", items: ["MySQL", "PostgreSQL"] },
                { title: "Specializations", items: ["Full-Stack Web Development", "REST APIs", "System Design"] }
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-border bg-card"
                >
                  <h3 className="font-bold text-lg mb-4 text-foreground">{section.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
