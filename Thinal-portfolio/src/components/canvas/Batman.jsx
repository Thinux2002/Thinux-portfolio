import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Batman = ({isMobile}) => {
  const batman = useGLTF('./batman/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1}
      groundColor="black"/>
      <spotLight
        position={isMobile ? [-1, 5, 2]:[-1, 4, 1.5]}
        penumbra={1}
        intensity={800}
        castShadow
        shadow-mapSize-width={1024}
        color="#D84727"
      />
       <pointLight position={isMobile ?[2, 1, 1]:[2, 2, 1]} intensity={5} rotation={[5,0,-0.1]} />
 
      <primitive
        object = {batman.scene}
        scale = {isMobile ? 0.15 : 0.13}
        position = {isMobile ? [0,-3,0] : [0,-3.25,0]}
        rotation={[0,1.25,0]}
      />
    </mesh>
  )
}

const BatmanCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  },[]);

  return (
    <Canvas
      frameloop = "demand"
      shadows
      camera={{position: [20,3,5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Batman isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BatmanCanvas;
