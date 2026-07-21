import { cn } from "@/lib/utils";

export interface ScheduleItem {
  title: string;
  time: string;
  location?: string;
  duration: string;
  note?: string;
  coordinators?: string[];
}

interface EventCardProps {
  item: ScheduleItem;
  isEven: boolean;
}

export function EventCard({ item, isEven }: EventCardProps) {
  const isBreak = item.title.toLowerCase().includes("break");

  return (
    <div
      className={cn(
        "timeline-event-card w-full group relative p-6 rounded-xl border transition-all duration-300 backdrop-blur-sm will-change-transform",
        isBreak
          ? "border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent hover:border-amber-400/40 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)]"
          : "border-white/5 bg-gradient-to-br from-card/30 via-card/10 to-transparent hover:border-primary/20 hover:from-primary/[0.03] hover:shadow-[0_0_30px_-10px_rgba(20,184,166,0.15)]",
        isEven ? "md:items-start" : "md:items-end"
      )}
    >
      {/* Background Hover Texture */}
      <div
        className="absolute right-0 bottom-0 w-32 h-32 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: isBreak
            ? "radial-gradient(var(--amber-400, #f59e0b) 1px, transparent 1px)"
            : "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Glowing Status Line */}
      <div
        className={cn(
          "absolute top-0 w-[2px] h-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center",
          isBreak ? "bg-amber-400" : "bg-primary",
          isEven ? "left-0" : "right-0"
        )}
      />

      {/* Title & Note */}
      <h3
        className={cn(
          "card-title font-bold tracking-tight transition-colors relative z-10",
          isBreak
            ? "text-3xl md:text-4xl text-amber-400 group-hover:text-amber-300"
            : "text-xl md:text-2xl text-foreground group-hover:text-primary"
        )}
      >
        {item.title}
      </h3>

      {item.note && (
        <p className="mt-1.5 text-xs text-muted-foreground font-medium italic relative z-10 leading-relaxed max-w-xl">
          {item.note}
        </p>
      )}

      {/* Meta Matrix (Time, Location, Duration) */}
      <div
        className={cn(
          "mt-6 w-full grid gap-4 relative z-10 border-t border-b border-white/5 py-4 my-4 font-mono text-xs",
          isBreak ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3",
          isEven ? "text-left" : "md:text-right"
        )}
      >
        {/* Time */}
        <div
          className={cn(
            "flex items-center gap-2.5 text-muted-foreground group-hover:text-foreground transition-colors",
            !isEven && "md:flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "p-1.5 rounded border transition-colors shrink-0",
              isBreak
                ? "bg-amber-500/5 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/10"
                : "bg-primary/5 border-primary/10 text-primary group-hover:bg-primary/10"
            )}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <span
            className={cn(
              "font-semibold tracking-tight",
              isBreak ? "text-amber-400/90 text-sm" : "text-foreground"
            )}
          >
            {item.time}
          </span>
        </div>

        {/* Location (Hidden for breaks) */}
        {!isBreak && (
          <div
            className={cn(
              "flex items-center gap-2.5 text-muted-foreground group-hover:text-foreground transition-colors",
              !isEven && "md:flex-row-reverse"
            )}
          >
            <div className="p-1.5 rounded border border-primary/10 bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors shrink-0">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="font-semibold text-foreground/90 tracking-tight truncate max-w-[140px]">
              {item.location}
            </span>
          </div>
        )}

        {/* Duration */}
        <div
          className={cn(
            "flex items-center gap-2.5 text-muted-foreground group-hover:text-foreground transition-colors",
            !isEven && "md:flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "p-1.5 rounded border transition-colors shrink-0",
              isBreak
                ? "bg-amber-500/5 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/10"
                : "bg-primary/5 border-primary/10 text-primary group-hover:bg-primary/10"
            )}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
          </div>
          <span
            className={cn(
              "font-semibold tracking-tight",
              isBreak ? "text-amber-400/90 text-sm" : "text-foreground/90"
            )}
          >
            {item.duration}
          </span>
        </div>
      </div>

      {/* Coordinators */}
      {item.coordinators && item.coordinators.length > 0 && (
        <div
          className={cn(
            "card-coordinators mt-2 w-full flex flex-col gap-2 relative z-10",
            isEven ? "items-start" : "items-end"
          )}
        >
          <p className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase group-hover:text-primary/70 transition-colors">
            // Coordinators
          </p>
          <div
            className={cn(
              "flex flex-wrap gap-2",
              isEven ? "md:justify-start" : "md:justify-end"
            )}
          >
            {item.coordinators.map((coord, coordIdx) => (
              <div
                key={coordIdx}
                className="coord-item flex items-center gap-2 px-2.5 py-1 rounded border border-white/5 bg-white/[0.01] text-xs font-medium text-foreground"
              >
                <span className="text-primary/70 font-semibold">{coord}</span>
                <span className="text-white/10" aria-hidden>
                  |
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}