import type { ButtonHTMLAttributes } from "vue";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline";

/* -------------------------------------------------------------------------- */
/* Sizes                                                                      */
/* -------------------------------------------------------------------------- */

export type ButtonSize =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Icon Position                                                              */
/* -------------------------------------------------------------------------- */

export type ButtonIconPosition =
  | "left"
  | "right";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface BaseButtonProps {

  /**
   * Visual appearance
   */

  variant?: ButtonVariant;

  /**
   * Button size
   */

  size?: ButtonSize;

  /**
   * Native button type
   */

  type?: ButtonHTMLAttributes["type"];

  /**
   * Loading state
   */

  loading?: boolean;

  /**
   * Disabled state
   */

  disabled?: boolean;

  /**
   * Expand to parent width
   */

  fullWidth?: boolean;

  /**
   * Rounded pill button
   */

  rounded?: boolean;

  /**
   * Icon name
   */

  icon?: string;

  /**
   * Icon position
   */

  iconPosition?: ButtonIconPosition;
}