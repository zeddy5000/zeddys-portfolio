import { cn } from "@/lib/utils";
import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";

export default function Button({
  variant,
  size,
  className,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}