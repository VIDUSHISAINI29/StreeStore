# BaseSpinner

A reusable loading indicator for the StreeStore design system.

`BaseSpinner` is intentionally lightweight and dependency-free. It can be used for buttons, cards, sections, pages, API loading states, and other asynchronous operations.

---

## Features

- Three sizes
- Three visual variants
- Accessible loading state
- Uses the StreeStore color system
- CSS-based animation
- No external UI dependency
- Reusable across customer and admin applications

---

## Usage

```vue
<script setup lang="ts">
import { BaseSpinner } from "@/shared/components/base";
</script>

<template>
  <BaseSpinner />
</template>