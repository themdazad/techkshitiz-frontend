import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { organizingTeam, clubIncharges } from "@/data/org";

export default function AboutPage() {
  // Developer data - you can move this to a separate data file if needed
  // const developers = [
  //   {
  //     name: "Ayushmaan Shandilya",
  //     role: "Full Stack Developer",
  //     description: "Passionate developer with expertise in React , Typescript , Node.js , GSAP and modern web technologies. Loves creating seamless user experiences and scalable web applications.",
  //     image: "https://res.cloudinary.com/dswkss8nj/image/upload/v1757347772/IMG_20250908_203307_rlaynx.jpg",
  //     social: {
  //       github: "https://github.com/ayushmaanxs",
  //       linkedin: "https://linkedin.com/in/ayushmaanxs",
  //       twitter: "https://twitter.com/ayushmaanxs",
  //       portfolio: "https://portfolio-ayushmaan.netlify.app/"
  //     }
  //   },
  // ];

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
          🚀 Welcome to <strong>Techkshitiz</strong> - the leading technical
          club at Government Engineering College, Siwan! 🚀 Techkshitiz is a
          vibrant community fostering technical excellence and innovation among
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
            desc="21–23 Sept 2025 with mobile‑first schedules and streamlined registrations."
          />
          <FeatureCard
            title="Expanded Event Roster"
            desc="16 events across Coding, Design, Hardware, Strategy, and Culture/Games."
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
          <strong> Rangoli Event</strong>,{" "}
          <strong>RC Car Race</strong>,{" "}
          <strong>Web Design</strong>, and{" "}
          <strong>Rubix Cube</strong>. From rapid prototyping and electronics to
          design thinking, strategy, and cultural creativity—there's a track for
          every talent level.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Coding", "Design", "Hardware", "Strategy", "Culture/Games"].map(
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {clubIncharges.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
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
      {/* <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Meet the Developers</h2>
        <p className="mt-2 text-muted-foreground">
          The individuals behind this website
        </p>
        <div className="mt-6 space-y-6">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-2xl ring-2 ring-primary/20">
                    <img
                      src={developer.image}
                      alt={developer.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">
                        {developer.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mt-1">
                        {developer.role}
                      </p>
                      <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                        {developer.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:flex-col sm:gap-2">
                      {developer.social.github && (
                        <a
                          href={developer.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 text-xs bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 border border-white/10 hover:border-white/20"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      {developer.social.linkedin && (
                        <a
                          href={developer.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 text-xs bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 border border-white/10 hover:border-white/20"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      )}
                      {developer.social.twitter && (
                        <a
                          href={developer.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 text-xs bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 border border-white/10 hover:border-white/20"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                          Twitter
                        </a>
                      )}
                      {developer.social.portfolio && (
                        <a
                          href={developer.social.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200 border border-primary/20 hover:border-primary/40"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                          </svg>
                          Portfolio
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>  */}

      {/* Venue & dates */}
      <section className="mt-12">
        <h2 className="heading text-2xl md:text-3xl">Venue & Dates</h2>
        <div className="mt-4">
          <div className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6">
            <h3 className="font-semibold">21–23 September 2025</h3>
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
      <section className="mt-12 font-spacemono" id="faq">
        <h2 className="heading text-2xl md:text-3xl">FAQ</h2>
        <Accordion
          type="single"
          collapsible
          className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-card/60 backdrop-blur"
        >
          <AccordionItem value="eligibility" className="px-4">
            <AccordionTrigger>Who can participate?</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-300">
              Students from all years and streams are welcome. Some events are
              team‑based; check the event card for details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rules" className="px-4">
            <AccordionTrigger>Are there general rules?</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-300">
              Yes — fairness, originality, and safety. Specific rules are shown
              on each event's details sections.For more info downlaod rulebook
              and follow accordingly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="registration" className="px-4">
            <AccordionTrigger>How do I register?</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-300">
              Go the event section and select the event on which you want to
              participate and fill the respective google form
            </AccordionContent>
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