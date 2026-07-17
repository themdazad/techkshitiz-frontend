import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "@/data/events";
import {
  Download,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const ev = useMemo(() => events.find((e) => e.id === id), [id]);

  if (!ev) {
    return (
      <div className="container py-16">
        <h1 className="heading text-3xl text-primary">Event not found</h1>
        <p className="mt-2 text-muted-foreground">
          We couldn't find this event. Please browse all events.
        </p>
        <Link
          to="/events"
          className="mt-4 inline-block rounded-md border border-border px-4 py-2 text-sm hover:bg-muted"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <nav className="text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link to="/events" className="hover:underline">
          Events
        </Link>
        <span className="mx-1">/</span>
        <span className=" font-normal text-primary">{ev.title}</span>
      </nav>

      <header className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div
            className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/10 /10 to-secondary/10 text-2xl"
            aria-hidden
          >
            {ev.emoji}
          </div>
          <div>
            <h1 className="heading text-3xl md:text-4xl text-primary">{ev.title}</h1>
            <p className="mt-1 text-muted-foreground">
              {ev.category} • {ev.duration} • {ev.location}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          {/* Rulebook Button */}
          {ev.id === "circuit-designing" ? (
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-3 text-sm font-medium backdrop-blur opacity-50 cursor-not-allowed">
              <Download className="h-4 w-4" />
              Rulebook
            </span>
          ) : (
            <a
              href={ev.rulebookLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-3 text-sm font-medium backdrop-blur transition-all duration-200 hover:bg-muted/70 hover:border-primary"
            >
              <Download className="h-4 w-4" />
              Rulebook
            </a>
          )}

          {/* Register Button */}
          <span className="relative overflow-hidden rounded-lg bg-muted px-6 py-3 text-sm font-semibold text-muted-foreground opacity-50 cursor-not-allowed">
            Registration Closed
          </span>
        </div>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="md:col-span-2 rounded-xl border border-border bg-card/60 backdrop-blur p-6 transition-all duration-200 hover:border-primary hover:bg-card/70 animate-card">
          <h2 className="font-semibold text-foreground">Overview</h2>
          <p className="mt-2 text-foreground">
            {ev.blura}
            {ev.blurb}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {/* {ev.tags.map((t) => (
              <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{t}</span>
            ))} */}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground">Important Notes</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-foreground space-y-1">
                {(ev.rules ?? [])
                  .concat([
                    "Participants need to carry their college ID with them during the event.",
                    "Free hostel accommodation is available for girls, with food charges applicable as per the Mess if availed.",
                    "Accommodation for boys is ₹100 per person for the entire event (not per day) with food charges applicable as per the Mess if availed. Charges apply only if you stay overnight in the college.",
                  ])
                  .map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Coordinators</h3>
              <ul className="mt-2 space-y-2 text-sm text-foreground">
                {(
                  ev.coordinators ?? [
                    { name: "Ayushmaan", phone: "+91 0000000000" },
                    { name: "Ayushmaan", phone: "+91 0000000000" },
                    { name: "Ayushmaan", phone: "+91 0000000000" },
                  ]
                ).map((c, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-md border border-border bg-muted px-3 py-2"
                  >
                    <span className="font-medium text-foreground">{c.name}</span>
                    <a
                      className="text-primary hover:underline"
                      href={`tel:${c.phone}`}
                    >
                      {c.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 transition-all duration-200 hover:border-primary hover:bg-card/70 animate-card">
          <h3 className="font-semibold text-foreground">At a glance</h3>
          <dl className="mt-3 grid grid-cols-1 gap-3 text-sm">
            <div>
              <dt className="text-foreground font-gruppo font-bold">Prizes</dt>
              <dd className="font-medium font-spacemono text-foreground">{ev.prize}</dd>
            </div>
            <div>
              <dt className="text-foreground font-gruppo font-bold">Duration</dt>
              <dd className="font-medium font-spacemono text-foreground">{ev.duration}</dd>
            </div>
            {/* <div>
              <dt className="text-muted-foreground font-gruppo">Location</dt>
              <dd className="font-medium font-spacemono">{ev.location}</dd>
            </div> */}
            <div>
              <dt className="text-foreground font-gruppo font-bold ">
                Team Size
              </dt>
              <dd className="font-medium font-spacemono text-foreground">{ev.teamSize}</dd>
            </div>
            <div>
              <dt className="text-foreground font-gruppo font-bold">
                Registration Fee
              </dt>
              <dd className="font-medium font-spacemono text-foreground">{ev.registration}</dd>
            </div>
            <div>
              <dt className="text-foreground font-gruppo font-bold">
                Location
              </dt>
              <dd className="font-medium font-spacemono text-foreground">{ev.location}</dd>
            </div>
          </dl>
          <div className="mt-6">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-gradient-to-r from-blue-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              <Calendar className="h-4 w-4 " />
              Check Schedule
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="font-semibold">Similar events</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events
            .filter((e) => e.category === ev.category && e.id !== ev.id)
            .slice(0, 3)
            .map((s) => (
              <Link
                key={s.id}
                to={`/events/${s.id}`}
                className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-4 transition-all duration-200 hover:shadow-md hover:border-white/20 hover:bg-card/70"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden>
                    {s.emoji}
                  </span>
                  <span className="font-medium">{s.title}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.blura}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
