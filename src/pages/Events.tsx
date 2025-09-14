import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { events, type Category } from "@/data/events";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, Users, IndianRupee, Trophy } from "lucide-react";

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
        !q || [e.title, e.blura, ...e.tags].join(" ").toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [cat, query]);

  return (
    <div className="relative">
      <section className="container pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="heading text-3xl md:text-4xl font-normal text-sky-600">Explore Events</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              All the events occuring in Tech Kshitiz'25
            </p>
          </div>
          <div className="flex gap-2">
            <input
              className="w-64 max-w-[60vw] rounded-md border border-white/10 bg-background/40 backdrop-blur px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
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
                  "rounded-full border px-3 py-1 text-sm",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <article
              key={e.id}
              className="group rounded-xl border border-white/10 bg-card/80 p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-white/20 focus-within:shadow-md focus-within:border-white/20 animate-card no-parallax"
            >
              <Link
                to={`/events/${e.id}`}
                className="block overflow-hidden rounded-lg"
              >
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={`https://res.cloudinary.com/dxpleao6v/image/upload/${encodeURIComponent(e.imgUrl)}`}
                    alt={`${e.title} photo`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </Link>

              <div className="mt-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-lg">
                    <span aria-hidden>{e.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      <Link to={`/events/${e.id}`} className="hover:underline">
                        {e.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500">{e.category} •</p>
                  </div>
                </div>
                {e.duration.includes("TBA") && (
                  <span
                    className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-medium text-yellow-900"
                    title="Timing or duration to be announced"
                  >
                    TBA
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-muted-foreground min-h-10">
                {e.blura}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-1 p-2">
                  <Clock className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-300 text-[10px] leading-tight">{e.duration}</span>
                </div>
                <div className="flex items-center gap-1 p-2">
                  <Users className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-[10px] leading-tight">{e.teamSize}</span>
                </div>
                <div className="flex items-center gap-1 p-2">
                  <IndianRupee className="h-4 w-4 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-300 text-[10px] leading-tight">{e.registration}</span>
                </div>
              </div>
              

              <div className="mt-2 text-xs">
                <div className="flex items-center gap-2 p-2">
                  <Trophy className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-300 ">{e.prize}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {/* {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))} */}
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/events/${e.id}`}
                    className={`inline-flex items-center rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5 
    ${e.id === "circuit-designing" ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}`}
                  >
                    Details
                  </Link>

                  <a href={e.registerLink} target="_blank" rel="noreferrer">
                    <Button size="sm" disabled={e.id === "circuit-designing"}>
                      {e.id === "circuit-designing"
                        ? "Closed"
                        : "Register"}{" "}
                    </Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}