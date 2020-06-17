import React from "react"
import Earth from "./Earth"
import Sun from "./Sun"
import Starlink from "./Starlink"

const Universe = () => {
  return (
    <>
      {/*<Earth epochUTCms={Date.now()} />*/}
      <Sun />
      <Starlink
        inclination={51.6416}
        rightAscensionOfAscendingNode={247.4627}
        eccentricity={0.0006703}
        argumentOfPeriapsis={130.536}
        meanAnomalyAtEpoch={325.0288}
        meanMotion={15.72125391}
        epochYear={2008}
        epochDayFraction={264.51782528}
      />
      <ambientLight intensity={0.4} />
    </>
  )
}

export default Universe
