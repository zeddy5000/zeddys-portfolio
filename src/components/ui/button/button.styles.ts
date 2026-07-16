import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "transition-all",
    "duration-300",
    "font-medium",
    "focus:outline-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:scale-105 hover:shadow-xl",

        secondary:
          "bg-blue-600 text-white hover:bg-blue-500",

        outline:
          "border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10",

        ghost:
          "hover:bg-white/5",
      },

      size: {
        sm: "px-4 py-2 text-sm",

        md: "px-6 py-3",

        lg: "px-8 py-4 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);