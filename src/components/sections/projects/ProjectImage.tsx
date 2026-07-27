"use client";

import Image from "next/image";

type Props = {
  image?: string | null;
  title: string;
};

export default function ProjectImage({
  image,
  title,
}: Props) {
  const imageSrc =
  image?.trim()
    ? image
    : "/images/projects/default-project.png";
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-xl">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}