// src/components/site/HighlightsSection.tsx
import { statsData } from "@/data/homepageData";

export function HighlightsSection() {
  const stats = statsData("text-primary");

  return (
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
            {stats.map((m, i) => (
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}