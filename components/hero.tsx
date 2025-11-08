"use client"

import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GridScan } from "./grid-scan"

export default function Hero() {
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative pt-40 pb-24 px-6 md:px-12 md:ml-64 overflow-hidden h-screen flex items-center">
      <GridScan />

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800/50"></div>

      <motion.div className="max-w-5xl relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        <div className="mb-16">
          {/* Accent line */}
          <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
              variants={lineVariants}
            ></motion.div>
            <span className="text-sm font-semibold text-cyan-400 tracking-widest">BUILDING WITH SOFTWARE &amp; AI</span>
          </motion.div>

          {/* Main heading */}
          <div className="mb-6">
            <motion.p className="text-lg text-slate-400 mb-3 font-light" variants={itemVariants}>
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight"
              variants={itemVariants}
            >
              Firaol Bulo
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400"
              variants={itemVariants}
            >
              Software Engineer (Full-Stack Developer)
            </motion.h2>
          </div>
        </div>

        {/* Description */}
        <motion.p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10 font-light" variants={itemVariants}>
          Software Engineer focused on building scalable systems, intelligent applications, and smooth user experiences. Skilled in FastAPI, Node.js, Flutter, and AI/ML integration — passionate about crafting clean, efficient, and impactful software.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-wrap gap-4 mb-12" variants={itemVariants}>
          <a href="#contact" className="group">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 gap-2 px-8"
            >
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#projects" className="group">
            <Button
              size="lg"
              variant="outline"
              className="border border-slate-600 text-white hover:bg-slate-800/50 bg-slate-900/50 px-8"
            >
              View My Work
            </Button>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div className="flex gap-3 pt-4 border-t border-slate-800/50" variants={itemVariants}>
          <span className="text-sm text-slate-500 pt-3 mr-4">Connect with me</span>
          {[
            { href: "https://github.com/firaolkiya", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/firaol-bulo", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:firaolkiya6@gmail.com", icon: Mail, label: "Email" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
