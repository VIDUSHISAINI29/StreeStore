<script setup lang="ts">
import { computed } from "vue";

import { spinnerVariants } from "./spinner.variants";
import type { BaseSpinnerProps } from "./spinner.types";

const props = withDefaults(defineProps<BaseSpinnerProps>(), {
  variant: "primary",
  size: "md",
  label: "Loading",
});

const spinnerClasses = computed(() =>
  spinnerVariants({
    variant: props.variant,
    size: props.size,
  })
);
</script>

<template>
  <span
    role="status"
    :aria-label="label"
    :class="spinnerClasses"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      class="tw-h-full tw-w-full"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        class="tw-opacity-20"
        stroke="currentColor"
        stroke-width="3"
      />

      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  </span>
</template>