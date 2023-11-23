<script setup lang="ts">
import { ref } from 'vue';
// import { GuvInput } from '@garrigarrison/vue-ui-kit';
import { GuvInput } from '.';

const text = ref<string>();
const num = ref<number>();
const ups = ref();
</script>

<template>
  <div class="wrapper">
    <guv-input v-model="text" />

    <guv-input v-model.number="num" type="number" />

    <guv-input v-model="text" disabled />

    <guv-input v-model="ups" invalid />

    <guv-input v-model="text" :style="{ backgroundColor: 'beige' }" />

    <guv-input v-model="text" class="test" />
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
