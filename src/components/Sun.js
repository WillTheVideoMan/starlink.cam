import React, { useRef } from "react"
import { useHelper } from "drei"
import { DirectionalLightHelper } from "three"

const Sun = () => {
  const directionalLight = useRef()

  useHelper(directionalLight, DirectionalLightHelper, 0.5, "hotpink")

  return (
    <directionalLight
      ref={directionalLight}
      position={[0, 0, 4]}
      intensity={1}
    />
  )
}

export default Sun
