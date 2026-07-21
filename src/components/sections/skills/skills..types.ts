export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  items: Skill[];
};