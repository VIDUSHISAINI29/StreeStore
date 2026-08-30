export type SelectVariant =
  | "default"
  | "error"
  | "success";

export type SelectSize =
  | "sm"
  | "md"
  | "lg";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface BaseSelectProps {
  variant?: SelectVariant;

  size?: SelectSize;

  modelValue?: string | number | null;

  options?: SelectOption[];

  optionLabel?: string;

  optionValue?: string;

  name?: string;

  id?: string;

  label?: string;

  placeholder?: string;

  hint?: string;

  error?: string;

  required?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;
}