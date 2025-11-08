"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Certificates() {
  const certificates = [
    {
      title: "Kifiya AI Mastery Training Program",
      issuer: "Kifiya Financial Technology & Mastercard Foundation",
      date: "September 2025",
      description:
        "3-month intensive project-based training in Machine Learning Engineering, Data Engineering, and Financial Analysis for the fintech sector",
      skills: ["Machine Learning", "Data Engineering", "Generative AI", "MLOps", "Deployment"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kifiya-cert-img1-AZDQLGG6N3vAeLzXWlbvNchECjHP8E.jpg",
    },
    {
      title: "A2SV In-Person Education Program",
      issuer: "Africa to Silicon Valley (A2SV)",
      date: "Completed",
      description:
        "In-depth training in Data Structures and Algorithms with emphasis on advanced problem-solving and technical competencies",
      skills: ["DSA", "Algorithms", "Problem Solving", "Competitive Programming"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a2sv-OV4cXmwZnsupafrsZCpLgs0cvaARpN.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
          Certifications &amp; Achievements
        </motion.h2>

        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-lg border border-slate-700/50 bg-gradient-to-r from-violet-500/5 to-purple-500/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-violet-400 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-slate-400 text-sm mb-4">{cert.date}</p>
                    <p className="text-slate-300 mb-6">{cert.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(167, 139, 250, 0.15)" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Certificate Image */}
                <motion.div
                  className="relative h-64 md:h-auto rounded-lg overflow-hidden border border-slate-700/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
