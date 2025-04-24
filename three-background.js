// 3D Background with Three.js
document.addEventListener("DOMContentLoaded", () => {
  // Check if WebGL is available
  if (!window.WebGLRenderingContext) {
    console.log("WebGL not supported. Using fallback background.")
    return
  }

  // Import Three.js from CDN
  const script = document.createElement("script")
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
  script.onload = initThreeBackground
  document.head.appendChild(script)

  function initThreeBackground() {
    // Declare THREE variable
    let THREE

    const canvas = document.getElementById("bg-canvas")

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      // Random positions for x, y, z
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim() || "#6366f1",
      transparent: true,
      opacity: 0.8,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Position camera
    camera.position.z = 3

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100
      mouseY = (event.clientY - window.innerHeight / 2) / 100
    }

    document.addEventListener("mousemove", onDocumentMouseMove)

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })

    // Theme change handler
    const themeToggle = document.querySelector(".theme-toggle")
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        setTimeout(() => {
          particlesMaterial.color.set(
            getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim() || "#6366f1",
          )
        }, 100)
      })
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      // Responsive to mouse movement
      particlesMesh.rotation.x += mouseY * 0.0005
      particlesMesh.rotation.y += mouseX * 0.0005

      renderer.render(scene, camera)
    }

    animate()

    // Assign Three.js to the THREE variable after it's loaded
    const checkThree = setInterval(() => {
      if (window.THREE) {
        THREE = window.THREE
        clearInterval(checkThree)
      }
    }, 50)
  }
})
