import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

const SaturnModel = () => {
  const { scene } = useGLTF('/assets/3d models/saturn planet.glb');
  const [scale, setScale] = useState(8.0); // Default scale

  // Adjust scale based on screen size
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) {
        setScale(4.0); // Smaller scale for mobile devices
      } else if (screenWidth <= 768) {
        setScale(6.0); // Medium scale for tablets
      } else {
        setScale(8.0); // Default scale for larger screens
      }
    };

    // Set initial scale
    handleResize();

    // Update scale on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tilt the model by rotating it on the x-axis (downward tilt)
  scene.rotation.x = Math.PI / 4; // Rotate 45 degrees downward

  return (
    <Canvas
      camera={{ position: [0, 0, 30] }} // Adjust the Z value to control zoom
      style={{ width: '100%', height: '100%' }} // Allow canvas to take up full height and width of model-box
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive object={scene} scale={scale} position={[0, 0, 0]} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default SaturnModel;


