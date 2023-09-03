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
  right: 0;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  z-index: 99;

  &__button {
    text-decoration: none;
    opacity: 0.5;
    color: $powder-blue;
    border: 1px solid $aquamarine-blue;
    font-weight: 200;
    padding: 5px;
    margin-inline: 10px;
    box-shadow: 0 0 10px 0.1px $piction-blue;
    transition:
      color 0.3s ease,
      box-shadow 0.3s ease,
      opacity 0.3s ease;

    &:hover {
      color: $aquamarine-blue;
      box-shadow: 0 0 10px 0.1px $aquamarine-blue;
      opacity: 1;
    }
  }

  &__button-active {
    color: $aquamarine-blue;
    box-shadow: 0 0 10px 0.1px $aquamarine-blue;
    opacity: 1;
  }
}
</style>
