"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type TechBadgeProps = {
  icon: IconType;
  label: string;
  className?: string;
  delay?: number;
};

export default function TechBadge({
  icon: Icon,
  label,
  className,
  delay = 0,
}: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        y: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "easeInOut",
          delay,
        },
      }}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      className={`
        absolute
        flex
        items-center
        gap-2

        rounded-full

        border
        border-white/10

        bg-white/5

        px-4
        py-2

        text-sm
        font-medium
        text-white

        backdrop-blur-xl

        shadow-xl

        transition-all

        ${className}
      `}
    >
      <Icon
        className="
          h-4
          w-4
          text-cyan-400
        "
      />

      <span>{label}</span>
    </motion.div>
  );
}