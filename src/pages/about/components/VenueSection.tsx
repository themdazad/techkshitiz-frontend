import HeadingText from "@/components/custom-ui/HeadingText";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="mt-12">
      <HeadingText
        style="heading text-2xl md:text-3xl font-normal text-primary mb-6"
        text="Contact Details"
      />

      {/* Main Container: 2-Column Grid on Desktop */}
      <div className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Contact Information */}
          <div className="flex flex-col justify-center space-y-8 py-2">
            
            {/* Address Block */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Campus of Siwan Engineering College, Mairwa Road, Old Suta Mill Factory, Bhada Khurd, Siwan Pin - 841226
                </p>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-2">
                  Call us if you have any doubt regarding this event.
                </p>
                <a
                  href="tel:+910000000000" // Apna number yahan update karein
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Call Now &rarr;
                </a>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-2 break-all">
                  gecsiwan.techkshitiz@gmail.com
                </p>
                <a
                  href="mailto:gecsiwan.techkshitiz@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Email Now &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Responsive Google Map Container */}
          <div className="w-full h-[300px] sm:h-[350px] lg:h-full min-h-[300px] rounded-lg overflow-hidden border border-border/50 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123061521424!2d84.32628237610936!3d26.225190677063587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ff716c7b37ad%3A0x5737371d64c4aed1!2sGovernment%20Engineering%20College%2C%20Siwan!5e0!3m2!1sen!2sin!4v1784648665320!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="GEC Siwan Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}