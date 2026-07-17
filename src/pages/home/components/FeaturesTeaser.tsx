// src/components/site/FeaturesTeaser.tsx
import { SITE_INFO } from "@/constants/branding";
import { features } from "@/data/homepageData";

const date = new Date(); // object of date class
const lastTwoDigits = date.getFullYear().toString().slice(-2);

export function FeaturesTeaser() {
  return (
    <section className="container pt-4 pb-16">
      <div className="text-center my-12">
        <h2 className="heading font-syne font-bold text-4xl md:text-5xl text-primary mb-4">
          What's coming in {SITE_INFO.fullTitle} {SITE_INFO.editionYear ? SITE_INFO.editionYear : lastTwoDigits}?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          <span className="text-foreground">Get ready for new experiences, bigger challenges, and more innovation at {SITE_INFO.fullTitle}. Stay tuned for all the exciting updates!</span>
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feat, idx) => {
          const IconComponent = feat.icon;
          return (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-background/80 to-accent/5 backdrop-blur p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6`}>
                  <IconComponent className={`h-8 w-8 ${feat.colorClass}`} />
                </div>
                <h3 className="font-syne font-bold text-xl text-foreground mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}