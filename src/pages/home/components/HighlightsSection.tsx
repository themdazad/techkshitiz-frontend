// src/components/site/HighlightsSection.tsx
import TechCard from "@/components/custom-ui/CyberFrame";
import HeadingText from "@/components/custom-ui/HeadingText";
import { statsData } from "@/data/homepageData";

export function HighlightsSection() {
  const stats = statsData("text-primary");

  return (
    <section className="relative w-full py-24 bg-background overflow-hidden border-t border-white/5">
      {/* ================= CYBERNETIC BACKGROUND ELEMENTS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>
      {/* ================================================================= */}

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title Group */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase mb-4 shadow-sm shadow-primary/10">
            // {new Date().getFullYear()} Highlights
          </div>
          <HeadingText style={"text-2xl md:text-4xl lg:text-6xl"} text={"Event Highlights"}/>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Take a look at our recap video along with the monumental benchmarks established by our developers and creators last season.
          </p>
        </div>

        {/* Core Display Splitter */}
        <div className="grid gap-12 lg:grid-cols-12 items-stretch">
          
          {/* LEFT: Video Player Showcase Box */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
              <TechCard showOnHover={false} className="col-span-1 lg:col-span-7">
  <div className="relative overflow-hidden aspect-video bg-black border border-white/5">
    <iframe
      className="w-full h-full border-0"
      src="https://www.youtube.com/embed/dyoU6cPUdTk?si=_rILxosd6vOmg9q6"
      title="TechKshitiz Event Highlights Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</TechCard>

          </div>

          {/* RIGHT: High-Tech Club Stats Rows (Replaces corporate grid cards) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between gap-4">
            {stats.map((m, i) => (
              <div
                key={m.label}
                className="group relative flex items-center justify-between p-5  border border-white/5 bg-gradient-to-r from-card/30 via-transparent to-transparent backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:from-primary/[0.03] overflow-hidden"
              >
                {/* Glowing status line indicator on hover */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                <div className="flex items-center gap-4 relative z-10">
                  
                  
                  {/* Icon Shell */}
                  <div className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    {m.icon}
                  </div>
                  
                  {/* Metric Title Label */}
                  <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                    {m.label}
                  </span>
                </div>

                {/* Big Cyberpunk Metric String */}
                <span className="text-2xl md:text-4xl font-black font-mono tracking-tighter text-foreground/80 group-hover:text-primary transition-colors relative z-10">
                  {m.value}
                </span>

                {/* Vector Grid Subtle Background Lines */}
                <div className="absolute right-0 top-0 bottom-0 w-24 opacity-0 group-hover:opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:8px_100%] transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}