<script setup lang="ts">
import { ref } from "vue";
import { BaseInput } from "@/shared/components/base";
   import {BaseSelect} from '@/shared/components/base/index';

const name = ref("");
const email = ref("");
</script>

<template>
  <div class="tw-flex tw-flex-col tw-gap-6 tw-p-10">

    <BaseSelect
  label="Category"
  placeholder="Select a category"
>
  <option value="suits">Suits</option>
  <option value="kurti">Kurti</option>
</BaseSelect>
  </div>
</template>