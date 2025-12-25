import { Github, Linkedin, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h2 className="font-display text-2xl font-bold mb-4">Let's build something amazing together.</h2>
            <p className="text-muted-foreground max-w-md mb-6">
              I'm always open to discussing new projects, innovative solutions, and opportunities to contribute to dynamic ventures. Let's create something extraordinary.
            </p>
            
            {/* Quick Contact Info */}
            <div className="space-y-2">
              <a href="tel:+254742784172" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} /> +254 742 784 172
              </a>
              <a href="mailto:mwangimoses372@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} /> mwangimoses372@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} /> Kijabe, Kenya
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary">Pages</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a></li>
              <li><a href="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Work</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="/experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">Experience</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary">Connect</h3>
            <div className="flex gap-3 flex-wrap">
              <a 
                href="https://github.com/MosesCodeX-CS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-background rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/moses-mwangi-a5a2a9316" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-background rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:mwangimoses372@gmail.com" 
                className="p-2.5 bg-background rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <p>&copy; {new Date().getFullYear()} Moses Mwangi Kamau</p>
            <p className="font-mono text-xs">Built with React, TypeScript & Tailwind</p>
          </div>
          <p className="mt-2 md:mt-0 text-xs flex items-center gap-1">
            <Calendar size={14} /> Last updated: Dec 2024
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
