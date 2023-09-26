<template>
  <div class="home-intro">
    <h1 class="home-intro__title">{{ $t('home.welcome') }}</h1>
    <div class="home-intro__text-container">
      <p class="home-intro__text" v-html="$t('home.intro.introBackground')" />
      <p class="home-intro__text" v-html="$t('home.intro.introPassion')" />
      <p class="home-intro__text" v-html="$t('home.intro.introCurrent')" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-intro {
  padding: 20px;
  color: $powder-blue;
  animation: fade-in 2s forwards ease;
  opacity: 0;
  z-index: 1;
  position: relative;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @include tablet {
    margin-block: auto;
    padding: 0 0 0 80px;
    animation-delay: 2s;
  }

  @include desktop {
    padding: 0 0 0 160px;
  }

  &__title {
    font-weight: 200;
    font-size: 64px;
    text-shadow: 1px 1px 1px $black;

    @include tablet {
      font-size: 72px;
    }

    @include desktop-xl {
      font-size: 96px;
    }
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
      background-image: linear-gradient(
        to bottom,
        $aquamarine-blue,
        $baltic-sea
      );
    }
  }

  &__text {
    padding-block: 10px;
    padding-left: 20px;

    @include tablet {
      font-size: 20px;
    }

    @include desktop-xl {
      font-size: 24px;
    }
  }
}
</style>
