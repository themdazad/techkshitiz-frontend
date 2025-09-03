import { organizingTeam } from "@/data/org";

export default function MembersPage() {
  return (
    <div className="container py-12">
      <header className="max-w-3xl">
        <h1 className="heading text-3xl md:text-4xl">Technical Club Members</h1>
        <p className="mt-2 text-muted-foreground">Meet the members of the our club.</p>
      </header>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {organizingTeam.map((m) => (
          <article key={m.name} className="rounded-xl border border-white/10 bg-card/70 p-5 animate-card">
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/20">
              <img src={m.photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-center">{m.name}</h3>
            <p className="text-xs text-muted-foreground text-center">{m.role}</p>
            <p className="text-xs text-gray-400 text-center">{m.branch}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
