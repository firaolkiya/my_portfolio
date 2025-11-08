"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function GridMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = 0
    }
  }, [])

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += 0.001
    }
  })

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
      // Create grid pattern
      vec2 grid = fract(vUv * 20.0);
      float line = step(0.05, grid.x) * step(0.05, grid.y);
      line *= step(0.95, grid.x) + step(0.95, grid.y);
      
      // Scanning wave effect
      float wave = sin(vUv.y * 10.0 - uTime * 3.0) * 0.5 + 0.5;
      float scanLine = smoothstep(0.1, 0.0, abs(vUv.y - wave));
      
      // Combine grid and scan
      vec3 gridColor = vec3(0.0, 0.7, 1.0) * line;
      vec3 scanColor = vec3(0.0, 0.9, 1.0) * scanLine * 0.6;
      
      // Distance fade
      float fade = smoothstep(1.2, -0.2, length(vUv - 0.5) * 2.0);
      
      vec3 color = (gridColor + scanColor) * fade;
      gl_FragColor = vec4(color, fade * 0.8);
    }
  `

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export function GridScan() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <GridMesh />
      </Canvas>
    </div>
  )
}
