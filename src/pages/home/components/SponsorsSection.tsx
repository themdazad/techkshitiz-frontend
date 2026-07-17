// src/components/site/SponsorsSection.tsx
import { sponsors } from "@/data/sponsors";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="container py-12">
      <div className="flex items-end justify-between">
        <h2 className="heading font-syne font-bold text-3xl md:text-4xl text-sky-600">Sponsors</h2>
        <a className="text-sm text-muted-foreground hover:text-foreground href-disabled select-none cursor-pointer">
          Media kit →
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
        {sponsors.map((src, i) => (
          <div key={i} className="aspect-[6/4] rounded-md border bg-card/60 backdrop-blur grid place-items-center animate-card">
            <img src={src} alt="Sponsor logo" className="w-full h-full object-contain p-4" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}