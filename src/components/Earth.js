import React, { useRef, useMemo } from "react"
import earthMap from "../textures/earthdayhq.jpg"
import { useLoader, useFrame } from "react-three-fiber"
import { TextureLoader } from "three"
import lerp from "lerp"

const Earth = ({ epochUTCms }) => {
  const mesh = useRef()
  const texture = useLoader(TextureLoader, earthMap)

  const spinOffset = useMemo(
    () => Math.PI * 0.5 + (Math.PI * 2 * ((epochUTCms / 1000) % 86400)) / 86400,
    [epochUTCms]
  )

  useFrame(state => {
    mesh.current.rotation.y =
      spinOffset +
      lerp(0, Math.PI * 2, (state.clock.elapsedTime % 86400) / 86400)
  })

  return (
    <mesh ref={mesh} rotation-y={spinOffset}>
      <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  )
}

export default Earth
