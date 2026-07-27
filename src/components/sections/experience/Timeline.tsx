"use client";

import { experiences } from "@/data/experience";

import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="relative mt-20">

      {/* Vertical Line */}
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

      <div className="space-y-16">

        {experiences.map((experience) => (
          <TimelineItem
            key={`${experience.company}-${experience.role}`}
            experience={experience}
          />
        ))}

      </div>

    </div>
  );
}