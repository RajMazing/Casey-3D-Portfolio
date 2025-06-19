


import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"
import { AnimeModel } from "./AnimeModel"


const AnimeModelContainer = () => {
  return (
   <Canvas>
    <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
<AnimeModel />
        </Stage>
        
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1,0,1.0]} zoom={0.8} makeDefault/>
    </Suspense>
   </Canvas>
  )
}

export default AnimeModelContainer