// src/pages/Index.tsx
import { HeroSection } from "./components/HeroSection";
import { FeaturesTeaser } from "./components/FeaturesTeaser";
import { HighlightsSection } from "./components/HighlightsSection";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { ScheduleTeaser } from "./components/ScheduleTeaser";
import { SponsorsSection } from "./components/SponsorsSection";
import { GalleryTeaser } from "./components/GalleryTeaser";
import { CommunitySection } from "./components/CommunitySection";

export default function Index() {
  return (
    <div id="top" className="relative">
      <HeroSection />
      <FeaturesTeaser />
      <HighlightsSection />
      <UpcomingEvents />
      <ScheduleTeaser />
      <SponsorsSection />
      <GalleryTeaser />
      <CommunitySection />
    </div>
  );
}