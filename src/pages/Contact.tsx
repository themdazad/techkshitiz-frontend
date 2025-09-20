import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const address = "Campus of Siwan Engineering College, Mairwa Road, Old Suta Mill Factory, Bhada Khurd, Siwan Pin -841226";
  const phone = "+917547899822";
  const email = "gecsiwan.techkshitiz@gmail.com";

  const mapQuery = encodeURIComponent("Siwan Engineering College, Mairwa Road, Bhada Khurd, Siwan 841226");
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <div className="container py-12">
      <header>
        <h1 className="heading text-3xl md:text-4xl font-normal text-sky-600">Contact</h1>
        <p className="mt-2 max-w-3xl text-muted-foreground">Reach the Tech Kshitiz team. For queries on events, registration, or venues, use the details below.</p>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6">
          <h2 className="font-semibold flex items-center gap-2"><MapPin className="h-4 w-4" /> Address</h2>
          <p className="mt-2 text-sm text-gray-300">{address}</p>
          <div className="mt-3">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary via-sky-600 to-primary px-4 py-2 text-white text-sm">View Direction</a>
           
          </div>
        </article>
        <article className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6">
          <h2 className="font-semibold flex items-center gap-2"><Phone className="h-4 w-4" /> Phone</h2>
          <p className="mt-2 text-sm text-gray-300">Call us if you have any doubt regarding this event</p>
          <a className="mt-3 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary via-sky-600 to-primary px-4 py-2 text-white" href={`tel:${phone}`}>Call Now</a>
        </article>
        <article className="rounded-xl border border-white/10 bg-card/60 backdrop-blur p-6">
          <h2 className="font-semibold flex items-center gap-2"><Mail className="h-4 w-4" /> Email</h2>
          <p className="mt-2 text-sm text-gray-300">Email us on:</p>
          <a className="mt-3 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary via-sky-600 to-primary px-4 py-2 text-white text-sm" href={`mailto:${email}`}>Email Now</a>
        </article>
      </section>

    </div>
  );
}
