import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navigation({ theme, onToggleTheme }: { theme: "light" | "dark", onToggleTheme: () => void }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 border-b border-border/60 shadow-lg" : "bg-background/80 border-b border-border/40"} backdrop-blur-md`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="font-display text-2xl font-bold cursor-pointer tracking-tighter hover:text-primary transition-colors">
            Moses Mwangi Kamau.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors cursor-pointer hover:text-primary",
                  location === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <button
            onClick={onToggleTheme}
            className="ml-2 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="/Moses_Mwangi_CV.pdf"
            download="Moses-Mwangi-CV.pdf"
            className="ml-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full hover:bg-accent/90 transition-all flex items-center gap-2"
          >
            <Download size={16} />
            CV
          </a>
          <a
            href="https://github.com/MosesCodeX-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={cn(
                      "text-lg font-medium block py-2 cursor-pointer",
                      location === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <button
                onClick={() => {
                  onToggleTheme();
                  setIsOpen(false);
                }}
                className="mt-4 flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
              <a
                href="/Moses_Mwangi_CV.pdf"
                download="Moses-Mwangi-CV.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full hover:bg-accent/90 transition-all flex items-center gap-2 justify-center"
              >
                <Download size={16} />
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
