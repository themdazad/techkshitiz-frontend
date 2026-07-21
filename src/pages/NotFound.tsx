import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeadingText from "@/components/custom-ui/HeadingText";
import Tag from "@/components/custom-ui/Tag";
import CyberFrame from "@/components/custom-ui/CyberFrame";

const NotFound = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.error("404 Error: Path not found ->", location.pathname);

    // Scanner Audio Initialize
    const audio = new Audio("./audio/scanner_sound.mp3");
    audio.volume = 0.2; // Moderate volume
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [location.pathname]);

  // Helper function to safely play scanner sound
  const playScannerSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently catch autoplay restrictions on un-interacted pages
      });
    }
  };

  // Advanced Motion Graphics & Animations
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Main card entrance
      gsap.fromTo(
        ".notfound-box",
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Rotating Radar Ring Motion
      gsap.to(".motion-ring-outer", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".motion-ring-inner", {
        rotation: -360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      // SMOOTH SCANNER (Upar-Niche Loop with Audio Cue)
      gsap.fromTo(
        ".motion-scanline",
        { top: "0%", opacity: 0.4 },
        {
          top: "100%",
          opacity: 1,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          onStart: playScannerSound,
          onRepeat: playScannerSound, // Triggers sound every time scan directional cycle flips
        }
      );

      // Floating Cyber Graphic Particles
      gsap.to(".floating-node", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        opacity: "random(0.3, 0.9)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] grid place-items-center relative px-4 py-12 overflow-hidden bg-slate-950/40"
    >
      {/* BACKGROUND MOTION GRAPHICS GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* ROTATING CYBER RADAR RINGS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none -z-10 flex items-center justify-center opacity-30">
        <div className="motion-ring-outer absolute inset-0 border border-dashed border-sky-500/40 rounded-full" />
        <div className="motion-ring-inner absolute inset-12 border border-sky-400/20 rounded-full border-t-sky-400" />
      </div>

      {/* FLOATING MOTION GRAPHIC PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <span className="floating-node absolute top-1/4 left-1/5 w-2 h-2 bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
        <span className="floating-node absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
        <span className="floating-node absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        <span className="floating-node absolute bottom-1/3 right-1/5 w-1 h-1 bg-sky-300 shadow-[0_0_6px_#7dd3fc]" />
      </div>

      {/* MAIN CYBER BOX CONTAINER WITH CYBERFRAME */}
      <CyberFrame>
        <div className="notfound-box relative w-full max-w-lg border border-sky-500/30 bg-slate-950/80 backdrop-blur-2xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* SMOOTH SCANNING LASER LINE (Glow Line + Track) */}
          <div className="motion-scanline absolute inset-x-0 -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-sky-400/20 to-transparent pointer-events-none z-0">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_12px_#38bdf8]" />
          </div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* STATUS TAG */}
            <div className="mb-4">
              <Tag text="// ERROR_404_LOCATION_NOT_FOUND" />
            </div>

            {/* ANIMATED WARNING BADGE */}
            <div className="relative group mb-4">
              <div className="absolute -inset-2 bg-rose-500/20 blur-md transition-all duration-300 group-hover:bg-rose-500/40" />
              <div className="relative border border-rose-500/40 bg-slate-950 p-4 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                <AlertOctagonSvg className="w-8 h-8 text-rose-400 animate-pulse" />
              </div>
            </div>

            {/* MAIN HEADING */}
            <HeadingText
              style="text-6xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-sky-300 to-cyan-400 font-mono drop-shadow-[0_0_25px_rgba(56,189,248,0.2)]"
              text="404"
            />

            {/* DETAILED MESSAGE */}
            <p className="mt-4 text-xs md:text-sm font-mono text-slate-400 leading-relaxed max-w-sm">
              SIGNAL_LOST: The pathway <span className="text-sky-300 underline underline-offset-4">{location.pathname}</span> does not exist or has been relocated across the grid.
            </p>

            {/* ACTION BUTTONS - ZERO RADIUS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center font-mono text-xs">
              
              {/* GO HOME BUTTON */}
              <Link
                to="/"
                className="relative group overflow-hidden border border-sky-400 bg-sky-500/20 px-6 py-3 font-bold uppercase tracking-wider text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300 hover:bg-sky-500 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <HomeSvg className="w-4 h-4" />
                  RETURN_HOME
                </span>
              </Link>

              {/* BROWSE EVENTS BUTTON */}
              <Link
                to="/events"
                className="border border-sky-500/20 bg-slate-900/90 px-6 py-3 font-bold uppercase tracking-wider text-slate-300 transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-800 hover:text-white active:scale-[0.98]"
              >
                <span className="flex items-center justify-center gap-2">
                  <CompassSvg className="w-4 h-4 text-sky-400" />
                  BROWSE_EVENTS
                </span>
              </Link>

            </div>

          </div>

        </div>
      </CyberFrame>
    </div>
  );
};

export default NotFound;

// Inline Custom Sharp SVGs

function AlertOctagonSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="square" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="square" />
    </svg>
  );
}

function HomeSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="square" />
      <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="square" />
    </svg>
  );
}

function CompassSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}