<template>
  <div class="about-me-carousel">
    <h1 class="about-me-carousel__title">{{ $t('aboutMe.title') }}</h1>
    <Carousel :mouse-drag="true">
      <slide v-for="(slide, index) in slides" :key="`slide-${index}`">
        <p class="about-me-carousel__paragraph" v-html="slide" />
      </slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.about-me-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fade-in 2s forwards ease;
  opacity: 0;
  z-index: 1;
  position: relative;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  &__title {
    padding-top: 91.5px;
    font-size: 36px;
    font-weight: 200;
    text-shadow: 1px 1px 1px $black;

    @include tablet {
      padding-top: 80px;
      font-size: 48px;
    }
  }

  &__paragraph {
    text-align: left;

    @include tablet {
      font-size: 20px;
      height: calc(90vh - 108px - 235px);
      padding-block: 20px;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    @include desktop {
      height: calc(90vh - 128px - 235px);
    }
  }
}

.carousel {
  width: 100%;
  padding-block: 20px 40px;

  @include tablet {
    padding-block: unset;
  }

  &__slide {
    padding: 0 20px 20px;
    opacity: 0;
    align-items: flex-start;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    @include tablet {
      padding: 0 80px;
    }

    @include desktop {
      padding-inline: 240px;
    }

    @include desktop-xl {
      padding-inline: 320px;
    }

    &--sliding {
      transition: opacity 0.5s ease;
    }

    &--active {
      opacity: 1;
    }
  }

  &__pagination {
    padding-block: 10px;

    @include tablet {
      padding-block: 20px 40px;
    }

    &:deep(.carousel__pagination-button) {
      padding-inline: 8px;

      &::after {
        background-color: rgba($aquamarine-blue, 0.2);
      }
    }

    &:deep(.carousel__pagination-button--active) {
      &::after {
        background-color: $aquamarine-blue;
        box-shadow: 0 0 10px 0.1px $piction-blue;
      }
    }
  }
}
</style>
