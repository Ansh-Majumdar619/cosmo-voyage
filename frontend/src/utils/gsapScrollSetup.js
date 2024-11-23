import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useGsapScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Enable smooth scrolling effect
    ScrollTrigger.defaults({
      scroller: window,
      scrub: true, // Adds smooth scrolling
      ease: "power1.out",
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);
};
