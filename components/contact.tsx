"use client"

import type React from "react"

import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Create mailto link with form data
    const mailtoLink = `mailto:firaolkiya6@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 2000)
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "firaolkiya6@gmail.com",
      href: "mailto:firaolkiya6@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Firaol Bulo",
      href: "https://linkedin.com/in/firaol-bulo",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "firaolkiya",
      href: "https://github.com/firaolkiya",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 md:ml-64 border-t border-slate-700/50">
      <div className="max-w-5xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Let's Start a Conversation</h2>
          <p className="text-slate-400 text-lg">
            Have an exciting project in mind? Want to collaborate or just say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              target={card.href.startsWith("mailto") ? undefined : "_blank"}
              rel={card.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group p-6 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-800/80 hover:to-slate-800/50 hover:border-blue-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-blue-500/15 rounded-lg text-blue-400 group-hover:bg-blue-500/25 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <card.icon size={24} />
                </motion.div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                  <p className="text-slate-400 group-hover:text-blue-400 transition-colors">{card.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
          <form
            onSubmit={handleSubmit}
            className="relative p-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all"
                  placeholder="Firaol"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            {/* Subject Input */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all"
                placeholder="What's this about?"
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg disabled:opacity-50 transition-all flex items-center gap-2"
                >
                  {submitted ? (
                    <>
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        ✓
                      </motion.span>
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.span
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
              <p className="text-slate-400 text-sm">or email directly at firaolkiya6@gmail.com</p>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-slate-700/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm mb-6">Connect with me on social platforms:</p>
          <div className="flex gap-4 flex-wrap">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/firaolkiya" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/firaol-bulo" },
              { icon: Mail, label: "Email", href: "mailto:firaolkiya6@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-blue-400 hover:bg-slate-700 hover:border-blue-500/50 transition-all"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
                <span className="text-sm font-medium">{social.label}</span>
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
