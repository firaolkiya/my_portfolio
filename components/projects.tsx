"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Competitive Intelligence BOT",
      description:
        "AI-powered system for competitive intelligence monitoring and market analysis with real-time insights and automated data collection.",
      image: "/competitive-intelligence-dashboard.jpg",
      tags: ["Python", "ML", "Web Scraping", "AI"],
      links: { github: "https://github.com/firaolkiya/Competitive-Intelligence-Monitoring-BOT", live: "#" },
    },
    {
      title: "SchoolHub",
      description:
        "School management platform serving 1000+ users with FastAPI backend, Docker containerization, and Kubernetes orchestration.",
      image: "/school-management-dashboard.png",
      tags: ["FastAPI", "Docker", "Kubernetes", "PostgreSQL"],
      links: { github: "https://github.com/firaolkiya/School-Hub", live: "#" },
    },
    {
      title: "Financial Sentiment Analysis",
      description:
        "ML-powered tool for stock market trend analysis and investor sentiment prediction with real-time data processing.",
      image: "/financial-analysis-charts.png",
      tags: ["Python", "ML", "Data Analysis", "Finance"],
      links: { github: "https://github.com/firaolkiya/Financial-sentiment-stock-analysis", live: "#" },
    },
    {
      title: "HakimHub",
      description:
        "Healthcare innovation platform enabling medical professionals and researchers to collaborate on projects and research initiatives.",
      image: "/healthcare-platform-interface.png",
      tags: ["React", "Node.js", "MongoDB", "Healthcare"],
      links: { github: "https://github.com/A2SV/HakimHub", live: "#" },
    },
    {
      title: "Afaan Oromo LLM",
      description:
        "Transformer model for low-resource language NLP, advancing natural language processing capabilities for Afaan Oromo.",
      image: "/language-model-nlp.jpg",
      tags: ["PyTorch", "NLP", "Transformers", "Research"],
      links: { github: "#", live: "#" },
    },
    {
      title: "Medical Data Pipeline",
      description:
        "End-to-end data pipeline for Ethiopian medical intelligence with Telegram scraping, PostgreSQL storage, and YOLOv8 analysis.",
      image: "/data-pipeline-analytics.jpg",
      tags: ["Python", "PostgreSQL", "YOLOv8", "Data Engineering"],
      links: { github: "https://github.com/firaolkiya/From-Raw-Telegram-Data-to-an-Analytical-API", live: "#" },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-6 md:px-12 md:ml-64 border-t border-slate-700/50">
      <div className="max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                <div className="rounded-lg overflow-hidden bg-slate-900/50 border border-slate-700/50">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm rounded-full"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    {project.links.live !== "#" && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
