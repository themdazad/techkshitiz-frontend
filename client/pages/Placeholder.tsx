import { Link } from "react-router-dom";

export default function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <div className="container py-16">
      <h1 className="heading text-3xl md:text-4xl">{title}</h1>
      {description && <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>}
      <div className="mt-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6 text-sm text-muted-foreground">
        This page is ready to be generated with full content. Tell the assistant what to include. Meanwhile, explore the <Link to="/events" className="underline">Events</Link> or go back <a href="/" className="underline">Home</a>.
      </div>
    </div>
  );
}
