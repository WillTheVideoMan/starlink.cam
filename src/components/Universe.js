import React from "react"
import Earth from "./Earth"
import Sun from "./Sun"

const Universe = () => {
  return (
    <>
      <Earth epochUTCms={Date.now()} />
      <Sun />
      <ambientLight intensity={0.4} />
    </>
  )
}

export default Universe
