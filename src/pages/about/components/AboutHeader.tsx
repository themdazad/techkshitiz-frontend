"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CyberFrame from "@/components/custom-ui/CyberFrame";
import { SITE_INFO } from "@/constants/branding";
import HeadingText from "@/components/custom-ui/HeadingText";
import Tag from "@/components/custom-ui/Tag";

const STATS = [
  { label: "Founded", value: "2019" },
  { label: "Active Members", value: "150+" },
  { label: "Events Hosted", value: "40+" },
  { label: "Projects Built", value: "25+" },
];

const FOCUS_AREAS = [
  "Web Development",
  "AI / ML",
  "Competitive Programming",
  "IoT & Embedded Systems",
  "Cybersecurity",
  "Hackathons",
  "Open Source",
];

export default function AboutHeader() {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-text-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      })
        .from(
          ".hero-frame-anim",
          {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.2)",
          },
          "-=0.5"
        )
        .from(
          ".hero-stat-anim",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <header ref={containerRef} className="relative py-12 font-cinematic mx-auto">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Top Banner Header */}
      <div className="mb-10 border-b border-border/50 pb-8 hero-text-anim">
        
        <Tag text={'Know_more_about_club'}/>

        <HeadingText style={'text-4xl md:text-6xl'} text={SITE_INFO.eventName}/>

        <p className="mt-3 font-tech-mono text-sm md:text-base text-primary/90 uppercase tracking-[0.3em] font-semibold">
          Learn. Build. Ship. Repeat.
        </p>
      </div>

      {/* Content Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 space-y-6">
          <p className="hero-text-anim font-tech-mono text-base md:text-lg leading-relaxed text-foreground/90 border-l-4 border-primary pl-5 bg-primary/5 py-4 border-y border-r border-border/40">
            Welcome to <strong className="text-primary">{SITE_INFO.eventName}</strong> — the official technical community of Government Engineering College, Siwan. We operate on a singular core mission: <span className="text-foreground font-bold">the best way to master technology is to construct with it.</span>
          </p>

          <p className="hero-text-anim font-tech-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
            From first-year students initializing their initial line of code to seniors deploying enterprise-grade architectures, we foster hands-on growth. Peer-led workshops, active lab environments, and continuous hackathons keep our learning ecosystem practical and fast-paced.
          </p>

          {/* Core Areas Tag Grid */}
          <div className="hero-text-anim pt-2">
            <span className="text-[11px] font-tech-mono text-primary/80 uppercase tracking-widest block mb-3 font-semibold">
              // ACTIVE_DOMAINS
            </span>
            <div className="flex flex-wrap gap-2">
              {FOCUS_AREAS.map((area) => (
                <span
                  key={area}
                  className="font-tech-mono text-xs text-primary border border-primary/30 bg-primary/10 hover:border-primary transition-all px-3 py-1.5 rounded uppercase tracking-wider font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Frame & Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="hero-frame-anim w-full">
            <CyberFrame
              glowColor="rgba(20, 184, 166, 0.4)"
              showOnHover={false}
              enableSound={true}
              className="w-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/90">
                <img
                  src="https://res.cloudinary.com/deegqtr0m/image/upload/v1757855803/gecsiwanclg_q86grr.jpg"
                  alt="GEC Siwan Campus"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 font-tech-mono text-[10px] text-white/90 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>// ACademic_building</span>
                </div>
              </div>
            </CyberFrame>
          </div>

        </div>

      </div>

    </header>
  );
}