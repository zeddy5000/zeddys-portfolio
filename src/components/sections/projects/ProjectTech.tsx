"use client";

type ProjectTechProps = {
  technologies: string[];
};

export default function ProjectTech({
  technologies,
}: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-3
            py-2
            text-sm
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-500/20
          "
        >
          {technology}
        </span>
      ))}
    </div>
  );
}