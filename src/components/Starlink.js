import React, { useEffect, useRef } from "react"
import orb from "orbjs"
import { Vector3 } from "three"

const Starlink = ({
  inclination,
  rightAscensionOfAscendingNode,
  eccentricity,
  argumentOfPeriapsis,
  meanAnomalyAtEpoch,
  meanMotion,
  epochUTCUnix,
}) => {
  const dummyUTC = Date.now()
  const mesh = useRef()
  const dummyOffset = useRef(0)
  const earthRadius = 6.3781e6

  const geometryRef = useRef()

  const points = useRef([])

  const epochJulianSeconds = orb.time.dateToJD(epochUTCUnix) * 86400

  const semiMajorAxis = orb.functions.orbitalPeriodToSemimajorAxis(
    (1 / meanMotion) * 86400
  )

  for (let i = 0; i < 111; i++) {
    const currentJulianSeconds =
      orb.time.dateToJD(dummyUTC + dummyOffset.current) * 86400

    const [x] = orb.propagators.keplerian(
      semiMajorAxis,
      eccentricity,
      inclination,
      rightAscensionOfAscendingNode,
      argumentOfPeriapsis,
      currentJulianSeconds,
      epochJulianSeconds,
      meanAnomalyAtEpoch
    )

    dummyOffset.current += 50000

    points.current.push(
      new Vector3(x[0] / earthRadius, x[1] / earthRadius, x[2] / earthRadius)
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentJulianSeconds =
        orb.time.dateToJD(dummyUTC + dummyOffset.current) * 86400

      const [x] = orb.propagators.keplerian(
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
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    geometryRef.current.setFromPoints(points.current)
    geometryRef.current.computeBoundingSphere()
  })

  return (
    <>
      <mesh ref={mesh}>
        <sphereBufferGeometry attach="geometry" args={[0.01, 16, 8]} />
        <meshStandardMaterial attach="material" />
      </mesh>
      <line>
        <bufferGeometry attach="geometry" ref={geometryRef} />
        <lineBasicMaterial attach="material" color={0x0000ff} />
      </line>
    </>
  )
}

export default Starlink
