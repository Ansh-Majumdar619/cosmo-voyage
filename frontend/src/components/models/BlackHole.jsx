import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

const BlackHoleModel = () => {
  const { scene } = useGLTF('/assets/3d models/blackhole.glb');
  const modelRef = useRef();
  const [scale, setScale] = useState(6.0); // Default scale

  // Adjust the model scale based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScale(3.0); // Smaller scale for small screens
      } else if (window.innerWidth <= 768) {
        setScale(4.0); // Slightly smaller for tablets
      } else {
        setScale(6.0); // Default scale for larger screens
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Call once to set initial scale
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply the 45-degree rotation (Math.PI / 4) downwards on the X-axis
  useFrame(() => {
    if (scene) {
      scene.rotation.x = Math.PI / 4; // Rotate 45 degrees downward
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} position={[0, 0, 0]} />;
};

const BlackModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 30] }} // Adjust the Z value to control zoom
      style={{ width: '100%', height: '400px' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <BlackHoleModel />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default BlackModel;
