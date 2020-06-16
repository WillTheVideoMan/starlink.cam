import React, { useMemo, useEffect, useRef } from "react"
import earthMapDay from "../textures/earthmap1k.jpg"
import earthMapNight from "../textures/earthlights1k.jpg"
import { useLoader, useFrame } from "react-three-fiber"
import { TextureLoader, Vector3 } from "three"

const vertexShader = `
varying vec3 vNormal;
varying vec2 vUv;

void main(){

  vNormal = normal;

  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}
`

const fragmentShader = `
uniform vec3 sunDirection;
uniform sampler2D dayTexture;
uniform sampler2D nightTexture;

varying vec3 vNormal;
varying vec2 vUv;

  void main(){

    vec3 dayColour = texture2D(dayTexture, vUv).rgb;
    vec3 nightColour = texture2D(nightTexture, vUv).rgb;

    vec3 light = normalize(sunDirection);
    float dProd = max(0.0,dot(vNormal, light));

    vec3 colour = mix(nightColour, dayColour, dProd);

    gl_FragColor = vec4(colour,1.0);
  }
`

const Earth = ({ sunPosition }) => {
  const mesh = useRef()
  const dayTexture = useLoader(TextureLoader, earthMapDay)
  const nightTexture = useLoader(TextureLoader, earthMapNight)

  const uniforms = useMemo(
    () => ({
      dayTexture: {
        value: dayTexture,
      },
      nightTexture: {
        value: nightTexture,
      },
      sunDirection: {
        value: new Vector3(0, 0, 0),
      },
    }),
    []
  )

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms-sunDirection-value={
          new Vector3(sunPosition[0], sunPosition[1], sunPosition[2])
        }
      />
    </mesh>
  )
}

export default Earth
