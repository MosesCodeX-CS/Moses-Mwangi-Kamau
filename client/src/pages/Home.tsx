import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Layout, Smartphone, Award, Target, Zap, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(p => p.featured).slice(0, 3);

  const stats = [
    { number: "5+", label: "Projects Delivered", suffix: "" },
    { number: "2", label: "National Awards", suffix: "" },
    { number: "95", label: "Quality Score", suffix: "%" },
    { number: "100%", label: "Client Satisfaction", suffix: "" }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-6"
            >
              Transforming complex problems into <span className="text-primary italic">efficient digital solutions</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              I'm Moses Mwangi Kamau, a full-stack developer and systems specialist with proven ability to build scalable web applications. National competition winner combining technical expertise with effective problem-solving and strong communication skills.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button size="lg" className="rounded-full px-8 text-base">
                  View Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="/api/download-cv" download="Moses-Mwangi-CV.txt">
                <Button variant="secondary" size="lg" className="rounded-full px-8 text-base">
                  Download CV
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-base bg-background/50 backdrop-blur-sm">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-display font-bold text-primary mb-2"
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Skills Preview */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Frontend Development", desc: "Creating beautiful, responsive interfaces with React, Vue, and modern CSS." },
              { icon: Code, title: "Backend Architecture", desc: "Building robust APIs and server-side logic with Node.js, Python, and Go." },
              { icon: Smartphone, title: "Mobile Apps", desc: "Developing native-feeling mobile experiences using React Native and Flutter." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 lg:py-32 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Achievements & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Recognized nationally for excellence in web development and innovative solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Gold Medal", desc: "ICT Web Development at KATTI National TVET Fairs & Competitions 2025", color: "text-yellow-600" },
              { icon: Target, title: "Silver Medal", desc: "ICT Software Solutions for Business at KATTI Research & Innovation Competitions 2025", color: "text-slate-400" },
              { icon: Zap, title: "5+ Projects Deployed", desc: "Full-stack solutions for local businesses with 95%+ bug-free deployment", color: "text-blue-600" }
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className={`w-14 h-14 ${achievement.color} rounded-xl flex items-center justify-center mb-6 bg-opacity-10`}>
                  <achievement.icon size={28} className={achievement.color} />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected Work</h2>
              <p className="text-muted-foreground">Some of my favorite projects.</p>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="hidden md:flex group">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[400px] bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
          
          <div className="mt-8 md:hidden text-center">
            <Link href="/projects">
              <Button variant="outline" className="w-full">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What People Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Recognized by clients and judges for technical excellence and professional delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                quote: "Moses delivered an exceptional WiFi billing system that transformed how we manage our network resources. His attention to detail and problem-solving skills are outstanding.", 
                author: "Local Business Owner",
                role: "WiFi Service Provider"
              },
              { 
                quote: "The POS system he built is intuitive and reliable. It has significantly improved our retail operations. Highly recommended for any business looking for professional solutions.", 
                author: "Store Manager",
                role: "Supermarket Owner"
              },
              { 
                quote: "Winning gold in the national web development competition against 50+ institutions shows Moses's exceptional technical prowess and innovative approach to solving real-world problems.", 
                author: "KATTI Judges",
                role: "Technical Assessment Panel"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  <Quote className="w-5 h-5 text-primary opacity-40" />
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions about my services and capabilities.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What technologies do you specialize in?",
                a: "I specialize in full-stack development with expertise in PHP, Python, JavaScript, Django, React, and modern web technologies. I also work with databases like MySQL and PostgreSQL."
              },
              {
                q: "What's your typical project timeline?",
                a: "Project timelines vary depending on complexity. Small projects typically take 2-4 weeks, while larger systems can take 2-3 months. I'll provide a detailed estimate after understanding your requirements."
              },
              {
                q: "Do you offer post-launch support?",
                a: "Yes, I provide post-deployment support including bug fixes, performance optimization, and feature additions. I can also help with maintenance and scaling as your project grows."
              },
              {
                q: "Can you work on existing projects?",
                a: "Absolutely. I can join ongoing projects, refactor legacy code, add new features, or optimize performance. I work well with existing teams and can adapt to established workflows."
              },
              {
                q: "What's your approach to project management?",
                a: "I follow agile methodologies with regular communication and progress updates. You'll have full visibility into the development process with milestone-based delivery."
              },
              {
                q: "How do you handle security?",
                a: "Security is paramount. I implement best practices for authentication, data protection, SQL injection prevention, XSS mitigation, and follow industry security standards throughout development."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl border border-border hover:border-primary/50 transition-all bg-card"
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">Get the latest articles, tips, and insights on full-stack development delivered to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                required
              />
              <Button size="lg" className="rounded-full px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">No spam, just quality content. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">Ready to Build Your Next Project?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">Let's collaborate on something amazing. I'm ready to help bring your vision to life.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
