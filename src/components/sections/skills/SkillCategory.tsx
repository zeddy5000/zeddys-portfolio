"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui";

import SkillCard from "./SkillCard";

import type { SkillCategory  as SkillCategoryType } from "./skills..types"; 

type Props = {
  category: SkillCategoryType;
};

export default function SkillCategory({
  category,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard className="h-full p-8">

        <h3 className="mb-8 text-2xl font-bold text-white">
          {category.title}
        </h3>

        <div className="space-y-6">
          {category.items.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>

      </GlassCard>
    </motion.div>
  );
}