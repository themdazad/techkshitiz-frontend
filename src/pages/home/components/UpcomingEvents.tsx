// src/components/site/UpcomingEvents.tsx
import { Link } from "react-router-dom";
import { highlights } from "@/data/homepageData";
import HeadingText from "@/components/custom-ui/HeadingText";

export function UpcomingEvents() {
  return (
    <section className="container py-10 md:py-14">
      <div className="flex items-end justify-between">
        <HeadingText style={"heading font-syne font-bold text-3xl md:text-4xl text-sky-600"} text={"Upcoming Events"}/>
        <Link className="text-sm text-muted-foreground hover:text-foreground" to="/events">
          See all events →
        </Link>
      </div>
      <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-3">
        {highlights.slice(0, 6).map((h) => (
          <Link
            key={h.title}
            to={h.to}
            className="group border border-white/10 bg-card/80 p-5 transition hover:shadow-md focus:shadow-md animate-card no-parallax"
          >
            <div className="flex items-center gap-3">
              <h3 className="font-syne font-bold text-lg md:text-xl">{h.title}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{h.blurb}</p>
            <span className="mt-4 inline-block text-xs font-medium text-gray-300 group-hover:text-white transition-transform group-hover:translate-x-0.5 learn-more">
              <span className="text-foreground group-hover:text-white">Learn more →</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}