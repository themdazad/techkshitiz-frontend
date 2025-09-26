import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { winnersMarquee } from "@/data/winners";

// Winners per event (use TBA means To be announced)
interface EventWinnersRow { rank: "Gold" | "Silver" | "Bronze"; team: string; members: string; title: string }
interface EventWinners { event: string; id: string; rows: EventWinnersRow[] }

const winnersByEvent: EventWinners[] = [
  { event: "Hackathon", id: "hackathon", rows: [
    { rank: "Gold" as const, team: "CyberNova", members: "Shubham Kumar Gupta, Nidhi Nupur, Pranav Pratyush, Ashish Kumar", title: "GEC Gopalganj" },
    { rank: "Silver" as const, team: "The Falcon", members: "Sonu Kumar, Raj Deepak, Priyanshu Ranjan, Ankit Kumar", title: "GEC Siwan" },
    { rank: "Bronze" as const, team: "TechVerse", members: "Khushi Kumari, Aditya Kumar, Lav Kumar, Munna Kumar", title: "GEC Siwan" },
  ]},
  { event: "Debugger", id: "debugger", rows: [
    { rank: "Gold" as const, team: "Ankit Kumar Singh", members: "Individual Winner", title: "GEC Gopalganj" },
  ]},
  { event: "Web Designing", id: "technical-quiz", rows: [
    { rank: "Gold" as const, team: "LEGENDA TEAM", members: "Amar Kishor Kumar, Vishnu Kumar, Shivam Kumar", title: "GP Barauni" },
    { rank: "Silver" as const, team: "VIDHAYAK JI", members: "Sujeet Kumar, Vicky Kumar, Utsav Kumar", title: "GP Siwan" },
  ]},
  { event: "Typing Master", id: "iot-fusion", rows: [
    { rank: "Gold" as const, team: "Ankit Kumar", members: "Individual Winner", title: "GEC Siwan" },
  ]},
  { event: "IoT Fusion", id: "e-sports", rows: [
    { rank: "Gold" as const, team: "Tech Titans", members: "Ritik Kumar Sharma, Anupriya, Amrita Kumari, Priyanshu Kumar", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "Backend Battalion", members: "Ashish Kumar, Prashant Gaurav, Golu Kumar, Rahul Kumar Mishra", title: "GEC Siwan" },
    { rank: "Bronze" as const, team: "The Falcon", members: "Sonu Kumar, Raj Deepak, Priyanshu Ranjan, Ankit Kumar", title: "GEC Siwan" },
  ]},
  { event: "RC Car Racing", id: "chess-online", rows: [
    { rank: "Gold" as const, team: "Red Bull Racing", members: "Ritik Kumar Sharma, Anupriya", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "ELX", members: "Shubham Tiwari, Namit Kumar", title: "GP Siwan" },
  ]},
  { event: "E-sports (BGMI)", id: "graphic-design", rows: [
    { rank: "Gold" as const, team: "ZARRY", members: "Zaif Ahmad, Arshad Ali, Anup Kumar Ram, Mahfooz Alam", title: "SCEM Siwan" },
    { rank: "Silver" as const, team: "CxG ESPORT", members: "Bittu Kumar Yadav, Hariom Yadav, Akash Yadav, Gulshan Kumar", title: "GP Siwan" },
    { rank: "Bronze" as const, team: "LIZARD", members: "Atul Ranjan, Santosh Kumar, Rohit Raj, Raushan Kumar Verma", title: "GP Siwan" },
  ]},
 { 
  event: "E-sports (FREEFIRE)", 
  id: "graphic-design", 
  rows: [
    { 
      rank: "Gold" as const, 
      team: "TEAM IGRIS", 
      members: "Sundram Kumar, Anmol Kumar, Anish Kumar, Rajnish Kumar", 
      title: "GP Siwan " 
    },
    { 
      rank: "Silver" as const, 
      team: "TEAM PREDATORS", 
      members: "Aditya Kumar, Dipankar Sah, Md Sahil Aslam, Dip Raj", 
      title: "GP Siwan" 
    },
    { 
      rank: "Bronze" as const, 
      team: "Phanthon", 
      members: "Prince Kumar, Shivam Kumar, Abhisek Kumar, Pawan Kumar", 
      title: "GP Siwan " 
    },
  ]
},

  { event: "Bridge Designing", id: "circuit-design", rows: [
    { rank: "Gold" as const, team: "Buidico Designer", members: "Gautam Kumar, Anish Kumar, Suman Kumar, Navneet Kumar", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "BEAM DREAMERS", members: "Suhani Mishra, Anupriya, Sagar Raj, Mukund Singh", title: "GEC Siwan" },
    { rank: "Bronze" as const, team: "LOAD CELL", members: "Aman Raj, Satya Prakash Yadav, Sonu Kumar Sah, Sachin Kumar", title: "GEC Siwan" },
  ]},
  { event: "AutoCAD Designing", id: "bridge-design", rows: [
    { rank: "Gold" as const, team: "Kunal Kumar", members: "Individual Winner", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "Aditya Kumar Sah", members: "Individual Winner", title: "GEC Siwan" },
  ]},
  { event: "Puzzle Escape Room", id: "puzzle-escape-room", rows: [
    { rank: "Gold" as const, team: "The Solvers", members: "Aditya Kumar Gupta, Aditya Kumar Sah, Ankit Kumar Mahto, Amandeepa Kumari", title: "GEC Siwan" },
  ]},
  { event: "Technical Quiz", id: "crafting-stalls", rows: [
    { rank: "Gold" as const, team: "Tejaswi Raj", members: "Individual Winner", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "Sajid Ahmad", members: "Individual Winner", title: "GEC Gopalganj" },
    { rank: "Bronze" as const, team: "Ashish Kumar", members: "Individual Winner", title: "GEC Gopalganj" },
  ]},
  { event: "Rubix Cube Challange", id: "rangoli-event", rows: [
    { rank: "Gold" as const, team: "Subham Tiwari", members: "Individual Winner", title: "GP Siwan" },
    { rank: "Silver" as const, team: "Himanshu Kumar", members: "Individual Winner", title: "GP Barauni" },
  ]},
  { event: "Videography Competition", id: "tech-flash", rows: [
    { rank: "Gold" as const, team: "ZEW ESCAPE", members: "Md Zeeshon Alam, Aditya Sharma", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "APERTURE ADDICTS", members: "Golu Kumar, Ashish Kumar", title: "GEC Siwan" },
  ]},
  { event: "Graphic Designing", id: "extempore", rows: [
    { rank: "Gold" as const, team: "Nidhi Nupur", members: "Individual Winner", title: "GEC Gopalganj - CSE (IoT & CS)" },
    { rank: "Silver" as const, team: "Md Tabish", members: "Individual Winner", title: "SCEM Siwan" },
  ]},
  { event: "Crafting & Decoration Stalls", id: "rubix-cube", rows: [
    { rank: "Gold" as const, team: "Power Star", members: "Nirbhay Singh, Ankit Anand, Abhimanu Kumar, Abhishek Kumar Paswan, Akash Kumar Singh", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "Fab Four", members: "Nikhil Kumar, Abhinaw Kumar Singh, Ragni Kumari, Nisha Kumari", title: "SCEM Siwan" },
  ]},
   { event: "Technical Rangoli", id: "rangoli-event-2", rows: [
    { rank: "Gold" as const, team: "SPECTRUM SQUAD", members: "Aakanksha Singh, Anand Raj, Vivek Kumar", title: "GEC Siwan" },
    { rank: "Silver" as const, team: "MADE IN INDIA", members: "Abha Kumari, Kumkum Kumari, Anshu Kumari", title: "GEC Siwan" },
  ]},
  
].filter(event => event.rows.some(row => row.team !== "-"));

