import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { organizingTeam } from "@/data/org";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <header className="max-w-3xl">
        <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide">About the Club & Fest</p>
        <h1 className="heading text-3xl md:text-5xl mt-2">About Tech Kshitiz</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          🚀 Welcome to <strong>Techkshitiz</strong> - the leading technical club at Government Engineering College, Siwan! 🚀
          Techkshitiz is a vibrant community fostering technical excellence and innovation among students. We provide a platform for
          hands-on learning, exploration of cutting-edge technologies, and collaboration with like-minded peers. Through engaging
          workshops, seminars, and hackathons, we empower students to develop practical skills and tackle real-world challenges.
          Our club serves as a hub for networking with industry professionals and alumni, offering valuable insights and opportunities
          for career growth. At Techkshitiz, we believe in the power of innovation to drive positive change. Our members work on
          exciting projects, contribute to collaborative initiatives, and push the boundaries of technology to make a meaningful impact.
          Join us on our journey to shape the future of technology and inspire the next generation of innovators. Connect with us to
          stay updated on our latest events, projects, and achievements.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <Link to="/events">Explore Events</Link>
          </Button>
        </div>
      </header>

      {/* What's new */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">What’s new in 2025</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <FeatureCard title="Three‑Day Mega Fest" desc="21–23 Sept 2025 with mobile‑first schedules and streamlined registrations." />
          <FeatureCard title="Expanded Event Roster" desc="16 events across Coding, Design, Hardware, Strategy, and Culture/Games." />
          <FeatureCard title="Industry Connect" desc="Mentor hours, alumni talks, and project showcases to elevate outcomes." />
        </div>
      </section>

      {/* About the Institute */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">About the Institute</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-[auto,1fr] items-center rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 animate-card">
          <div className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756782359/cropped_circle_image_y3vznc.png"
              alt="Tech Kshitiz logo"
              className="h-16 w-16 rounded-full ring-1 ring-white/10"
            />
            <div className="relative h-16 w-16 grid place-items-center rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 text-sm font-bold text-white select-none">
               <img
              src="https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756812379/png_2_tbzrth.png"
              alt="Tech Kshitiz logo"
              className="h-16 w-16 rounded-full ring-1 ring-white/10"
            />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Government Engineering College Siwan</h3>
            <p className="mt-2 text-sm text-gray-300">
              Government Engineering College Siwan (GEC Siwan) is dedicated to excellence in engineering education and innovation. The campus fosters
              hands‑on learning, research‑driven projects, and community impact. Tech Kshitiz is proudly organized by students and mentors of GEC Siwan to
              celebrate technology, creativity, and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Fest focus based on events */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Fest Focus</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          This edition brings together high‑energy activities like <strong>Hackathon</strong>, <strong>Debugger</strong>, <strong>Technical Quiz</strong>,
          <strong> IoT Fusion</strong>, <strong>E‑Sports</strong>, <strong>Chess Online</strong>, <strong>Graphic Design</strong>, <strong>Circuit Design</strong>,
          <strong> Bridge Design</strong>, <strong>Crosswords</strong>, <strong>Puzzle Escape Room</strong>, <strong>Crafting & Decorating Stalls</strong>,
          <strong> Rangoli Event</strong>, <strong>Tech Flash: Logo & Legacy</strong>, <strong>Extempore (Technical)</strong>, and <strong>Rubix Cube</strong>.
          From rapid prototyping and electronics to design thinking, strategy, and cultural creativity—there’s a track for every talent level.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Coding", "Design", "Hardware", "Strategy", "Culture/Games",
          ].map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">{t}</span>
          ))}
        </div>
      </section>

      {/* Organizing team marquee */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Organizing Team</h2>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 mt-4">
          <div className="marquee w-max flex items-stretch gap-8">
            {[...organizingTeam, ...organizingTeam].map((m, i) => (
              <figure key={`${m.name}-${i}`} className="shrink-0 w-40 text-center">
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2 text-sm font-medium text-gray-200">{m.name}</figcaption>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Venue & dates */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Venue & Dates</h2>
        <div className="mt-4">
          <div className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6">
            <h3 className="font-semibold">21–23 September 2025</h3>
            <p className="mt-2 text-sm text-gray-300">Government Engineering College, Siwan — Campus venue (see Contact for full address).</p>
            <div className="mt-4 flex gap-3">
              <Link to="/schedule" className="rounded-md border px-4 py-2 text-sm hover:bg-muted">View Schedule</Link>
              <Link to="/contact" className="rounded-md border px-4 py-2 text-sm hover:bg-muted">How to reach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12" id="faq">
        <h2 className="heading text-2xl md:text-3xl">FAQ</h2>
        <Accordion type="single" collapsible className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-card/60 backdrop-blur">
          <AccordionItem value="eligibility" className="px-4">
            <AccordionTrigger>Who can participate?</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-300">Students from all years and streams are welcome. Some events are team‑based; check the event card for details.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="rules" className="px-4">
            <AccordionTrigger>Are there general rules?</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-300">Yes — fairness, originality, and safety. Specific rules are shown on each event’s details sections.For more info downlaod rulebook and follow accordingly.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="registration" className="px-4">
            <AccordionTrigger>How do I register?</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-300">Go the event section and select the event on which you want to participate and fill the respective google form</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/5 to-transparent backdrop-blur p-5 shadow-sm">
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-gray-300">{desc}</p>
    </div>
  );
}
