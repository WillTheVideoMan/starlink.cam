import React from "react"

const Starlink = ({
  inclination,
  rightAscensionOfAscendingNode,
  eccentricity,
  argumentOfPeriapsis,
  meanAnomalyAtEpoch,
  meanMotion,
  epochYear,
  epochDayFraction,
}) => {
  const mu = 3.986004418e14 //For Earth

  const period = (1 / meanMotion) * 86400

  const semiMajorAxis = Math.cbrt(
    (Math.pow(period, 2) * mu) / (4 * Math.pow(Math.PI, 2))
  )

  const now = new Date(1592411760790)

  const deltaT =
    (now.getUTCFullYear() - epochYear - (now.getUTCFullYear() - 1970)) *
      31557600 +
    now.getTime() / 1000

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  )
}

export default Starlink
