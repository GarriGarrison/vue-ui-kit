<script setup lang="ts">
import { ref, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { onFocusin, onFocusout, onChange, onUpdateModelValue, onMount } from '@/common/mixin/emits';
import { useOnMount } from '@/common/hooks/use-mount';
import type { CommonProps } from '@/common/mixin/props';

export interface Props extends CommonProps {
  modelValue?: boolean;
  checked?: boolean;
  title?: string;
  valueField?: string;
  minusIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  title: '',
  valueField: 'value',
  minusIcon: false,
});

const emit = defineEmits(['update:modelValue', 'change', 'click', 'focusin', 'focusout', 'mount', 'unmount']);
useOnMount(emit);

const minusView = ref(false);
const idx = ref();
const check = ref(props.modelValue === undefined ? props.checked : props.modelValue);

watch(
  () => props.modelValue,
  () => {
    if (!props.modelValue && props.minusIcon) {
      minusView.value = true;
    } else {
      minusView.value = false;
    }
  },
);

const handleChange = (element: EventTarget | null): void => {
  if (element) {
    onUpdateModelValue(emit, (element as HTMLInputElement).checked);
    onChange(emit, (element as HTMLInputElement).checked);
  }
};

onMount(() => {
  if (!props.modelValue && props.minusIcon) {
    minusView.value = true;
  } else {
    minusView.value = false;
  }

  idx.value = props.id ? props.id : uuidv4();
});
</script>

<template>
  <div class="guv-checkbox" @click.stop>
    <input
      :id="`guv-checkbox-${idx}`"
      :checked="check"
      :value="modelValue"
      class="guv-checkbox__input"
      tabindex="0"
      type="checkbox"
      @change="handleChange($event.target)"
      @focusout="onFocusout(emit)"
      @focusin="onFocusin(emit)"
    />
    <label :for="`guv-checkbox-${idx}`" :class="{ minus: minusView }">
      {{ title ?? id }}
    </label>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

/* stylelint-disable-next-line order/order */
$background-img: url('./assets/check-mark.svg');
$background-img-minus: url('./assets/minus-icon.svg');

.guv-checkbox {
  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    + label {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;

      &:before {
        display: inline-block;
        flex-grow: 0;
        flex-shrink: 0;
        width: 1em;
        height: 1em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 90%;
        border: 1px solid var(--border, $guv-border);
        border-radius: $guv-border-radius;
        content: '';
      }

      &.minus {
        &:before {
          background-image: $background-img-minus;
          background-size: 120%;
        }
      }
    }

    &:checked + label {
      &:before {
        background-image: $background-img;
        border-color: var(--border, $guv-border);
      }
    }

    &:disabled + label:before {
      background-color: var(--border-disabled, $guv-border-disabled);
    }

    &:not(:disabled) {
      &:active + label:before {
        border-color: var(--border, $guv-border);
      }

      &:not(:checked) + label:hover:before {
        border-color: var(--border, $guv-border);
      }
    }
  }
}
</style>
