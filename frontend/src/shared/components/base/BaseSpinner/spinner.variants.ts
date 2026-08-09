import { cva } from "class-variance-authority";

export const spinnerVariants = cva(
  [
    // Layout
    "tw-inline-block",
    "tw-shrink-0",

    // Animation
    "tw-animate-spin",

    // Accessibility
    "tw-align-middle",
  ],
  {
    variants: {
      variant: {
        primary: "tw-text-primary",

        inverse: "tw-text-text-inverse",

        current: "tw-text-current",
      },

      size: {
        sm: [
          "tw-h-4",
          "tw-w-4",
        ],

        md: [
          "tw-h-5",
          "tw-w-5",
        ],

        lg: [
          "tw-h-8",
          "tw-w-8",
        ],
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);