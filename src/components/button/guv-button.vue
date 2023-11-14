<script setup lang="ts">
import { useOnMount } from '@/common/hooks/use-mount';
import { onClick } from '@/common/mixin/emits';
import type { CommonProps } from '@/common/mixin/props';

export interface Props extends CommonProps {
  title?: string;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: 'Button',
  disabled: false,
});

const emit = defineEmits(['click', 'mount', 'unmount']);
useOnMount(emit);
</script>

<template>
  <button
    type="button"
    class="guv-button"
    :class="{ disabled: disabled }"
    :style="style"
    :disabled="disabled"
    @click="onClick(emit, $event)"
  >
    <slot name="before" />
    <slot>
      {{ title }}
    </slot>
    <slot name="after" />
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.guv-button {
  width: 100%;
  padding: 0.5rem 1rem;
  color: var(--text);
  font-size: 1rem;
  background-color: var(--bg-button, $bg-button);
  border: 1px solid transparent;
  border-color: var(--border, $border);
  border-radius: var(--border-radius, $border-radius);
  cursor: pointer;
  text-rendering: auto;
  transition: background 0.2s;

  &:hover {
    background: var(--bg-hover, $bg-hover);
  }

  &:focus,
  :focus-visible {
    outline: none;
  }

  &.disabled {
    border-color: var(--border-disabled, $border-disabled);
    opacity: 0.4;
    pointer-events: none;

    &:hover {
      background: var(--bg-button, $bg-button);
    }
  }
}
</style>
