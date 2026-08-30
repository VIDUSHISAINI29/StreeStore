import { cva } from "class-variance-authority";

export const selectVariants = cva(
  [
    // Layout
    "tw-w-full",
    "tw-flex",
    "tw-items-center",

    // Typography
    "tw-font-body",
    "tw-font-normal",
    "tw-text-text-primary",

    // Background
    "tw-bg-surface",

    // Border
    "tw-border",
    "tw-border-border",

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
  ],
  {
    variants: {
      variant: {
        default: [
          "hover:tw-border-border-strong",
          "focus:tw-border-primary",
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
          "tw-min-h-9",
          "tw-px-3",
          "tw-py-2",
          "tw-text-xs",
        ],

        md: [
          "tw-min-h-11",
          "tw-px-4",
          "tw-py-2.5",
          "tw-text-sm",
        ],

        lg: [
          "tw-min-h-12",
          "tw-px-5",
          "tw-py-3",
          "tw-text-base",
        ],
      },

      fullWidth: {
        true: "tw-w-full",
        false: "tw-w-auto",
      },

      disabled: {
        true: [
          "tw-cursor-not-allowed",
          "tw-bg-surface-muted",
          "tw-text-text-disabled",
          "tw-border-border",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: true,
      disabled: false,
    },
  },
);