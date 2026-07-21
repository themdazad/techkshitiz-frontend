interface DayHeaderProps {
  dayKey: string;
  date: string;
  label: string;
}

export function DayHeader({ dayKey, date, label }: DayHeaderProps) {
  return (
    <div className="relative mb-12 flex md:justify-center items-center gap-4">
      <span className="font-mono text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
        {dayKey.slice(-2)}
      </span>
      <div className="flex flex-col backdrop-blur-xl">
        <h2 className="heading text-2xl md:text-3xl font-bold tracking-tight text-primary">
          {date}
        </h2>
        <span className="font-medium text-muted-foreground tracking-wide uppercase">
          {label}
        </span>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-24 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:8px_100%] transition-opacity pointer-events-none" />
    </div>
  );
}