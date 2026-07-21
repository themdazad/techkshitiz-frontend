import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GlowCursorWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCursorWrapper({ children, className }: GlowCursorWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    // Set up quick setter functions for high performance 60fps tracking
    const xTo = gsap.quickTo(glow, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(glow, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Get dimensions relative to the target element box bounding rect
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      xTo(x);
      yTo(y);
    };

    const handleMouseEnter = () => {
      gsap.to(glow, { opacity: 1, scale: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, { opacity: 0, scale: 0, duration: 0.3 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full h-full bg-cyber-grid ${className || ""}`}
    >
      {/* Radial ambient background base glow to simulate the page look */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
      
      {/* The Dynamic Follower Blur Circle */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none opacity-0 scale-0 w-80 h-80 -left-40 -top-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-[80px] will-change-transform mix-blend-screen"
      />

      {/* Box Inner Contents */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}