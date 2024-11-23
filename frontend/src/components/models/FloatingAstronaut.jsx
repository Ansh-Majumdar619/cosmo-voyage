import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

const RotatingModel = () => {
  const { scene } = useGLTF('/assets/3d models/space_boi.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; 
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.5} position={[0, -1, 0]} />;
};

const AstronautModel = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <RotatingModel /> 
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 3} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default AstronautModel;
