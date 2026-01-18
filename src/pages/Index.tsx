import { Link } from "react-router-dom";
import { schedule } from "@/data/events";
import { winnersMarquee } from "@/data/winners";
import { sponsors } from "@/data/sponsors";
import gsap from "gsap";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Instagram, Twitter, Youtube, Linkedin, Download, DownloadIcon, Lightbulb, Brain, Link2, Gamepad2, Palette, Flower2, Bug, Crown, CalendarDays, Target, Handshake } from "lucide-react";
import { HeroCountdown } from "@/components/site/HeroCountdown";
import { Button } from "@/components/ui/button";

const highlights = [
	{
		title: "Hackathon",
		icon: <Lightbulb className="h-6 w-6 text-yellow-400" />,
		blurb: "Code, prototype, ship fast.",
		to: "/events#hackathon",
	},
	{
		title: "Technical Quiz",
		icon: <Brain className="h-6 w-6 text-pink-400" />,
		blurb: "Tech trivia showdown.",
		to: "/events",
	},
	{
		title: "IoT Fusion",
		icon: <Link2 className="h-6 w-6 text-blue-400" />,
		blurb: "Connect sensors & ideas.",
		to: "/events",
	},
	{
		title: "E-Sports",
		icon: <Gamepad2 className="h-6 w-6 text-green-400" />,
		blurb: "Game on, compete, win.",
		to: "/events",
	},
	{
		title: "Design Challenges",
		icon: <Palette className="h-6 w-6 text-purple-400" />,
		blurb: "Branding, graphics, UI.",
		to: "/events",
	},
	{
		title: "Cultural Crafts",
		icon: <Flower2 className="h-6 w-6 text-pink-300" />,
		blurb: "Rangoli, crafting stalls.",
		to: "/events",
	},
	{
		title: "Debugger",
		icon: <Bug className="h-6 w-6 text-red-400" />,
		blurb: "Hunt bugs under time.",
		to: "/events",
	},
	{
		title: "Chess Online",
		icon: <Crown className="h-6 w-6 text-gray-400" />,
		blurb: "Think ahead, checkmate.",
		to: "/events",
	},
];

