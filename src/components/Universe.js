import React, { useRef } from "react"
import Earth from "./Earth"
import Sun from "./Sun"

const Universe = () => {
  return (
    <>
      <Earth position={[0, 0, 0]} spin={0} />
      <Sun />
      <ambientLight intensity={0.4} />
    </>
  )
}

export default Universe
