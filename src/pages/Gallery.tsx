import { useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Cat = "All" | "Coding" | "Design" | "Hardware" | "Fun";

interface MediaItem { id: string; src: string; alt: string; cat: Exclude<Cat, "All">; w: number; h: number; type?: "image" | "video" }

const media: MediaItem[] = [
  { id: "g1", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881119/IMG_4377_sgbrwj.jpg", alt: "TechKshitiz 1", cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g2", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881118/IMG_3575_eayugk.jpg", alt: "TechKshitiz 2", cat: "Hardware", w: 1200, h: 800, type: "image" },
  { id: "g3", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg", alt: "TechKshitiz 3", cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g4", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881120/IMG_3816_twtbss.jpg", alt: "TechKshitiz 4", cat: "Design", w: 1200, h: 800, type: "image" },
  { id: "g5", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836502/3_l6caw7.jpg", alt: "TechKshitiz 5", cat: "Coding", w: 1200, h: 800, type: "image" },
  { id: "g6", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881119/IMG_4222_ej9nkc.jpg", alt: "TechKshitiz 6", cat: "Coding", w: 1200, h: 800, type: "image" },
  { id: "g7", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881119/IMG_4253_watmi8.jpg", alt: "TechKshitiz 7", cat: "Coding", w: 1280, h: 720, type: "image" },
  { id: "g8", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881118/IMG_4212_r5ynsp.jpg", alt: "TechKshitiz 8", cat: "Fun", w: 1200, h: 800, type: "image" },
  { id: "g9", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881118/IMG_4174_wnljun.jpg", alt: "TechKshitiz 9", cat: "Coding", w: 1200, h: 900, type: "image" },
  { id: "g10", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836501/2_kmxdlw.jpg", alt: "TechKshitiz 10", cat: "Design", w: 1200, h: 900, type: "image" },
  { id: "g11", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg", alt: "TechKshitiz 11", cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g11", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg", alt: "TechKshitiz 12", cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g12", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881132/IMG_3652_l98fdz.jpg", alt: "TechKshitiz 13", cat: "Fun", w: 1200, h: 900, type: "image" },
  { id: "g31", src: "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756881119/IMG_3952_zaogir.jpg", alt: "TechKshitiz 14", cat: "Design", w: 1200, h: 900, type: "image" },
];

export default function GalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [active, setActive] = useState<MediaItem | null>(null);

  const filtered = useMemo(() => media.filter((m) => (cat === "All" ? true : m.cat === cat)), [cat]);

  return (
    <div className="container py-16">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="heading text-3xl md:text-4xl font-normal text-primary">Gallery</h1>
          <p className="mt-2 max-w-2xl text-foreground">Snapshots from events</p>
        </div>
        <div className="hidden md:flex gap-2">
          {(["All", "Coding", "Design", "Hardware", "Fun"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1 text-sm ${cat === c ? "bg-gray-900 text-white border-gray-900" : "hover:bg-muted"}`}
              aria-pressed={cat === c}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      {/* Mobile filters */}
      <div className="md:hidden mt-3 flex flex-wrap gap-2">
        {(["All", "Coding", "Design", "Hardware", "Fun"] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-3 py-1 text-sm ${cat === c ? "bg-gray-900 text-white border-gray-900" : "hover:bg-muted"}`}
            aria-pressed={cat === c}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry grid using CSS columns */}
      <section className="mt-6 [column-gap:1rem] columns-1 sm:columns-2 lg:columns-3">
        {filtered.map((m) => (
          <figure key={m.id} className="mb-4 break-inside-avoid cursor-pointer rounded-lg border border-white/10 bg-card/60 backdrop-blur p-2 shadow-sm transition hover:shadow-md animate-card" onClick={() => setActive(m)}>
            {m.type === "video" ? (
              <video src={m.src} className="h-auto w-full rounded" muted playsInline loop preload="metadata" aria-label={m.alt} />
            ) : (
              <img src={m.src} alt={m.alt} className="h-auto w-full rounded" loading="lazy" />
            )}
            <figcaption className="mt-2 px-1 text-xs text-muted-foreground">{m.alt}</figcaption>
          </figure>
        ))}
      </section>

      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-w-4xl">
          {active && (
            <div>
              {active.type === "video" ? (
                <video src={active.src} className="w-full rounded" controls autoPlay />
              ) : (
                <img src={active.src} alt={active.alt} className="w-full rounded" />
              )}
              <p className="mt-2 text-sm text-gray-300">{active.alt} — <span className="text-gray-500">{active.cat}</span></p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
