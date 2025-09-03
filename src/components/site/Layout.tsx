import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { animatePage, enhanceButtons, enhanceCards } from "@/lib/gsap";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    document.documentElement.classList.add("dark");

    // Smooth anchor links (native)
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const id = href.trim();
      const destEl = id === "#" || id === "#top" ? document.body : (document.querySelector(id) as HTMLElement | null);
      if (destEl) {
        e.preventDefault();
        destEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onDocClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "auto" });
    const main = document.querySelector("main") as HTMLElement | null;
    requestAnimationFrame(() => {
      animatePage(main ?? undefined);
      enhanceButtons(main ?? undefined);
      enhanceCards(main ?? undefined);
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <span id="top" />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {showTop && (
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-card/70 backdrop-blur text-foreground shadow-md hover:shadow-lg"
        >
          ↑
        </a>
      )}
    </div>
  );
}
