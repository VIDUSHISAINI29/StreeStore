<script setup lang="ts">
import { computed, useId } from "vue";

import { inputVariants } from "./input.variants";
import type { BaseInputProps } from "./input.types";

import { cn } from "@/shared/utils/cn";

const props = withDefaults(defineProps<BaseInputProps>(), {
  variant: "default",
  size: "md",
  type: "text",
  required: false,
  disabled: false,
  readonly: false,
  fullWidth: true,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const generatedId = useId();

const inputId = computed(() => props.id || generatedId);

const describedBy = computed(() => {
  const ids: string[] = [];

  if (props.error) {
    ids.push(`${inputId.value}-error`);
  } else if (props.hint) {
    ids.push(`${inputId.value}-hint`);
  }

  return ids.length > 0 ? ids.join(" ") : undefined;
});

const inputClasses = computed(() =>
  cn(
    inputVariants({
      variant: props.error ? "error" : props.variant,
      size: props.size,
      fullWidth: props.fullWidth,
    }),
  ),
);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

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
      :for="inputId"
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

    <!-- Input Wrapper -->
    <div class="tw-relative tw-flex tw-items-center">
      <!-- Left Icon -->
      <div
        v-if="$slots.leftIcon"
        class="tw-pointer-events-none tw-absolute tw-left-3 tw-flex tw-items-center tw-text-text-muted"
      >
        <slot name="leftIcon" />
      </div>

      <!-- Input -->
      <input
        :id="inputId"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :aria-invalid="Boolean(error)"
        :aria-describedby="describedBy"
        :class="[
          inputClasses,
          $slots.leftIcon ? 'tw-pl-10' : '',
          $slots.rightIcon ? 'tw-pr-10' : '',
        ]"
        @input="handleInput"
      />

      <!-- Right Icon -->
      <div
        v-if="$slots.rightIcon"
        class="tw-pointer-events-none tw-absolute tw-right-3 tw-flex tw-items-center tw-text-text-muted"
      >
        <slot name="rightIcon" />
      </div>
    </div>

    <!-- Error -->
    <p
      v-if="error"
      :id="`${inputId}-error`"
      class="tw-font-body tw-text-xs tw-text-error"
      role="alert"
    >
      {{ error }}
    </p>

    <!-- Hint -->
    <p
      v-else-if="hint"
      :id="`${inputId}-hint`"
      class="tw-font-body tw-text-xs tw-text-text-secondary"
    >
      {{ hint }}
    </p>
  </div>
</template>