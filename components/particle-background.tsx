"use client"

import { useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function ParticleField() {
  const groupRef = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)

  useEffect(() => {
    if (!pointsRef.current) return

    const count = 5000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200
      positions[i + 1] = (Math.random() - 0.5) * 200
      positions[i + 2] = (Math.random() - 0.5) * 200
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    pointsRef.current.geometry = geometry
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= 0.00005
      groupRef.current.rotation.y -= 0.0001
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial transparent color="#0ea5e9" size={0.5} sizeAttenuation={true} depthWrite={false} />
      </points>
    </group>
  )
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 100], fov: 75 }} dpr={[1, 2]} performance={{ min: 0.1 }}>
        <ParticleField />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}
