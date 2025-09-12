import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            {/* <img src="https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756782359/cropped_circle_image_y3vznc.png" alt="Tech Kshitiz logo" className="h-7 w-7 rounded-full ring-1 ring-white/10" /> */}
            <span id="hero-title" className="font-display text-4xl">Techkshitiz</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A celebration of innovation and creativity. Join us 22-24 September 2025 for hackathons, design sprints, quizzes and more.
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
             <a className="hover:text-foreground" href="https://www.instagram.com/techkshitiz/" aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
            <a className="hover:text-foreground" href="https://x.com/techkshitiz/" aria-label="Twitter"><Twitter className="h-5 w-5"/></a>
            <a className="hover:text-foreground" href="https://www.youtube.com/channel/UC3wtHavbQMLUP9X8Yp_Y8pA" aria-label="YouTube"><Youtube className="h-5 w-5"/></a>
            <a className="hover:text-foreground" href="https://www.linkedin.com/company/techkshitiz/" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-gray-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span className="text-gray-400">Technical Club of GEC, Siwan</span>
          <span>© 2025 Tech Kshitiz. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
