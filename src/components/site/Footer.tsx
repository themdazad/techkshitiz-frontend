import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { SITE_INFO } from "@/constants/branding";
import { SOCIAL_LINKS } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
     
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756782359/cropped_circle_image_y3vznc.png" alt={`${SITE_INFO.fullTitle} logo`} className="h-7 w-7 rounded-full ring-1 ring-white/10" />
            <span id="hero-title" className="font-display text-4xl">{SITE_INFO.fullTitle} </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A celebration of innovation and creativity. Join us in {new Date().getFullYear()} for hackathons, design sprints, quizzes and more.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:contents font-spacemono">
          <div>
            <h4 className="text-sm font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-foreground" to="/events">Events</Link></li>
              <li><Link className="hover:text-foreground" to="/schedule">Schedule</Link></li>
              <li><Link className="hover:text-foreground" to="/gallery">Gallery</Link></li>
              <li><Link className="hover:text-foreground" to="/winners">Winners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-foreground" to="/about">Mission</Link></li>
              {/* <li><Link className="hover:text-foreground" to="/members">Members</Link></li> */}
              <li><Link className="hover:text-foreground" to="/contact">Contact</Link></li>
              <li><a className="hover:text-foreground" href="/about#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Follow</h4>
          <div className="flex gap-3 text-sm text-muted-foreground">
             <a className="hover:text-foreground" href={SOCIAL_LINKS.instagram} aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
            <a className="hover:text-foreground" href={SOCIAL_LINKS.twitter} aria-label="Twitter"><Twitter className="h-5 w-5"/></a>
            <a className="hover:text-foreground" href={SOCIAL_LINKS.youtube} aria-label="YouTube"><Youtube className="h-5 w-5"/></a>
            <a className="hover:text-foreground" href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-6 text-xs text-gray-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span className="text-gray-400">Technical Club of Government Engineering College, Siwan</span>
            <span>© {new Date().getFullYear()} {SITE_INFO.fullTitle}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
