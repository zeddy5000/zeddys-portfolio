import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden
        rounded-[32px]

        border
        border-white/10

        bg-white/[0.04]
        backdrop-blur-2xl

        shadow-[0_20px_80px_rgba(0,0,0,0.35)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:shadow-[0_25px_90px_rgba(34,211,238,0.18)]

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/10
        before:via-transparent
        before:to-cyan-500/10
        before:opacity-100
        before:pointer-events-none

        after:absolute
        after:inset-0
        after:rounded-[32px]
        after:ring-1
        after:ring-white/10
        after:pointer-events-none
        `,
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}