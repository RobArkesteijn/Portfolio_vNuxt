<template>
  <div class="animated-stripes">
    <div
      v-for="(item, index) in listItems"
      :key="`stripe-${index}`"
      class="animated-stripes__list-container"
    >
      <NuxtLink
        v-if="Number(item) !== index"
        :to="localePath(`/${listPath[index]}`)"
        class="animated-stripes__list-item"
      >
        {{ item }}
      </NuxtLink>
      <div class="animated-stripes__line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const props = defineProps({
  listItems: {
    type: Array<String>,
    default: () => ['0', '1', '2', '3'],
  },
});

const listPath = computed(() => {
  return props.listItems.map((item) => {
    return item.split(' ').join('').toLocaleLowerCase();
  });
});
</script>

<style scoped lang="scss">
.animated-stripes {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: calc(100vw - 40px);
  padding: 0 20px 40px;
  animation: slide-in 2s forwards ease;
  margin-left: 0;

  @keyframes slide-in {
    from {
      margin-left: -100%;
    }
  }

  &__list-container {
    width: 66%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__list-item {
    font-weight: 200;
    color: $powder-blue;
    text-decoration: none;
    font-size: 24px;
  }

  &__line {
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      $baltic-sea,
      $aquamarine-blue,
      $baltic-sea
    );
  }
}
</style>
