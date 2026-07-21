import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { clubIncharges, clubHeads } from "@/data/org-members";

// Sub-components
import AboutHeader from "./components/AboutHeader";
import InstituteSection from "./components/InstituteSection";
import TeamSection from "./components/TeamSection";
import DeveloperSection from "./components/DeveloperSection";
import VenueSection from "./components/VenueSection";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq") {
      const el = document.getElementById("faq");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="container py-12">
      <AboutHeader />
      <InstituteSection />
      <TeamSection />
      <DeveloperSection />
      <VenueSection />

      
    </div>
  );
}