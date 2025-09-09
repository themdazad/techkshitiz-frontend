import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { winnersMarquee } from "@/data/winners";

// Winners per event (use TBA means To be announced)
interface EventWinnersRow { rank: "Gold" | "Silver" | "Bronze"; team: string; members: string; title: string }
interface EventWinners { event: string; id: string; rows: EventWinnersRow[] }

const winnersByEvent: EventWinners[] = [
  { event: "Hackathon", id: "hackathon", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Debugger", id: "debugger", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Web Designing", id: "technical-quiz", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Typing Master", id: "iot-fusion", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "IoT Fusion", id: "e-sports", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "RC Car Racing", id: "chess-online", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "E-sports (BGMI,Free Fire)", id: "graphic-design", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Bridge Designing", id: "circuit-design", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "AutoCAD Designing", id: "bridge-design", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Circuit Designing", id: "crosswords", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Puzzle Escape Room", id: "puzzle-escape-room", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Technical Quiz", id: "crafting-stalls", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Rubix Cube Challange", id: "rangoli-event", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Videography Competition", id: "tech-flash", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Graphic Designing", id: "extempore", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
  { event: "Crafting & Decoration Stalls", id: "rubix-cube", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
   { event: "Technical Rangoli", id: "rubix-cube", rows: [
    { rank: "Gold", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Silver", team: "TBA", members: "TBA", title: "TBA" },
    { rank: "Bronze", team: "TBA", members: "TBA", title: "TBA" },
  ]},
];

export default function WinnersPage() {
  const looped = useMemo(() => winnersMarquee.concat(winnersMarquee), []);

  return (
    <div className="container py-12">
      <header className="mb-6">
        <h1 className="heading text-3xl md:text-4xl">Winners</h1>
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
