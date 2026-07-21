// src/components/site/FeaturesTeaser.tsx
import CyberFrame from "@/components/custom-ui/CyberFrame";
import { GlowTiltWrapper } from "@/components/gsap-animation/GlowTiltWrapper";
import { SITE_INFO } from "@/constants/branding";
import { features } from "@/data/homepageData";

const date = new Date(); // object of date class
const lastTwoDigits = date.getFullYear().toString().slice(-2);

export function FeaturesTeaser() {
  return (
    <section className="relative w-full bg-[#020817] pb-16 z-10">
  <div className="container">
    <div className="text-center pb-16">
      {/* High contrast text to mirror image 2 style */}
      <h2 className="heading font-syne font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-white mb-4 tracking-tight">
        What's coming in {SITE_INFO.fullTitle} {SITE_INFO.editionYear ? SITE_INFO.editionYear : lastTwoDigits}?
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
        Get ready for new experiences, bigger challenges, and more innovation.
      </p>
    </div>
    
    <div className="grid gap-8 md:grid-cols-3">
      {features.map((feat, idx) => {
        const IconComponent = feat.icon;
        return (
          <CyberFrame key={idx} rounded="none">
          <GlowTiltWrapper  className="group relative overflow-hidden h-full border border-white/10 bg-slate-950/40 backdrop-blur p-8 shadow-2xl transition-all duration-300 hover:border-cyan-500/30">
            <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="relative z-10 ">
              <div className="w-16 h-16 rounded-full bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center mb-6">
                <IconComponent className={`h-8 w-8 ${feat.colorClass}`} />
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{feat.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feat.description}</p>
            </div>
          </GlowTiltWrapper>
          </CyberFrame>
        );
      })}
    </div>
  </div>
</section>
  );
}