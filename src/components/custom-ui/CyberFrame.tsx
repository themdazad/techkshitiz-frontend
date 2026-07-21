import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { playHoverSound, playClickSound } from '@/utils/techSounds';

export type FrameVariant = 'modern' | 'cyberpunk' | 'minimalist';
export type FrameRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

export interface CyberFrameProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  showOnHover?: boolean;
  variant?: FrameVariant;
  rounded?: FrameRadius;
  enableSound?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const RADIUS_MAP: Record<FrameRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-3xl",
};

export default function CyberFrame({
  children,
  className = "",
  glowColor = "rgba(20, 108, 184, 0.4)",
  showOnHover = true,
  variant = "modern",
  rounded = "none",
  enableSound = true,
  onClick,
}: CyberFrameProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const hoverGlowRef = useRef<HTMLDivElement | null>(null);
  const overlayElementsRef = useRef<HTMLDivElement[]>([]);

  const roundedClass = RADIUS_MAP[rounded] || RADIUS_MAP.none;

  const addToOverlayElements = (el: HTMLDivElement | null): void => {
    if (el && !overlayElementsRef.current.includes(el)) {
      overlayElementsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      // Continuous breathing glow effect
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.6,
          scale: 1.02,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Entrance animation for corner crosshairs and tech accents
      if (!showOnHover && overlayElementsRef.current.length > 0) {
        gsap.from(overlayElementsRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.5)",
        });
      }
    },
    { scope: containerRef, dependencies: [showOnHover, variant] }
  );

  const handleMouseEnter = (): void => {
    if (enableSound) playHoverSound();

    if (overlayElementsRef.current.length > 0) {
      gsap.to(overlayElementsRef.current, {
        opacity: 1,
        scale: showOnHover ? 1 : 1.2,
        duration: 0.3,
        stagger: showOnHover ? 0.04 : 0.03,
        ease: "power2.out",
      });
    }

    if (hoverGlowRef.current) {
      gsap.to(hoverGlowRef.current, {
        opacity: 0.9,
        boxShadow: `0px 0px 40px 10px ${glowColor}`,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (): void => {
    if (overlayElementsRef.current.length > 0) {
      gsap.to(overlayElementsRef.current, {
        opacity: showOnHover ? 0 : 1,
        scale: showOnHover ? 0.8 : 1,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.in",
      });
    }

    if (hoverGlowRef.current) {
      gsap.to(hoverGlowRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (enableSound) playClickSound();

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.98 },
        { scale: 1, duration: 0.15, ease: "power2.out" }
      );
    }

    if (onClick) onClick(e);
  };

  const renderCorners = (): React.ReactNode => {
    const baseOpacity = showOnHover ? 0 : 1;

    switch (variant) {
      case "cyberpunk":
        return (
          <>
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -top-2 -left-2 z-20 pointer-events-none flex flex-col items-start gap-[2px]">
              <div className="w-4 h-[2px] bg-primary" />
              <div className="w-[2px] h-3 bg-primary" />
            </div>
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -top-2 -right-2 z-20 pointer-events-none flex flex-col items-end gap-[2px]">
              <div className="w-4 h-[2px] bg-primary" />
              <div className="w-[2px] h-3 bg-primary" />
            </div>
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -bottom-2 -left-2 z-20 pointer-events-none flex flex-col items-start gap-[2px]">
              <div className="w-[2px] h-3 bg-primary" />
              <div className="w-4 h-[2px] bg-primary" />
            </div>
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -bottom-2 -right-2 z-20 pointer-events-none flex flex-col items-end gap-[2px]">
              <div className="w-[2px] h-3 bg-primary" />
              <div className="w-4 h-[2px] bg-primary" />
            </div>
          </>
        );

      case "minimalist":
        return (
          <>
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-primary/80 z-20 pointer-events-none" />
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary/80 z-20 pointer-events-none" />
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-primary/80 z-20 pointer-events-none" />
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-primary/80 z-20 pointer-events-none" />
          </>
        );

      case "modern":
      default:
        return (
          <>
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-primary/60 z-20 pointer-events-none" />
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-primary/60 z-20 pointer-events-none" />
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-primary/60 z-20 pointer-events-none" />
            <div ref={addToOverlayElements} style={{ opacity: baseOpacity }} className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-primary/60 z-20 pointer-events-none" />
          </>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`group relative cursor-pointer border border-white/10 bg-card/10 backdrop-blur-md  shadow-2xl transition-colors hover:border-primary/30 ${roundedClass} ${className}`}
    >
      <div
        ref={glowRef}
        className={`pointer-events-none absolute inset-0 bg-primary/10 opacity-30 -z-10 blur-xl will-change-transform ${roundedClass}`}
      />

      <div
        ref={hoverGlowRef}
        className={`pointer-events-none absolute inset-0 opacity-0 -z-10 blur-2xl ${roundedClass}`}
      />

      {renderCorners()}

      <div
        ref={addToOverlayElements}
        style={{ opacity: showOnHover ? 0 : 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none"
      />
      <div
        ref={addToOverlayElements}
        style={{ opacity: showOnHover ? 0 : 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none"
      />

      <div className={`relative z-10 w-full h-full overflow-hidden ${roundedClass}`}>
        {children}
      </div>
    </div>
  );
}