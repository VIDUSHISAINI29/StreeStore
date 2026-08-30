<script setup lang="ts">
import { ref } from "vue";
import { BaseSelect } from "@/shared/components/base";

const category = ref("");

const categories = [
  { label: "Suits", value: "suits" },
  { label: "Kurti", value: "kurti" },
  { label: "Sarees", value: "sarees" },
];
</script>

<template>
  <BaseSelect
    v-model="category"
    label="Category"
    placeholder="Select a category"
    :options="categories"
  />
</template>