"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      company: "Eskalate",
      role: "Software Developer Intern",
      period: "July 2024 - September 2024",
      description:
        "Developed mini-projects including an e-commerce application using Flutter with clean architecture principles. Gained hands-on experience in mobile development and best practices.",
      skills: ["Flutter", "Dart", "Clean Architecture", "TDD"],
    },
    {
      company: "Eskalate",
      role: "Backend Developer",
      period: "July 2025 - September 2025",
      description:
        "Built and maintained RESTful APIs using Node.js and MongoDB for scalable backend services. Implemented authentication, authorization, and CRUD operations with Express.js and JWT. Participated in Agile sprints and peer code reviews.",
      skills: ["Node.js", "MongoDB", "Express.js", "JWT", "REST API"],
    },
  ]

  const education = [
    {
      institution: "Adama Science & Technology University",
      degree: "BSc Software Engineering",
      period: "Started March 2022",
      focus: "Data Structures, Algorithms, Java, C++, Python, PHP, Operating Systems, Mobile & Web Applications",
    },
    {
      institution: "African to Silicon Valley (A2SV)",
      degree: "Competitive Training Program",
      period: "December 2023 - Expected October 2025",
      focus:
        "Advanced competitive programming, software engineering, mentorship, and preparation for global tech companies",
    },
    
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
          Professional Experience
        </motion.h2>

        <motion.div
          className="space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} className="group" variants={itemVariants} whileHover={{ x: 5 }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                  <p className="text-sm text-slate-400">{exp.period}</p>
                </div>
              </div>
              <p className="text-slate-300 ml-16 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 ml-16">
                {exp.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-white mb-12 mt-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education &amp; Training
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-slate-700/50 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 hover:border-emerald-500/30 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.5)" }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-emerald-400 font-semibold">{edu.institution}</p>
                </div>
                <motion.span
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {edu.period}
                </motion.span>
              </div>
              <p className="text-slate-300 mt-3">{edu.focus}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
