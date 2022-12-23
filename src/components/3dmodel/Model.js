import "./Model.css"
import { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useHelper, Sparkles } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { PointLightHelper } from 'three'
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from "react";

//------------------------------------------------------------------

// Add 3D model

// path of model from "Public" dir
const model_path = 'Model/scene.gltf'

function Model() {

  console.log("Some Model Textures will not be loaded to improve speed.")

  // load the model using the GLTFLoader
  console.log("Loading the 3D model...")
  const model = useLoader(GLTFLoader, model_path)
  console.log(model)

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

const ThreeApp = () => {

  // Loader to show while the model is being loaded.
  function Loader() {
    const { progress } = useProgress()
    return <Html style={{ color: "white", fontSize: "20px", fontFamily:"sans-serif" }}>{progress.toFixed(2)} % </Html>
  }

  return (
    <Canvas onCreated={state => state.gl.setClearAlpha(alpha)} >
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <PerspectiveCamera makeDefault position={[0, 4.5, 8.5]} />
      {/* <axesHelper args={[20]} /> */}
      <OrbitControls minPolarAngle={0.5} maxPolarAngle={1.5} />
      <Light />
      <FarmLight />
      <Sparkles count={200} size={3} scale={7} position={[-3, 1, 4]} color={0xFFA500} />
    </Canvas>
  )
}

const Background3D = () => {
  const CanvasSize = { height: "100vh", width: "100vw" }
  return (
    <div id="container" style={CanvasSize}>
      <ThreeApp />
    </div>
  )
}

export default Background3D;