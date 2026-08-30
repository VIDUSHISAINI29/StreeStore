import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    // Layout
    "tw-w-full",
    "tw-block",
    "tw-resize-y",
    "tw-outline-none",

    // Typography
    "tw-font-body",
    "tw-text-text-primary",

    // Background
    "tw-bg-surface",

    // Border
    "tw-border",

    // Radius
    "tw-rounded-sm",

    // Placeholder
    "placeholder:tw-text-text-muted",

    // Transition
    "tw-transition-all",
    "tw-duration-fast",
    "tw-ease-smooth",

    // Focus
    "focus-visible:tw-outline-none",

    // Disabled
    "disabled:tw-cursor-not-allowed",
    "disabled:tw-bg-surface-muted",
    "disabled:tw-text-text-disabled",
    "disabled:tw-border-border",

    // Readonly
    "read-only:tw-cursor-default",
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
          "tw-min-h-20",
          "tw-px-3",
          "tw-py-2",
          "tw-text-xs",
        ],

        md: [
          "tw-min-h-24",
          "tw-px-4",
          "tw-py-3",
          "tw-text-sm",
        ],

        lg: [
          "tw-min-h-32",
          "tw-px-5",
          "tw-py-4",
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