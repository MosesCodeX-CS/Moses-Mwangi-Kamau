import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Layout, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(p => p.featured).slice(0, 3);

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
    </PageTransition>
  );
}
