<script setup lang="ts">
import { computed, useId } from "vue";

import { cn } from "@/shared/utils/cn";

import { selectVariants } from "./select.variants";
import type { BaseSelectProps } from "./select.types";

const props = withDefaults(defineProps<BaseSelectProps>(), {
  variant: "default",
  size: "md",
  required: false,
  disabled: false,
  readonly: false,
  fullWidth: true,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const generatedId = useId();

const selectId = computed(() => props.id || generatedId);

const describedBy = computed(() => {
  if (props.error) {
    return `${selectId.value}-error`;
  }

  if (props.hint) {
    return `${selectId.value}-hint`;
  }

  return undefined;
});

const selectClasses = computed(() =>
  cn(
    selectVariants({
      variant: props.error ? "error" : props.variant,
      size: props.size,
      fullWidth: props.fullWidth,
    }),
  ),
);

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;

  emit("update:modelValue", target.value);
};
</script>

<template>
  <div
    :class="[
      'tw-flex tw-flex-col tw-gap-2',
      fullWidth ? 'tw-w-full' : 'tw-w-auto',
    ]"
  >
    <!-- Label -->
    <label
      v-if="label"
      :for="selectId"
      class="tw-font-body tw-text-sm tw-font-medium tw-text-text-primary"
    >
      {{ label }}

      <span
        v-if="required"
        class="tw-ml-1 tw-text-error"
        aria-hidden="true"
      >
        *
      </span>
    </label>

    <!-- Select Wrapper -->
    <div class="tw-relative">
      <!-- Select -->
      <select
        :id="selectId"
        :name="name"
        :value="modelValue"
        :required="required"
        :disabled="disabled"
        :aria-invalid="Boolean(error)"
        :aria-describedby="describedBy"
        :class="selectClasses"
        @change="handleChange"
      >
        <!-- Placeholder -->
        <option
          v-if="placeholder"
          value=""
          disabled
        >
          {{ placeholder }}
        </option>

        <!-- Options -->
        <slot />
      </select>

      <!-- Chevron -->
      <span
        class="tw-pointer-events-none tw-absolute tw-right-4 tw-top-1/2 tw-flex tw--translate-y-1/2 tw-items-center tw-justify-center tw-text-text-secondary"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="tw-h-4 tw-w-4"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>

    <!-- Error -->
    <p
      v-if="error"
      :id="`${selectId}-error`"
      class="tw-font-body tw-text-xs tw-text-error"
      role="alert"
    >
      {{ error }}
    </p>

    <!-- Hint -->
    <p
      v-else-if="hint"
      :id="`${selectId}-hint`"
      class="tw-font-body tw-text-xs tw-text-text-secondary"
    >
      {{ hint }}
    </p>
  </div>
</template>