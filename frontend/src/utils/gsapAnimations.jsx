// src/utils/gsapAnimations.jsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// This function initializes smooth scrolling
export const initSmoothScroll = () => {
  gsap.to(window, { duration: 1, scrollTo: { y: "max", autoKill: false } });
};

// This function sets up animations for sections
export const initSectionAnimations = (sections) => {
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
  });
};
