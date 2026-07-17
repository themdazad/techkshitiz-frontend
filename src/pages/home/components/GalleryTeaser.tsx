// src/components/site/GalleryTeaser.tsx
import { Link } from "react-router-dom";
import { galleryImages } from "@/data/homepageData";

export function GalleryTeaser() {
  return (
    <section className="container pb-20">
      <div className="flex items-end justify-between">
        <h2 className="heading font-syne font-bold text-3xl md:text-4xl text-primary">Gallery</h2>
        <Link className="text-sm text-muted-foreground hover:text-foreground" to="/gallery">
          See all photos →
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((src, i) => (
          <Link key={i} to="/gallery" className="block overflow-hidden rounded-xl border border-white/10 bg-card/40 animate-card">
            <img src={src} alt="Gallery preview" className="w-full h-40 object-cover" loading="lazy" />
          </Link>
        ))}
      </div>
    </section>
  );
}