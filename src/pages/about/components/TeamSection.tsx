"use client";

import { useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CyberFrame from "@/components/custom-ui/CyberFrame";
import SocialLinks from "./SocialLinks";

// Direct Data Import (Types file me hi define hain)
import { clubHeads, clubIncharges, type ClubHead, type ClubIncharge } from "@/data/org-members";
import { Heater } from "lucide-react";
import HeadingText from "@/components/custom-ui/HeadingText";
import { text } from "stream/consumers";

/* -------------------------------------------------------------------------- */
/*                         1. FACULTY IN-CHARGE SECTION                       */
/* -------------------------------------------------------------------------- */
export function FacultyInchargeSection({ title = "Faculty In-Charge" }: { title?: string }) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".faculty-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="mt-16 mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-8 border-b border-sky-500/30 pb-4">
        <span className="text-xs font-semibold uppercase tracking-wider mb-1 block">
          Faculty Guidance
        </span>
          <HeadingText style={"text-2xl md:text-3xl font-bold "} text={title}/>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {clubIncharges.map((m: ClubIncharge, i: number) => (
          <div key={`${m.name}-${i}`} className="faculty-card">
            <CyberFrame
              variant="cyberpunk"
              rounded="none"
              showOnHover={true}
              glowColor="rgba(20, 108, 184, 0.35)"
              enableSound={true}
              className="relative p-0 h-[300px] sm:h-[340px] w-full overflow-hidden group/card bg-slate-950"
            >
              {/* Background Image */}
              <img
                src={m.photo}
                alt={m.name}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-500 z-0"
                loading="lazy"
              />

              {/* Bottom Text Overlay */}
              <div className="absolute bottom-0 inset-x-0 z-20 p-3 pb-4 text-center bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pt-12">
                <h3 className="text-sm md:text-base font-bold uppercase tracking-wide text-white leading-tight">
                  {m.name}
                </h3>

                {m.branch && (
                  <p className="mt-1 text-[11px] text-sky-400 font-semibold tracking-wider">
                    {m.branch}
                  </p>
                )}
              </div>
            </CyberFrame>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         2. CLUB ADMIN / HEADS SECTION                      */
/* -------------------------------------------------------------------------- */
export function ClubAdminSection({ title = "Technical Club Head" }: { title?: string }) {
  const [showTimeline, setShowTimeline] = useState(false);

  // Grouping strictly by Session or Batch
  const sessions = useMemo(() => {
    const groups: Record<string, ClubHead[]> = {};

    clubHeads.forEach((m: ClubHead) => {
      const key = (m as any).session || m.batch || "Current Session";
      if (!groups[key]) groups[key] = [];
      groups[key].push(m);
    });

    return Object.keys(groups)
      .sort((a, b) => b.localeCompare(a))
      .map((session) => ({ session, list: groups[session] }));
  }, []);

  const activeTenure = sessions[0];
  const pastTenures = sessions.slice(1);

  return (
    <section className="py-16 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-sky-500/30 pb-4 mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider mb-1 block">
            Executive Team
          </span>
         <HeadingText style={"text-2xl md:text-3xl font-bold "} text={title}/>
        </div>

        {activeTenure && (
          <div className="text-xs font-medium text-slate-300 border border-sky-500/40 px-3 py-1 rounded-full bg-sky-950/40">
            Active Session: <span className="text-sky-400 font-bold">{activeTenure.session}</span>
          </div>
        )}
      </div>

      {/* Active Session Heads */}
      {activeTenure && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTenure.list.map((m, i) => (
            <AdminCard key={`${m.name}-${i}`} member={m} />
          ))}
        </div>
      )}

      {/* Timeline Toggle Button */}
      {pastTenures.length > 0 && (
        <div className="mt-10 flex flex-col items-center">
          <div className="w-0.5 h-6 bg-sky-400/50" />
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="px-5 py-2 rounded-full text-xs font-semibold text-sky-400 border border-sky-500/60 bg-slate-950 hover:bg-sky-500/10 transition cursor-pointer"
          >
            {showTimeline ? "Hide Past Years" : "View Previous Years"} ({pastTenures.length})
          </button>
        </div>
      )}

      {/* Timeline for Past Years */}
      {showTimeline && (
        <div className="relative mt-8 space-y-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-sky-500/40 -translate-x-1/2" />

          {pastTenures.map((batch) => (
            <div key={batch.session} className="relative z-10">
              <div className="flex justify-center mb-6">
                <span className="text-xs font-bold text-white bg-slate-950 border border-sky-400 px-4 py-1 rounded-full shadow-md">
                  Tenure {batch.session}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {batch.list.map((m, i) => (
                  <AdminCard key={`${m.name}-${i}`} member={m} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* Individual Admin Card Component */
function AdminCard({ member }: { member: ClubHead }) {
  return (
    <CyberFrame
      variant="cyberpunk"
      rounded="none"
      showOnHover={true}
      glowColor="rgba(20, 108, 184, 0.35)"
      enableSound={true}
      className="p-4 h-full border-slate-800"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* Large Profile Photo */}
        <div className="h-28 w-28 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden border border-sky-500/50 ">
          <img
            src={member.photo}
            alt={member.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Member Info */}
        <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-base font-bold text-white">{member.name}</h3>

            <div className="mt-1 flex flex-wrap justify-center sm:justify-start items-center gap-1.5">
              {member.branch && (
                <span className="text-xs text-sky-400 font-medium">{member.branch}</span>
              )}
              {member.batch && (
                <span className="px-1.5 py-0.5 text-[10px] bg-sky-500/10 text-sky-300 border border-sky-500/30 rounded">
                  {member.batch}
                </span>
              )}
            </div>

            {member.description && (
              <p className="mt-2 text-xs text-slate-300 border-l-2 border-sky-500/50 pl-2">
                {member.description}
              </p>
            )}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800 flex justify-center sm:justify-start">
            <SocialLinks
              github={member.github}
              linkedin={member.linkedin}
              instagram={member.instagram}
              portfolio={member.portfolio}
              name={member.name}
            />
          </div>
        </div>
      </div>
    </CyberFrame>
  );
}

/* -------------------------------------------------------------------------- */
/*                       3. DEFAULT MAIN COMPONENT                            */
/* -------------------------------------------------------------------------- */
export default function TeamSection() {
  return (
    <div className="space-y-12">
      {clubIncharges && clubIncharges.length > 0 && <FacultyInchargeSection />}
      {clubHeads && clubHeads.length > 0 && <ClubAdminSection />}
    </div>
  );
}