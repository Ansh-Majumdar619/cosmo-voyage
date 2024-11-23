import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

const StaticEuphora = ({ scale }) => {
  const { scene } = useGLTF('/assets/3d models/purple planet.glb');
  const modelRef = useRef();

  return <primitive ref={modelRef} object={scene} scale={scale} position={[0, 0, 0]} />;
};

const EuphoraModel = () => {
  const [scale, setScale] = useState(8.0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScale(4.0);  // Set smaller scale for small devices (e.g., tablets)
      } else {
        setScale(8.0);  // Default scale for larger screens
      }
    };

    // Set initial scale on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 15] }} // Adjust the Z value to control zoom
      style={{ width: '100%', height: '400px' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <StaticEuphora scale={scale} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default EuphoraModel;
