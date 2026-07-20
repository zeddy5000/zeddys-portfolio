import { Button } from "@/components/ui/button";
import { portfolio } from "@/src/data/portfolio"; 
import { skills } from "@/src/data/skills"; 
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      {/* Availability */}
      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

        <span className="text-sm text-green-300">
          {portfolio.availability}
        </span>
      </div>

      {/* Greeting */}

      <p className="text-blue-400 uppercase tracking-[0.35em]">
        Hello I'm
      </p>

      {/* Name */}

      <h1 className="mt-5 font-heading text-6xl font-bold leading-none lg:text-8xl">
        {portfolio.name}
      </h1>

      {/* Role */}

      <h2 className="mt-6 text-3xl font-semibold text-slate-300">
        {portfolio.role}
      </h2>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {portfolio.description}
      </p>

      {/* Tech Chips */}

      <div className="mt-10 flex flex-wrap gap-3">
        {skills[0].items.slice(0, 5).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap gap-5">
        <Button>
          View Projects
        </Button>

        <Button variant="outline">
          Download Resume
        </Button>
      </div>
    </div>
  );
}