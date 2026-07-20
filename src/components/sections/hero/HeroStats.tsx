import { portfolio } from "@/src/data/portfolio"; 
const stats = [
  {
    label: "Years",
    value: `${portfolio.yearsOfExperience}+`,
  },
  {
    label: "Projects",
    value: `${portfolio.projectsCompleted}+`,
  },
  {
    label: "Focus",
    value: "Full Stack",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold text-white">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}