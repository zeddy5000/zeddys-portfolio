"use client";

import { portfolio } from "@/data/portfolio";

import StatCard from "./StatCard";

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {portfolio.about.stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
        />
      ))}

    </div>
  );
}