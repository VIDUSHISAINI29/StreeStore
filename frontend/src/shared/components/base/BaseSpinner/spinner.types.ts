  /* Spinner Variant */


export type SpinnerVariant =
  | "primary"
  | "inverse"
  | "current";

  /* Spinner size */

export type SpinnerSize =
  | "sm"
  | "md"
  | "lg";

  /* Spinner Props */

export interface BaseSpinnerProps {
  /**
   * Visual color treatment.
   *
   * primary  → brand burgundy
   * inverse  → white, for dark/primary surfaces
   * current  → inherits the current text color
   */
  variant?: SpinnerVariant;

  /**
   * Spinner size.
   */
  size?: SpinnerSize;

  /* Accessible label announced by screen readers */

  label?: string;
}