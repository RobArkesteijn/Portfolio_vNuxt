<template>
  <Transition name="fade-in" mode="out-in">
    <div
      v-if="$route.query.project"
      :key="translationPath"
      class="project-description"
    >
      <h3 class="project-description__title">{{ $route.query.project }}</h3>
      <NuxtImg
        :src="`/${translationPath}.png`"
        :alt="`${$route.query.project} Logo`"
        class="project-description__logo"
      />
      <p
        class="project-description__text"
        v-html="$t(`projects.${translationPath}`)"
      />
      <div class="project-description__links">
        <NuxtLink class="project-description__link">Website</NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { $router } = useNuxtApp();
const translationPath = computed(() => {
  const project = $router.currentRoute.value.query.project as string;
  return project
    .toLowerCase()
    .split(/[^a-zA-Z0-9]+/)
    .join('');
});
</script>

<style scoped lang="scss">
.project-description {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 200;
    font-size: 24px;
  }

  &__logo {
    height: 50px;
    width: auto;
    padding-block: 40px;
  }

  &__links {
    padding-top: 20px;
    color: $foam;
    text-shadow: 0 0 20px $piction-blue;
    border-bottom: 1px solid $aquamarine-blue;
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
