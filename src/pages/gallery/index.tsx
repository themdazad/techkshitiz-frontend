import { useMemo, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SITE_INFO } from "@/constants/branding";
import HeadingText from "@/components/custom-ui/HeadingText";
import Tag from "@/components/custom-ui/Tag";

type Cat = "All" | "Coding" | "Design" | "Hardware" | "Fun";

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  cat: Exclude<Cat, "All">;
  w: number;
  h: number;
  type?: "image" | "video";
}

const media: MediaItem[] = [
  { id: "g1", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881119/IMG_4377_sgbrwj.jpg", alt: `${SITE_INFO.eventName} 1`, cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g2", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881118/IMG_3575_eayugk.jpg", alt: `${SITE_INFO.eventName} 2`, cat: "Hardware", w: 1200, h: 800, type: "image" },
  { id: "g3", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg", alt: `${SITE_INFO.eventName} 3`, cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g4", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881120/IMG_3816_twtbss.jpg", alt: `${SITE_INFO.eventName} 4`, cat: "Design", w: 1200, h: 800, type: "image" },
  { id: "g5", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836502/3_l6caw7.jpg", alt: `${SITE_INFO.eventName} 5`, cat: "Coding", w: 1200, h: 800, type: "image" },
  { id: "g6", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881119/IMG_4222_ej9nkc.jpg", alt: `${SITE_INFO.eventName} 6`, cat: "Coding", w: 1200, h: 800, type: "image" },
  { id: "g7", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881119/IMG_4253_watmi8.jpg", alt: `${SITE_INFO.eventName} 7`, cat: "Coding", w: 1280, h: 720, type: "image" },
  { id: "g8", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881118/IMG_4212_r5ynsp.jpg", alt: `${SITE_INFO.eventName} 8`, cat: "Fun", w: 1200, h: 800, type: "image" },
  { id: "g9", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881118/IMG_4174_wnljun.jpg", alt: `${SITE_INFO.eventName} 9`, cat: "Coding", w: 1200, h: 900, type: "image" },
  { id: "g10", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836501/2_kmxdlw.jpg", alt: `${SITE_INFO.eventName} 10`, cat: "Design", w: 1200, h: 900, type: "image" },
  { id: "g11", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg", alt: `${SITE_INFO.eventName} 11`, cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g12", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881132/IMG_3652_l98fdz.jpg", alt: `${SITE_INFO.eventName} 12`, cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g13", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881132/IMG_3652_l98fdz.jpg", alt: `${SITE_INFO.eventName} 13`, cat: "Fun", w: 1200, h: 900, type: "image" },
];

export default function GalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [active, setActive] = useState<MediaItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Coding", "Design", "Hardware", "Fun"] as const;

  const filtered = useMemo(() => media.filter((m) => (cat === "All" ? true : m.cat === cat)), [cat]);

  // Entrance Animations
  useGSAP(() => {
    gsap.fromTo(
      ".gallery-header",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      ".gallery-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [cat] });

  return (
    <div ref={containerRef} className="container max-w-7xl mx-auto px-4 py-12 relative min-h-screen">
      
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="gallery-header flex flex-col items-center text-center mb-12 space-y-4">
        <Tag text="// VISUAL_ARCHIVES" />
        <HeadingText
          style="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-blue-500"
          text="Event Gallery"
        />
        <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          Captured moments and highlights from events across {SITE_INFO.eventName}.
        </p>

        {/* Cyberpunk Category Filter Buttons - Zero Radius */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const isActive = cat === c;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                    : "bg-slate-950/80 text-slate-400 border-sky-500/20 hover:border-sky-500/50 hover:text-slate-200"
                }`}
                aria-pressed={isActive}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 w-1 h-full bg-sky-400" />
                )}
                {c}
              </button>
            );
          })}
        </div>
      </header>

      {/* Masonry Grid Section - Sharp Cyber Frames */}
      <section className="[column-gap:1.25rem] columns-1 sm:columns-2 lg:columns-3">
        {filtered.map((m) => (
          <figure
            key={m.id}
            onClick={() => setActive(m)}
            className="gallery-card relative mb-5 break-inside-avoid cursor-pointer overflow-hidden border border-sky-500/20 bg-slate-950/80 backdrop-blur-xl p-2 shadow-2xl transition-all duration-300 hover:border-sky-400/80 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] group"
          >
            {/* Corner Bracket Accents */}
            <CornerAccentSvg className="absolute top-1 left-1 w-3 h-3 text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity z-10" />
            <CornerAccentSvg className="absolute top-1 right-1 w-3 h-3 text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity z-10 rotate-90" />
            <CornerAccentSvg className="absolute bottom-1 right-1 w-3 h-3 text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity z-10 rotate-180" />
            <CornerAccentSvg className="absolute bottom-1 left-1 w-3 h-3 text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity z-10 -rotate-90" />

            {/* Media Content */}
            <div className="relative overflow-hidden bg-slate-900">
              {m.type === "video" ? (
                <video
                  src={m.src}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  aria-label={m.alt}
                />
              ) : (
                <img
                  src={m.src}
                  alt={m.alt}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Hover Overlay Icon */}
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExpandSvg className="w-8 h-8 text-sky-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
              </div>
            </div>

            {/* Caption */}
            <figcaption className="mt-2 px-1 pb-1 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 truncate">{m.alt}</span>
              <span className="text-sky-400/80 border border-sky-500/30 px-2 py-0.5 text-[10px] uppercase shrink-0">
                {m.cat}
              </span>
            </figcaption>
          </figure>
        ))}
      </section>

      {/* Lightbox Dialog - Sharp Cyber Display */}
      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-w-4xl border border-sky-500/40 bg-slate-950/95 p-4 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl rounded-none">
          {active && (
            <div className="relative">
              {/* Top Accent Lines */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-500/20 font-mono text-xs">
                <span className="text-sky-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 animate-pulse" />
                  FILE_VIEWER // {active.id}
                </span>
                <span className="text-slate-400 uppercase border border-sky-500/30 px-2 py-0.5">
                  CAT: {active.cat}
                </span>
              </div>

              {/* Display Element */}
              <div className="relative border border-sky-500/20 bg-black/60 overflow-hidden flex items-center justify-center max-h-[75vh]">
                {active.type === "video" ? (
                  <video src={active.src} className="w-full max-h-[70vh] object-contain" controls autoPlay />
                ) : (
                  <img src={active.src} alt={active.alt} className="w-full max-h-[70vh] object-contain" />
                )}
              </div>

              {/* Footer info */}
              <p className="mt-3 text-xs font-mono text-slate-300 text-center">
                {active.alt}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Inline Custom Sharp SVGs

function CornerAccentSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M0 0H10V2H2V10H0V0Z" fill="currentColor" />
    </svg>
  );
}

function ExpandSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="square" />
    </svg>
  );
}