export default function Index() {
	useEffect(() => {
		const container = document.getElementById("hero-title");
		if (!container) return;
		const letters = Array.from(
			container.querySelectorAll<HTMLElement>(".hero-letter"),
		);
		gsap.set(container, { transformPerspective: 900 });
		gsap.set(letters, { opacity: 1, y: 0, z: 0, rotateX: 0 });

		const tl = gsap.timeline();
		tl.to(letters, {
			y: -36,
			opacity: 0,
			filter: "blur(0px)",
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
	const brochureUrl =
		"https://drive.google.com/file/d/1Xy5Xoz2Y5NWWf1WHy3DXp6HNup4magm3/view?usp=sharing";
		return (
			<div id="top" className="relative">

			{/* Hero section with grid background and smooth bottom fade */}
			<section className="relative w-full bg-gradient-to-r from-primary/10 /10 to-secondary/10 border-b live-banner">
				{/* Grid background overlay only for hero, faded at bottom */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-10 grid-bg grid-bg-fade"
				/>
				{/* Soft fade at bottom to blend with next section */}
				<div
					aria-hidden
					className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 -z-10 hero-bottom-fade"
				/>
				<div className="container py-2 text-xs md:text-sm text-muted-foreground flex items-center gap-2">
					<div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,hsl(var(--primary)/0.15),transparent),radial-gradient(800px_300px_at_80%_10%,hsl(var(--accent)/0.15),transparent)]" />
					{/* Grid pattern with fade effect */}
					<div
						className="absolute inset-0 opacity-100 mix-blend-overlay"
						style={{
							backgroundImage:
								'linear-gradient(90deg,var(--grid-line-color) 1px,transparent 1px),linear-gradient(var(--grid-line-color) 1px,transparent 1px)',
							backgroundSize: '40px 40px',
							maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
							WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
							pointerEvents: 'none',
							zIndex: 1,
						}}
					/>
				</div>
        {/* Hero section */}
				<div className="container text-center">
          
					<div className="relative z-10 max-w-4xl min-h-[70vh] w-full mx-auto flex flex-col items-center justify-center">
						<HeroCountdown className="mb-8" />
            <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide mb-4">
							Coming Soon
						</p>
            
						<h1 className="heading font-syne font-bold text-5xl md:text-8xl text-primary mb-6">
							<span id="hero-title" className="hero-letters inline-block will-change-transform">
								{(() => {
									const title = "TechKshitiz";
									return title.split("").map((ch, i) => {
										const isSpace = ch === " ";
										return (
											<span
												key={i}
												className={cn(
													"gradient-text hero-letter hero-3d inline-block",
													isSpace && "inline-block w-2",
												)}
											>
												{isSpace ? "\u00A0" : ch}
											</span>
										);
									});
								})()}
								<span className="hero-letter hero-3d inline-block text-white">'26</span>
							</span>
						</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
			  <span className="text-foreground">TechKshitiz returns—bigger, bolder, and more exciting! Join us to code, create, and connect with passionate minds. Ready to spark the future?</span>
            </p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
							{/* View Events Button */}
							<span className="relative inline-flex rounded-full overflow-hidden border border-white/10">
								<span className="absolute inset-0 " />
								<span className="absolute inset-0 bg-white/20 animate-shine" />
								<span className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
								<Link
									to="/events"
									className="relative z-10 rounded-full px-8 py-3 text-foreground font-medium hover:scale-105 transition-transform duration-300"
								>
									View Events
								</Link>
							</span>

							{/* Brochure Button */}
							<span className="relative inline-flex rounded-full overflow-hidden border border-white/10">
								<span className="absolute inset-0 animate-gradient-x" />
								<span className="absolute inset-0 animate-shine" />
								<span className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
								<a
									href={brochureUrl}
									target="_blank"
									rel="noreferrer"
									className="relative z-10 inline-flex items-center gap-2 rounded-full px-8 py-3 text-foreground font-medium hover:scale-105 transition-transform duration-300"
								>
									<svg
										className="h-4 w-4"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										aria-hidden
									>
										<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
										<polyline points="7 10 12 15 17 10" />
										<line x1="12" x2="12" y1="15" y2="3" />
									</svg>
									<span>Brochure</span>
								</a>
							</span>
						</div>        

						{/* Floating Prize Image */}
						<div className="hidden relative mx-auto w-full max-w-sm md:max-w-md">
							<div className="absolute -inset-4 bg-gradient-to-r from-primary/20 /20 to-secondary/20 rounded-2xl blur-xl opacity-50 animate-pulse" />
							<img
								src="https://res.cloudinary.com/dswkss8nj/image/upload/v1757832290/prize_reveal_shgnjm.png"
								alt="TechKshitiz logo"
								className="relative w-full h-auto object-contain new-animate-float glow-soft"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* What's new in 2025 (from About) */}
			<section className="container pt-4 pb-16">
        <div className="text-center my-12">
          <h2 className="heading font-syne font-bold text-4xl md:text-5xl text-primary mb-4">
            What's coming in TechKshitiz '26
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-foreground">Get ready for new experiences, bigger challenges, and more innovation at TechKshitiz '26. Stay tuned for all the exciting updates!</span>
          </p>
        </div>
         <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-background/80 to-accent/5 backdrop-blur p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
                <CalendarDays className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-syne font-bold text-xl text-foreground mb-3">All-New TechKshitiz Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                TechKshitiz '26 brings a fresh format, new themes, and more interactive sessions to ignite your creativity and skills.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/5 via-background/80 to-secondary/5 backdrop-blur p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-syne font-bold text-xl text-foreground mb-3">More Events, More Fun</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover new competitions, creative workshops, and collaborative challenges—now with 16+ events for every interest.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/5 via-background/80 to-primary/5 backdrop-blur p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6">
                <Handshake className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-syne font-bold text-xl text-foreground mb-3">Stronger Community & Networking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with mentors, industry leaders, and fellow innovators through exclusive networking and team-building activities.
              </p>
            </div>
          </div>
        </div>
			</section>

			{/* Highlights */}
      <section className="container pb-16">
        <div className="text-center mb-12">
          <h2 className="heading font-syne font-bold text-4xl md:text-5xl text-sky-600 mb-4">
            Event Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            <span className="text-foreground">Watch our recap video and explore the impressive numbers from last year's success</span>
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md mx-auto">
              {[
                {
                  label: "Projects Completed",
                  value: "48+",
                  icon: <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M2 17l10 5 10-5M2 12l10 5 10-5M2 7l10 5 10-5" /></svg>,
                },
                {
                  label: "Total Participants",
                  value: "850+",
                  icon: <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                },
                {
                  label: "Prizes Worth",
                  value: "₹20K+",
                  icon: <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0"/><circle cx="12" cy="8" r="7"/><polyline points="8 14 12 10 16 14"/></svg>,
                },
                {
                  label: "Total Events",
                  value: "13+",
                  icon: <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 11h20"/></svg>,
                },
              ].map((m, i) => (
                <div
                  key={m.label}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card/80 to-background/60 backdrop-blur p-6 hover:shadow-lg transition-all duration-300 animate-card no-parallax flex flex-col items-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-2 flex items-center justify-center">{m.icon}</div>
                    <p className="text-2xl md:text-3xl font-bold font-syne text-foreground text-center">{m.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground text-center">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 shadow-xl w-full max-w-xl mx-auto">
              <iframe
                className="relative z-10 h-full w-full aspect-video"
                src="https://www.youtube.com/embed/dyoU6cPUdTk?si=_rILxosd6vOmg9q6" 
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

			<section className="container py-10 md:py-14">
				<div className="flex items-end justify-between">
					<h2 className="heading font-syne font-bold text-3xl md:text-4xl text-sky-600">Upcoming Events</h2>
					<Link
						className="text-sm text-muted-foreground hover:text-foreground"
						to="/events"
					>
						See all events →
					</Link>
				</div>
				<div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-3">
					{highlights.slice(0, 6).map((h) => (
						<Link
							key={h.title}
							to={h.to}
							className="group rounded-xl border border-white/10 bg-card/80 p-5 transition hover:shadow-md focus:shadow-md animate-card no-parallax"
						>
							<div className="flex items-center gap-3">
								<div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/10 /10 to-secondary/10 text-lg">
									{h.icon}
								</div>
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

			{/* Quick schedule teaser */}
			<section className="bg-background/30 border-y border-white/5 backdrop-blur">
				<div className="container py-12">
					<div className="flex items-end justify-between">
						<h2 className="heading font-syne font-bold text-3xl md:text-4xl text-sky-600">Quick Schedule</h2>
						<Link
							to="/schedule"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							See full schedule →
						</Link>
					</div>
					<div className="mt-6 grid gap-6 md:grid-cols-3">
						{(["Day 01", "Day 02", "Day 03"] as const).map((day) => (
							<div
								key={day}
								className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-5 animate-card"
							>
								<h3 className="font-syne font-bold">{day}</h3>
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
					<h2 className="heading font-syne font-bold text-3xl md:text-4xl text-sky-600">Sponsors</h2>
					<a
						className="text-sm text-muted-foreground hover:text-foreground"
					>
						Media kit →
					</a>
				</div>

				<div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
					{sponsors.map((src, i) => (
						<div
							key={i}
							className="aspect-[6/4] rounded-md border bg-card/60 backdrop-blur grid place-items-center animate-card"
						>
							<img
								src={src}
								alt="Sponsor logo"
								className="w-full h-full object-contain p-4"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</section>

			{/* Winners teaser */}
			{/* <section className="container py-12">
				<div className="flex items-end justify-between">
					<h2 className="heading font-syne font-bold text-3xl md:text-4xl">Winners</h2>
					<Link
						className="text-sm text-muted-foreground hover:text-foreground"
						to="/winners"
					>
						See all winners →
					</Link>
				</div>
				<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 mt-4 animate-card">
					<div className="marquee w-max flex items-stretch gap-8">
						{[...winnersMarquee, ...winnersMarquee].map((w, i) => (
							<figure
								key={`${w.name}-${i}`}
								className="shrink-0 w-40 text-center"
							>
								<div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/20">
									<img
										src={w.photo}
										alt={w.name}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
									{w.name}
								</figcaption>
								<p className="text-xs text-muted-foreground">{w.event}</p>
							</figure>
						))}
					</div>
				</div>
			</section> */}

			{/* Gallery teaser */}
			<section className="container pb-20">
				<div className="flex items-end justify-between">
					<h2 className="heading font-syne font-bold text-3xl md:text-4xl text-primary">Gallery</h2>
					<Link
						className="text-sm text-muted-foreground hover:text-foreground"
						to="/gallery"
					>
						See all photos →
					</Link>
				</div>
				<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
					{[
						"https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836502/3_l6caw7.jpg",
						"https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836501/2_kmxdlw.jpg",
						"https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg",
					].map((src, i) => (
						<Link
							key={i}
							to="/gallery"
							className="block overflow-hidden rounded-xl border border-white/10 bg-card/40 animate-card"
						>
							<img
								src={src}
								alt="Gallery preview"
								className="w-full h-40 object-cover"
								loading="lazy"
							/>
						</Link>
					))}
				</div>
			</section>

			{/* Social */}
			<section className="container pb-20">
				<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 /10 to-secondary/10 p-8 text-center backdrop-blur">
					<h2 className="heading font-syne font-bold text-2xl md:text-3xl text-center">
						<span className="section-letters inline-block will-change-transform">
							{"Be the part of our community".split(" ").map((word, i) => (
								<span key={i} className="inline-block mr-2">
									{word.split("").map((ch, j) => (
										<span
											key={j}
											className={cn(
												"gradient-text hero-letter hero-3d inline-block",
											)}
										>
											{ch}
										</span>
									))}
								</span>
							))}
						</span>
					</h2>

					<p className="mt-2 text-muted-foreground">
						Follow for updates, teasers, and behind‑the‑scenes.
					</p>
					<div className="mt-4 flex justify-center gap-4">
						<a
							className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
						>
							<Instagram className="h-5 w-5" />
						</a>
						<a
							className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5"
							target="_blank"
							rel="noreferrer"
							aria-label="Twitter"
						>
							<Twitter className="h-5 w-5" />
						</a>
						<a
							className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5"
							href="https://www.youtube.com/channel/UC3wtHavbQMLUP9X8Yp_Y8pA"
							target="_blank"
							rel="noreferrer"
							aria-label="YouTube"
						>
							<Youtube className="h-5 w-5" />
						</a>
						<a
							className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5"
							href="https://www.linkedin.com/company/techkshitiz/"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<Linkedin className="h-5 w-5" />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}