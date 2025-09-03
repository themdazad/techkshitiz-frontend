import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "@/data/events";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const ev = useMemo(() => events.find((e) => e.id === id), [id]);

  if (!ev) {
    return (
      <div className="container py-16">
        <h1 className="heading text-3xl">Event not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn't find this event. Please browse all events.</p>
        <Link to="/events" className="mt-4 inline-block rounded-md border px-4 py-2 text-sm hover:bg-muted">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <nav className="text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-1">/</span>
        <Link to="/events" className="hover:underline">Events</Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">{ev.title}</span>
      </nav>

      <header className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-2xl" aria-hidden>
            {ev.emoji}
          </div>
          <div>
            <h1 className="heading text-3xl md:text-4xl">{ev.title}</h1>
            <p className="mt-1 text-muted-foreground">{ev.category} • {ev.level} • {ev.duration} • {ev.location}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a href={ev.rulebookLink} target="_blank" rel="noreferrer" className="rounded-md border px-4 py-3 text-sm hover:bg-muted">Download Rulebook</a>
          <a href={ev.registerLink} target="_blank" rel="noreferrer" className="rounded-md bg-primary px-5 py-3 text-primary-foreground shadow-glow hover:brightness-105">Register</a>
        </div>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="md:col-span-2 rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6 animate-card">
          <h2 className="font-semibold">Overview</h2>
          <p className="mt-2 text-gray-300">{ev.blurb} This event encourages creativity and collaboration. Bring your laptop and enthusiasm. Rules and prompts will be shared on the day of the event. Time management and team communication are key to success.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ev.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">{t}</span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Rules</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
                {(ev.rules ?? ["Original work only","Follow time limits","Respect fair play"]).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Coordinators</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-300">
                {(ev.coordinators ?? [
                  { name: "Kritika", phone: "+91 9000000001" },
                  { name: "Ayushmaan", phone: "+91 9060717563" },
                  { name: "Rahul", phone: "+91 9000000003" },
                ]).map((c, i) => (
                  <li key={i} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                    <span className="font-medium">{c.name}</span>
                    <a className="text-primary hover:underline" href={`tel:${c.phone}`}>{c.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6 animate-card">
          <h3 className="font-semibold">At a glance</h3>
          <dl className="mt-3 grid grid-cols-1 gap-3 text-sm">
            <div><dt className="text-gray-500">Prizes</dt><dd className="font-medium">Goodies, Certificate</dd></div>
            <div><dt className="text-gray-500">Duration</dt><dd className="font-medium">{ev.duration}</dd></div>
            <div><dt className="text-gray-500">Location</dt><dd className="font-medium">{ev.location}</dd></div>
            <div><dt className="text-gray-500">Category</dt><dd className="font-medium">{ev.category}</dd></div>
          </dl>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="inline-flex btn-gradient" onMouseMove={(e)=>{const t=e.currentTarget as HTMLElement; const r=t.getBoundingClientRect(); t.style.setProperty('--mx', `${e.clientX - r.left}px`);}}>
              <Link to="/schedule" className="inline-flex items-center rounded-full bg-background/70 backdrop-blur px-3 py-1.5 text-sm border border-white/10 hover:bg-white/5 transition-colors">
                Check schedule →
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="font-semibold">Similar events</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.filter((e) => e.category === ev.category && e.id !== ev.id).slice(0,3).map((s) => (
            <Link key={s.id} to={`/events/${s.id}`} className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-4 hover:shadow-md">
              <div className="flex items-center gap-3"><span className="text-lg" aria-hidden>{s.emoji}</span><span className="font-medium">{s.title}</span></div>
              <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
