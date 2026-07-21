"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJava,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";

import { GlassCard } from "../../ui";
import TechBadge from "../../shared/tech-badge";

import { portfolio } from "@/data/portfolio";
import { slideUp } from "@/animations";

export default function HeroImage() {
  return (
    <motion.div
      variants={slideUp}
      className="relative mx-auto flex w-full justify-center"
    >
      {/* Floating Tech Badges */}

      <TechBadge
        icon={FaReact}
        label="React"
        className="-top-5 left-10"
        delay={0}
      />

      <TechBadge
        icon={SiNextdotjs}
        label="Next.js"
        className="top-12 -right-8"
        delay={0.2}
      />

      <TechBadge
        icon={SiTypescript}
        label="TypeScript"
        className="top-40 -left-10"
        delay={0.4}
      />

      <TechBadge
        icon={FaJava}
        label="Java"
        className="bottom-36 -left-8"
        delay={0.6}
      />

      <TechBadge
        icon={SiSpringboot}
        label="Spring Boot"
        className="bottom-16 -left-12"
        delay={0.8}
      />

      <TechBadge
        icon={FaDocker}
        label="Docker"
        className="bottom-12 -right-8"
        delay={1}
      />

      <TechBadge
        icon={SiPostgresql}
        label="PostgreSQL"
        className="-bottom-5 left-24"
        delay={1.2}
      />

      {/* Profile Card */}

      <GlassCard className="relative w-full max-w-md overflow-hidden p-8">

        {/* Card Background Glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

        <div className="relative z-10">

          {/* Availability */}

          <div className="mb-6 flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm font-medium text-green-300">
              {portfolio.availability}
            </span>

          </div>

          {/* Profile Image */}

          <div className="relative mx-auto h-72 w-72">

            {/* Background Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Animated Ring */}

            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse" />

            <Image
              src={portfolio.profileImage}
              alt={portfolio.name}
              fill
              priority
              className="rounded-full border-4 border-cyan-400/20 object-cover"
            />

          </div>

          {/* Name */}

          <h3 className="mt-8 text-center text-3xl font-bold text-white">
            {portfolio.name}
          </h3>

          {/* Role */}

          <p className="mt-3 text-center text-slate-400">
            {portfolio.role}
          </p>

        </div>

      </GlassCard>

    </motion.div>
  );
}