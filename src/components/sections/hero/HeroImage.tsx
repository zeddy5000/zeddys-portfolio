import Image from "next/image";

import GlassCard from "../../ui/card";
import { portfolio } from "@/src/data/portfolio"; 

export default function HeroImage() {
  return (
    <GlassCard className="relative mx-auto w-full max-w-md overflow-hidden p-8">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10" />

      <div className="relative">

        <div className="mb-6 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-green-300">
            {portfolio.availability}
          </span>
        </div>

        <div className="relative mx-auto h-72 w-72">

          <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30" />

          <Image
            src={portfolio.profileImage}
            alt={portfolio.name}
            fill
            priority
            className="rounded-full object-cover border-4 border-white/10"
          />

        </div>

        <h3 className="mt-8 text-center text-2xl font-bold">
          {portfolio.name}
        </h3>

        <p className="mt-2 text-center text-slate-400">
          {portfolio.role}
        </p>

      </div>

    </GlassCard>
  );
}