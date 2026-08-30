import { cva } from "class-variance-authority";

export const selectVariants = cva(
  [
    // Layout
    "tw-w-full",
    "tw-outline-none",
    "tw-appearance-none",

    // Typography
    "tw-font-body",
    "tw-font-normal",
    "tw-text-text-primary",

    // Background
    "tw-bg-surface",

    // Border
    "tw-border",

    // Radius
    "tw-rounded-md",

    // Cursor
    "tw-cursor-pointer",

    // Transition
    "tw-transition-all",
    "tw-duration-fast",
    "tw-ease-smooth",

    // Focus
    "focus:tw-outline-none",

    // Disabled
    "disabled:tw-cursor-not-allowed",
    "disabled:tw-bg-surface-muted",
    "disabled:tw-text-text-disabled",
    "disabled:tw-border-border",

    // Placeholder
    "tw-text-text-primary",
  ],
  {
    variants: {
      variant: {
        default: [
          "tw-border-border",

          "hover:tw-border-border-strong",

          "focus:tw-border-border-focus",
          "focus:tw-ring-2",
          "focus:tw-ring-primary/10",
        ],

        error: [
          "tw-border-error",

          "hover:tw-border-error",

          "focus:tw-border-error",
          "focus:tw-ring-2",
          "focus:tw-ring-error/10",
        ],

        success: [
          "tw-border-success",

          "hover:tw-border-success",

          "focus:tw-border-success",
          "focus:tw-ring-2",
          "focus:tw-ring-success/10",
        ],
      },

      size: {
        sm: [
          "tw-h-9",
          "tw-pl-3",
          "tw-pr-9",
          "tw-text-xs",
        ],

        md: [
          "tw-h-11",
          "tw-pl-4",
          "tw-pr-10",
          "tw-text-sm",
        ],

        lg: [
          "tw-h-12",
          "tw-pl-5",
          "tw-pr-11",
          "tw-text-base",
        ],
      },

      fullWidth: {
        true: "tw-w-full",
        false: "tw-w-auto",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: true,
    },
  },
);