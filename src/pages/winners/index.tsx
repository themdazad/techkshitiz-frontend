import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeadingText from "@/components/custom-ui/HeadingText";
import Tag from "@/components/custom-ui/Tag";
import { Button } from "@/components/ui/button";

// Interfaces
interface EventWinnersRow {
  rank: "Gold" | "Silver" | "Bronze" | string;
  team: string;
  members: string;
  college: string;
}

interface EventWinners {
  event: string;
  id: string;
  rows: EventWinnersRow[];
}

const winnersByEvent: EventWinners[] = [
  {
    event: "Hackathon",
    id: "hackathon",
    rows: [
      { rank: "Gold", team: "CyberNova", members: "Shubham Kumar Gupta, Nidhi Nupur, Pranav Pratyush, Ashish Kumar", college: "GEC Gopalganj" },
      { rank: "Silver", team: "The Falcon", members: "Sonu Kumar, Raj Deepak, Priyanshu Ranjan, Ankit Kumar", college: "GEC Siwan" },
      { rank: "Bronze", team: "TechVerse", members: "Khushi Kumari, Aditya Kumar, Lav Kumar, Munna Kumar", college: "GEC Siwan" },
    ],
  },
  {
    event: "Debugger",
    id: "debugger",
    rows: [
      { rank: "Gold", team: "Ankit Kumar Singh", members: "Individual Winner", college: "GEC Gopalganj" },
    ],
  },
  {
    event: "Web Designing",
    id: "web-designing",
    rows: [
      { rank: "Gold", team: "LEGENDA TEAM", members: "Amar Kishor Kumar, Vishnu Kumar, Shivam Kumar", college: "GP Barauni" },
      { rank: "Silver", team: "VIDHAYAK JI", members: "Sujeet Kumar, Vicky Kumar, Utsav Kumar", college: "GP Siwan" },
    ],
  },
  {
    event: "Typing Master",
    id: "typing-master",
    rows: [
      { rank: "Gold", team: "Ankit Kumar", members: "Individual Winner", college: "GEC Siwan" },
    ],
  },
  {
    event: "IoT Fusion",
    id: "iot-fusion",
    rows: [
      { rank: "Gold", team: "Tech Titans", members: "Ritik Kumar Sharma, Anupriya, Amrita Kumari, Priyanshu Kumar", college: "GEC Siwan" },
      { rank: "Silver", team: "Backend Battalion", members: "Ashish Kumar, Prashant Gaurav, Golu Kumar, Rahul Kumar Mishra", college: "GEC Siwan" },
      { rank: "Bronze", team: "The Falcon", members: "Sonu Kumar, Raj Deepak, Priyanshu Ranjan, Ankit Kumar", college: "GEC Siwan" },
    ],
  },
  {
    event: "RC Car Racing",
    id: "rc-car-racing",
    rows: [
      { rank: "Gold", team: "Red Bull Racing", members: "Ritik Kumar Sharma, Anupriya", college: "GEC Siwan" },
      { rank: "Silver", team: "ELX", members: "Shubham Tiwari, Namit Kumar", college: "GP Siwan" },
    ],
  },
  {
    event: "E-sports (BGMI)",
    id: "esports-bgmi",
    rows: [
      { rank: "Gold", team: "ZARRY", members: "Zaif Ahmad, Arshad Ali, Anup Kumar Ram, Mahfooz Alam", college: "SCEM Siwan" },
      { rank: "Silver", team: "CxG ESPORT", members: "Bittu Kumar Yadav, Hariom Yadav, Akash Yadav, Gulshan Kumar", college: "GP Siwan" },
      { rank: "Bronze", team: "LIZARD", members: "Atul Ranjan, Santosh Kumar, Rohit Raj, Raushan Kumar Verma", college: "GP Siwan" },
    ],
  },
  {
    event: "E-sports (FREEFIRE)",
    id: "esports-freefire",
    rows: [
      { rank: "Gold", team: "TEAM IGRIS", members: "Sundram Kumar, Anmol Kumar, Anish Kumar, Rajnish Kumar", college: "GP Siwan" },
      { rank: "Silver", team: "TEAM PREDATORS", members: "Aditya Kumar, Dipankar Sah, Md Sahil Aslam, Dip Raj", college: "GP Siwan" },
      { rank: "Bronze", team: "Phanthon", members: "Prince Kumar, Shivam Kumar, Abhisek Kumar, Pawan Kumar", college: "GP Siwan" },
    ],
  },
  {
    event: "Bridge Designing",
    id: "bridge-designing",
    rows: [
      { rank: "Gold", team: "Buidico Designer", members: "Gautam Kumar, Anish Kumar, Suman Kumar, Navneet Kumar", college: "GEC Siwan" },
      { rank: "Silver", team: "BEAM DREAMERS", members: "Suhani Mishra, Anupriya, Sagar Raj, Mukund Singh", college: "GEC Siwan" },
      { rank: "Bronze", team: "LOAD CELL", members: "Aman Raj, Satya Prakash Yadav, Sonu Kumar Sah, Sachin Kumar", college: "GEC Siwan" },
    ],
  },
  {
    event: "AutoCAD Designing",
    id: "autocad-designing",
    rows: [
      { rank: "Gold", team: "Kunal Kumar", members: "Individual Winner", college: "GEC Siwan" },
      { rank: "Silver", team: "Aditya Kumar Sah", members: "Individual Winner", college: "GEC Siwan" },
    ],
  },
  {
    event: "Puzzle Escape Room",
    id: "puzzle-escape-room",
    rows: [
      { rank: "Gold", team: "The Solvers", members: "Aditya Kumar Gupta, Aditya Kumar Sah, Ankit Kumar Mahto, Amandeepa Kumari", college: "GEC Siwan" },
    ],
  },
  {
    event: "Technical Quiz",
    id: "technical-quiz",
    rows: [
      { rank: "Gold", team: "Tejaswi Raj", members: "Individual Winner", college: "GEC Siwan" },
      { rank: "Silver", team: "Sajid Ahmad", members: "Individual Winner", college: "GEC Gopalganj" },
      { rank: "Bronze", team: "Ashish Kumar", members: "Individual Winner", college: "GEC Gopalganj" },
    ],
  },
  {
    event: "Rubix Cube Challenge",
    id: "rubix-cube",
    rows: [
      { rank: "Gold", team: "Subham Tiwari", members: "Individual Winner", college: "GP Siwan" },
      { rank: "Silver", team: "Himanshu Kumar", members: "Individual Winner", college: "GP Barauni" },
    ],
  },
  {
    event: "Videography Competition",
    id: "videography",
    rows: [
      { rank: "Gold", team: "ZEW ESCAPE", members: "Md Zeeshon Alam, Aditya Sharma", college: "GEC Siwan" },
      { rank: "Silver", team: "APERTURE ADDICTS", members: "Golu Kumar, Ashish Kumar", college: "GEC Siwan" },
    ],
  },
  {
    event: "Graphic Designing",
    id: "graphic-designing",
    rows: [
      { rank: "Gold", team: "Nidhi Nupur", members: "Individual Winner", college: "GEC Gopalganj - CSE (IoT & CS)" },
      { rank: "Silver", team: "Md Tabish", members: "Individual Winner", college: "SCEM Siwan" },
    ],
  },
  {
    event: "Crafting & Decoration Stalls",
    id: "crafting-decoration",
    rows: [
      { rank: "Gold", team: "Power Star", members: "Nirbhay Singh, Ankit Anand, Abhimanu Kumar, Abhishek Kumar Paswan, Akash Kumar Singh", college: "GEC Siwan" },
      { rank: "Silver", team: "Fab Four", members: "Nikhil Kumar, Abhinaw Kumar Singh, Ragni Kumari, Nisha Kumari", college: "SCEM Siwan" },
    ],
  },
  {
    event: "Technical Rangoli",
    id: "technical-rangoli",
    rows: [
      { rank: "Gold", team: "SPECTRUM SQUAD", members: "Aakanksha Singh, Anand Raj, Vivek Kumar", college: "GEC Siwan" },
      { rank: "Silver", team: "MADE IN INDIA", members: "Abha Kumari, Kumkum Kumari, Anshu Kumari", college: "GEC Siwan" },
    ],
  },
].filter((event) => event.rows.some((row) => row.team !== "-"));

