import React from "react"
import Earth from "./Earth"
import Sun from "./Sun"
import Starlink from "./Starlink"

const Universe = () => {
  return (
    <>
      <Earth epochUTCms={Date.now()} />
      <Sun />
      <Starlink
        inclination={51.6416}
        rightAscensionOfAscendingNode={247.4627}
        eccentricity={0.0006703}
        argumentOfPeriapsis={130.536}
        meanAnomalyAtEpoch={325.0288}
        meanMotion={15.72125391}
        epochUTCUnix={new Date("2008-09-20T12:28:00").getTime()}
      />
      <ambientLight intensity={0.4} />
    </>
  )
}

export default Universe
