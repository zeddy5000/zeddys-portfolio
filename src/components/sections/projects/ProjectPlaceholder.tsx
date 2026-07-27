"use client";

import type { Project } from "./project.types";

type Props = {
  project: Project;
};

export default function ProjectPlaceholder({
  project,
}: Props) {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-cyan-950
        p-8
        text-center
      "
    >
      {/* Animated Glow */}

      <div
        className="
          absolute
          h-48
          w-48
          rounded-full
          bg-cyan-500/20
          blur-3xl
          animate-pulse
        "
      />

      <div className="relative z-10">

        <div
          className="
            mb-6
            inline-flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-3xl
            font-bold
            text-cyan-300
          "
        >
          {project.title
            .split(" ")
            .map(word => word[0])
            .join("")
            .slice(0, 2)}
        </div>

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-slate-400">
          {project.category}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">

          {project.technologies
            .slice(0, 3)
            .map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  bg-white/10
                  px-3
                  py-1
                  text-xs
                  text-cyan-300
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