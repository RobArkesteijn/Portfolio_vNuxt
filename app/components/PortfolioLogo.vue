<template>
  <div class="logo">
    <NuxtLinkLocale to="/">
      <NuxtImg
        src="/images/logo.png"
        class="logo__image"
        sizes="xs:38 md:75"
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

    @include tablet {
      padding: 40px;
    }

    @include desktop {
      padding: 40px 80px;
    }
  }
}
</style>
