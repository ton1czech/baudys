// import { Canvas } from '@react-three/fiber'
// import {
//   OrbitControls,
//   PerspectiveCamera,
//   Preload,
//   useGLTF,
// } from '@react-three/drei'
// import { Suspense } from 'react'
// import Loader from './loader'

// const Lamp = () => {
//   const lamp = useGLTF('/3D/lamp/scene.gltf')

//   return (
//     <mesh>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <primitive object={lamp.scene} scale={1} />
//     </mesh>
//   )
// }

// export default function LampCanvas() {
//   return (
//     <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
//       <PerspectiveCamera makeDefault fov={75} position={[0, 0, 15]} />
//       <Suspense fallback={<Loader />}>
//         <OrbitControls
//           autoRotate
//           minPolarAngle={Math.PI / 2}
//           maxPolarAngle={0}
//           enableZoom={false}
//         />
//         <Lamp />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   )
// }
