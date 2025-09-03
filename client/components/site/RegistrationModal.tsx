import { useId, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const baseEvents = [
  "Hackathon",
  "Debugger",
  "Technical Quiz",
  "IoT Fusion",
  "E‑Sports",
  "Chess Online",
  "Graphic Design",
  "Circuit Design",
  "Bridge Design",
  "Crosswords",
  "Puzzle Escape Room",
  "Crafting & Decorating Stalls",
  "Rangoli Event",
  "Tech Flash: Logo & Legacy",
  "Extempore (Technical)",
  "Rubix Cube",
];

export default function RegistrationModal({
  trigger,
  defaultEvent,
}: {
  trigger?: React.ReactNode;
  defaultEvent?: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(defaultEvent ? [defaultEvent] : []);
  const regId = useMemo(() => Math.random().toString(36).slice(2, 8).toUpperCase(), [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration submitted",
      description: `Your registration ID is ${regId}. A confirmation will be sent via email/SMS.`,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button size="lg" className="shadow-glow">Register Now</Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Tech Kshitiz Registration</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={submit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor={`${id}-name`}>Full Name</label>
              <input id={`${id}-name`} required className="mt-2 w-full rounded-md border border-white/10 bg-background/40 backdrop-blur px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor={`${id}-email`}>Email</label>
              <input id={`${id}-email`} required type="email" className="mt-2 w-full rounded-md border border-white/10 bg-background/40 backdrop-blur px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor={`${id}-phone`}>Phone</label>
              <input id={`${id}-phone`} required className="mt-2 w-full rounded-md border border-white/10 bg-background/40 backdrop-blur px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="+91" />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor={`${id}-college`}>College / Year</label>
              <input id={`${id}-college`} required className="mt-2 w-full rounded-md border border-white/10 bg-background/40 backdrop-blur px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="e.g., XYZ Univ, 3rd year" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor={`${id}-type`}>Participation</label>
              <select id={`${id}-type`} className="mt-2 w-full rounded-md border border-white/10 bg-background/40 backdrop-blur px-3 py-2 focus:ring-2 focus:ring-primary" defaultValue="individual">
                <option value="individual">Individual</option>
                <option value="team">Team</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor={`${id}-size`}>Team Size</label>
              <input id={`${id}-size`} type="number" min={1} max={6} className="mt-2 w-full rounded-md border border-white/10 bg-background/40 backdrop-blur px-3 py-2 focus:ring-2 focus:ring-primary" placeholder="1-6" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Event Selection</label>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
              {baseEvents.map((e) => {
                const active = selected.includes(e);
                return (
                  <button
                    key={e}
                    type="button"
                    onClick={() => setSelected((s) => (s.includes(e) ? s.filter((x) => x !== e) : [...s, e]))}
                    className={cn(
                      "rounded-full border px-3 py-1 text-sm",
                      active ? "bg-primary text-primary-foreground border-primary" : "hover:bg-muted",
                    )}
                    aria-pressed={active}
                  >
                    {e}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input id={`${id}-consent`} type="checkbox" required />
            <label htmlFor={`${id}-consent`} className="text-sm text-muted-foreground">
              I agree to the event rules and terms. Payment details will be shared post approval.
            </label>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">Upon success, you'll receive a QR pass and confirmation. Reg ID preview: <span className="font-mono">{regId}</span></p>
            <Button type="submit">Submit Registration</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function cn(...classes: (string | false | null | undefined)[]) { return classes.filter(Boolean).join(" "); }
