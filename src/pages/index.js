import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls, Stats } from "drei"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Universe from "../components/Universe"

const StyledCanvas = styled(Canvas)`
  background-color: black;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Under Construction" />
      <StyledCanvas camera={{ position: [0, 0, 5], near: 0.1, far: 100 }}>
        <Suspense fallback={null}>
          <Universe />
        </Suspense>
        <OrbitControls dampingFactor={0.05} enablePan={false} />
        <gridHelper args={[8, 8, `white`, `gray`]} />
        <Stats />
      </StyledCanvas>
    </Layout>
  )
}

export default IndexPage
