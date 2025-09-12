import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { organizingTeam, clubIncharges, clubHeads } from "@/data/org";
import {faqs} from "@/data/faq";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function AboutPage() {
  
  // Developer data - you can move this to a separate data file if needed
  const developers = [
    {
      name: "Ayushmaan Shandilya",
      role: "Designer and Developer",
      description:
        "I am a passionate developer skilled in React.js, Next.js, TypeScript, and Node.js, with a strong focus on building scalable web applications and experimenting with AI-driven solutions. I am currently exploring AI agents and generative AI to create innovative and impactful projects.",
      image:
        "https://res.cloudinary.com/dswkss8nj/image/upload/v1757502406/axshhhh_uazcww.jpg",
      social: {
        github: "https://github.com/ayushmaanxs",
        linkedin: "https://linkedin.com/in/ayushmaanxs",
        instagram: "https://instagram.com/ayushmaanxs",
        portfolio: "https://portfolio-ayushmaan.netlify.app/",
      },
    },
  ];
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq") {
      const el = document.getElementById("faq");
      if (el) {
        // 100ms delay taaki content render ho jaye
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);


  return (
    <div className="container py-12">
      <header className="max-w-3xl">
        <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide ">
          About the Club & Fest
        </p>
        <h1 className="heading text-3xl md:text-5xl mt-2 ">
          About Tech Kshitiz
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Welcome to <strong>Techkshitiz</strong> - the leading technical club
          at Government Engineering College, Siwan! Techkshitiz is a vibrant
          community fostering technical excellence and innovation among
          students. We provide a platform for hands-on learning, exploration of
          cutting-edge technologies, and collaboration with like-minded peers.
          Through engaging workshops, seminars, and hackathons, we empower
          students to develop practical skills and tackle real-world challenges.
          Our club serves as a hub for networking with industry professionals
          and alumni, offering valuable insights and opportunities for career
          growth. At Techkshitiz, we believe in the power of innovation to drive
          positive change. Our members work on exciting projects, contribute to
          collaborative initiatives, and push the boundaries of technology to
          make a meaningful impact. Join us on our journey to shape the future
          of technology and inspire the next generation of innovators. Connect
          with us to stay updated on our latest events, projects, and
          achievements.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/events"
            rel="noreferrer"
            className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary via-sky-600 to-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]"
          >
            Explore Events
          </a>
        </div>
      </header>
      {/* What's new */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">What's new in 2025</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Three‑Day Mega Fest"
            desc="22–24 Sept 2025 with mobile‑first schedules and streamlined registrations."
          />
          <FeatureCard
            title="Expanded Event Roster"
            desc="16+ events across Coding, Design, Engineering, Hardware, Strategy, and Culture/Games."
          />
          <FeatureCard
            title="Industry Connect"
            desc="Mentor hours, alumni talks, and project showcases to elevate outcomes."
          />
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
            <h3 className="font-semibold text-xl">
              Government Engineering College Siwan
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Government Engineering College Siwan (GEC Siwan) is dedicated to
              excellence in engineering education and innovation. The campus
              fosters hands‑on learning, research‑driven projects, and community
              impact. Tech Kshitiz is proudly organized by students and mentors
              of GEC Siwan to celebrate technology, creativity, and
              collaboration.
            </p>
          </div>
        </div>
      </section>
      {/* Fest focus based on events */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Fest Focus</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl ">
          This edition brings together high‑energy activities like{" "}
          <strong>Hackathon</strong>, <strong>Debugger</strong>,{" "}
          <strong>Technical Quiz</strong>,<strong> IoT Fusion</strong>,{" "}
          <strong>E‑Sports</strong>, <strong>Chess Online</strong>,{" "}
          <strong>Graphic Design</strong>, <strong>Circuit Design</strong>,
          <strong> Bridge Design</strong>, <strong>Crosswords</strong>,{" "}
          <strong>Puzzle Escape Room</strong>,{" "}
          <strong>Crafting & Decorating Stalls</strong>,
          <strong> Rangoli Event</strong>, <strong>RC Car Race</strong>,{" "}
          <strong>Web Design</strong>, and <strong>Rubix Cube</strong>. From
          rapid prototyping and electronics to design thinking, strategy, and
          cultural creativity—there's a track for every talent level.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Coding", "Design", "Hardware", "Brain Games", "E-Sports"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {t}
              </span>
            ),
          )}
        </div>
      </section>
      {/* Club Incharge Section */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Club In Charge</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 ">
          {clubIncharges.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className=" rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/20">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-sm md:text-base font-medium text-gray-200">
                {m.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {m.branch}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Techincal club head section */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Technical Club Head</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {clubHeads.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="group rounded-2xl border border-white/10 bg-card/60 p-6 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                {/* Name with LinkedIn Icon */}
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-200">
                    {m.name}
                  </h3>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white/50 hover:text-white transition-colors duration-200"
                      aria-label={`${m.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Branch + Batch */}
                <div className="mt-1 flex flex-wrap justify-center sm:justify-start items-center gap-2">
                  <p className="text-sm text-muted-foreground">{m.branch}</p>
                  {m.batch && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                      {m.batch}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="mt-2 text-xs md:text-sm text-gray-400">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organizing team marquee */}
      {/* <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Organizing Team</h2>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 mt-4">
          <div className="marquee w-max flex items-stretch gap-8">
            {[...organizingTeam, ...organizingTeam].map((m, i) => (
              <figure
                key={`${m.name}-${i}`}
                className="shrink-0 w-40 text-center"
              >
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2 text-sm font-medium text-gray-200">
                  {m.name}
                </figcaption>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </figure>
            ))}
          </div>
        </div>
      </section> */}
      {/* Developers Section */}

      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Meet the Developers</h2>
        <p className="mt-2 text-muted-foreground">
          The individuals behind this website
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/30 flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col text-center sm:text-left">
                <h3 className="text-lg font-semibold text-white">
                  {developer.name}
                </h3>
                <p className="text-sm text-primary font-medium mt-1">
                  {developer.role}
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-3 justify-center sm:justify-start">
                  {developer.social.github && (
                    <a
                      href={developer.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {developer.social.linkedin && (
                    <a
                      href={developer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {developer.social.instagram && (
                    <a
                      href={developer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {developer.social.portfolio && (
                    <a
                      href={developer.social.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Venue & dates */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Venue & Dates</h2>
        <div className="mt-4">
          <div className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6">
            <h3 className="font-semibold">22–24 September 2025</h3>
            <p className="mt-2 text-sm text-gray-300">
              Government Engineering College, Siwan — Campus venue (see Contact
              for full address).
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                to="/schedule"
                className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                View Schedule
              </Link>
              <Link
                to="/contact"
                className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                How to reach
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="mt-12" id="faq">
        <h2 className="heading text-2xl md:text-3xl">FAQ</h2>
        <Accordion
          type="single"
          collapsible
          className="space-y-0 font-spacemono"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
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
