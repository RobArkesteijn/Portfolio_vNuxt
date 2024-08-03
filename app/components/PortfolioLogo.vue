<template>
  <div class="logo">
    <NuxtLinkLocale to="/">
      <NuxtImg
        src="/images/logo.png"
        class="logo__image"
      />
    </NuxtLinkLocale>
  </div>
</template>

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
    height: 38px;

    @include tablet {
      padding: 40px;
      height: 75px;
    }

    @include desktop {
      padding: 40px 80px;
    }
  }
}
</style>
