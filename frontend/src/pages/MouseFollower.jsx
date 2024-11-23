import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Animate the follower to the mouse position
      gsap.to(followerRef.current, {
        x: event.clientX,
        y: event.clientY,
        skew: true,
        duration: 0.5, // Adjust for smoother or snappier effect
        // ease: 'power2.out',
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        width: '20px',
        height: '20px',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#907971',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default MouseFollower;
