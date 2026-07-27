import type { SkillCategory } from "@/components/sections/skills/skills..types";

export const skills: SkillCategory[] = [
  {
    title: "Backend Development",
    items: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "Python", level: 85 },
      { name: "Node.js", level: 82 },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 93 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 82 },
      { name: "Docker", level: 88 },
      { name: "AWS", level: 80 },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Jira", level: 82 },
    ],
  },
];