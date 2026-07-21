import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CyberFrame from "@/components/custom-ui/CyberFrame";// Adjust path as needed
import SocialLinks from "./SocialLinks";
import HeadingText from "@/components/custom-ui/HeadingText";

const developers = [
  {
    name: "Ayushmaan Shandilya",
    role: "Frontend Developer",
    branch:"Computer Science and Engineering",
    image:
      "https://res.cloudinary.com/dswkss8nj/image/upload/v1757502406/axshhhh_uazcww.jpg",
    social: {
      github: "https://github.com/ayushmaanxs",
      linkedin: "https://linkedin.com/in/ayushmaanxs",
      instagram: "https://instagram.com/ayushmaanxs",
      portfolio: "https://portfolio-ayushmaan.netlify.app/",
    },
  },
  {
    name: "Md. Azad",
    role: "Full-Stack Developer",
    branch:"Electrical Engineering",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFS76byikAEqA/profile-displayphoto-scale_400_400/B4DZ9xHAfmK0Ak-/0/1784309092016?e=1785974400&v=beta&t=OKG2zgAWE0PUuMbCqXymZvC0lYxMT0EjaX8T0-J8w8I",
    social: {
      github: "https://github.com/themdazad",
      linkedin: "https://linkedin.com/in/themdazad",
      instagram: "https://instagram.com/themdazad",
      portfolio: "https://themdazad.vercel.app/",
    },
  },
];

export default function DeveloperSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Entrance stagger animation for cinematic reveal
  useGSAP(
    () => {
      gsap.from(".developer-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative py-24">
      {/* Cinematic Ambient Grid & Glow Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Core Team
        </div>
         <HeadingText style={"heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground"} text={" Meet the Developers"}/>
        <p className=" text-muted-foreground max-w-md text-sm md:text-base">
          The individuals behind the architectural design & execution of this website
        </p>
      </div>

      {/* Developers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {developers.map((dev, idx) => (
          <div key={idx} className="developer-card">
            <CyberFrame
              variant="cyberpunk"
              showOnHover={true}
              glowColor="rgba(20, 108, 184, 0.35)"
              enableSound={true}
              className="p-6 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Avatar with Tech Ring */}
                <div className="relative flex-shrink-0 group/avatar">
                  <div className="relative h-24 w-24 overflow-hidden border-2 border-primary/40 bg-card">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="h-full w-full object-cover grayscale-[20%] group-hover/avatar:grayscale-0 group-hover/avatar:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Info & Socials */}
                <div className="flex flex-col text-center sm:text-left items-center sm:items-start w-full">
                  <h3 className="text-xl font-semibold text-foreground tracking-wide">
                    {dev.name}
                  </h3>
                  <p className="text-xs font-mono text-primary font-medium tracking-wider uppercase mt-1">
                    {dev.role}
                  </p> 
                  <p className="text-xs font-mono font-medium tracking-wider uppercase mt-1">
                    {dev.branch}
                  </p>

                  <div className="w-full h-[1px] bg-border/60 my-4" />

                  <SocialLinks {...dev.social} name={dev.name} />
                </div>
              </div>
            </CyberFrame>
          </div>
        ))}
      </div>
    </section>
  );
}