export default function WinnersPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".winner-header",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      ".event-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="container max-w-7xl mx-auto px-4 py-12 relative min-h-screen">
      
      {/* Background SVG Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none -z-10" />

      {/* Header */}
      <header className="winner-header flex flex-col items-center text-center mb-16 space-y-4">
        <Tag text="// TECHKSHITIZ_2025_VICTORS" />
        <HeadingText
          style="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-blue-500"
          text="Hall of Champions"
        />
        <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          Celebrating the innovators, competitors, and visionaries who conquered TechKshitiz 2025.
        </p>
      </header>

      {/* Events List */}
      <section className="space-y-12">
        {winnersByEvent.map((ev) => (
          <CyberFrame key={ev.id} id={ev.id} className="event-card">
            
            {/* Header with SVG Trophy */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3">
              <div className="flex items-center gap-3">
                <CyberTrophyIcon className="w-8 h-8 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                <h2 className="text-xl md:text-2xl font-bold tracking-wide text-foreground">
                  {ev.event}
                </h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareOrCopy(`#${ev.id}`)}
                className="rounded-full border-sky-500/30 hover:border-sky-400 bg-sky-500/10 hover:bg-sky-500/20 text-xs gap-2 transition-all text-sky-200"
              >
                <ShareSvg className="w-3.5 h-3.5" />
                Share
              </Button>
            </div>

            {/* Podium Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ev.rows.map((r, i) => (
                <WinnerPodiumCard key={i} row={r} />
              ))}
            </div>

          </CyberFrame>
        ))}
      </section>
    </div>
  );
}

{/* Cyber Container Frame with SVG Corner Brackets */}
function CyberFrame({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <article
      id={id}
      className={`relative scroll-mt-28 rounded-2xl border border-sky-500/20 bg-slate-950/70 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all hover:border-sky-500/50 ${className}`}
    >
      {/* Corner SVG Accents */}
      <CornerAccentSvg className="absolute top-1 left-1 w-4 h-4 text-sky-400" />
      <CornerAccentSvg className="absolute top-1 right-1 w-4 h-4 text-sky-400 rotate-90" />
      <CornerAccentSvg className="absolute bottom-1 right-1 w-4 h-4 text-sky-400 rotate-180" />
      <CornerAccentSvg className="absolute bottom-1 left-1 w-4 h-4 text-sky-400 -rotate-90" />
      
      {children}
    </article>
  );
}

{/* Winner Podium Card */}
function WinnerPodiumCard({ row }: { row: EventWinnersRow }) {
  const isGold = row.rank === "Gold";
  const isSilver = row.rank === "Silver";

  const rankConfig = {
    Gold: {
      border: "border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      glow: "shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)]",
    },
    Silver: {
      border: "border-slate-300/40 bg-gradient-to-b from-slate-300/10 via-transparent to-transparent",
      badgeBg: "bg-slate-300/20 text-slate-200 border-slate-300/40",
      glow: "shadow-[0_0_20px_-5px_rgba(203,213,225,0.2)]",
    },
    Bronze: {
      border: "border-amber-700/40 bg-gradient-to-b from-amber-700/10 via-transparent to-transparent",
      badgeBg: "bg-amber-700/20 text-amber-400 border-amber-700/40",
      glow: "",
    },
  }[row.rank as "Gold" | "Silver" | "Bronze"] || {
    border: "border-sky-500/30 bg-sky-500/5",
    badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    glow: "",
  };

  return (
    <div
      className={`relative overflow-hidden flex flex-col justify-between rounded-xl border ${rankConfig.border} ${rankConfig.glow} p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60`}
    >
      <div>
        {/* Top Badge */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold tracking-wider uppercase ${rankConfig.badgeBg}`}
          >
            <MedalSvg rank={row.rank} className="w-4 h-4 shrink-0" />
            {row.rank} Position
          </span>
          <span className="text-[11px] font-mono text-sky-300/70 truncate">{row.college}</span>
        </div>

        {/* Team Name */}
        <h3 className="text-lg font-bold text-slate-100 mb-2 tracking-wide">
          {row.team}
        </h3>

        {/* Members */}
        <p className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
          <UserSvg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <span>{row.members}</span>
        </p>
      </div>

      {/* Footer SVG Accent */}
      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1">
          <VerifiedCheckSvg className="w-3.5 h-3.5 text-sky-400" />
          OFFICIAL VICTOR
        </span>
        <TechCircuitSvg className="w-8 h-3 text-sky-500/30" />
      </div>
    </div>
  );
}

// Custom SVGs (High Quality Cyberpunk Styling)

function CyberTrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <path d="M8 21h8m-4-4v4M6 3h12v5a6 6 0 01-12 0V3z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 5H4a2 2 0 00-2 2v1a4 4 0 004 4h2M18 5h2a2 2 0 012 2v1a4 4 0 01-4 4h-2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MedalSvg({ rank, className = "" }: { rank: string; className?: string }) {
  const color = rank === "Gold" ? "#f59e0b" : rank === "Silver" ? "#cbd5e1" : "#d97706";
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="14" r="6" stroke={color} strokeWidth="2" fill={`${color}22`} />
      <path d="M8.5 2L12 9L15.5 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UserSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
    </svg>
  );
}

function CornerAccentSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M0 0H10V2H2V10H0V0Z" fill="currentColor" />
    </svg>
  );
}

function VerifiedCheckSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L15 4L19 4L20 8L23 11L21 15L22 19L18 20L15 23L12 21L9 23L6 20L2 19L3 15L1 11L4 8L5 4L9 4L12 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechCircuitSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 20" fill="none" className={className}>
      <path d="M0 10H15L20 5H35L40 10H50" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="5" r="2" fill="currentColor" />
      <circle cx="35" cy="5" r="2" fill="currentColor" />
    </svg>
  );
}

function ShareSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}

async function shareOrCopy(hash: string) {
  const url = `${window.location.origin}${window.location.pathname}${hash}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "TechKshitiz Winners", url });
      return;
    } catch {}
  }
  await navigator.clipboard.writeText(url);
  alert("Winner link copied to clipboard!");
}