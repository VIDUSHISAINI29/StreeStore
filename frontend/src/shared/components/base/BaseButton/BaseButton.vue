<script setup lang="ts">
import { computed } from "vue";

import { BaseSpinner } from "@/shared/components/base/BaseSpinner";
import { cn } from "@/shared/utils/cn";

import { buttonVariants } from "./button.variants";
import type { BaseButtonProps } from "./button.types";

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
    }),
  ),
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
    <BaseSpinner
      v-if="loading"
      variant="inverse"
      size="sm"
      label="Loading"
    />

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