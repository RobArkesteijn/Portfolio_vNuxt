<template>
  <ClientOnly>
    <div class="language-navigation">
      <NuxtLink
        :to="switchLocalePath('en')"
        class="language-navigation__button"
        :class="{
          'language-navigation__button--active': $i18n.locale === 'en',
        }"
        >EN
      </NuxtLink>
      <NuxtLink
        :to="switchLocalePath('nl')"
        class="language-navigation__button"
        :class="{
          'language-navigation__button--active': $i18n.locale === 'nl',
        }"
        >NL
      </NuxtLink>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped lang="scss">
.language-navigation {
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 99;
  gap: 20px;
  animation: fade-in 2s forwards ease;
  opacity: 0;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @include tablet {
    gap: 40px;
    padding-bottom: 60px;
    animation-delay: 2s;
  }

  @include desktop {
    padding-bottom: 80px;
  }

  &__button {
    text-decoration: none;
    opacity: 0.5;
    color: $powder-blue;
    border: 1px solid $aquamarine-blue;
    font-weight: 200;
    padding: 5px;
    box-shadow: 0 0 10px 0.1px $piction-blue;
    background-color: $outer-space;
    transition:
      color 0.3s ease,
      box-shadow 0.3s ease,
      opacity 0.3s ease;

    @include tablet {
      font-size: 24px;
    }

    &--active {
      color: $aquamarine-blue;
      box-shadow: 0 0 10px 0.1px $aquamarine-blue;
      opacity: 1;
    }
  }
}
</style>
