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
  animation: fade-in 2s forwards ease;
  opacity: 0;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @include tablet {
    animation-delay: 2s;
  }

  &__image {
    height: 37.5px;
    padding: 20px;
    text-shadow: 0 0 2px $black;

    @include tablet {
      height: 75px;
      padding: 40px;
    }
  }
}
</style>
