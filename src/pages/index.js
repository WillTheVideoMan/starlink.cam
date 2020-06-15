import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls } from "drei"

import SEO from "../components/seo"
import Earth from "../components/Earth"

const IndexPage = () => (
  <>
    <SEO title="Under Construction" />
    <Canvas camera={{ position: [0, 0, 15], near: 1, far: 1000 }}>
      <ambientLight />
      <Suspense fallback={null}>
        <Earth position={[0, 0, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  </>
)

export default IndexPage
