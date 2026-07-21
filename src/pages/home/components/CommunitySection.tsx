// src/components/site/CommunitySection.tsx
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import HeadingText from "@/components/custom-ui/HeadingText";

export function CommunitySection() {
  const ctaText = "Be the part of our community";

  return (
    <section className="container pb-20 ">
      <div className="border border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10 p-24 text-center backdrop-blur">
        <HeadingText style={"text-4xl md:text-6xl"} text={ctaText}/>

        <p className="mt-2 text-muted-foreground">Follow for updates, teasers, and behind‑the‑scenes.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" href="https://www.youtube.com/channel/UC3wtHavbQMLUP9X8Yp_Y8pA" target="_blank" rel="noreferrer" aria-label="YouTube">
            <Youtube className="h-5 w-5" />
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5" href="https://www.linkedin.com/company/techkshitiz/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}