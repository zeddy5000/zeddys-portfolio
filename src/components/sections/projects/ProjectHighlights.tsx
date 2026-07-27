"use client";

import { HiCheckCircle } from "react-icons/hi2";

type ProjectHighlightsProps = {
  highlights: string[];
};

export default function ProjectHighlights({
  highlights,
}: ProjectHighlightsProps) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
        Highlights
      </h4>

      <ul className="space-y-3">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-slate-300"
          >
            <HiCheckCircle
              className="mt-1 text-cyan-400"
              size={18}
            />

            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}