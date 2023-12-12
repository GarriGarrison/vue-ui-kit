<script setup lang="ts">
import { ref } from 'vue';
import { GuvCheckbox } from '.';

const handleCheck = (): void => {
  if (check2.value) {
    alert('Hello! Check');
  }
};

const check = ref(true);
const check2 = ref();
</script>

<template>
  <div class="wrapper">
    <guv-checkbox v-model="check" title="Check me" minus-icon />

    <guv-checkbox v-model="check2" title="Check me F" checked />

    <guv-checkbox v-model="check2" title="Check me F" @change="handleCheck" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .img {
    width: 15px;
    height: 15px;
  }
}

.test {
  background-color: greenyellow;
}
</style>
