// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// const RotatingMars = () => {
//   const { scene } = useGLTF('/assets/3d models/mars.glb');
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.005; // Rotate the model
//     }
//   });

//   return <primitive ref={modelRef} object={scene} scale={9.55} position={[0, 0, 0]} />;
// };

// const MarsModel = () => {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 30] }} // Adjust the Z value to control zoom
//       style={{ width: '100%', height: '400px' }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <RotatingMars />
//       <OrbitControls
//         enableZoom={false}
//         maxPolarAngle={Math.PI}
//         minPolarAngle={0}
//       />
//       <Environment preset="sunset" />
//     </Canvas>
//   );
// };

// export default MarsModel;

















import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, PerformanceMonitor, Html } from '@react-three/drei';

const RotatingMars = () => {
  const { scene } = useGLTF('/assets/3d models/mars.glb'); // Ensure the path is correct
  const modelRef = useRef();
  const [scale, setScale] = useState(7.0); // Default scale

  // Adjust scale based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScale(3.5); // Smaller scale for mobile devices
      } else if (window.innerWidth <= 768) {
        setScale(5.0); // Moderate scale for tablets
      } else {
        setScale(7.0); // Default scale for larger screens
      }
    };

    handleResize(); // Set scale on initial render
    window.addEventListener('resize', handleResize); // Update scale on resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  if (!scene) return null; // Handle case when model is not loaded yet

  return <primitive ref={modelRef} object={scene} scale={scale} position={[0, 0, 0]} />;
};

const MarsModel = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 30] }} 
      style={{ width: '100%', height: '400px' }}
    >
      <PerformanceMonitor>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={<Html center>Loading...</Html>}> {/* Use Html component for loading text */}
          <RotatingMars />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI} 
          minPolarAngle={0} 
        />
        <Environment preset="sunset" />
      </PerformanceMonitor>
    </Canvas>
  );
};

export default MarsModel;
