"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 overflow-y-auto">
        <Hero />

        <div id="about" className="scroll-mt-20">
          <About />
        </div>

        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>

        <div id="experience" className="scroll-mt-20">
          <Experience />
        </div>

        <div id="certificates" className="scroll-mt-20">
          <Certificates />
        </div>

        <div id="projects" className="scroll-mt-20">
          <Projects />
        </div>

        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
      </main>
    </div>
  )
}
