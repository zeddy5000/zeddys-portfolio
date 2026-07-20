import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-28 md:py-36",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}