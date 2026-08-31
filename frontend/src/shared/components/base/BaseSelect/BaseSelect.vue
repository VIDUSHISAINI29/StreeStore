<script setup lang="ts">
   import { computed, useId } from 'vue';
   import Select from 'primevue/select';

   import { cn } from '@/shared/utils/cn';
   import { selectVariants } from './select.variants';
   import type { BaseSelectProps } from './select.types';

   const props = withDefaults(defineProps<BaseSelectProps>(), {
      variant: 'default',
      size: 'md',
      required: false,
      disabled: false,
      readonly: false,
      fullWidth: true,
      optionLabel: 'label',
      optionValue: 'value',
   });

   const emit = defineEmits<{
      'update:modelValue': [value: string | number | null];
   }>();

   /* -------------------------------------------------------------------------- */
   /* ID                                                                          */
   /* -------------------------------------------------------------------------- */

   const generatedId = useId();

   const selectId = computed(() => props.id || generatedId);

   /* -------------------------------------------------------------------------- */
   /* Accessibility                                                               */
   /* -------------------------------------------------------------------------- */

   const describedBy = computed(() => {
      if (props.error) {
         return `${selectId.value}-error`;
      }

      if (props.hint) {
         return `${selectId.value}-hint`;
      }

      return undefined;
   });

   /* -------------------------------------------------------------------------- */
   /* Select Classes                                                              */
   /* -------------------------------------------------------------------------- */

   const selectClasses = computed(() =>
      cn(
         selectVariants({
            variant: props.error ? 'error' : props.variant,
            size: props.size,
            fullWidth: props.fullWidth,
         }),
      ),
   );

   /* -------------------------------------------------------------------------- */
   /* Label Classes                                                               */
   /* -------------------------------------------------------------------------- */

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

   /* -------------------------------------------------------------------------- */
   /* Option Classes                                                             */
   /* -------------------------------------------------------------------------- */

   const optionClasses = ({
      context,
   }: {
      context: {
         selected: boolean;
         focused: boolean;
      };
   }) => {
      const base = [
         'tw-flex',
         'tw-min-h-10',
         'tw-w-full',
         'tw-items-center',
         'tw-justify-between',
         'tw-rounded-sm',
         'tw-px-3',
         'tw-py-2',
         'tw-font-body',
         'tw-text-sm',
         'tw-transition-colors',
         'tw-duration-fast',
         'tw-ease-smooth',
         'tw-cursor-pointer',
      ];

      /* Selected */
      if (context.selected) {
         return {
            class: [...base, '!tw-bg-primary', '!tw-text-text-inverse'],
         };
      }

      /* Keyboard / hover focus */
      if (context.focused) {
         return {
            class: [
               ...base,
               '!tw-bg-background-subtle',
               '!tw-text-text-primary',
            ],
         };
      }

      /* Default */
      return {
         class: [...base, '!tw-bg-surface', '!tw-text-text-primary'],
      };
   };
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
         :class="[
            'tw-font-body tw-font-medium tw-text-text-primary',
            labelClasses,
         ]">
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
                  'tw-mt-2',
                  'tw-min-w-full',
                  'tw-overflow-hidden',
                  'tw-rounded-md',
                  'tw-border',
                  'tw-border-border',
                  '!tw-bg-surface',
                  'tw-shadow-lg',
               ],
            },

            listContainer: {
               class: ['tw-max-h-60', 'tw-overflow-auto'],
            },

            list: {
               class: ['tw-m-0', 'tw-list-none', 'tw-p-1.5'],
            },

            option: optionClasses,

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
         <!-- Custom Option -->
         <template #option="{ option, selected }">
            <div
               class="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-3">
               <span class="tw-truncate">
                  {{ option[optionLabel] }}
               </span>

               <!-- Check -->
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
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01.02-1.06z"
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
