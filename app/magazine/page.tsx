'use client'

import { Experience } from '@/components/magazine/experience'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function MagazinePage() {
  return (
    <main className='min-h-screen'>
      <Loader />

      <Canvas
        shadows
        camera={{ position: [-0.5, 1, 4], fov: 45 }}
        style={{ height: '100vh', width: '100vw' }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </main>
  )
}
