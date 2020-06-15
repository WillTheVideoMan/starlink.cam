import React from "react"
import earthMap from "../textures/earthmap1k.jpg"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"
import { Sphere } from "drei"

const Earth = () => {
  const texture = useLoader(TextureLoader, earthMap)
  return (
    <Sphere args={[5, 32, 32]}>
      <meshStandardMaterial attach="material" map={texture} />
    </Sphere>
  )
}

export default Earth
