<template>
  <div class="return-to-previous">
    <NuxtLinkLocale :to="'/'" class="return-to-previous__home">{{
      $t('home.list.home')
    }}</NuxtLinkLocale>
    <Icon
      name="ic:baseline-keyboard-arrow-right"
      class="return-to-previous__arrow"
    />
    <div>
      <div
        v-click-away="() => (listOpenState = false)"
        class="return-to-previous__menu"
        @click="openList"
      >
        <p class="return-to-previous__slug">{{ slug }}</p>
        <Icon
          name="ic:baseline-keyboard-arrow-right"
          class="return-to-previous__arrow"
          :class="{ 'return-to-previous__arrow-transform': listOpenState }"
        />
      </div>
      <Transition name="list">
        <ul v-if="listOpenState" class="return-to-previous__list">
          <NuxtLink
            :to="slugPath(t('home.list.aboutMe'))"
            class="return-to-previous__item"
            @click="() => (listOpenState = false)"
            >{{ $t('home.list.aboutMe') }}</NuxtLink
          >
          <NuxtLink
            :to="slugPath(t('home.list.skills'))"
            class="return-to-previous__item"
            @click="() => (listOpenState = false)"
            >{{ $t('home.list.skills') }}</NuxtLink
          >
          <NuxtLink
            :to="slugPath(t('home.list.projects'))"
            class="return-to-previous__item"
            @click="() => (listOpenState = false)"
            >{{ $t('home.list.projects') }}</NuxtLink
          >
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { directive as vClickAway } from 'vue3-click-away';
const { $router } = useNuxtApp();
const { t } = useI18n();
const listOpenState = ref(false);

const slug = computed(() => {
  return t($router.currentRoute.value.meta.title as string);
});

const openList = () => {
  listOpenState.value = !listOpenState.value;
};

const slugPath = (path: string) => {
  return path.split(' ').join('-').toLocaleLowerCase();
};
</script>

<style scoped lang="scss">
.return-to-previous {
  position: absolute;
  padding: 20px;
  z-index: 99;
  animation: fade-in 2s forwards ease;
  opacity: 0;
  display: flex;
  align-items: flex-start;
  font-size: 20px;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @include tablet {
    padding: 40px;
  }

  &__home {
    color: $powder-blue;
    text-decoration: none;
  }

  &__arrow {
    font-size: 1em;
    color: $powder-blue;
    padding-inline: 10px;
    transition: rotate 0.3s ease;
    margin-top: 5.75px;
  }

  &__arrow-transform {
    rotate: 90deg;
  }

  &__menu {
    display: flex;
    cursor: pointer;
  }

  &__slug {
    color: $foam;
    text-shadow: 0 0 20px $piction-blue;
    border-bottom: 1px solid $aquamarine-blue;
    line-height: unset;
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: $outer-space;
    border: solid 1px $aquamarine-blue;
    border-radius: 5px;
    right: 20px;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 15px $aquamarine-blue;
    }
  }

  &__item {
    margin-block: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
    color: $powder-blue;
    text-decoration: none;

    &:hover {
      color: $foam;
      text-shadow: 0 0 20px $piction-blue;
      border-bottom: 1px solid $aquamarine-blue;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
