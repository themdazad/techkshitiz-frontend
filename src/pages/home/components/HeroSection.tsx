// src/components/site/HeroSection.tsx
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import { HeroCountdown } from "@/components/site/HeroCountdown";
import { SITE_INFO } from "@/constants/branding";
import { MagneticWrapper } from "@/components/gsap-animation/MagneticWrapper";
import { HorizonDivider } from "@/components/ui/horizon-divider";
import CyberFrame from "@/components/custom-ui/CyberFrame";
import { Download } from "lucide-react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spaceBackgroundRef = useRef<HTMLDivElement>(null);
  const titleText = "TechKshitiz";
  const hero_image = "./azad-sir-image.png"

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Core Title Anim Sequence
      const letters = gsap.utils.toArray<HTMLElement>(".hero-letter");
      if (!letters.length) return;

      gsap.set("#hero-title", { transformPerspective: 900 });
      gsap.set(letters, { opacity: 1, y: 0, z: 0, rotateX: 0 });

      const tl = gsap.timeline();
      tl.to(letters, {
        y: -36,
        opacity: 0,
        duration: 0.32,
        ease: "power2.in",
        stagger: 0.02,
      })
        .set(letters, { y: 36, opacity: 0, filter: "blur(4px)" })
        .to(letters, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.05,
        })
        .add(() => {
          letters.forEach((el) => el.classList.add("animate-gradient"));
        });

      // 2. Stars: Balanced distribution logic across the entire section viewport
      const stars = gsap.utils.toArray<HTMLElement>(".space-star");
      stars.forEach((star) => {
        gsap.set(star, {
          x: `${gsap.utils.random(5, 95)}vw`,
          y: `${gsap.utils.random(5, 85)}vh`,
          scale: gsap.utils.random(0.4, 1.4),
          opacity: gsap.utils.random(0.2, 0.6),
        });

        // Breathing twinkle scale loop
        gsap.to(star, {
          opacity: gsap.utils.random(0.8, 1),
          scale: `+=${gsap.utils.random(0.2, 0.4)}`,
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 3),
        });

        // Subtle zero-gravity atmospheric drift
        gsap.to(star, {
          y: `+=${gsap.utils.random(-15, 15)}`,
          x: `+=${gsap.utils.random(-15, 15)}`,
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // 3. Orbiting Satellites / Transiting Elements
      gsap.set(".space-satellite", { x: "-10%", y: "20%", opacity: 0 });
      gsap.to(".space-satellite", {
        x: "110%",
        y: "55%",
        opacity: 0.8,
        duration: 25,
        repeat: -1,
        ease: "none",
        data: "orbit",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-gradient-to-r from-primary/10 to-secondary/10 border-b-0 live-banner overflow-hidden">

      {/* ================= PREMIUM VISUALLY APPEALING BACKGROUND CANVAS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* 1. Deep Volumetric Ambient Glow Spotlights */}
        <div
          className="absolute inset-0 opacity-80 mix-blend-screen"
          style={{
            backgroundImage: `
              radial-gradient(1400px 500px at 50% -10%, hsl(var(--primary)/0.22), transparent 80%),
              radial-gradient(900px 400px at 85% 15%, hsl(var(--accent)/0.18), transparent 70%),
              radial-gradient(600px 600px at 10% 40%, hsl(var(--primary)/0.08), transparent 60%)
            `
          }}
        />

        {/* 2. Cyber Blueprint Grid Mesh Layer */}
        <div
          className="absolute inset-0 opacity-60 mix-blend-overlay border-t border-primary/10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, var(--grid-line-color, rgba(20,184,166,0.08)) 1px, transparent 1px),
              linear-gradient(var(--grid-line-color, rgba(20,184,166,0.08)) 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px',
            backgroundPosition: 'center top',
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.1) 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.1) 85%, transparent 100%)',
          }}
        />

        {/* 3. Horizontal Cyber Spark Accent (Dynamic Neon Line Scan) */}
        <div
          className="absolute top-0 left-0 w-full h-[2px] opacity-40 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_4s_infinite]"
          style={{
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />

        {/* 4. Subtle Vector Dust Particle Ring Overlay */}
        <div className="absolute top-[10%] left-[15%] w-[350px] h-[350px] rounded-full border border-primary/5 bg-primary/[0.01] blur-sm animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-[35%] right-[10%] w-[500px] h-[500px] rounded-full border border-accent/5 bg-accent/[0.005] blur-md animate-[spin_180s_linear_infinite_reverse]" />
      </div>

      {/* ================= SPACE VECTOR ASSET INJECTIONS ================= */}
      <div ref={spaceBackgroundRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
        {/* Deep Horizon Twinkling Cross Star Fields */}
        {[...Array(24)].map((_, index) => (
          <svg
            key={`star-${index}`}
            className="space-star absolute top-0 left-0 w-6 h-6 text-cyan-400/30 fill-current will-change-transform"
            viewBox="0 0 24 24"
          >
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.6L12 0Z" />
          </svg>
        ))}

        {/* Dynamic Transiting Space Orbital Element */}
        <div className="space-satellite absolute top-0 left-0 w-32 h-32 text-primary/20 flex items-center justify-center">
          <svg className="w-full h-full stroke-current opacity-30 mix-blend-screen" viewBox="0 0 100 100" fill="none" strokeWidth="0.75">
            <circle cx="50" cy="50" r="16" className="stroke-cyan-500/40" />
            <ellipse cx="50" cy="50" rx="32" ry="6" transform="rotate(-25 50 50)" className="stroke-emerald-400/30 dashed-stroke" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
      {/* ================================================================= */}

      <div className="container relative z-10 pb-24">
        {/* Two-Column responsive separation layout */}
        <div className="relative z-10 max-w-7xl min-h-[80vh] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-12">

          {/* LEFT COLUMN: Main Text Copy Block */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
            <HeroCountdown className="mb-8" />

            <h1 className="heading font-bold text-5xl md:text-8xl text-primary mb-6">
              <span id="hero-title" className="hero-letters inline-block will-change-transform">
                {titleText.split("").map((ch, i) => {
                  const isSpace = ch === " ";
                  return (
                    <span
                      key={i}
                      className={cn(
                        "gradient-texthero-letter hero-3d inline-block",
                        isSpace && "w-2"
                      )}
                    >
                      {isSpace ? "\u00A0" : ch}
                    </span>
                  );
                })}
                <span className="hero-letter hero-3d inline-block text-white">'26</span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl lg:mx-0 leading-relaxed">
              <span className="text-foreground">Technical Club of Government Engineering College, Siwan returns — bigger, bolder, and more exciting. Ready to spark the future?</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <MagneticWrapper>
                <CyberFrame showOnHover={false} >
                  <span className="relative inline-flex overflow-hidden">
                    <span className="absolute inset-0 backdrop-blur-sm" />
                    <Link to="/events" className="relative z-10 px-8 py-3 text-foreground font-medium hover:scale-105 transition-transform duration-300">
                      View Events
                    </Link>
                  </span>
                </CyberFrame>
              </MagneticWrapper>

              <MagneticWrapper>
                <CyberFrame>
                  <span className="absolute inset-0 backdrop-blur-sm" />
                  <a href={SITE_INFO.brochureUrl} target="_blank" rel="noreferrer" className="relative z-10 inline-flex items-center gap-2 px-8 py-3 text-foreground font-medium hover:scale-105 transition-transform duration-300">
                    <Download />
                    <span>Brochure</span>
                  </a>
                </CyberFrame>
              </MagneticWrapper>
            </div>
          </div>

          {/* RIGHT COLUMN: Sketch Canvas Element (Responsive hidden on layout change) */}
          <div className="hidden lg:flex col-span-1 lg:col-span-5 w-full justify-center items-center pointer-events-none relative select-none">
            {/* SVG Matrix blueprint translation filter */}
            <svg className="absolute w-0 h-0">
              <defs>
                <filter id="cyan-blueprint-glow" x="0%" y="0%" width="100%" height="100%">
                  <feColorMatrix
                    type="matrix"
                    values="0.33 0.33 0.33 0 0
                            0.33 0.33 0.33 0 0
                            0.33 0.33 0.33 0 0
                            0    0    0    1 0"
                    result="gray"
                  />
                  <feConvolveMatrix
                    order="3"
                    kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1"
                    divisor="1"
                    edgeMode="duplicate"
                    in="gray"
                    result="edges"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.078
                            0 0 0 0 0.721
                            0 0 0 0 0.651
                            1 1 1 0 0"
                    in="edges"
                  />
                  <feGaussianBlur stdDeviation="0.4" />
                </filter>
              </defs>
            </svg>

            <div className="relative w-full max-w-full ">
              <img
                src="./azad_sir_image.png"
                alt="TechKshitiz Sketch Art"
                className="w-auto object-cover opacity-75"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, #000 0%, #000 70%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.5) 90%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, #000 0%, #000 70%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.5) 90%, transparent 100%)",
                }}


                draggable="false"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Horizon Architectural Accent */}
      <HorizonDivider />
    </section>
  );
};