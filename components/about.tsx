"use client"

import { motion } from "framer-motion"

export default function About() {
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
      <div className="max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.p className="text-slate-300 text-lg leading-relaxed mb-4" variants={itemVariants}>
              Hi, I’m Firaol, a software engineer who loves turning ideas into real, functional products. I specialize in backend systems, AI integration, and mobile development using tools like FastAPI, Node.js, Flutter, and Docker.
            </motion.p>
            <motion.p className="text-slate-300 text-lg leading-relaxed mb-4" variants={itemVariants}>
              I care deeply about clean code, scalability, and creative problem solving. Whether it’s designing APIs, deploying cloud apps, or experimenting with AI models, I’m always exploring ways to make technology smarter and more accessible.
            </motion.p>
            <motion.p className="text-slate-300 text-lg leading-relaxed" variants={itemVariants}>
              I'm passionate about clean architecture, optimization, and solving complex problems through collaborative
              engineering.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/30 rounded-lg p-6"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-blue-400 font-semibold mb-4 text-lg">Expertise</h3>
              <div className="space-y-2 text-slate-300">
                {[
                  "Full-Stack Development",
                  "Mobile Engineering",
                  "DevOps & Cloud",
                  "AI/ML & Data Engineering",
                  "Database Systems",
                ].map((skill, i) => (
                  <motion.p key={i} className="flex items-center gap-2" whileHover={{ x: 5 }}>
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {skill}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border border-emerald-700/30 rounded-lg p-6"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-emerald-400 font-semibold mb-3">Stats</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-2xl font-bold text-emerald-400">1000+</p>
                  <p className="text-slate-400">Problems Solved</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-2xl font-bold text-emerald-400">30+</p>
                  <p className="text-slate-400">Projects</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
