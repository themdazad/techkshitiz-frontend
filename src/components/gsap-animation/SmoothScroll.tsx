import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ 
  children,
  duration = 1.2,
  smoothWheel = true,
  touchMultiplier = 2,
}) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth inertia easing
      smoothWheel,
      touchMultiplier,
    });

    lenisRef.current = lenis;

    // 2. Sync Lenis scroll events with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Drive Lenis updates inside GSAP's global animation ticker
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // Turn off GSAP lag smoothing to keep scroll animation in tight sync
    gsap.ticker.lagSmoothing(0);

    // Cleanup on component unmount
    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [duration, smoothWheel, touchMultiplier]);

  return <div className="w-full min-h-screen">{children}</div>;
}