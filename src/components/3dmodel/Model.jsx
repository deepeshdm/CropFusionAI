import "./Model.css"
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useHelper, Sparkles } from '@react-three/drei';
import { PointLightHelper } from 'three'

//------------------------------------------------------------------

function Model(props) {

  console.log("Some Model Textures will not be loaded to improve speed.")

  const model = props.model;

  // increase model size
  model.scene.scale.set(1, 1, 1)

  // change position of model
  model.scene.position.set(-1, 0.1, 4)

  // rotate the model
  model.scene.rotation.set(0, 3, 0)

  return <primitive object={model.scene} />
}

//------------------------------------------------------------------

// Add Lights with Helper

const Light = () => {
  const ref = useRef()
  // useHelper(ref, PointLightHelper, 0.3)

  useFrame(() => {
    const time = window.performance.now()
    const radius = 4
    const speed = 0.001
    const x = radius * Math.cos(time * speed)
    ref.current.position.set(x, 4, 0)
  })

  return (
    <>
      <pointLight args={[0xf5f5f5, 1, 100]} position={[2, 4, 0]} ref={ref} />
    </>
  )
}

const FarmLight = () => {
  const ref = useRef()
  // useHelper(ref, PointLightHelper, 0.3)
  return (
    <>
      <pointLight args={[0xFFE1A8, 1, 100]} position={[-2, 1, 3]} ref={ref} />
    </>
  )
}

//------------------------------------------------------------------

const alpha = 0 // canvas background opacity

const ThreeApp = (props) => {

  return (
    <Canvas onCreated={state => state.gl.setClearAlpha(alpha)} >
      <PerspectiveCamera makeDefault position={[0, 4.5, 8.5]} />
      {/* <axesHelper args={[20]} /> */}
      <Sparkles count={230} size={4} scale={12} position={[-3, 1, 4]} color={0xFFA500} />
      <OrbitControls minPolarAngle={0.5} maxPolarAngle={1.5} />
      <Light />
      <FarmLight />
       <Model model={props.model}/>
    </Canvas>
  )
}

const Background3D = (props) => {
  const CanvasSize = { height: "100vh", width: "100vw" }
  return (
    <div id="container" style={CanvasSize}>
      <ThreeApp model={props.model}/>
    </div>
  )
}

export default Background3D;