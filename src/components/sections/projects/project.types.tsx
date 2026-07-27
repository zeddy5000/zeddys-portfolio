export type ProjectStatus =
  | "Private"
  | "In Progress"
  | "Completed";


export interface Project {
  id: string;

  featured: boolean;

  title: string;

  subtitle: string;

  category: string;

  description: string;

  image: string | null;

  github: string | null;

  live: string | null;

  status: ProjectStatus;

  technologies: string[];

  highlights: string[];

  contributions: string[];
}