"use client";

import { motion } from "framer-motion";

type Props = {
  level: number;
};

export default function SkillBar({
  level,
}: Props) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-white/10">

      <motion.div
        initial={{ width: 0 }}
        whileInView={{
          width: `${level}%`,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
      />

    </div>
  );
}