import { cva } from "class-variance-authority";

export const headingVariants = cva("max-w-3xl", {
  variants: {
    align: {
      left: "text-left",
      center: "mx-auto text-center",
    },
  },

  defaultVariants: {
    align: "left",
  },
});