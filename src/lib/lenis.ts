import Lenis from "lenis/dist/lenis.mjs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type LenisController = {
  lenis: Lenis;
  destroy: () => void;
};

export function setupLenis(): LenisController | null {
  if (typeof window === "undefined") return null;
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return null;

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.15,
    autoRaf: false,
  });

  const onLenisScroll = () => ScrollTrigger.update();
  lenis.on("scroll", onLenisScroll);

  const ticker = (time: number) => {
    // gsap.ticker is in seconds; Lenis expects ms
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(ticker);
  gsap.ticker.lagSmoothing(0);

  const destroy = () => {
    lenis.off("scroll", onLenisScroll);
    gsap.ticker.remove(ticker);
    // restore gsap lag smoothing defaults
    gsap.ticker.lagSmoothing(1000, 16);
    lenis.destroy();
  };

  return { lenis, destroy };
}
