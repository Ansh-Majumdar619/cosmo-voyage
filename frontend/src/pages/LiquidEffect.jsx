import React, { useEffect } from 'react';

const LiquidEffect = ({ src, alt }) => {
  useEffect(() => {
    if (window.Shery) {
      window.Shery.imageEffect(".img", {
        style: 1,  // Liquid effect
        debug: true,  // Optional: enables debug mode
      });
    }
  }, []);

  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="img"  // This targets the image for the effect
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default LiquidEffect;
