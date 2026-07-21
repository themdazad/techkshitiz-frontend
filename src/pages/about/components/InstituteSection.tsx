"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SITE_INFO } from "@/constants/branding";
import HeadingText from "@/components/custom-ui/HeadingText";

export default function InstituteSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".inst-anim", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative mt-20 font-cinematic mx-auto">
      {/* Background Glow Accent */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary/10 blur-[120px] pointer-events-none " />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Logos & Institution Title (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5 border-b lg:border-b-0 lg:border-r border-border/60 pb-6 lg:pb-0 lg:pr-8 inst-anim">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-primary uppercase tracking-[0.25em] bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>// ACADEMIC_ORIGIN</span>
            </div>

            <div>
              <span className="text-[10px] font-tech-mono text-muted-foreground uppercase tracking-widest block mb-1">
                HOST INSTITUTION
              </span>
                <HeadingText style={"text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground leading-tight"} text={SITE_INFO.collegeName}/>
            </div>

            {/* High Contrast Logo Cluster */}
            <div className="flex items-center gap-4 bg-background/60 border border-primary/30 p-3 rounded-2xl backdrop-blur-md">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-primary/40 blur-xs group-hover:bg-primary transition duration-300" />
                <img
                  src="https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756782359/cropped_circle_image_y3vznc.png"
                  alt={`${SITE_INFO.collegeName} Logo`}
                  className="relative h-14 w-14 rounded-full border border-primary/50 object-cover"
                />
              </div>
              <div className="h-8 w-[1px] bg-border/80" />
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-primary/40 blur-xs group-hover:bg-primary transition duration-300" />
                <img
                  src="https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756812379/png_2_tbzrth.png"
                  alt={`${SITE_INFO.eventName} Logo`}
                  className="relative h-14 w-14 rounded-full border border-primary/50 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Copy & Tag (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-4 inst-anim">
            <p className="font-tech-mono text-sm md:text-base leading-relaxed text-foreground/90">
              <strong className="text-primary font-semibold">{SITE_INFO.collegeName}</strong> stands at the forefront of engineering excellence and technical innovation. Our campus nurtures hands-on learning, research-driven projects, and impactful community initiatives.
            </p>

            <p className="font-tech-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
              <strong className="text-primary/90">{SITE_INFO.eventName}</strong> is proudly organized by the students and mentors of GEC Siwan to celebrate technology, creativity, and cross-discipline collaboration.
            </p>

            <div className="pt-3 flex items-center justify-between flex-wrap gap-4 border-t border-border/40">
              <div className="inline-flex items-center gap-2 font-tech-mono text-xs text-primary uppercase tracking-widest bg-primary/10 border border-primary/30 px-3.5 py-1.5 rounded-lg">
                <span className="font-bold">LOCATION //</span>
                <span className="text-foreground">SIWAN, BIHAR, INDIA</span>
              </div>
              
              <span className="font-tech-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                ESTD. GOVT. OF BIHAR
              </span>
            </div>
          </div>

        </div>
    </section>
  );
}