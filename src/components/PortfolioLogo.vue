<template>
  <div class="logo">
    <NuxtLinkLocale to="/">
      <NuxtImg
        src="/logo.png"
        alt="Portfolio logo"
        class="logo__image"
        height="38"
        width="38"
        format="webp"
      />
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
    padding: 20px;
    text-shadow: 0 0 2px $black;

    @include tablet {
      padding: 40px;
      height: 75px;
      width: 75px;
    }

    @include desktop {
      padding: 40px 80px;
    }
  }
}
</style>
