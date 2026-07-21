import { SITE_INFO } from "@/constants/branding";

export type Faq = { id: string; question: string; answer: string };

export const faqs: Faq[] = [
  {
    id: "eligibility",
    question: "Who can participate?",
    answer:
      "Students from all years and streams are welcome to participate. Some events are team-based; please check the event details for more information."
  },
  {
    id: "group-participation",
    question: "Can participants in a group be from different colleges?",
    answer:
      "All group members must belong to the same college, but they may be from any semester or department."
  },
  {
    id: "stay-requirements",
    question: "Do participants need to stay at GEC for the entire duration of the event?",
    answer:
      "It’s completely your choice. You may attend during the day, complete your activities, return home in the evening, and come back the next day to continue."
  },
  {
    id: "event-timings",
    question: "What are the daily event timings?",
    answer:
      "Depending on the event schedule, daily timings will generally be from 10:00 AM to 7:00 PM."
  },

  {
    id: "registration",
    question: "How can I register for an event?",
    answer:
      "Go to the event section on our website, select your desired event, and fill out the respective Google Form to register."
  }
];
