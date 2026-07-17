// src/components/site/ScheduleTeaser.tsx
import { Link } from "react-router-dom";
import { schedule } from "@/data/events";

export function ScheduleTeaser() {
  const days = ["Day 01", "Day 02", "Day 03"] as const;

  return (
    <section className="bg-background/30 border-y border-white/5 backdrop-blur">
      <div className="container py-12">
        <div className="flex items-end justify-between">
          <h2 className="heading font-syne font-bold text-3xl md:text-4xl text-sky-600">Quick Schedule</h2>
          <Link to="/schedule" className="text-sm text-muted-foreground hover:text-foreground">
            See full schedule →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {days.map((day) => (
            <div key={day} className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-5 animate-card">
              <h3 className="font-syne font-bold">{day}</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                {schedule[day]?.slice(0, 3).map((s) => (
                  <li key={s.title} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                    <span>
                      <span className="font-medium">{s.title}</span>
                      <span className="text-gray-400"> — {s.time}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}