<script setup lang="ts">
import { useOnMount } from '@/common/hooks/use-mount';
import { onClick } from '@/common/mixin/emits';
import type { CommonProps } from '@/common/mixin/props';

export interface Props extends CommonProps {
  title?: string;
  disabled?: boolean;
  size?: 'default' | 'standard' | 'small';
}

withDefaults(defineProps<Props>(), {
  title: 'Button',
  disabled: false,
  size: 'default',
});

const emit = defineEmits(['click', 'mount', 'unmount']);
useOnMount(emit);
</script>

<template>
  <button
    :id="id"
    type="button"
    class="guv-button"
    :class="{ disabled: disabled, standard: size === 'standard', small: size === 'small' }"
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
  background-color: var(--guv-bg-button, $guv-bg-button);
  border: 1px solid transparent;
  border-color: var(--guv-border, $guv-border);
  border-radius: var(--guv-border-radius, $guv-border-radius);
  cursor: pointer;
  text-rendering: auto;
  transition: background 0.2s;

  &:hover {
    background: var(--guv-bg-hover, $guv-bg-hover);
  }

  &:focus,
  :focus-visible {
    outline: none;
  }

  &.disabled {
    border-color: var(--guv-border-disabled, $guv-border-disabled);
    opacity: 0.4;
    pointer-events: none;

    &:hover {
      background: var(--guv-bg-button, $guv-bg-button);
    }
  }

  &.standard {
    width: 55px;
    height: 50px;
  }

  &.small {
    width: 33px;
    height: 30px;
  }
}
</style>
