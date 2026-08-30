import type { TextareaHTMLAttributes } from "vue";

/* -------------------------------------------------------------------------- */
/* Textarea Variants                                                          */
/* -------------------------------------------------------------------------- */

export type TextareaVariant =
  | "default"
  | "error"
  | "success";

/* -------------------------------------------------------------------------- */
/* Textarea Sizes                                                             */
/* -------------------------------------------------------------------------- */

export type TextareaSize =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Textarea Props                                                             */
/* -------------------------------------------------------------------------- */

export interface BaseTextareaProps {
  variant?: TextareaVariant;

  size?: TextareaSize;

  modelValue?: string;

  name?: string;

  id?: string;

  placeholder?: string;

  label?: string;

  hint?: string;

  error?: string;

  required?: boolean;

  disabled?: boolean;

  readonly?: boolean;

  rows?: number;

  fullWidth?: boolean;

  autocomplete?: TextareaHTMLAttributes["autocomplete"];
}