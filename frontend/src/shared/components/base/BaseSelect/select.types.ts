import type { SelectHTMLAttributes } from "vue";

/* -------------------------------------------------------------------------- */
/* Select Variants                                                            */
/* -------------------------------------------------------------------------- */

export type SelectVariant =
  | "default"
  | "error"
  | "success";

/* -------------------------------------------------------------------------- */
/* Select Sizes                                                               */
/* -------------------------------------------------------------------------- */

export type SelectSize =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Select Props                                                               */
/* -------------------------------------------------------------------------- */

export interface BaseSelectProps {
  variant?: SelectVariant;

  size?: SelectSize;

  modelValue?: string | number;

  name?: string;

  id?: string;

  label?: string;

  placeholder?: string;

  hint?: string;

  error?: string;

  required?: boolean;

  disabled?: boolean;

  readonly?: boolean;

  fullWidth?: boolean;

  autocomplete?: SelectHTMLAttributes["autocomplete"];
}