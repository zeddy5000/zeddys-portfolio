"use client";

import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";

import SkillCategory from "./SkillCategory";

export default function SkillsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-20 grid gap-8 lg:grid-cols-2"
    >
      {portfolio.skills.map((category) => (
        <SkillCategory
          key={category.title}
          category={category}
        />
      ))}
    </motion.div>
  );
}