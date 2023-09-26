<template>
  <div class="logo">
    <NuxtLinkLocale to="/">
      <NuxtImg src="/logo.png" alt="Portfolio logo`" class="logo__image" />
    </NuxtLinkLocale>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  overflow: hidden;

  &__image {
    height: 37.5px;
    width: 37.5px;
    padding: 20px;
    text-shadow: 0 0 2px $black;

    @include tablet {
      height: 75px;
      width: 75px;
      padding: 40px;
    }

    @include desktop {
      padding: 40px 80px;
    }
  }
}
</style>
