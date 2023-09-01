<template>
  <div class="language-navigation">
    <NuxtLink
      :to="switchLocalePath('en')"
      class="language-navigation__button"
      :class="{ 'language-navigation__button-active': $i18n.locale === 'en' }"
      >EN
    </NuxtLink>
    <NuxtLink
      :to="switchLocalePath('nl')"
      class="language-navigation__button"
      :class="{ 'language-navigation__button-active': $i18n.locale === 'nl' }"
      >NL
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped lang="scss">
.language-navigation {
  position: absolute;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  &__button {
    text-decoration: none;
    color: $powder-blue;
    border: 1px solid $aquamarine-blue;
    font-weight: 200;
    padding: 5px;
    box-shadow: 0 0 10px 0.1px $piction-blue;
    transition:
      color 0.3s ease,
      box-shadow 0.3s ease;

    &:first-child {
      margin-bottom: 5px;
    }

    &:hover {
      color: $aquamarine-blue;
      box-shadow: 0 0 10px 0.1px $aquamarine-blue;
    }
  }

  &__button-active {
    color: $aquamarine-blue;
    box-shadow: 0 0 10px 0.1px $aquamarine-blue;
  }
}
</style>
