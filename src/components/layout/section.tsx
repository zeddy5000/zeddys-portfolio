import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-28 md:py-36",
        className
      )}
    >
      {children}
    </section>
  );
}