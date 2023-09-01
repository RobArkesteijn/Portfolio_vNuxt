<template>
  <div class="home-intro">
    <h1 class="home-intro__title">{{ $t('home.welcome') }}</h1>
    <div class="home-intro__text-container">
      <p class="home-intro__text">{{ $t('home.intro.introBackground') }}</p>
      <p class="home-intro__text">{{ $t('home.intro.introPassion') }}</p>
      <p class="home-intro__text">{{ $t('home.intro.introCurrent') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-intro {
  padding: 40px 20px;
  color: $powder-blue;
  animation: fade-in 2s forwards ease;
  opacity: 0;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  &__title {
    font-weight: 200;
    font-size: 64px;
  }

  &__text-container {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-image: linear-gradient(to bottom, #a9fbd7, #3a373f);
    }
  }

  &__text {
    font-weight: 200;
    padding-block: 10px;
    padding-left: 20px;
  }
}
</style>
