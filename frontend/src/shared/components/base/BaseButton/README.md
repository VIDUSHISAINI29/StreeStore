# BaseButton

> BaseButton is the foundation for every button used in StreeStore.
>
> No page or business component should use PrimeVue's `Button` directly.
> Always use `BaseButton`.

---

# Purpose

Provide a single, reusable, accessible and fully typed button component that follows the StreeStore Design System.

---

# Responsibilities

- Render buttons consistently across the application.
- Follow the StreeStore Design Tokens.
- Support all approved variants.
- Support all approved sizes.
- Handle loading and disabled states.
- Maintain accessibility.
- Keep the API simple and predictable.

---

# Component Hierarchy

```
PrimeVue Button
        │
        ▼
BaseButton
        │
        ▼
Business Components
        │
        ▼
Pages
```

Example:

```
BaseButton
    ↓

ProductCard

Checkout

Login

Wishlist

Navbar
```

No component should import PrimeVue Button directly.

---

# Supported Variants

- Primary
- Secondary
- Ghost
- Outline

Future

- Danger
- Success
- Link

---

# Supported Sizes

- Small
- Medium
- Large

---

# Planned Features

- Loading State
- Disabled State
- Icon Left
- Icon Right
- Full Width
- Rounded
- Circle Button
- Icon Only Button

---

# Accessibility Rules

Every button must:

- be keyboard accessible
- show a visible focus state
- preserve sufficient color contrast
- disable interaction while loading
- keep the same width while loading
- use semantic HTML (`button`)
- provide proper button type

---

# Styling Rules

Never use:

- hardcoded colors
- inline styles
- random spacing
- arbitrary Tailwind values
- custom CSS for button appearance

Always use:

- Tailwind Design Tokens
- CVA variants
- approved spacing
- approved typography
- approved radius
- approved shadows

---

# Design Tokens

Colors

- primary
- secondary
- surface
- background
- border
- text

Radius

- sm

Typography

- font-body
- font-medium
- uppercase

Shadow

- sm

Transition

- 150ms

---

# Development Rules

Do not create:

```
PrimaryButton.vue
SecondaryButton.vue
GhostButton.vue
```

Always create:

```
<BaseButton
    variant="primary"
/>
```

Variants belong inside BaseButton.

---

# Usage

Primary

```vue
<BaseButton>
    Shop Now
</BaseButton>
```

Secondary

```vue
<BaseButton variant="secondary">
    Explore
</BaseButton>
```

Ghost

```vue
<BaseButton variant="ghost">
    View More
</BaseButton>
```

Outline

```vue
<BaseButton variant="outline">
    Add To Cart
</BaseButton>
```

Loading

```vue
<BaseButton loading>
    Processing
</BaseButton>
```

Icon

```vue
<BaseButton icon="shopping-bag">
    Add To Cart
</BaseButton>
```

---

# Definition of Done

BaseButton is complete only if:

- all variants match the approved design
- all sizes are implemented
- keyboard navigation works
- loading state works
- disabled state works
- focus ring is visible
- responsive behavior is correct
- component is fully typed
- no duplicated styles exist
- API is documented

---

# Things That Require Review

The following changes must be reviewed before merging:

- new props
- new variants
- API changes
- design token changes
- accessibility changes

---

# Things That Never Require Duplication

Never duplicate a button because:

- the color changed
- the size changed
- the icon changed
- the text changed

These are variants, not new components.

---

# Philosophy

BaseButton is not just a UI element.

It is part of the StreeStore Design System.

Every improvement made here benefits every page, every module and every future feature.

Build once.
Reuse everywhere.
Maintain forever.