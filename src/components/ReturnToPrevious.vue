<template>
  <div class="return-to-previous">
    <NuxtLink :to="localePath('/')">
      <Icon name="bx:arrow-back" class="return-to-previous__arrow" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped lang="scss">
.return-to-previous {
  position: absolute;
  padding: 20px;
  z-index: 99;
  animation: fade-in 2s forwards ease;
  opacity: 0;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  &__arrow {
    font-size: 2em;
    color: $powder-blue;
  }
}
</style>
