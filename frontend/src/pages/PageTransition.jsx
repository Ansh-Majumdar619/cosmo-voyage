import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ y: '-100vh', opacity: 0 }}  // Starts from above the screen
      animate={{ y: 0, opacity: 1 }}         // Moves to normal position with full opacity
      exit={{ y: '100vh', opacity: 0 }}      // Moves down to the bottom of the screen
      transition={{ duration: 1 }}           // Adjusts the duration for smoothness
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
