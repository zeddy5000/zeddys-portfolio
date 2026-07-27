"use client";

import Image from "next/image";

import ProjectPlaceholder from "./ProjectPlaceholder";

import type { Project } from "./project.types";

type ProjectImageProps = {
  project: Project;
};

export default function ProjectImage({
  project,
}: ProjectImageProps) {
  const hasImage = project.image !== null;

  return (
    <div className="group relative h-64 overflow-hidden">
      {hasImage ? (
        <>
          <Image
            src={project.image!}
            alt={project.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950
              via-slate-900/30
              to-transparent
            "
          />
        </>
      ) : (
        <ProjectPlaceholder project={project} />
      )}
    </div>
  );
}