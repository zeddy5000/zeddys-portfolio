import type {
  Project,
  ProjectStatus,
} from "@/components/sections/projects/project.types";

export const projects: Project[] = [
  {
    id: "sirkka-health",

    featured: true,

    title: "Sirkka Health",

    subtitle: "Enterprise Healthcare Platform",

    category: "Healthcare",

    description:
      "A secure healthcare platform for managing patient records, appointments and enterprise healthcare workflows.",

    image: "/images/projects/sirkka_health_img.png",

    github: "",

    live: "",

    status: "Private" as ProjectStatus,

    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Docker",
    ],

    highlights: [
      "Developed enterprise healthcare modules.",
      "Integrated secure REST APIs.",
      "Improved application performance.",
      "Collaborated with distributed engineering teams.",
    ],

    contributions: [
      "Backend API Development",
      "Frontend Development",
      "Authentication",
      "Database Design",
    ],
  },

  {
    id: "easyshare",

    featured: true,

    title: "EasyShare",

    subtitle: "Digital Payment Platform",

    category: "FinTech",

    description:
      "A secure fintech platform supporting digital payments, authentication and wallet management.",

    image: "/images/projects/easyshare_img.jpeg",

    github: "",

    live: "",

    status: "Private" as ProjectStatus,

    technologies: [
      "Next.js",
      "TypeScript",
      "Recoil",
      "Tailwind CSS",
      "SCSS",
    ],

    highlights: [
      "Implemented authentication.",
      "Built responsive dashboards.",
      "Integrated APIs.",
      "Improved application performance.",
    ],

    contributions: [
      "Frontend Development",
      "Dashboard UI",
      "Authentication",
      "API Integration",
    ],
  },

  {
    id: "payroll-formatter",

    featured: false,

    title: "Payroll Formatter",

    subtitle: "Payroll Automation Tool",

    category: "Business Automation",

    description:
      "A Django application that automates payroll formatting, Excel processing and report generation.",

    image: "",

    github: "https://github.com/zeddy5000/payroll_formatter",

    live: "",

    status: "In Progress" as ProjectStatus,

    technologies: [
      "Python",
      "Django",
      "Pandas",
      "OpenPyXL",
      "Tailwind CSS",
    ],

    highlights: [
      "Excel automation.",
      "CSV generation.",
      "Column manager.",
      "Payroll processing.",
    ],

    contributions: [
      "Backend Development",
      "Frontend Development",
      "Excel Automation",
      "System Design",
    ],
  },

  {
    id: "klad-admissions",

    featured: false,

    title: "Klad Admissions",

    subtitle: "Admission Management System",

    category: "Education",

    description:
      "A student admission management platform with administrative dashboards and reporting.",

    image: "",

    github: "",

    live: "",

    status: "Private" as ProjectStatus,

    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],

    highlights: [
      "Administration dashboard.",
      "Student management.",
      "Responsive UI.",
      "Backend integration.",
    ],

    contributions: [
      "Frontend Development",
      "Dashboard",
      "API Integration",
      "Testing",
    ],
  },
];