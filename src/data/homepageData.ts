// src/data/homepageData.ts
import React from "react";
import { 
  Lightbulb, Brain, Link2, Gamepad2, Palette, Flower2, Bug, Crown, 
  CalendarDays, Target, Handshake 
} from "lucide-react";
import { SITE_INFO } from "@/constants/branding";

export interface HighlightItem {
  title: string;
  icon: React.ReactNode;
  blurb: string;
  to: string;
}

export interface FeatureCardItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  gradientClass: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export const highlights: HighlightItem[] = [
  { title: "Hackathon", icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-yellow-400" }), blurb: "Code, prototype, ship fast.", to: "/events#hackathon" },
  { title: "Technical Quiz", icon: React.createElement(Brain, { className: "h-6 w-6 text-pink-400" }), blurb: "Tech trivia showdown.", to: "/events" },
  { title: "IoT Fusion", icon: React.createElement(Link2, { className: "h-6 w-6 text-blue-400" }), blurb: "Connect sensors & ideas.", to: "/events" },
  { title: "E-Sports", icon: React.createElement(Gamepad2, { className: "h-6 w-6 text-green-400" }), blurb: "Game on, compete, win.", to: "/events" },
  { title: "Design Challenges", icon: React.createElement(Palette, { className: "h-6 w-6 text-purple-400" }), blurb: "Branding, graphics, UI.", to: "/events" },
  { title: "Cultural Crafts", icon: React.createElement(Flower2, { className: "h-6 w-6 text-pink-300" }), blurb: "Rangoli, crafting stalls.", to: "/events" },
  { title: "Debugger", icon: React.createElement(Bug, { className: "h-6 w-6 text-red-400" }), blurb: "Hunt bugs under time.", to: "/events" },
  { title: "Chess Online", icon: React.createElement(Crown, { className: "h-6 w-6 text-gray-400" }), blurb: "Think ahead, checkmate.", to: "/events" },
];

export const features: FeatureCardItem[] = [
  {
    title: "All-New TechKshitiz Experience",
    description: `${SITE_INFO.fullTitle} brings a fresh format, new themes, and more interactive sessions to ignite your creativity and skills.`,
    icon: CalendarDays,
    colorClass: "text-primary",
    gradientClass: "from-primary/10 to-transparent",
  },
  {
    title: "More Events, More Fun",
    description: "Discover new competitions, creative workshops, and collaborative challenges—now with 16+ events for every interest.",
    icon: Target,
    colorClass: "text-accent",
    gradientClass: "from-accent/10 to-transparent",
  },
  {
    title: "Stronger Community & Networking",
    description: "Connect with mentors, industry leaders, and fellow innovators through exclusive networking and team-building activities.",
    icon: Handshake,
    colorClass: "text-secondary",
    gradientClass: "from-secondary/10 to-transparent",
  },
];

export const statsData = (primaryColorClass: string): StatItem[] => [
  {
    label: "Projects Completed",
    value: "48+",
    icon: React.createElement("svg", { className: `h-7 w-7 ${primaryColorClass}`, fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24" }, 
      React.createElement("path", { d: "M2 17l10 5 10-5M2 12l10 5 10-5M2 7l10 5 10-5" })
    ),
  },
  {
    label: "Total Participants",
    value: "850+",
    icon: React.createElement("svg", { className: `h-7 w-7 ${primaryColorClass}`, fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24" }, 
      React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
      React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
      React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
    ),
  },
  {
    label: "Prizes Worth",
    value: "₹20K+",
    icon: React.createElement("svg", { className: `h-7 w-7 ${primaryColorClass}`, fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24" }, 
      React.createElement("path", { d: "M17 18a5 5 0 0 0-10 0" }),
      React.createElement("circle", { cx: "12", cy: "8", r: "7" }),
      React.createElement("polyline", { points: "8 14 12 10 16 14" })
    ),
  },
  {
    label: "Total Events",
    value: "13+",
    icon: React.createElement("svg", { className: `h-7 w-7 ${primaryColorClass}`, fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24" }, 
      React.createElement("rect", { x: 2, y: 7, width: 20, height: 13, rx: 2 }),
      React.createElement("path", { d: "M16 3v4" }),
      React.createElement("path", { d: "M8 3v4" }),
      React.createElement("path", { d: "M2 11h20" })
    ),
  },
];

export const galleryImages = [
  "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836502/3_l6caw7.jpg",
  "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836501/2_kmxdlw.jpg",
  "https://res.cloudinary.com/dp8njkkpz/image/upload/v1756836497/1_qamqxb.jpg",
];