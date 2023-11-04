<template>
  <div class="services">
    <div class="services__container">
      <h1 class="services__title">{{ $t('services.title') }}</h1>
      <div class="services__grid">
        <p class="services__grid--header services__grid--el">Service</p>
        <p class="services__grid--header services__grid--el">Duration</p>
        <p class="services__grid--header services__grid--el">Price</p>

        <p class="services__grid--el">Service</p>
        <p class="services__grid--el">Duration</p>
        <p class="services__grid--el">Price</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.services {
  min-height: calc(90vh - 108px);
  padding-inline: 20px;
  position: relative;
  z-index: 1;
  display: flex;

  @include tablet {
    min-height: calc(90vh - 128px);
    padding-inline: 40px;
  }

  &__container {
    margin-inline: auto;

    @include tablet {
      margin: auto;
    }
  }

  &__title {
    font-weight: 200;
    font-size: 36px;
    padding-block: 91px 20px;
    text-align: center;

    @include tablet {
      font-size: 48px;
      padding-block: 40px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid $aquamarine-blue;
    border-radius: 5px;

    &--el {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid $aquamarine-blue;

      @include tablet {
        font-size: 20px;
      }
    }

    &--header {
      color: $aquamarine-blue;
    }
  }
}
</style>
