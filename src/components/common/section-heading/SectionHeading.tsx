import { headingVariants } from "./section-heading.styles";
import type { SectionHeadingProps } from "./section-heading.types";

import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align,
}: SectionHeadingProps) {
  return (
    <div className={cn(headingVariants({ align }))}>
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="font-heading text-5xl font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}