import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const articles = [
    {
      id: 7,
      title: "Building an AI-Powered Kenyan Phishing Detector",
      excerpt: "How I built a localized phishing detection pipeline: dataset curation, fine-tuning a transformer, and integrating it into a FastAPI + Streamlit demo.",
      date: "Dec 30, 2025",
      readTime: "10 min",
      category: "Security",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Self-hosting Stockfish for Scalable Chess Analysis",
      excerpt: "A practical guide to running Stockfish in Docker, integrating it with a FastAPI worker, and scaling analysis jobs with Celery.",
      date: "Dec 28, 2025",
      readTime: "8 min",
      category: "AI",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Integrating M-Pesa with Billing & Checkout Systems",
      excerpt: "Tips and pitfalls for integrating M-Pesa Daraja into billing platforms: callbacks, security, and reconciliation patterns.",
      date: "Dec 26, 2025",
      readTime: "9 min",
      category: "Payments",
      image: "https://images.unsplash.com/photo-1520975914249-0c68a47a8686?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "Designing Production-Ready Next.js Sites",
      excerpt: "A checklist for building Next.js apps that are fast, accessible, and deploy-ready (CI, tests, and SEO).",
      date: "Dec 24, 2025",
      readTime: "7 min",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      title: "Lessons from Building a PHP E-commerce Platform",
      excerpt: "Architectural lessons and security considerations learned while building a full-featured PHP e-commerce system.",
      date: "Dec 22, 2025",
      readTime: "8 min",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      title: "Building a Robust POS with Django",
      excerpt: "How to design user roles, inventory flows, and reporting for a supermarket POS built with Django.",
      date: "Dec 20, 2025",
      readTime: "7 min",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1581090462270-3c8be55b7f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 13,
      title: "Portfolio Design: From Wireframe to Deployed Site",
      excerpt: "A practical case study on iterating on portfolio design, content strategy, and deploying with Vite/Vercel.",
      date: "Dec 18, 2025",
      readTime: "6 min",
      category: "Design",
      image: "/profile-image.jpg"
    },
    {
      id: 14,
      title: "Automating Hotspot Billing Reconciliation",
      excerpt: "How to design cron-driven reconciliation for hotspot billing and reconcile M-Pesa payments reliably.",
      date: "Dec 16, 2025",
      readTime: "8 min",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1526378721451-36b4b3dfb1db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 1,
      title: "Building Scalable Web Applications with Django",
      excerpt: "Learn best practices for structuring large-scale Django applications, handling migrations, and optimizing database queries.",
      date: "Dec 20, 2024",
      readTime: "8 min",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "POS Systems: Architecture and Implementation",
      excerpt: "Deep dive into building point-of-sale systems. Cover transaction handling, inventory management, and real-time reporting.",
      date: "Dec 15, 2024",
      readTime: "12 min",
      category: "System Design",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Security Best Practices for Web Developers",
      excerpt: "Essential security practices every developer should know. Covering authentication, XSS prevention, SQL injection, and CSRF protection.",
      date: "Dec 10, 2024",
      readTime: "10 min",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563206766-5b64e2b84a71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Frontend Performance Optimization Techniques",
      excerpt: "Optimize your web applications for speed. Learn about lazy loading, caching strategies, and modern CSS techniques.",
      date: "Dec 5, 2024",
      readTime: "9 min",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1461749280684-ddeda9630e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Database Design Patterns for Large Scale Systems",
      excerpt: "Explore database design patterns, normalization, sharding strategies, and how to handle distributed data.",
      date: "Nov 30, 2024",
      readTime: "11 min",
      category: "Database",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Winning Competitive Programming: Strategies and Tips",
      excerpt: "Insights from winning national programming competitions. Algorithm optimization, time management, and problem-solving strategies.",
      date: "Nov 25, 2024",
      readTime: "7 min",
      category: "Insights",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Backend", "Frontend", "Security", "Database", "System Design", "Insights"];

  const filteredArticles = selectedCategory && selectedCategory !== "All" 
    ? articles.filter(a => a.category === selectedCategory)
    : articles;

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Insights & Articles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Technical articles, development insights, and lessons learned from building production applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                (selectedCategory === cat || (cat === "All" && !selectedCategory))
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 bg-card cursor-pointer"
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={article.image || '/profile-image.jpg'}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold font-display mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">No articles found in this category yet.</p>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
