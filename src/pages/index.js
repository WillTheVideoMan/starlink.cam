import React, { Suspense, useRef } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls, Stats } from "drei"
import styled from "styled-components"

import SEO from "../components/seo"
import Earth from "../components/Earth"
import Layout from "../components/layout"
import Universe from "../components/Universe"

const StyledCanvas = styled(Canvas)`
  background-color: black;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Under Construction" />
      <StyledCanvas camera={{ position: [0, 0, 5], near: 1, far: 100 }}>
        <Suspense fallback={null}>
          <Universe />
        </Suspense>
        <OrbitControls />
        <Stats />
      </StyledCanvas>
    </Layout>
  )
}

export default IndexPage
