import HeadingText from "@/components/custom-ui/HeadingText";

export function ScheduleHeader() {
  return (
    <header className="mb-20 text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-primary tracking-widest uppercase mb-4">
        // EVENTS_STATUS
      </div>
      <HeadingText style={"heading text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-4"} text={"Event Schedule"}/>
      <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
        Your complete operational blueprint for TechKshitiz. Check event timings, track coordinates, and coordinator details all in one place.
      </p>
    </header>
  );
}