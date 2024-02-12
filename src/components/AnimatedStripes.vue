<template>
  <div class="animated-stripes">
    <div
      v-for="(item, index) in listItems"
      :key="`stripe-${index}`"
      class="animated-stripes__list-container"
    >
      <NuxtLinkLocale
        v-if="Number(item) !== index"
        :to="localePath({ name: item.name })"
        class="animated-stripes__list-item"
      >
        {{ item.path }}
      </NuxtLinkLocale>
      <div class="animated-stripes__line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

defineProps({
  listItems: {
    type: Array<any>,
    default: () => ['0', '1', '2', '3'],
  },
});
</script>

<style scoped lang="scss">
.animated-stripes {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 33vh;
  width: calc(100vw - 40px);
  padding: 0 20px 40px;
  animation: slide-in 2s forwards ease;

  @keyframes slide-in {
    from {
      margin-left: -100%;
    }
  }

  @include tablet {
    margin-block: auto;
    padding: unset;
    width: 100vw;
    margin-right: 40px;

    @keyframes slide-in {
      from {
        margin-right: -100%;
      }
    }
  }

  @include desktop {
    margin-right: 80px;
    width: 50vw;
  }

  &__list-container {
    width: 66%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include tablet {
      width: 100%;
    }
  }

  &__list-item {
    font-weight: 200;
    color: $foam;
    text-shadow: 1px 1px 0 $black;
    text-decoration: none;
    font-size: 24px;
    transition:
      color 0.3s ease,
      text-shadow 0.3s ease;
    animation: fade-in 2s forwards ease;
    opacity: 0;

    @keyframes fade-in {
      to {
        opacity: 1;
      }
    }

    &:hover {
      color: $foam;
      text-shadow: 0 0 20px $piction-blue;
    }

    @include tablet {
      animation-delay: 2s;
      font-size: 28px;
    }

    @include desktop {
      line-height: 170%;
    }
  }

  &__line {
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      transparent,
      $aquamarine-blue,
      transparent
    );
  }
}
</style>
