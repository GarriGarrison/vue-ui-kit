<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { onFocusin, onFocusout, onKeydown, onInput, onUpdateModelValue } from '@/common/mixin/emits';
import { useOnMount } from '@/common/hooks/use-mount';
import type { CommonProps } from '@/common/mixin/props';
import type { ValueInput } from '@/common/types/value';

export interface Props extends CommonProps {
  modelValue: ValueInput;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search';
  placeholder?: string;
  mask?: RegExp;
  invalid?: boolean;
  integer?: boolean;
  min?: number;
  max?: number;
  step?: number;
  focus?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  mask: undefined,
  invalid: false,
  integer: false,
  min: undefined,
  max: undefined,
  step: undefined,
  disabled: false,
});

const emit = defineEmits(['update:modelValue', 'keydown', 'input', 'focusin', 'focusout', 'mount', 'unmount']);
useOnMount(emit);

const inputRef: Ref<HTMLInputElement | null> = ref(null);

const forceFocus = (): void => {
  if (inputRef.value) {
    inputRef.value.focus();
  }
};

const handleInput = (element: EventTarget | null): void => {
  if (element) {
    onUpdateModelValue(emit, (element as HTMLInputElement).value);
    onInput(emit, (element as HTMLInputElement).value);
  }
};

const handleKeydown = (event: KeyboardEvent): void => {
  onKeydown(emit, event);

  if (event.key === 'Backspace' || event.key == 'Delete') return;

  if (props.mask && !props.mask.test(event.key)) {
    event.preventDefault();
  }

  if (props.integer && !/^\d+$/.test(event.key)) {
    event.preventDefault();
  }
};

export interface InputExpose {
  input: HTMLInputElement | null;
  forceFocus: () => void;
}

defineExpose({ input: inputRef, forceFocus });

onMounted(() => {
  if (props.focus) {
    forceFocus();
  }
});
</script>

<template>
  <input
    ref="inputRef"
    :value="modelValue"
    :type="type"
    class="guv-input"
    :class="{ error: invalid && !modelValue, disabled: disabled }"
    :style="style"
    :placeholder="placeholder"
    :step="integer ? '1' : step"
    :min="min"
    :max="max"
    :disabled="disabled"
    @input="handleInput($event.target)"
    @focusin="onFocusin(emit)"
    @focusout="onFocusout(emit)"
    @keydown="handleKeydown($event)"
  />
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.guv-input {
  box-sizing: border-box;
  max-width: 100%;
  padding: $guv-p-input;
  color: var(--text, $guv-text);
  font-size: 1rem;
  background-color: var(--bg-input, $guv-bg-input);
  border: 1px solid transparent;
  border-color: var(--guv-border, $guv-border);
  border-radius: var(--guv-border-radius, $guv-border-radius);
  transition: background 0.2s;
  transition:
    color 0.1s ease,
    border-color 0.1s ease;
  resize: none;

  &:focus,
  :focus-visible {
    border-color: var(--guv-border-focus, $guv-border-focus);
    outline: none;
  }

  &.disabled {
    border-color: var(--guv-border-disabled, $guv-border-disabled);
    opacity: 0.6;
    pointer-events: none;
  }

  &.error {
    border: 2px solid transparent;
    border-color: var(--guv-border-error, $guv-border-error);
  }
}
</style>
