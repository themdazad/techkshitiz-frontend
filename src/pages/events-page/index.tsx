// src/pages/EventsPage.tsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { events, type Category } from "@/data/events";
import { Clock, Users } from "lucide-react";
import HeadingText from "@/components/custom-ui/HeadingText";
import { SITE_INFO } from "@/constants/branding";
import CyberFrame from "@/components/custom-ui/CyberFrame";

const categories: (Category | "All")[] = [
  "All",
  "Coding & Technology",
  "Hardware & Mechatronics",
  "E-sports & Gaming",
  "Engineering & Design",
  "Brain Games & Quizzes",
  "Creative & Showcase",
];

export default function EventsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesCat = cat === "All" ? true : e.category === cat;
      const q = query.toLowerCase().trim();
      const matchesQ =
        !q || [e.title, e.blura, ...(e.tags || [])].join(" ").toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [cat, query]);

  return (
    <div className="relative">
      <section className="container pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <HeadingText style={"heading text-4xl md:text-6xl font-normal text-primary"} text={"Explore Events"}/>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              All the events occurring in {SITE_INFO.eventName}
            </p>
          </div>
          <div className="flex gap-2">
            <input
              className="w-64 max-w-[60vw]  border border-white/10 bg-background/40 backdrop-blur px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search events..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search events"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  " border px-3 py-1 text-sm",
                  active
                    ? "bg-gray-900 text-white border-gray-900"
                    : "hover:bg-muted",
                )}
                aria-pressed={active}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((e, index) => {
            const isTBA = e.duration.includes("TBA");
            const isLocked = e.id === "circuit-designing";
            const serialNumber = String(index + 1).padStart(2, "0");

            // UX Typography Dynamic Parser: Splits title into First Word vs Rest
            const words = e.title.trim().split(" ");
            const firstWord = words[0];
            const remainingWords = words.slice(1).join(" ");

            return (
                <CyberFrame  key={e.id}>
              <article
               
                className="group relative flex flex-col justify-between  bg-card/40 border border-white/5 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden min-h-[250px]"
              >
                {/* ================= DYNAMIC TYPOGRAPHY BANNER HERO ================= */}
                <Link 
                  to={`/events/${e.id}`} 
                  className="block relative w-full aspect-[16/10] bg-[#0c0d0e] p-6 flex flex-col justify-center select-none border-b border-white/5 group-hover:bg-[#070809] transition-colors duration-300"
                >
                  <div className="font-sans font-black tracking-tight leading-[0.95] text-3xl sm:text-4xl text-left break-words max-w-full">
                    {/* First Word Line */}
                    <span className="block text-[#e4e4e7] group-hover:text-white transition-colors">
                      {firstWord}
                    </span>
                    {/* Remaining Words Line + Full Stop */}
                    {remainingWords && (
                      <span className="block text-primary tracking-tight">
                        {remainingWords}
                        <span className="text-primary animate-pulse">.</span>
                      </span>
                    )}
                  </div>

                  {/* Tech Grid Layout Accent */}
                  <div className="absolute right-3 bottom-3 text-[10px] font-mono opacity-25 text-muted-foreground tracking-tighter">
                    // SYS_REF_{serialNumber}
                  </div>
                </Link>

                {/* Content Deck Module */}
              
                <div className="flex flex-col justify-between flex-1 gap-4 p-4">
                  <div>
                   
                    {/* Parameter Attributes Matrix */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-4 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">Duration: <strong className="text-foreground font-medium">{e.duration}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-secondary shrink-0" />
                        <span className="text-muted-foreground">Team: <strong className="text-foreground font-medium">{e.teamSize}</strong></span>
                      </div>
                    </div>
                    
                    {/* Event Description Segment */}
                    <p className="text-base text-muted-foreground line-clamp-2 mt-3 leading-relaxed">
                      {e.blura}
                    </p>
                  </div>

                  {/* Actions Row Element */}
                  <div className="flex items-center justify-end mt-2 pt-2 border-t border-white/5">
                    <Link
                      to={`/events/${e.id}`}
                      className={cn(
                        "inline-flex items-center justify-center  px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 w-full md:w-auto text-center",
                        isLocked 
                          ? "bg-white/5 text-muted-foreground/60 border border-white/5 pointer-events-none cursor-not-allowed" 
                          : "border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
                      )}
                    >
                      {isLocked ? "Locked" : "Register"}
                    </Link>
                  </div>
                </div>

              </article>
                </CyberFrame>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}