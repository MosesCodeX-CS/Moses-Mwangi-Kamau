import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-4">Let's build something amazing.</h2>
            <p className="text-muted-foreground max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary">Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Work</a></li>
              <li><a href="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary">Socials</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@example.com" className="p-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alex Developer. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono text-xs">Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
