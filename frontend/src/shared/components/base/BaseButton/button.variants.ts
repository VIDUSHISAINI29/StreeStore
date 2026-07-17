import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    // Layout
    "tw-inline-flex",
    "tw-items-center",
    "tw-justify-center",
    "tw-gap-2",
    "tw-whitespace-nowrap",
    "tw-select-none",

    // Typography
    "tw-font-body",
    "tw-font-medium",
    "tw-uppercase",
    "tw-tracking-wide",

    // Border
    "tw-border",

    // Radius
    "tw-rounded-sm",

    // Transition
    "tw-transition-all",
    "tw-duration-fast",
    "tw-ease-smooth",

    // Focus
    "focus-visible:tw-outline-none",
    "focus-visible:tw-ring-2",
    "focus-visible:tw-ring-primary",
    "focus-visible:tw-ring-offset-2",

    // Disabled
    "disabled:tw-pointer-events-none",
    "disabled:tw-cursor-not-allowed",

    // Active
    "active:tw-translate-y-px",
  ],
  {
    variants: {
      variant: {
        primary: [
          "tw-bg-primary",
          "tw-text-text-inverse",
          "tw-border-primary",

          "hover:tw-bg-primary-hover",
          "active:tw-bg-primary-active",

          "disabled:tw-bg-primary-disabled",
          "disabled:tw-border-primary-disabled",

          "tw-shadow-sm",
        ],

        surface: [
          "tw-bg-surface",
          "tw-text-primary",
          "tw-border-primary",

          "hover:tw-bg-surface-hover",
          "active:tw-bg-surface-active",
        ],

        ghost: [
          "tw-bg-transparent",
          "tw-border-transparent",
          "tw-text-primary",

          "hover:tw-bg-background-subtle",
          "active:tw-bg-background-muted",
        ],

        outline: [
          "tw-bg-transparent",
          "tw-text-text-primary",
          "tw-border-border",

          "hover:tw-border-primary",
          "hover:tw-text-primary",
          "hover:tw-bg-background-subtle",
        ],
      },

      size: {
        sm: [
          "tw-min-h-8",
          "tw-px-4",
          "tw-text-xs",
        ],

        md: [
          "tw-min-h-10",
          "tw-px-5",
          "tw-text-sm",
        ],

        lg: [
          "tw-min-h-12",
          "tw-px-6",
          "tw-text-base",
        ],
      },

      fullWidth: {
        true: "tw-w-full",
      },

      rounded: {
        true: "tw-rounded-full",
      },

      loading: {
        true: "tw-cursor-wait",
      },
    },

    compoundVariants: [
      {
        variant: "primary",
        loading: true,
        class: "tw-opacity-90",
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      rounded: false,
      loading: false,
    },
  }
);