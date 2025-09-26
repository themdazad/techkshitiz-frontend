import { useEffect, useMemo, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useCountdown } from "@/hooks/use-countdown";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  // { to: "/members", label: "Members" },
  { to: "/schedule", label: "Schedule" },
  { to: "/gallery", label: "Gallery" },
  { to: "/winners", label: "Winners" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const start = useMemo(() => new Date("2025-09-22T08:00:00+05:30"), []);
  const { diff, days, hours, minutes, seconds } = useCountdown(start);
  const live = diff === 0;

  useEffect(() => {
    if (!menuRef.current) return;
    // initial state hidden with improved initial values
    gsap.set(menuRef.current, {
      display: "none",
      height: 0,
      opacity: 0,
      transformOrigin: "top",
      willChange: "transform, opacity, height",
    });
  }, []);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      gsap.set(el, { display: "block" });
      gsap.fromTo(
        el,
        { height: 0, opacity: 0, y: -8 },
        {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        },
      );
      const links = el.querySelectorAll("a, button");
      gsap.fromTo(
        links,
        { opacity: 0, y: -4 },
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.03,
          ease: "power2.out",
          delay: 0.05,
        },
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        y: -6,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3 py-3">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Tech Kshitiz home"
          >
            <img
              src="/logo/logo 2.png"
              alt="Tech Kshitiz logo"
              className="h-12 w-auto select-none"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium text-gray-300 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:rounded after:bg-gradient-to-r after:from-primary after:via-accent after:to-secondary after:transition-all font-spacemono",
                  isActive && "text-white after:w-full",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative rounded-full p-[1px] bg-gradient-to-r from-primary/60 via-accent/60 to-secondary/60 shadow-sm">
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-3 py-1.5 text-sm font-medium border border-white/10"
              )}
              aria-live="polite"
            >
              {live ? (
                <>
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"
                    aria-hidden
                  />
                  Ended! Thank you for joining us !
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Starts in:</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                      {String(days).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-300">d</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                      {String(hours).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-300">h</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                      {String(minutes).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-300">m</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                      {String(seconds).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-300">s</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        aria-hidden={!open}
        className={cn(
          "md:hidden border-t border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden",
        )}
      >
        <div className="container py-4">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-2 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/5",
                    isActive && "bg-muted",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
