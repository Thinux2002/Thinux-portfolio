import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { BufferGeometry, LineBasicMaterial, LineSegments } from 'three';
import { Preload } from '@react-three/drei';

const Rain = () => {
  const ref = useRef();
  const positionsRef = useRef(new Float32Array(2000 * 6)); // Initialize with ref

  useEffect(() => {
    const positions = new Float32Array(2000 * 6);
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * 10 - 5; // Generate a random x coordinate for each droplet
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;
      positions[i * 6] = x;
      positions[i * 6 + 1] = y; 
      positions[i * 6 + 2] = z;
      positions[i * 6 + 3] = x;
      positions[i * 6 + 4] = y - 0.05; // End point slightly below start point
      positions[i * 6 + 5] = z;
    }
    positionsRef.current.set(positions); // Set initial values
  }, []);
  

  useFrame((state, delta) => {
    for (let i = 0; i < 2000; i++) {
      positionsRef.current[i * 6 + 1] -= delta * 0.5;
      positionsRef.current[i * 6 + 4] -= delta * 0.5;
      if (positionsRef.current[i * 6 + 1] < -1) {
        positionsRef.current[i * 6 + 1] = 1;
        positionsRef.current[i * 6 + 4] = 0.95;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positionsRef.current}
          count={positionsRef.current.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#D84727" opacity={0.5} transparent />
    </lineSegments>
  );
};


const RainCanvas = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 100); // Flash duration
    }, Math.random() * 5000 + 3000); // Random interval between flashes
    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundColor: flash ? '#672213' : '#000000', // Change background color on flash
    transition: `background-color ${Math.random() * 0.5 + 0.1}s ease-in-out`, // Randomize transition duration
  };

  return (
    <div className='w-full h-full absolute inset-0 z-[-1]' style={backgroundStyle}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Rain />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default RainCanvas;
