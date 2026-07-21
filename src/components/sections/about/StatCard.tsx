"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui";

type Props = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      <GlassCard
        className="
          h-full
          p-8
          text-center
          bg-gradient-to-br
          from-white/5
          to-cyan-500/5
        "
      >
        <h3 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-5xl font-extrabold text-transparent">
          {value}
        </h3>

        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
          {label}
        </p>
      </GlassCard>
    </motion.div>
  );
}