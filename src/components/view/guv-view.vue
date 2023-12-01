<script setup lang="ts">
import { useOnMount } from '@/common/hooks/use-mount';
import { onClick, onFocusin, onFocusout, type ClickEvent } from '@/common/mixin/emits';
import type { CommonProps } from '@/common/mixin/props';

export interface Props extends CommonProps {
  element: string;
  ariaLabel?: string;
  disabled?: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits(['click', 'focusin', 'focusout', 'mount', 'unmount']);
useOnMount(emit);

const handleClick = (emit: ClickEvent, value: MouseEvent): void => {
  if (!props.disabled) {
    onClick(emit, value);
  }
};
</script>

<template>
  <component
    :is="element"
    :id="id"
    :aria-label="ariaLabel"
    class="guv-view"
    :style="style"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="handleClick(emit, $event)"
    @focusin="onFocusin(emit)"
    @focusout="onFocusout(emit)"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.guv-view {
  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
