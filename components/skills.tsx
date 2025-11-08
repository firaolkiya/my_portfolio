"use client"

import { motion } from "framer-motion"
import { Brain, Database, Code2, Cloud, Smartphone, Sparkles } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Predictive Modeling", "Time Series Analysis", "Deep Learning", "MLOps", "DVC/MLFlow"],
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: ["Web scrapping", "Selenium", "Playwright", "SQL", "Automation"],
    },
    {
      title: "Backend Development",
      icon: Code2,
      skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "CI/CD", "GitHub Actions", "Cloud Deployment", "Infrastructure"],
    },
    {
      title: "Frontend & Mobile",
      icon: Smartphone,
      skills: ["TypeScript", "Flutter", "Next.js","Kotlin", "Responsive Design"],
    },
    {
      title: "AI & Generative AI",
      icon: Sparkles,
      skills: ["AI Integration", "RAG", "Prompt Engineering", "Chatbots"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-6 md:px-12 md:ml-64 border-t border-slate-700/50">
      <div className="max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="text-slate-400 text-lg mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Comprehensive expertise across the full technology stack
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors p-6"
              >
                <h3 className="text-blue-400 font-bold text-lg mb-4 flex items-center gap-3">
                  <IconComponent size={24} className="text-blue-400" />
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div key={i} className="flex items-center gap-3 group cursor-pointer" whileHover={{ x: 5 }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                      <span className="text-slate-300 group-hover:text-slate-100 transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-4 pt-4 border-t border-white/5 text-sm text-slate-400 font-medium"
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                >
                  ✓ Production Ready
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
