import { cn } from "@/lib/utils";
import { useCountdown } from "@/hooks/use-countdown";
import React from "react";

export function HeroCountdown({ className }: { className?: string }) {
  // Event start date - 22 September 2025, 8:00 AM IST (UTC+5:30)
  const start = React.useMemo(() => new Date("2025-09-22T08:00:00+05:30"), []);
  const { diff, days, hours, minutes, seconds } = useCountdown(start);

  // safer check instead of === 0
  const live = diff <= 0;

  return (
    <div
      className={cn(
        "relative inline-flex w-full max-w-sm rounded-full p-[1px] bg-gradient-to-r from-primary/60 via-accent/60 to-secondary/60",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex w-full items-center justify-center rounded-full bg-background/70 backdrop-blur px-3 py-1.5 text-sm border border-white/10 gap-2",
        )}
        aria-live="polite"
      >
        {live ? (
          <div className="w-full flex items-center justify-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse"
              aria-hidden
            />
            Thank you for participating in Techkshitiz'25!
          </div>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 whitespace-nowrap">
            <span className="text-gray-300">Starts in:</span>
            <span className="inline-flex items-center gap-1">
              <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                {String(days).padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-300">d</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                {String(hours).padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-300">h</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                {String(minutes).padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-300">m</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="rounded-md bg-gray-900 text-white px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                {String(seconds).padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-300">s</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
