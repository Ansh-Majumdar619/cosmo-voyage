// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// const RotatingMoon = () => {
//   const { scene } = useGLTF('/assets/3d models/animated moon.glb'); 
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.005; 
//     }
//   });

//   return <primitive ref={modelRef} object={scene} scale={9.55} position={[0, 0, 0]} />; 
// };

// const MoonModel = () => {
//   return (
//     <Canvas 
//     camera={{ position: [0, 0, 5] }} 
//     style={{ width: '100%', height: '400px' }}> 
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <RotatingMoon /> 
//       <OrbitControls 
//         enableZoom={false} 
//         maxPolarAngle={Math.PI} 
//         minPolarAngle={0} 
//       />
//       <Environment preset="sunset" />
//     </Canvas>
//   );
// };

// export default MoonModel;























import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, PerformanceMonitor, Html } from '@react-three/drei';

const RotatingMoon = ({ scale }) => {
  const { scene } = useGLTF('/assets/3d models/animated moon.glb'); // Ensure the path is correct
  const modelRef = useRef();

  if (!scene) return null; // Handle case when model is not loaded yet

  return <primitive ref={modelRef} object={scene} scale={scale} position={[0, 0, 0]} />;
};

const MoonModel = () => {
  // State to store the scale factor based on window size
  const [scaleFactor, setScaleFactor] = useState(9.55);

  // Effect hook to track window width and adjust the scale factor
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScaleFactor(4); // Reduce size for small devices
      } else if (width <= 768) {
        setScaleFactor(6); // Slightly smaller for medium devices
      } else {
        setScaleFactor(9.55); // Default size for larger screens
      }
    };

    // Set the initial scale on load
    handleResize();

    // Add resize event listener to update scale factor on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ width: '100%', height: '400px' }}>
      <PerformanceMonitor>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense fallback={<Html center>Loading...</Html>}>
          <RotatingMoon scale={scaleFactor} />
        </Suspense>

        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={0} />
        <Environment preset="sunset" />
      </PerformanceMonitor>
    </Canvas>
  );
};

export default MoonModel;
