// src/components/site/SponsorsSection.tsx
import HeadingText from "@/components/custom-ui/HeadingText";
import { sponsors } from "@/data/sponsors";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="container py-12">
      <div className="flex items-end justify-between">
        <HeadingText style={"heading font-syne font-bold text-3xl md:text-4xl"} text={"Sponsors"}/>
        <a className="text-sm text-muted-foreground hover:text-foreground href-disabled select-none cursor-pointer">
          Media kit →
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
        {sponsors.map((src, i) => (
          <div key={i} className="aspect-[6/4] bg-white border bg-card/60 backdrop-blur grid place-items-center animate-card">
            <img src={src} alt="Sponsor logo" className="w-full h-full object-contain p-4" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}