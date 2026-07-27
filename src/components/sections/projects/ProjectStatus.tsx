"use client";

import {
  HiCheckCircle,
  HiLockClosed,
  HiClock,
} from "react-icons/hi2";

import type { ProjectStatus as Status } from "./project.types";

type ProjectStatusProps = {
  status: Status;
};

export default function ProjectStatus({
  status,
}: ProjectStatusProps) {
  const statusConfig = {
    Live: {
      icon: HiCheckCircle,
      label: "Live",
      className:
        "bg-green-500/10 text-green-400 border-green-500/20",
    },

    Private: {
      icon: HiLockClosed,
      label: "Private Repository",
      className:
        "bg-red-500/10 text-red-400 border-red-500/20",
    },

    "In Progress": {
      icon: HiClock,
      label: "In Progress",
      className:
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
  };

  const config = statusConfig[status];

  const Icon = config.icon;

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        ${config.className}
      `}
    >
      <Icon size={18} />

      {config.label}
    </div>
  );
}