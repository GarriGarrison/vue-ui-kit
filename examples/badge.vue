<script setup lang="ts">
import { GuvBadge } from '@garrigarrison/vue-ui-kit';
</script>

<template>
  <div class="wrapper">
    <guv-badge :counter="5" />

    <guv-badge :counter="{ count: 4, mode: 0 }" />

    <guv-badge :counter="{ count: 3, mode: 1 }" />

    <guv-badge :counter="2" :style="{ backgroundColor: 'blue' }" />

    <guv-badge :counter="5" class="test" />
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
