import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SITE_INFO } from "@/constants/branding";
import HeadingText from "@/components/custom-ui/HeadingText";
import CyberFrame from "@/components/custom-ui/CyberFrame";
import Tag from "@/components/custom-ui/Tag";
import VerifyCertificate from "./components/VerifyCertificate";
import ParticipantsCertificate from "./components/ParticipantsCertificate";

const CertificatesPage = () => {
  const [activeTab, setActiveTab] = useState<"verify" | "participants">("verify");
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Smooth Entrance Animation
  useGSAP(() => {
    gsap.fromTo(
      ".cert-header",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      ".cert-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="container max-w-5xl mx-auto px-4 py-12 relative min-h-[85vh]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10  blur-[130px] pointer-events-none -z-10" />

      {/* Futuristic Header */}
      <header className="cert-header flex flex-col items-center text-center mb-10 space-y-4">
        <Tag text="// CERTIFICATION_HUB" />
        <HeadingText
          style="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-blue-500"
          text="Official Credentials"
        />
        <p className="max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
          Verify authenticity or generate official participant credentials for {SITE_INFO.eventName} events.
        </p>
      </header>

      {/* Cyberpunk Styled Tab Navigation */}
      <div className="cert-header flex justify-center mb-8">
        <div className="inline-flex p-1.5  bg-slate-950/80 border border-sky-500/20 backdrop-blur-xl shadow-2xl">
          
          {/* Verify Tab */}
          <button
            onClick={() => setActiveTab("verify")}
            className={`relative flex items-center gap-2 px-6 py-2.5 font-mono text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
              activeTab === "verify"
                ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <ShieldCheckSvg className="w-4 h-4" />
            VERIFY CREDENTIAL
          </button>

          {/* Participants Certificate Tab */}
          <button
            onClick={() => setActiveTab("participants")}
            className={`relative flex items-center gap-2 px-6 py-2.5 font-mono text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
              activeTab === "participants"
                ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <CertificateSvg className="w-4 h-4" />
            PARTICIPANT CERTIFICATE
          </button>

        </div>
      </div>

      {/* Tab Content Wrapped in a Cyber-Container */}
          <CyberFrame showOnHover={false} >
      <div className="cert-content relative border border-sky-500/20 bg-slate-950/60 backdrop-blur-xl p-6 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">

        {/* Dynamic Component Render */}
        <div className="relative z-10">
          {activeTab === "verify" && <VerifyCertificate />}
          {activeTab === "participants" && <ParticipantsCertificate />}
        </div>
      </div>
          </CyberFrame>

    </div>
  );
};

export default CertificatesPage;

// Custom SVGs for Aesthetic Consistency

function ShieldCheckSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CertificateSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="13" rx="2" strokeLinecap="round" />
      <path d="M7 8h10M7 12h6" strokeLinecap="round" />
      <circle cx="17" cy="18" r="3" fill="currentColor" fillOpacity="0.2" />
      <path d="M15.5 20.5L14 22l1-3M18.5 20.5L20 22l-1-3" strokeLinecap="round" />
    </svg>
  );
}