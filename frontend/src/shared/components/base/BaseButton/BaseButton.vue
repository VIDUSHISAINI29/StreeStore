<script setup lang="ts">
import { computed } from "vue";

import { buttonVariants } from "./button.variants";
import type { BaseButtonProps } from "./button.types";

import { cn } from "@/shared/utils/cn";

const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: "primary",
  size: "md",
  type: "button",
  loading: false,
  disabled: false,
  rounded: false,
  fullWidth: false,
});

const buttonClasses = computed(() =>
  cn(
    buttonVariants({
      variant: props.variant,
      size: props.size,
      rounded: props.rounded,
      fullWidth: props.fullWidth,
      loading: props.loading,
    })
  )
);

const isDisabled = computed(() => props.disabled || props.loading);
</script>

<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :aria-busy="loading"
    :class="buttonClasses"
  >
    <!-- Left Icon -->
    <template v-if="!loading && $slots.leftIcon">
      <slot name="leftIcon" />
    </template>

    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="tw-h-4 tw-w-4 tw-animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        class="tw-opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />

      <path
        class="tw-opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>

    <!-- Label -->
    <span class="tw-inline-flex tw-items-center">
      <slot />
    </span>

    <!-- Right Icon -->
    <template v-if="!loading && $slots.rightIcon">
      <slot name="rightIcon" />
    </template>
  </button>
</template>