<script setup lang="ts">
import { ref } from 'vue';
import { GuvCheckbox } from '.';

const handleCheck = (): void => {
  if (check2.value) {
    alert('Hello! Check');
  }
};

const check = ref(false);
const check2 = ref();
const check3 = ref(true);
</script>

<template>
  <div class="wrapper">
    <guv-checkbox v-model="check" title="Check me" minus-icon />

    <guv-checkbox v-model="check2" title="Check me Checked" checked />

    <guv-checkbox v-model="check2" title="Check me F" @change="handleCheck" />

    <guv-checkbox v-model="check" title="Disabled" disabled @change="handleCheck" />

    <guv-checkbox v-model="check3" title="Disabled" disabled />

    <guv-checkbox v-model="check3" title="Style" :style="{ marginTop: '50px' }" />
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
