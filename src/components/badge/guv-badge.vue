<script setup lang="ts">
import { useOnMount } from '@/common/hooks/use-mount';
import type { CommonProps } from '@/common/mixin/props';

type Counter = {
  count: number;
  mode: 0 | 1;
};

export interface Props extends CommonProps {
  counter: Counter | number;
}
const props = defineProps<Props>();

const isNum = typeof props.counter === 'number';
const countObj = props.counter as Counter;

const emit = defineEmits(['mount', 'unmount']);
useOnMount(emit);
</script>

<template>
  <div v-if="isNum && counter" class="guv-badge" :style="style">
    {{ counter }}
  </div>
  <div v-else-if="countObj.count" class="guv-badge" :class="{ pulse: countObj.mode === 1 }" :style="style">
    {{ countObj.count }}
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.guv-badge {
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 3px;
  color: $guv-secondary;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  background-color: $guv-accent-red;
  border: none;
  border-radius: 50%;
}

.pulse {
  animation: pulse-note 2500ms linear infinite;
}

@keyframes pulse-note {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
