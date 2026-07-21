"use client";

import { portfolio } from "@/data/portfolio";

export default function AboutContent() {
  return (
    <div className="space-y-10">

      <p className="whitespace-pre-line text-lg leading-9 text-slate-300">
        {portfolio.about.description}
      </p>

      <div>

        <h3 className="mb-6 text-xl font-semibold text-white">
          Core Technologies
        </h3>

                    <div className="flex flex-wrap gap-4">

                    {portfolio.about.technologies.map((tech) => (
            <span
                key={tech}
                className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-5
                py-2
                text-sm
                font-medium
                text-cyan-300
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-400
                hover:bg-cyan-500/20
                "
            >
                {tech}
            </span>
            ))}

        </div>

      </div>

    </div>
  );
}