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
            <h1 className="heading text-3xl md:text-4xl font-normal text-primary">
              Explore Events
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              All the events occurring in TechKshitiz'25
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
        <div className="grid gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <article
              key={e.id}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-background/90 to-card/80 shadow-lg transition-all duration-200 hover:shadow-xl hover:border-primary/40 focus-within:shadow-xl focus-within:border-primary/40 animate-card no-parallax overflow-hidden min-h-[250px] flex flex-col justify-between gap-2"
            >
              {/* Image */}
              <Link
                to={`/events/${e.id}`}
                className="block overflow-hidden"
              >
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={`https://res.cloudinary.com/dxpleao6v/image/upload/${encodeURIComponent(e.imgUrl)}`}
                    alt={`${e.title} photo`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
              </Link>

              {/* Main content */}
              <div className="flex flex-col gap-3 p-4 sm:p-5">
                {/* Top Row: Icon, Title, Category */}
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 /20 to-secondary/20 text-2xl shadow-sm">
                    <span aria-hidden>{e.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="heading text-md truncate">
                      <Link to={`/events/${e.id}`} className="hover:underline">
                        {e.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <span className="text-foreground">{e.category}</span>
                      {e.duration.includes("TBA") && (
                        <span className="rounded bg-yellow-100/80 px-1 py-0.5 font-semibold text-yellow-900 ml-2">TBA</span>
                      )}
                    </div>
                  </div>
                </div>

               

                {/* Info Row */}
                <div className="flex flex-wrap justify-between gap-3 text-sm mt-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <span className="text-foreground">Duration:{e.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-secondary" />
                    <span className="text-foreground">Team Size: {e.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-6 w-6 text-accent" />
                    <span className="text-foreground">  Fee: {e.registration}</span>
                  </div>
                </div>

                {/* Prize Row */}
                <div className="flex items-center gap-2 text-base mt-1">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="text-foreground">{e.prize}</span>
                </div>
                
                {/* Description */}
                <p className="text-base text-muted-foreground min-h-[2.2em] mt-0.5">
                  <span className="text-foreground">{e.blura}</span>
                </p>
                {/* Actions */}
                <div className="flex items-center justify-end gap-2 mt-4">
                  <Link
                    to={`/events/${e.id}`}
                    className={`inline-flex items-center rounded-md border border-primary/30 px-5 py-2 text-sm font-semibold font-syne hover:bg-primary/10 transition-colors duration-150 ${e.id === "circuit-designing" ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}`}
                  >
                    Details
                  </Link>
                  <a href={e.registerLink} target="_blank" rel="noreferrer">
                    <Button size="sm" disabled className="bg-muted text-foreground border border-muted-foreground/20 cursor-not-allowed px-5 opacity-60">
                      Closed
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
