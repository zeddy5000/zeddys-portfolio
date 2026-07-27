"use client";

import { GlassCard } from "@/components/ui";

import type { Experience } from "./experience.types";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <GlassCard className="p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

        <div>

          <h3 className="text-2xl font-bold text-white">
            {experience.role}
          </h3>

          <p className="mt-2 text-cyan-400 font-semibold">
            {experience.company}
          </p>

          <p className="mt-1 text-slate-400">
            {experience.location}
          </p>

        </div>

        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          {experience.period}
        </span>

      </div>

      <p className="mt-8 leading-8 text-slate-300">
        {experience.description}
      </p>

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
          Key Achievements
        </h4>

        <ul className="space-y-3">

          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-3 text-slate-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

              <span>{achievement}</span>
            </li>
          ))}

        </ul>

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
            "
          >
            {technology}
          </span>
        ))}

      </div>

    </GlassCard>
  );
}