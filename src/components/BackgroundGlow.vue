<template>
  <div class="glow"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.glow {
  z-index: -1;
  position: absolute;
  background: radial-gradient(at top left, $piction-blue, $baltic-sea 50%);
  opacity: 0.35;
  width: 300px;
  height: 300px;

  @include tablet {
    height: 500px;
    width: 500px;
  }
}
</style>
