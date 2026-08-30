import type { InputHTMLAttributes } from "vue";

/* -------------------------------------------------------------------------- */
/* Input Variants                                                             */
/* -------------------------------------------------------------------------- */

export type InputVariant =
  | "default"
  | "error"
  | "success";

/* -------------------------------------------------------------------------- */
/* Input Sizes                                                                */
/* -------------------------------------------------------------------------- */

export type InputSize =
  | "sm"
  | "md"
  | "lg";

/* -------------------------------------------------------------------------- */
/* Input Props                                                                */
/* -------------------------------------------------------------------------- */

export interface BaseInputProps {
  /**
   * Visual state of the input.
   */
  variant?: InputVariant;

  /**
   * Input size.
   */
  size?: InputSize;

  /**
   * Input value.
   *
   * Supports v-model.
   */
  modelValue?: string | number;

  /**
   * Native HTML input type.
   */
  type?: InputHTMLAttributes["type"];

  /**
   * Input name.
   */
  name?: string;

  /**
   * Input identifier.
   */
  id?: string;

  /**
   * Placeholder text.
   */
  placeholder?: string;

  /**
   * Label displayed above the input.
   */
  label?: string;

  /**
   * Supporting text displayed below the input.
   */
  hint?: string;

  /**
   * Error message displayed below the input.
   */
  error?: string;

  /**
   * Makes the input required.
   */
  required?: boolean;

  /**
   * Disables the input.
   */
  disabled?: boolean;

  /**
   * Makes the input readonly.
   */
  readonly?: boolean;

  /**
   * Makes the input take the full available width.
   */
  fullWidth?: boolean;
}