// src/components/site/HeroSection.tsx
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import { HeroCountdown } from "@/components/site/HeroCountdown";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const brochureUrl = "https://drive.google.com/file/d/1Xy5Xoz2Y5NWWf1WHy3DXp6HNup4magm3/view?usp=sharing";
  const titleText = "TechKshitiz";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-gradient-to-r from-primary/10 to-secondary/10 border-b live-banner">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg grid-bg-fade" />
      <div aria-hidden className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 -z-10 hero-bottom-fade" />
      
      <div className="container py-2 text-xs md:text-sm text-muted-foreground flex items-center gap-2">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,hsl(var(--primary)/0.15),transparent),radial-gradient(800px_300px_at_80%_10%,hsl(var(--accent)/0.15),transparent)]" />
        <div
          className="absolute inset-0 opacity-100 mix-blend-overlay"
          style={{
            backgroundImage: 'linear-gradient(90deg,var(--grid-line-color) 1px,transparent 1px),linear-gradient(var(--grid-line-color) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </div>

      <div className="container text-center">
        <div className="relative z-10 max-w-4xl min-h-[70vh] w-full mx-auto flex flex-col items-center justify-center">
          <HeroCountdown className="mb-8" />
          <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide mb-4">Coming Soon</p>
          
          <h1 className="heading font-bold text-5xl md:text-8xl text-primary mb-6">
            <span id="hero-title" className="hero-letters inline-block will-change-transform">
              {titleText.split("").map((ch, i) => {
                const isSpace = ch === " ";
                return (
                  <span
                    key={i}
                    className={cn(
                      "gradient-text hero-letter hero-3d inline-block",
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

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="text-foreground">TechKshitiz returns—bigger, bolder, and more exciting! Join us to code, create, and connect with passionate minds. Ready to spark the future?</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <span className="relative inline-flex rounded-full overflow-hidden border border-white/10">
              <span className="absolute inset-0 bg-white/20 animate-shine" />
              <span className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
              <Link to="/events" className="relative z-10 rounded-full px-8 py-3 text-foreground font-medium hover:scale-105 transition-transform duration-300">
                View Events
              </Link>
            </span>

            <span className="relative inline-flex rounded-full overflow-hidden border border-white/10">
              <span className="absolute inset-0 animate-gradient-x" />
              <span className="absolute inset-0 animate-shine" />
              <span className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
              <a href={brochureUrl} target="_blank" rel="noreferrer" className="relative z-10 inline-flex items-center gap-2 rounded-full px-8 py-3 text-foreground font-medium hover:scale-105 transition-transform duration-300">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span>Brochure</span>
              </a>
            </span>
          </div>

          <div className="hidden relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 animate-pulse" />
            <img
              src="https://res.cloudinary.com/dswkss8nj/image/upload/v1757832290/prize_reveal_shgnjm.png"
              alt="TechKshitiz logo"
              className="relative w-full h-auto object-contain new-animate-float glow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}