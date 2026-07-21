import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { schedule, eventDates } from "@/data/schedule";
import { cn } from "@/lib/utils";

import { ScheduleHeader } from "./components/ScheduleHeader";
import { DayHeader } from "./components/DayHeader";
import { EventCard } from "./components/ScheduleCard";

gsap.registerPlugin(ScrollTrigger);

const DAY_MAP = {
  "Day 01": { label: "Main Event Kickoff", date: eventDates["Day 01"] },
  "Day 02": { label: "Hackathon & Tech Tracks", date: eventDates["Day 02"] },
  "Day 03": { label: "Finale & Award Ceremony", date: eventDates["Day 03"] },
} as const;

type DayKey = keyof typeof DAY_MAP;

export default function SchedulePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Timeline Backbone Line Animation
      gsap.fromTo(
        ".timeline-backbone-line",
        { scaleY: 0, originY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 90%",
            scrub: 1.2,
          },
        }
      );

      // 2. Event Cards Entry Animation
      const eventCards = gsap.utils.toArray<HTMLElement>(".timeline-event-card");

      eventCards.forEach((card, i) => {
        const cardTitle = card.querySelector(".card-title");
        const cardMeta = card.querySelector(".card-meta");
        const cardCoord = card.querySelector(".card-coordinators");

        const cardEntryTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });

        cardEntryTl
          .fromTo(
            card,
            { opacity: 0, y: 30, rotationX: -15 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.6,
              ease: "expo.out",
              transformOrigin: "center top",
            }
          )
          .fromTo(
            [cardTitle, cardMeta],
            { opacity: 0, x: i % 2 === 0 ? 15 : -15 },
            { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", stagger: 0.05 },
            "-=0.3"
          );

        if (cardCoord) {
          cardEntryTl.fromTo(
            cardCoord.querySelectorAll(".coord-item"),
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.3, stagger: 0.04, ease: "power1.out" },
            "-=0.2"
          );
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={pageRef} className="relative w-full overflow-hidden ">
    
      <div className="container relative z-10 max-w-7xl mx-auto py-20 px-4">
        <ScheduleHeader />

        {/* Timeline Grid */}
        <div ref={timelineRef} className="relative w-full pb-16">
          {/* Vertical Backbone Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-white/5 z-0">
            <div className="timeline-backbone-line absolute top-0 bottom-0 left-0 w-full bg-primary scale-y-0 origin-top will-change-transform" />
          </div>

          {(Object.keys(DAY_MAP) as DayKey[]).map((dayKey) => {
            const dayMeta = DAY_MAP[dayKey];
            const events = schedule[dayKey];

            return (
              <section key={dayKey} className="relative mt-12 md:mt-20 timeline-day-block z-10">
                <DayHeader dayKey={dayKey} date={dayMeta.date} label={dayMeta.label} />

                <div className="grid grid-cols-[40px_1fr] md:grid-cols-2 md:gap-x-12 gap-y-10 items-start">
                  {events.map((item, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                      <div
                        key={idx}
                        className={cn(
                          "relative col-start-2 flex items-center md:items-start",
                          isEven ? "md:col-start-2 md:pr-12 md:pl-0" : "md:col-start-1 md:pl-12 md:pr-0 md:text-right"
                        )}
                      >
                        {/* Timeline Node Dot */}
                        <div
                          className={cn(
                            "absolute md:top-6 -left-[27px] md:left-auto md:right-auto h-3 w-3 rounded-full bg-black border-2 border-primary z-20 will-change-transform scale-100 hover:scale-125 transition-transform duration-300",
                            isEven ? "md:-left-[53px]" : "md:-right-[53px]"
                          )}
                          aria-hidden
                        />

                        <EventCard item={item} isEven={isEven} />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="w-full h-px bg-white/5 mt-16" />
    </section>
  );
}