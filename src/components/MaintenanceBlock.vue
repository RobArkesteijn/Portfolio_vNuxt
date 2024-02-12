<template>
  <div class="maintenance">
    <p class="maintenance__title">{{ $t('maintenance.title') }}</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.maintenance {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  background: linear-gradient(
    to bottom right,
    $outer-space 0 5%,
    $blue-dianne 0 10%,
    $outer-space 0 15%,
    $blue-dianne 0 20%,
    $outer-space 0 25%,
    $blue-dianne 0 30%,
    $outer-space 0 35%,
    $blue-dianne 0 40%,
    $outer-space 0 45%,
    $blue-dianne 0 50%,
    $outer-space 0 55%,
    $blue-dianne 0 60%,
    $outer-space 0 65%,
    $blue-dianne 0 70%,
    $outer-space 0 75%,
    $blue-dianne 0 80%,
    $outer-space 0 85%,
    $blue-dianne 0 90%,
    $outer-space 0 95%,
    $blue-dianne 0 100%
  );
  margin-block: 100px 200px;

  @include tablet {
    margin-bottom: 300px;
  }

  @include desktop {
    margin-right: 80px;
    margin-block: auto;
    width: 100%;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.2;
    background: linear-gradient(
      to bottom,
      transparent,
      $black 33%,
      $black 66%,
      transparent
    );
  }

  &__title {
    z-index: 1;
    text-align: center;
    font-weight: 200;
    font-size: 32px;
    padding-inline: 20px;
    text-shadow: 1px 1px 2px $black;
  }
}
</style>
