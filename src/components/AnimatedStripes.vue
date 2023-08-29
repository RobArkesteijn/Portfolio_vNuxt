<template>
  <div class="animated-stripes">
    <div
      v-for="index in 4"
      :key="`stripe-${index}`"
      class="animated-stripes__line"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.animated-stripes {
  position: absolute;
  top: 0;
  display: flex;
  height: 100vh;

  &__line {
    width: 80vw;
    height: 5px;
    background-color: $powder-blue;
  }
}
</style>
