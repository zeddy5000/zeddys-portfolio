"use client";

import type { Skill } from "./skills..types"; 

import SkillBar from "./SkillBar";

type Props = {
  skill: Skill;
};

export default function SkillCard({
  skill,
}: Props) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <h4 className="font-medium text-white">
          {skill.name}
        </h4>

        <span className="text-sm text-cyan-400">
          {skill.level}%
        </span>

      </div>

      <SkillBar level={skill.level} />

    </div>
  );
}