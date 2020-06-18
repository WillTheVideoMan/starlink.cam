import React, { useEffect, useRef } from "react"
import orb from "orbjs"

const Starlink = ({
  inclination,
  rightAscensionOfAscendingNode,
  eccentricity,
  argumentOfPeriapsis,
  meanAnomalyAtEpoch,
  meanMotion,
  epochUTCString,
}) => {
  const dummyUTC = Date.now()
  const mesh = useRef()
  const dummyOffset = useRef(0)
  const earthRadius = 6.3781e6

  const epochJulianSeconds = orb.time.dateToJD(new Date(epochUTCString)) * 86400

  const semiMajorAxis = orb.functions.orbitalPeriodToSemimajorAxis(
    (1 / meanMotion) * 86400
  )

  console.log(semiMajorAxis)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentJulianSeconds =
        orb.time.dateToJD(dummyUTC + dummyOffset.current) * 86400

      const [x, xDot] = orb.propagators.keplerian(
        semiMajorAxis,
        eccentricity,
        inclination,
        rightAscensionOfAscendingNode,
        argumentOfPeriapsis,
        currentJulianSeconds,
        epochJulianSeconds,
        meanAnomalyAtEpoch
      )

      mesh.current.position.x = x[0] / earthRadius
      mesh.current.position.y = x[1] / earthRadius
      mesh.current.position.z = x[2] / earthRadius

      dummyOffset.current += 50000
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[0.01, 16, 8]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  )
}

export default Starlink
