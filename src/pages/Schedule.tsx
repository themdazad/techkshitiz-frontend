import { schedule } from "@/data/events";

export default function SchedulePage() {
  return (
    <div className="container py-12">
      <header className="mb-6">
        <h1 className="heading text-3xl md:text-4xl">Event Schedule</h1>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Three-day schedule for Tech Kshitiz (22–24 September 2025).
        </p>
      </header>

      {([
        { key: "Day 01", date: "22 Sept 2025" },
        { key: "Day 02", date: "23 Sept 2025" },
        { key: "Day 03", date: "24 Sept 2025" },
      ] as const).map((d) => (
        <section key={d.key} className="mt-10">
          <div className="flex items-end justify-between">
            <h2 className="heading text-2xl md:text-3xl">{d.key} • <span className="text-muted-foreground">{d.date}</span></h2>
          </div>

          {/* Mobile vertical timeline */}
          <ol className="md:hidden relative mt-6 border-l pl-4">
            {schedule[d.key].map((item, idx) => (
              <li key={idx} className="mb-6 ml-2">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-primary" aria-hidden />
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="font-semibold text-primary">{item.time}</span>
                </div>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">Duration: {item.duration} • Location: {item.location}</p>
              </li>
            ))}
          </ol>

          {/* Desktop table */}
          <div className="hidden md:block mt-6 overflow-hidden rounded-xl border border-white/10 bg-card/60 backdrop-blur no-parallax">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left">Time</th>
                  <th className="px-4 py-3 text-left">Event</th>
                  <th className="px-4 py-3 text-left">Duration</th>
                  <th className="px-4 py-3 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {schedule[d.key].map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-3 whitespace-nowrap font-medium">{item.time}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{item.duration}</td>
                    <td className="px-4 py-3">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}

function isTBA(_item: { duration: string; note?: string; time: string }) {
  return false;
}
