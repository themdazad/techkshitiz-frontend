// src/pages/Index.tsx
import { HeroSection } from "./components/HeroSection";
import { FeaturesTeaser } from "./components/FeaturesTeaser";
import { HighlightsSection } from "./components/HighlightsSection";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { QuickSchedule } from "./components/QuickSchedule";
import { SponsorsSection } from "./components/SponsorsSection";
import { CommunitySection } from "./components/CommunitySection";
import { Faq } from "./components/Faq";


export default function Index() {
  return (
    <>
      <HeroSection />
      <FeaturesTeaser />
      <HighlightsSection />
      <UpcomingEvents />
      <QuickSchedule />
      <SponsorsSection />
      <CommunitySection />
      <Faq />
      </>

  );
}