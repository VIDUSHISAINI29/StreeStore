import type { HTMLAttributes } from 'vue';

export interface FormFieldProps {
  /**
   * Field label
   */
  label?: string;

  /**
   * Mark field as required
   */
  required?: boolean;

  /**
   * Error message
   */
  error?: string;

  /**
   * Helper text shown below the field
   */
  hint?: string;

  /**
   * Whether the field should take the full available width
   */
  fullWidth?: boolean;

  /**
   * Optional description for accessibility
   */
  description?: string;

  /**
   * Custom id used to associate the label with the field
   */
  id?: string;

  /**
   * Additional classes for the wrapper
   */
  class?: HTMLAttributes['class'];
}