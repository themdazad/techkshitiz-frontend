import "./global.css";
import "./index.css"

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/gsap-animation/SmoothScroll";
import Layout from "@/components/site/Layout";
import Index from "./pages/home/Index";
import EventsPage from "./pages/events-page";
import EventDetail from "./pages/event-details";
import AboutPage from "./pages/about";
import SchedulePage from "./pages/schedule";
import GalleryPage from "./pages/gallery";
import WinnersPage from "./pages/winners";
import CertificatesPage from "./pages/certificates";
import NotFound from "./pages/NotFound";
import GlowCursorWrapper from "./components/gsap-animation/GlowCursorWrapper";
// import MembersPage from "./pages/Members";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SmoothScroll duration={1.2}>
        <GlowCursorWrapper>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/winners" element={<WinnersPage />} />
            <Route path="/certificate" element={<CertificatesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </GlowCursorWrapper>
      </SmoothScroll>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
