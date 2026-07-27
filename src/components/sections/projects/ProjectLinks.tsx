"use client";

import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

type ProjectLinksProps = {
  github: string | null;
  live: string | null;
};

export default function ProjectLinks({
  github,
  live,
}: ProjectLinksProps) {
  const hasGithub = Boolean(github);
  const hasLive = Boolean(live);

  if (!hasGithub && !hasLive) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4 pt-2">

      {hasGithub && (
        <a
          href={github!}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            px-5
            py-3
            text-sm
            font-medium
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-500/10
          "
        >
          <FaGithub size={18} />

          GitHub
        </a>
      )}

      {hasLive && (
        <a
          href={live!}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-cyan-500
            px-5
            py-3
            text-sm
            font-medium
            text-slate-950
            transition-all
            duration-300
            hover:bg-cyan-400
          "
        >
          <HiArrowTopRightOnSquare size={18} />

          Live Demo
        </a>
      )}

    </div>
  );
}