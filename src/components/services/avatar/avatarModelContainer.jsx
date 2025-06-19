import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { DeveloperModel } from "./DeveloperModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

const animations = ["idle", "salute", "clapping", "victory"]

const AvatarModelContainer = () => {
  const [animationIndex, setAnimationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex(prev => (prev + 1) % animations.length)
    }, 5000) // 5 seconds per animation

    return () => clearInterval(interval)
  }, [])

  const currentAnimation = animations[animationIndex]

  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="city" intensity={1.5}>
          <DeveloperModel animationName={currentAnimation} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.0]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  )
}

export default AvatarModelContainer
