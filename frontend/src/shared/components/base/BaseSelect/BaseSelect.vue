<script setup lang="ts">
   import { computed, useId } from 'vue';
   import Select from 'primevue/select';

   import { cn } from '@/shared/utils/cn';

   import { selectVariants } from './select.variants';
   import type { BaseSelectProps } from './select.types';

const optionClasses = ({
  context,
}: {
  context: {
    selected: boolean;
    focused: boolean;
  };
}) => [
  "tw-flex",
  "tw-min-h-10",
  "tw-cursor-pointer",
  "tw-items-center",
  "tw-rounded-sm",
  "tw-px-3",
  "tw-py-2",
  "tw-font-body",
  "tw-text-sm",
  "tw-transition-colors",
  "tw-duration-fast",

  // Selected
  context.selected
    ? [
        "!tw-bg-primary",
        "!tw-text-text-inverse",
        "hover:!tw-bg-primary-hover",
      ]
    : [
        "!tw-bg-surface",
        "tw-text-text-primary",
        "hover:!tw-bg-background-subtle",
      ],

  // Focused but not selected
  context.focused && !context.selected
    ? "!tw-bg-background-subtle"
    : "",
];

   const props = withDefaults(defineProps<BaseSelectProps>(), {
      variant: 'default',
      size: 'md',
      required: false,
      disabled: false,
      fullWidth: true,
      optionLabel: 'label',
      optionValue: 'value',
   });

   const emit = defineEmits<{
      'update:modelValue': [value: string | number | null];
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
            variant: props.error ? 'error' : props.variant,
            size: props.size,
            fullWidth: props.fullWidth,
            disabled: props.disabled,
         }),
      ),
   );

   const labelClasses = computed(() => {
      switch (props.size) {
         case 'sm':
            return 'tw-text-xs';

         case 'lg':
            return 'tw-text-base';

         default:
            return 'tw-text-sm';
      }
   });
</script>

<template>
   <div
      :class="[
         'tw-flex tw-flex-col tw-gap-2',
         fullWidth ? 'tw-w-full' : 'tw-w-auto',
      ]">
      <!-- Label -->
      <label
         v-if="label"
         :for="selectId"
         class="tw-font-body tw-font-medium tw-text-text-primary"
         :class="labelClasses">
         {{ label }}

         <span v-if="required" class="tw-ml-1 tw-text-error" aria-hidden="true">
            *
         </span>
      </label>

      <!-- Select -->
      <Select
        unstyled
         :id="selectId"
         :name="name"
         :model-value="modelValue"
         :options="options"
         :option-label="optionLabel"
         :option-value="optionValue"
         :placeholder="placeholder"
         :disabled="disabled"
         :aria-invalid="Boolean(error)"
         :aria-describedby="describedBy"
         :aria-required="required"
         :pt="{
            root: {
               class: selectClasses,
            },

            label: {
               class: [
                  'tw-flex-1',
                  'tw-truncate',
                  'tw-font-body',
                  'tw-text-text-primary',
               ],
            },

            dropdown: {
               class: [
                  'tw-flex',
                  'tw-h-full',
                  'tw-w-10',
                  'tw-shrink-0',
                  'tw-items-center',
                  'tw-justify-center',
                  'tw-text-text-secondary',
               ],
            },

       overlay: {
  class: [
    "tw-mt-2",
    "tw-overflow-hidden",
    "tw-rounded-md",
    "tw-border",
    "tw-border-border",
    "!tw-bg-surface",
    "tw-shadow-lg",
  ],
},

            listContainer: {
               class: 'tw-max-h-60',
            },
list: {
  class: [
    "tw-p-1.5",
    "!tw-bg-surface",
  ],
},

        const optionClasses = ({ context }: any) => {
  if (context.selected) {
    return [
      "tw-flex",
      "tw-min-h-10",
      "tw-items-center",
      "tw-rounded-sm",
      "tw-px-3",
      "tw-py-2",
      "tw-font-body",
      "tw-text-sm",

      "!tw-bg-primary",
      "!tw-text-text-inverse",

      "hover:!tw-bg-primary-hover",
    ];
  }

  if (context.focused) {
    return [
      "tw-flex",
      "tw-min-h-10",
      "tw-items-center",
      "tw-rounded-sm",
      "tw-px-3",
      "tw-py-2",
      "tw-font-body",
      "tw-text-sm",

      "!tw-bg-background-subtle",
      "!tw-text-text-primary",
    ];
  }

  return [
    "tw-flex",
    "tw-min-h-10",
    "tw-items-center",
    "tw-rounded-sm",
    "tw-px-3",
    "tw-py-2",
    "tw-font-body",
    "tw-text-sm",

    "!tw-bg-surface",
    "!tw-text-text-primary",

    "hover:!tw-bg-background-subtle",
  ];
};

            emptyMessage: {
               class: [
                  'tw-px-3',
                  'tw-py-3',
                  'tw-font-body',
                  'tw-text-sm',
                  'tw-text-text-muted',
               ],
            },
         }"
         @update:model-value="emit('update:modelValue', $event)">
         <template #option="{ option, selected }">
            <div
               class="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-3">
               <span class="tw-truncate">
                  {{ option[optionLabel] }}
               </span>

               <svg
                  v-if="selected"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="tw-h-4 tw-w-4 tw-shrink-0"
                  aria-hidden="true">
                  <path
                     fill-rule="evenodd"
                     d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                     clip-rule="evenodd" />
               </svg>
            </div>
         </template>

         <!-- Dropdown Icon -->
         <template #dropdownicon>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               class="tw-h-4 tw-w-4"
               aria-hidden="true">
               <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
            </svg>
         </template>
      </Select>

      <!-- Error -->
      <p
         v-if="error"
         :id="`${selectId}-error`"
         class="tw-font-body tw-text-xs tw-text-error"
         role="alert">
         {{ error }}
      </p>

      <!-- Hint -->
      <p
         v-else-if="hint"
         :id="`${selectId}-hint`"
         class="tw-font-body tw-text-xs tw-text-text-secondary">
         {{ hint }}
      </p>
   </div>
</template>
