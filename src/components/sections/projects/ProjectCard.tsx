"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui";

import ProjectImage from "./ProjectImage";
import ProjectStatus from "./ProjectStatus";
import ProjectTech from "./ProjectTech";
import ProjectHighlights from "./ProjectHighlights";
import ProjectLinks from "./ProjectLinks";

import type { Project } from "./project.types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard
        className="
          h-full
          overflow-hidden
          border-white/10
          transition-all
          duration-300
          hover:border-cyan-400/30
          hover:shadow-cyan-500/20
        "
      >
        {/* Project Thumbnail */}

        <ProjectImage project={project} />

        <div className="space-y-6 p-8">

          {/* Status */}

          <ProjectStatus status={project.status} />

          {/* Category */}

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            {project.category}
          </p>

          {/* Title */}

          <h3 className="text-3xl font-bold text-white">
            {project.title}
          </h3>

          {/* Subtitle */}

          <p className="text-lg text-slate-300">
            {project.subtitle}
          </p>

          {/* Description */}

          <p className="leading-8 text-slate-400">
            {project.description}
          </p>

          {/* Technologies */}

          <ProjectTech
            technologies={project.technologies}
          />

          {/* Highlights */}

          <ProjectHighlights
            highlights={project.highlights}
          />

          {/* Buttons */}

          <ProjectLinks
            github={project.github}
            live={project.live}
          />

        </div>
      </GlassCard>
    </motion.div>
  );
}