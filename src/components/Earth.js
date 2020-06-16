import React, { useRef } from "react"
import earthMap from "../textures/earthdayhq.jpg"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"

const Earth = ({ spin }) => {
  const mesh = useRef()
  const texture = useLoader(TextureLoader, earthMap)

  return (
    <mesh ref={mesh} rotation={[0.436, spin, 0]}>
      <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  )
}

export default Earth
