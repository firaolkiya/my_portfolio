// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  const themeToggle = document.querySelector(".theme-toggle")
  const scrollToTop = document.querySelector(".scroll-to-top")
  const skillLevels = document.querySelectorAll(".skill-level")
  const contactForm = document.getElementById("contactForm")
  const sections = document.querySelectorAll("section")
  const sectionHeaders = document.querySelectorAll(".section-header")
  const aboutContent = document.querySelector(".about-content")
  const skillsContainer = document.querySelector(".skills-container")
  const timelineItems = document.querySelectorAll(".timeline-item")
  const projectCards = document.querySelectorAll(".project-card")
  const testimonialContainer = document.querySelector(".testimonial-container")
  const contactContent = document.querySelector(".contact-content")
  const achievementCards = document.querySelectorAll(".achievement-card")

  // Add background animation elements
  const sections_with_bg = document.querySelectorAll(".hero, .about, .skills, .testimonials")
  sections_with_bg.forEach((section) => {
    const bgAnimation = document.createElement("div")
    bgAnimation.classList.add("bg-animation")

    for (let i = 0; i < 10; i++) {
      const span = document.createElement("span")
      bgAnimation.appendChild(span)
    }

    section.appendChild(bgAnimation)
  })

  // Add the text animation
  animateHeroText()

  // Toggle Mobile Navigation
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Theme Toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    // Change icon based on theme
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
    }

    // Save theme preference to localStorage
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light"
    localStorage.setItem("theme", theme)
  })

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  }

  // Scroll to Top Button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollToTop.classList.add("active")
    } else {
      scrollToTop.classList.remove("active")
    }
  })

  scrollToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Animate elements on scroll
  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8

    // Animate section headers
    sectionHeaders.forEach((header) => {
      const headerTop = header.getBoundingClientRect().top
      if (headerTop < triggerBottom) {
        header.classList.add("animate")
      }
    })

    // Animate about content
    if (aboutContent) {
      const aboutTop = aboutContent.getBoundingClientRect().top
      if (aboutTop < triggerBottom) {
        aboutContent.classList.add("animate")
      }
    }

    // Animate skills container
    if (skillsContainer) {
      const skillsTop = skillsContainer.getBoundingClientRect().top
      if (skillsTop < triggerBottom) {
        skillsContainer.classList.add("animate")

        // Animate skill bars
        skillLevels.forEach((skill) => {
          const width = skill.getAttribute("style").split(":")[1]
          skill.style.width = width
        })
      }
    }

    // Animate timeline items
    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top
      if (itemTop < triggerBottom) {
        item.classList.add("animate")
      }
    })

    // Animate project cards
    projectCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top
      if (cardTop < triggerBottom) {
        // Add delay based on index
        setTimeout(() => {
          card.classList.add("animate")
        }, index * 200)
      }
    })

    // Animate achievement cards
    achievementCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top
      if (cardTop < triggerBottom) {
        // Add delay based on index
        setTimeout(() => {
          card.classList.add("animate")
        }, index * 150)
      }
    })

    // Animate testimonial container
    if (testimonialContainer) {
      const testimonialTop = testimonialContainer.getBoundingClientRect().top
      if (testimonialTop < triggerBottom) {
        testimonialContainer.classList.add("animate")
      }
    }

    // Animate contact content
    if (contactContent) {
      const contactTop = contactContent.getBoundingClientRect().top
      if (contactTop < triggerBottom) {
        contactContent.classList.add("animate")
      }
    }
  }

  // Initial check for elements in view
  checkScroll()

  // Check for elements in view on scroll
  window.addEventListener("scroll", checkScroll)

  // Form Submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      console.log("Form submitted:", { name, email, subject, message })

      // Show success message
      const formSuccess = document.createElement("div")
      formSuccess.classList.add("form-success")
      formSuccess.innerHTML = `
        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for your message, ${name}. I will get back to you soon.</p>
      `

      contactForm.innerHTML = ""
      contactForm.appendChild(formSuccess)

      // Reset form after 5 seconds
      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="form-group">
            <input type="text" id="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input type="text" id="subject" placeholder="Subject" required>
          </div>
          <div class="form-group">
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn primary-btn">Send Message</button>
        `
      }, 5000)
    })
  }

  // Add smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Account for fixed header
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Testimonial Slider
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentIndex = 0

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach((card) => {
      card.classList.remove("active")
    })

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show the selected testimonial and activate its dot
    testimonialCards[index].classList.add("active")
    dots[index].classList.add("active")

    // Update current index
    currentIndex = index
  }

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = Number.parseInt(this.getAttribute("data-index"))
      showTestimonial(index)
    })
  })

  // Event listeners for prev/next buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      let index = currentIndex - 1
      if (index < 0) {
        index = testimonialCards.length - 1
      }
      showTestimonial(index)
    })

    nextBtn.addEventListener("click", () => {
      let index = currentIndex + 1
      if (index >= testimonialCards.length) {
        index = 0
      }
      showTestimonial(index)
    })
  }

  // Auto-rotate testimonials every 5 seconds
  let testimonialInterval = setInterval(() => {
    let index = currentIndex + 1
    if (index >= testimonialCards.length) {
      index = 0
    }
    showTestimonial(index)
  }, 5000)

  // Pause auto-rotation when hovering over testimonials
  if (testimonialContainer) {
    testimonialContainer.addEventListener("mouseenter", () => {
      clearInterval(testimonialInterval)
    })

    // Resume auto-rotation when mouse leaves
    testimonialContainer.addEventListener("mouseleave", () => {
      testimonialInterval = setInterval(() => {
        let index = currentIndex + 1
        if (index >= testimonialCards.length) {
          index = 0
        }
        showTestimonial(index)
      }, 5000)
    })
  }

  // Typing animation for hero section
  const typingElement = document.querySelector(".hero-text h2")
  if (typingElement) {
    const text = typingElement.textContent
    typingElement.textContent = ""

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i)
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
  }
})

// Function to animate the hero text
function animateHeroText() {
  const heroText = document.querySelector(".hero-text h1")
  if (!heroText) return

  // Clear any existing content
  const originalText = heroText.textContent
  heroText.innerHTML = ""

  // Split text parts
  const textParts = ["Hi, I'm ", "Firaol Bulo"]
  const fullText = "Hi, I'm Firaol Bulo"

  // Animate each character
  fullText.split("").forEach((char, index) => {
    const charSpan = document.createElement("span")
    charSpan.textContent = char
    charSpan.classList.add("animated-text")
    charSpan.style.animationDelay = `${index * 0.1}s`

    // Add gradient to "Firaol Bulo"
    if (index >= textParts[0].length) {
      charSpan.classList.add("gradient-text")
    }

    // Preserve spaces properly
    if (char === " ") {
      charSpan.innerHTML = "&nbsp;"
    }
    if(char==="\n"){
      charSpan.innerHTML = "<br>"
    }

    heroText.appendChild(charSpan)
  })

  // Certificate Modal Functions
  window.showCertModal = function(certType) {
    const modal = document.getElementById('certModal')
    const modalImage = document.getElementById('certModalImage')
    const modalTitle = document.getElementById('certModalTitle')
    const modalProgram = document.getElementById('certModalProgram')
    const modalDescription = document.getElementById('certModalDescription')
    const modalIssuer = document.getElementById('certModalIssuer')
    const modalDate = document.getElementById('certModalDate')
    const modalDownload = document.getElementById('certModalDownload')

    // Certificate data
    const certificates = {
      a2sv: {
        title: 'Certificate Details - A2SV',
        program: 'African to Silicon Valley (A2SV)',
        description: 'Comprehensive software engineering program focusing on data structures, algorithms, and full-stack development. Selected as one of Ethiopia\'s top tech talents for intensive training in preparation for global tech opportunities.',
        issuer: 'African to Silicon Valley',
        date: '2023 - 2025',
        image: 'asset/certificates/a2sv.jpg',
        download: 'asset/certificates/a2sv-cert.pdf'
      },
      kifiya: {
        title: 'Certificate Details - Kifiya AI Program',
        program: 'Kifiya AI Program',
        description: 'An intensive 12-week project-based training program focused on practical skills in data engineering, machine learning, generative AI, and modern deployment technologies. The program emphasizes hands-on experience with real-world projects and professional development. Highlights include: Comprehensive 3-month (12-week) project-based training curriculum, cutting-edge technologies including Generative AI and RAG systems, practical experience with Docker, CI/CD, and cloud deployment, professional development in enterprise work culture and communication, direct mentorship from industry experts and founders, focus on both technical excellence and career readiness, and end-to-end project experience from data processing to deployment. This program provides comprehensive preparation for roles in data engineering, machine learning, and AI development.',
        issuer: 'Kifiya Technologies',
        date: '2025',
        image: 'asset/certificates/kifiya-detail.jpg',
        download: 'asset/certificates/kifiya-cert.pdf'
      }
    }

    const cert = certificates[certType]

    if (cert) {
      modalTitle.textContent = cert.title
      modalProgram.textContent = cert.program
      modalDescription.textContent = cert.description
      modalIssuer.textContent = cert.issuer
      modalDate.textContent = cert.date
      modalImage.src = cert.image
      modalDownload.href = cert.download

      modal.style.display = 'block'
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }
  }

  window.closeCertModal = function(event) {
    const modal = document.getElementById('certModal')
    modal.style.display = 'none'
    document.body.style.overflow = 'auto' // Restore background scrolling

    // If click was outside the modal content, close it
    if (event && event.target === modal) {
      return
    }
  }

  // Close modal when clicking outside of it or on the close button
  document.addEventListener('click', function(event) {
    const modal = document.getElementById('certModal')
    if (event.target === modal) {
      closeCertModal()
    }
  })

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeCertModal()
    }
  })

  // Show More Projects Toggle
  window.toggleProjects = function() {
    const hiddenProjects = document.querySelectorAll('.hidden-projects')
    const showMoreBtn = document.getElementById('showMoreBtn')
    const showMoreIcon = document.getElementById('showMoreIcon')
    const showMoreText = document.getElementById('showMoreText')
    const showMoreContainer = document.getElementById('showMoreContainer')

    const isExpanded = showMoreBtn.classList.contains('expanded')

    if (isExpanded) {
      // Hide additional projects
      hiddenProjects.forEach(project => {
        project.style.display = 'none'
      })

      // Update button to "Show More"
      showMoreIcon.classList.remove('fa-chevron-up')
      showMoreIcon.classList.add('fa-chevron-down')
      showMoreText.textContent = 'Show More Projects'
      showMoreBtn.classList.remove('expanded')

      // Smooth scroll to show more button
      showMoreContainer.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      // Show all projects
      hiddenProjects.forEach(project => {
        project.style.display = 'block'
      })

      // Update button to "Show Less"
      showMoreIcon.classList.remove('fa-chevron-down')
      showMoreIcon.classList.add('fa-chevron-up')
      showMoreText.textContent = 'Show Less Projects'
      showMoreBtn.classList.add('expanded')

      // Smooth scroll to last project
      const lastProject = hiddenProjects[hiddenProjects.length - 1]
      if (lastProject) {
        lastProject.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  // Initialize hidden projects on page load
  document.addEventListener('DOMContentLoaded', function() {
    const hiddenProjects = document.querySelectorAll('.hidden-projects')
    hiddenProjects.forEach(project => {
      project.style.display = 'none'
    })
  })
}
