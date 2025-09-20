import { schedule, eventDates } from "@/data/schedule";

export default function SchedulePage() {
  return (
    <div className="container py-12">
      <header className="mb-6">
        <h1 className="heading text-3xl md:text-4xl font-normal text-sky-600">Event Schedule</h1>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Three-day schedule for Tech Kshitiz (22–24 September 2025).
        </p>
      </header>

      {([
        { key: "Day 01" as const, date: eventDates["Day 01"] },
        { key: "Day 02" as const, date: eventDates["Day 02"] },
        { key: "Day 03" as const, date: eventDates["Day 03"] },
      ]).map((d) => (
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
                <div className="text-sm text-gray-300">
                  <p>Duration: {item.duration} • Location: {item.location}</p>
                  {item.coordinators && item.coordinators.length > 0 && (
                    <p className="mt-1">
                      Coordinator{item.coordinators.length > 1 ? 's' : ''}: {' '}
                      {item.coordinators.map((coord, i) => (
                        <span key={i}>
                          {coord.name} ({coord.phone})
                          {i < item.coordinators!.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  )}
                  {item.note && (
                    <p className="mt-1 text-xs italic text-muted-foreground">{item.note}</p>
                  )}
                </div>
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
                  <th className="px-4 py-3 text-left">Location</th>
                  <th className="px-4 py-3 text-left">Coordinators</th>
                </tr>
              </thead>
              <tbody>
                {schedule[d.key].map((item, idx) => (
                  <tr key={idx} className="border-t border-white/10">
                    <td className="px-4 py-3 whitespace-nowrap font-medium">{item.time}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        {item.note && (
                          <span className="text-xs text-muted-foreground italic mt-1">{item.note}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">{item.location}</td>
                    <td className="px-4 py-3">
                      {item.coordinators && item.coordinators.length > 0 ? (
                        <div className="space-y-1">
                          {item.coordinators.map((coord, i) => (
                            <div key={i} className="text-xs">
                              <div className="font-medium">{coord.name}</div>
                              <div className="text-muted-foreground">{coord.phone}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
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