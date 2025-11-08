"use client"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "certificates", label: "CERTIFICATIONS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const navItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-700/50 bg-slate-900/80 backdrop-blur-sm p-8 flex flex-col justify-between hidden md:flex">
      {/* Header */}
      <div>
        <motion.h1
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Firaol Bulo
        </motion.h1>
        <motion.p
          className="text-sm text-blue-400 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Software Engineer
        </motion.p>

        {/* Navigation */}
        <nav className="mt-12 space-y-1">
          {sections.map((section, i) => (
            <motion.button
              key={section.id}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              onClick={() => handleNavClick(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === section.id
                  ? "bg-blue-500/20 text-blue-400 border-l-2 border-blue-400"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {section.label}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        {[
          { icon: Github, href: "https://github.com/firaolkiya" },
          { icon: Linkedin, href: "https://linkedin.com/in/firaol-bulo" },
          { icon: Mail, href: "mailto:firaolkiya6@gmail.com" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    </aside>
  )
}
