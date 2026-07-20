"use client";

import Link from "next/link";

const links = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}