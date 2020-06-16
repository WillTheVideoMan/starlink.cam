import React, { useRef } from "react"
import { useFrame } from "react-three-fiber"
import Earth from "./Earth"
import Sun from "./Sun"

const Universe = () => {
  return (
    <>
      <Earth position={[0, 0, 0]} sunPosition={[0, 0, 5]} />
      <Sun />
    </>
  )
}

export default Universe
