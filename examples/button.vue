<script setup lang="ts">
import { GuvButton } from '@garrigarrison/vue-ui-kit';
</script>

<template>
  <div class="wrapper">
    <guv-button>
      Click me
      <template #after><img src="@/assets/search.svg" alt="image before" class="img" /></template>
    </guv-button>

    <guv-button class="test" />

    <guv-button size="standard" />
    <guv-button size="small" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
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