export default function WinnersPage() {
  const looped = useMemo(() => winnersMarquee.concat(winnersMarquee), []);

  return (
    <div className="container py-12">
      <header className="mb-6">
        <h1 className="heading text-3xl md:text-4xl font-normal text-sky-600">Winners</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">Spotlight on champions across events</p>
      </header>
      {/* Winners Marquee */}
      {/* Auto-scrolling strip */}
      {/* <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 animate-card">
        <div className="marquee w-max flex items-stretch gap-8">
          {looped.map((w, i) => (
            <figure key={`${w.name}-${i}`} className="shrink-0 w-40 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/20">
                <img src={w.photo} alt={w.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <figcaption className="mt-2 text-sm font-medium text-gray-200 whitespace-nowrap">{w.name}</figcaption>
              <p className="text-xs text-muted-foreground">{w.event}</p>
            </figure>
          ))}
        </div>
      </div> */}

      {/* Winners tables per event */}
      <section className="mt-10 space-y-10">
        {winnersByEvent.map((ev) => (
          <article key={ev.id} id={ev.id} className="scroll-mt-24">
            <div className="flex items-center justify-between">
              <h2 className="heading text-xl md:text-2xl">{ev.event}</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareOrCopy(`#${ev.id}`)}
                aria-label={`Share winners for ${ev.event}`}
              >
                Share
              </Button>
            </div>
            <div className="mt-4 overflow-x-auto no-scrollbar rounded-xl border border-white/10 bg-card/60 backdrop-blur animate-card">
              <table className="w-full text-sm">
                <thead className="bg-white/5 text-gray-300">
                  <tr>
                    <th className="px-4 py-3 text-left">Rank</th>
                    <th className="px-4 py-3 text-left">Team/Participant</th>
                    <th className="px-4 py-3 text-left">Members</th>
                    <th className="px-4 py-3 text-left">Project / Title</th>
                  </tr>
                </thead>
                <tbody>
                  {ev.rows.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <RankBadge rank={r.rank} />
                      </td>
                      <td className="px-4 py-3 font-medium">{r.team}</td>
                      <td className="px-4 py-3 text-gray-300">{r.members}</td>
                      <td className="px-4 py-3">{r.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function RankBadge({ rank }: { rank: "Gold" | "Silver" | "Bronze" }) {
  const styles: Record<typeof rank, string> = {
    Gold: "bg-gradient-to-r from-yellow-300 to-amber-300 text-amber-900",
    Silver: "bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800",
    Bronze: "bg-gradient-to-r from-orange-200 to-amber-200 text-amber-900",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${styles[rank]}`}>{rank}</span>
  );
}

async function shareOrCopy(hash: string) {
  const url = `${window.location.origin}${window.location.pathname}${hash}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "Tech Kshitiz Winners", url });
      return;
    } catch {}
  }
  await navigator.clipboard.writeText(url);
  alert("Link copied to clipboard");
}