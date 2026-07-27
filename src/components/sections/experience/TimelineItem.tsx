"use client";

import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";

import type { Experience } from "./experience.types";

type Props = {
  experience: Experience;
};

export default function TimelineItem({
  experience,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="relative flex gap-8"
    >
      {/* Timeline Dot */}

      <div className="relative z-10 mt-6">

        <div className="h-4 w-4 rounded-full border-4 border-cyan-400 bg-slate-950" />

      </div>

      <div className="flex-1">

        <ExperienceCard experience={experience} />

      </div>

    </motion.div>
  );
}