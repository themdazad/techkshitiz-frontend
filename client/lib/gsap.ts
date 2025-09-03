import gsap from "gsap";

const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function animatePage(root?: HTMLElement | null) {
  if (prefersReduced) return;
  const container = root ?? (document.querySelector("main") as HTMLElement | null);
  if (!container) return;

  // Intro animation for a small set of elements above the fold only
  const introTargets = Array.from(
    container.querySelectorAll<HTMLElement>(
      ".heading, .animate-card, .rounded-xl",
    ),
  )
    .filter((el) => el.offsetParent !== null)
    .slice(0, 12);

  if (introTargets.length) {
    introTargets.forEach((el) => (el.style.willChange = "opacity, transform"));
    gsap.fromTo(
      introTargets,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.05,
        onComplete: () => introTargets.forEach((el) => (el.style.willChange = "auto")),
        clearProps: "transform,opacity",
      },
    );
  }
}

export function enhanceButtons(scope?: HTMLElement | null) {
  if (prefersReduced) return;
  const root = scope ?? (document.querySelector("main") as HTMLElement | null) ?? document.body;
  const btns = root.querySelectorAll<HTMLElement>("button, a, [role='button']");
  btns.forEach((btn) => {
    if ((btn as any)._gsapBtnBound) return;
    (btn as any)._gsapBtnBound = true;

    const toUp = () => gsap.to(btn, { y: -2, scale: 1.02, duration: 0.16, ease: "power2.out" });
    const toBase = () => gsap.to(btn, { y: 0, scale: 1, duration: 0.18, ease: "power2.out" });

    btn.addEventListener("pointerenter", toUp, { passive: true });
    btn.addEventListener("pointerleave", toBase, { passive: true });
    btn.addEventListener("pointerdown", () => gsap.to(btn, { scale: 0.985, duration: 0.08, ease: "power1.out" }), { passive: true });
    btn.addEventListener("pointerup", () => gsap.to(btn, { scale: 1.01, duration: 0.1, ease: "power1.out" }), { passive: true });
  });
}

export function enhanceCards(scope?: HTMLElement | null) {
  if (prefersReduced) return;
  const root = scope ?? (document.querySelector("main") as HTMLElement | null) ?? document.body;
  const cards = root.querySelectorAll<HTMLElement>(".animate-card, .card-tilt");
  cards.forEach((card) => {
    if ((card as any)._gsapCardBound) return;
    (card as any)._gsapCardBound = true;

    const hasBackdrop = card.classList.contains("backdrop-blur");
    gsap.set(card, { transformPerspective: 900, transformStyle: "preserve-3d", rotateX: 0, rotateY: 0, x: 0, y: 0, skewX: 0, skewY: 0 });

    const bounds = () => card.getBoundingClientRect();
    const reset = () => gsap.to(card, { rotateX: 0, rotateY: 0, x: 0, y: 0, skewX: 0, skewY: 0, duration: 0.22, ease: "power2.out" });

    let raf = false;
    const onMove = (e: PointerEvent) => {
      if (raf) return; raf = true;
      requestAnimationFrame(() => {
        const b = bounds();
        const relX = (e.clientX - b.left) / b.width;
        const relY = (e.clientY - b.top) / b.height;

        // Follow-cursor shine
        card.style.setProperty("--mx", `${e.clientX - b.left}px`);
        card.style.setProperty("--my", `${e.clientY - b.top}px`);

        if (hasBackdrop) {
          gsap.to(card, { y: -2, duration: 0.16, ease: "power2.out", overwrite: true });
        } else {
          // 3D tilt + magnetic attract
          const rotateY = (relX - 0.5) * 10;
          const rotateX = (0.5 - relY) * 10;
          const dx = (relX - 0.5) * 14; // magnetic
          const dy = (relY - 0.5) * 14;
          gsap.to(card, {
            rotateX,
            rotateY,
            x: dx,
            y: -2 + dy * 0.1,
            duration: 0.16,
            ease: "power2.out",
            overwrite: true,
          });
        }
        raf = false;
      });
    };

    card.addEventListener("pointerenter", (e) => onMove(e as PointerEvent), { passive: true });
    card.addEventListener("pointermove", (e) => onMove(e as PointerEvent), { passive: true });
    card.addEventListener("pointerleave", () => reset(), { passive: true });

    // Removed scroll-based parallax to avoid dimming/visibility changes during scroll
  });
}
