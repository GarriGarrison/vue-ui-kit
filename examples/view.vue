<script setup lang="ts">
import { GuvView } from '@garrigarrison/vue-ui-kit';

const handleClick = (): void => {
  alert('Hello!');
};
</script>

<template>
  <div class="wrapper">
    <guv-view element="div">Hello from view DIV</guv-view>

    <guv-view element="span">Hello from view SPAN</guv-view>

    <guv-view element="div" disabled>Hello from view DISABLED</guv-view>

    <guv-view element="div" :style="{ backgroundColor: 'beige' }">Hello from view STYLE</guv-view>

    <guv-view id="id" element="div" class="test">Hello from view CLASS</guv-view>

    <guv-view element="div" aria-label="aria-teg" class="test">Hello from view ARIA</guv-view>

    <guv-view element="div" :style="{ backgroundColor: 'lime' }" @click="handleClick">Click Me</guv-view>
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
