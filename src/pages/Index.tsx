import { Link } from "react-router-dom";
import { schedule } from "@/data/events";
import { winnersMarquee } from "@/data/winners";
import { sponsors } from "@/data/sponsors";
import gsap from "gsap";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { HeroCountdown } from "@/components/site/HeroCountdown";

const highlights = [
  { title: "Hackathon", emoji: "💡", blurb: "Code, prototype, ship fast.", to: "/events#hackathon" },
  { title: "Technical Quiz", emoji: "🧠", blurb: "Tech trivia showdown.", to: "/events" },
  { title: "IoT Fusion", emoji: "🔗", blurb: "Connect sensors & ideas.", to: "/events" },
  { title: "E-Sports", emoji: "🎮", blurb: "Game on, compete, win.", to: "/events" },
  { title: "Design Challenges", emoji: "🎨", blurb: "Branding, graphics, UI.", to: "/events" },
  { title: "Cultural Crafts", emoji: "🌺", blurb: "Rangoli, crafting stalls.", to: "/events" },
  { title: "Debugger", emoji: "🪲", blurb: "Hunt bugs under time.", to: "/events" },
  { title: "Chess Online", emoji: "♟️", blurb: "Think ahead, checkmate.", to: "/events" },
];

export default function Index() {
  useEffect(() => {
    const container = document.getElementById("hero-title");
    if (!container) return;
    const letters = Array.from(container.querySelectorAll<HTMLElement>(".hero-letter"));
    gsap.set(container, { transformPerspective: 900 });
    gsap.set(letters, { opacity: 1, y: 0, z: 0, rotateX: 0 });

    const tl = gsap.timeline();
    tl.to(letters, {
      y: -36,
      opacity: 0,
      filter: "blur(4px)",
      duration: 0.32,
      ease: "power2.in",
      stagger: 0.02,
    })
      .set(letters, { y: 36, opacity: 0, filter: "blur(4px)" })
      .to(letters, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.05,
      })
      .add(() => {
        letters.forEach((el) => el.classList.add("animate-gradient"));
      });
  }, []);

  return (
    <div id="top" className="relative">
      {/* Global background stars video */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <video aria-hidden className="absolute inset-0 h-full w-full object-cover brightness-[0.35] saturate-125" autoPlay loop muted playsInline preload="metadata" poster="/placeholder.svg">
          <source src="https://res.cloudinary.com/dcsqprug1/video/upload/small-vecteezy_minimal-stars-motion-loop-background-for-project-overlay_2016656_small_sueiul.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Live update bar */}
      <div className="w-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-b live-banner">
        <div className="container py-2 text-xs md:text-sm text-muted-foreground flex items-center gap-2">
          <span className="live-dot" aria-hidden />
          <span className="gradient-text animate-gradient">Live update: Registration closes 18 Sept </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,hsl(var(--primary)/0.15),transparent),radial-gradient(800px_300px_at_80%_10%,hsl(var(--accent)/0.15),transparent)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px] mix-blend-overlay" />
        </div>
        {/* Watermark logo behind content */}
        {/* <div aria-hidden className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0916ebaabc21457c896a581f1ee94f90%2F46f3594dbd9c4ecc83390d1d701bd27c?format=webp&width=800"
            alt="Tech Kshitiz large logo"
            className="w-[80vw] max-w-[820px] opacity-[0.08] md:opacity-[0.12] mix-blend-screen blur-[0.5px] animate-float"
          />
        </div> */}
        <div className="container pt-12 md:pt-16 pb-16">
          <div className="relative z-10 grid gap-10 md:grid-cols-2 items-start">
            <div className="max-w-3xl animate-fade-up">
              <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide">22-23 September 2025 • Campus</p>
              <h1 className="heading mt-3 text-5xl md:text-7xl">
                <span id="hero-title" className="hero-letters inline-block will-change-transform font-mono">
                  {"Tech Kshitiz".split("").map((ch, i) => (
                    <span key={i} className={cn("gradient-text hero-letter hero-3d inline-block font-['Kode_Mono'] tracking-wider", ch === " " && "inline-block w-3")}> {ch === " " ? "\u00A0" : ch} </span>
                  ))}
                </span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">Imagine. Build. Break. Create. A modern technical fest that celebrates innovation, collaboration, and hands‑on tech organised by Government Engineering College Siwan.</p>

              <HeroCountdown className="mt-5 lg:hidden" />

              <div className="mt-4 lg:mt-6 flex flex-wrap gap-3">
                <span className="inline-flex btn-gradient" onMouseMove={(e)=>{const t=e.currentTarget as HTMLElement; const r=t.getBoundingClientRect(); t.style.setProperty('--mx', `${e.clientX - r.left}px`);}}>
                  <Link to="/events" className="rounded-full bg-background/70 px-5 py-2.5 text-foreground text-sm border border-white/10 hover:bg-white/5 transition-colors">View Events</Link>
                </span>
              </div>
            </div>
            <div className="hidden md:block md:self-start">
              <div className="relative ml-auto w-full max-w-md glow-ring">
                <img src="https://res.cloudinary.com/dcsqprug1/image/upload/v1756827622/logo_2_z2uwno.png" alt="Tech Kshitiz logo" className="w-full h-auto object-contain block animate-float-slow glow-soft"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's new in 2025 (from About) */}
      <section className="container pt-4 pb-10">
        <h2 className="heading text-2xl md:text-3xl">What’s new in 2025</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/5 to-transparent backdrop-blur p-5 shadow-sm"><p className="font-semibold text-white">Three‑Day Mega Fest</p><p className="mt-1 text-sm text-gray-300">21–23 Sept 2025 with schedules and streamlined registrations.</p></div>
          <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/5 to-transparent backdrop-blur p-5 shadow-sm"><p className="font-semibold text-white">Expanded Event Roster</p><p className="mt-1 text-sm text-gray-300">16 events across Coding, Design, Hardware, Strategy, and Culture/Games.</p></div>
          <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/5 to-transparent backdrop-blur p-5 shadow-sm"><p className="font-semibold text-white">Industry Connect</p><p className="mt-1 text-sm text-gray-300">Mentor hours, alumni talks, and project showcases to elevate outcomes.</p></div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container pb-12">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-card/60">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/Kgk4gFFhdlc?si=29Ml7-hukWUarK7w" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects Completed", value: "48+" },
              { label: "Total Participants", value: "1200+" },
              { label: "Prizes Worth", value: "₹2L+" },
              { label: "Total Events", value: "16" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-white/10 bg-card/70 p-5 animate-card no-parallax">
                <p className="text-3xl font-bold">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="flex items-end justify-between">
          <h2 className="heading text-2xl md:text-3xl">Highlights</h2>
          <Link className="text-sm text-muted-foreground hover:text-foreground" to="/events">See all events →</Link>
        </div>
        <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-3">
          {highlights.slice(0,6).map((h) => (
            <Link key={h.title} to={h.to} className="group rounded-xl border border-white/10 bg-card/80 p-5 transition hover:shadow-md focus:shadow-md animate-card no-parallax">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-lg">{h.emoji}</div>
                <h3 className="font-semibold text-lg md:text-xl">{h.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{h.blurb}</p>
              <span className="mt-4 inline-block text-xs font-medium text-gray-300 group-hover:text-white transition-transform group-hover:translate-x-0.5 learn-more">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick schedule teaser */}
      <section className="bg-background/30 border-y border-white/5 backdrop-blur">
        <div className="container py-12">
          <div className="flex items-end justify-between">
            <h2 className="heading text-2xl md:text-3xl">Quick Schedule</h2>
            <Link to="/schedule" className="text-sm text-muted-foreground hover:text-foreground">See full schedule →</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {(["Day 01", "Day 02", "Day 03"] as const).map((day) => (
              <div key={day} className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-5 animate-card">
                <h3 className="font-semibold">{day}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  {schedule[day].slice(0, 3).map((s) => (
                    <li key={s.title} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">{s.title}</span>
                        <span className="text-gray-400"> — {s.time}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="container py-12">
        <div className="flex items-end justify-between">
          <h2 className="heading text-2xl md:text-3xl">Sponsors</h2>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#">Media kit →</a>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {sponsors.map((src, i) => (
            <div key={i} className="h-12 rounded-md border bg-card/60 backdrop-blur grid place-items-center animate-card">
              <img src={src} alt="Sponsor logo" className="max-h-8 object-contain opacity-80" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Winners teaser */}
      <section className="container py-12">
        <div className="flex items-end justify-between">
          <h2 className="heading text-2xl md:text-3xl">Winners</h2>
          <Link className="text-sm text-muted-foreground hover:text-foreground" to="/winners">See all winners →</Link>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 mt-4 animate-card">
          <div className="marquee w-max flex items-stretch gap-8">
            {[...winnersMarquee, ...winnersMarquee].map((w, i) => (
              <figure key={`${w.name}-${i}`} className="shrink-0 w-40 text-center">
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <img src={w.photo} alt={w.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2 text-sm font-medium text-gray-200">{w.name}</figcaption>
                <p className="text-xs text-muted-foreground">{w.event}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="container pb-20">
        <div className="flex items-end justify-between">
          <h2 className="heading text-2xl md:text-3xl">Gallery</h2>
          <Link className="text-sm text-muted-foreground hover:text-foreground" to="/gallery">See all photos →</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836502/3_l6caw7.jpg","https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836889/4_y0l3wb.jpg","https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836501/2_kmxdlw.jpg","https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg"].map((src, i) => (
            <Link key={i} to="/gallery" className="block overflow-hidden rounded-xl border border-white/10 bg-card/40 animate-card">
              <img src={src} alt="Gallery preview" className="w-full h-40 object-cover" loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      {/* Social */}
      <section className="container pb-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-8 text-center backdrop-blur">
          <h3 className="heading text-2xl">Be part of the community</h3>
          <p className="mt-2 text-muted-foreground">Follow for updates, teasers, and behind‑the‑scenes.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" href="https://www.instagram.com/techkshitiz/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" href="https://x.com/techkshitiz/" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" href="https://www.youtube.com/channel/UC3wtHavbQMLUP9X8Yp_Y8pA" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" href="https://www.linkedin.com/company/techkshitiz/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
