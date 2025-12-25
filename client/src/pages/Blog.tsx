import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const articles = [
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Insights & Articles</h1>
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
                  src={article.image}
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
