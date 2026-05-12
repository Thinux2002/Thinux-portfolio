import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const SoftwareEngineer = ({ isMobile }) => {
  return (
    <group>
      <hemisphereLight intensity={1} groundColor="black" />

      <spotLight
        position={isMobile ? [-2, 5, 2] : [-3, 6, 3]}
        angle={0.25}
        penumbra={1}
        intensity={120}
        castShadow
        shadow-mapSize-width={1024}
        color="#D84727"
      />

      <pointLight
        position={isMobile ? [2, 2, 2] : [3, 3, 3]}
        intensity={2}
        color="#ffffff"
      />

      <mesh
        position={isMobile ? [0, -1.35, 0] : [0, -1.45, 0]}
        rotation={[0, -0.2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.2, 1.4, 0.1]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      <mesh
        position={isMobile ? [0, -2.0, 0] : [0, -2.1, 0]}
        rotation={[0, -0.2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.2, 0.9, 0.2]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.6} roughness={0.35} />
      </mesh>

      <mesh
        position={isMobile ? [0, -2.5, 0] : [0, -2.6, 0]}
        rotation={[0, -0.2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.8, 0.14, 1.4]} />
        <meshStandardMaterial color="#1f2937" metalness={0.25} roughness={0.5} />
      </mesh>

      <mesh
        position={isMobile ? [0, -2.52, 0.2] : [0, -2.62, 0.2]}
        rotation={[-0.3, -0.2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.6, 0.05, 0.8]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  );
};

const SoftwareEngineerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 8], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SoftwareEngineer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SoftwareEngineerCanvas;
