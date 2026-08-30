<script setup lang="ts">
import { computed, useId } from "vue";

import { cn } from "@/shared/utils/cn";

import { textareaVariants } from "./textarea.variants";
import type { BaseTextareaProps } from "./textarea.types";

const props = withDefaults(defineProps<BaseTextareaProps>(), {
  variant: "default",
  size: "md",
  required: false,
  disabled: false,
  readonly: false,
  rows: 4,
  fullWidth: true,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const generatedId = useId();

const textareaId = computed(() => props.id || generatedId);

const describedBy = computed(() => {
  const ids: string[] = [];

  if (props.error) {
    ids.push(`${textareaId.value}-error`);
  } else if (props.hint) {
    ids.push(`${textareaId.value}-hint`);
  }

  return ids.length > 0 ? ids.join(" ") : undefined;
});

const textareaClasses = computed(() =>
  cn(
    textareaVariants({
      variant: props.error ? "error" : props.variant,
      size: props.size,
      fullWidth: props.fullWidth,
    }),
  ),
);

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;

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
      :for="textareaId"
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

    <!-- Textarea -->
    <textarea
      :id="textareaId"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :autocomplete="autocomplete"
      :aria-invalid="Boolean(error)"
      :aria-describedby="describedBy"
      :class="textareaClasses"
      @input="handleInput"
    />

    <!-- Error -->
    <p
      v-if="error"
      :id="`${textareaId}-error`"
      class="tw-font-body tw-text-xs tw-text-error"
      role="alert"
    >
      {{ error }}
    </p>

    <!-- Hint -->
    <p
      v-else-if="hint"
      :id="`${textareaId}-hint`"
      class="tw-font-body tw-text-xs tw-text-text-secondary"
    >
      {{ hint }}
    </p>
  </div>
</template>