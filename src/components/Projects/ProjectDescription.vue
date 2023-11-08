<template>
  <Transition
    name="fade-in"
    mode="out-in"
    @before-leave="beforeLeave"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <div
      v-if="$route.query.project"
      :key="translationPath"
      class="project-description"
    >
      <NuxtImg
        :src="`${translationPath}.png`"
        :alt="`${$route.query.project} Logo`"
        class="project-description__logo"
        format="webp"
      />
      <p
        class="project-description__text"
        v-html="$t(`projects.${translationPath}`)"
      />
      <div class="project-description__links">
        <NuxtLink
          class="project-description__link"
          to="https://www.harborn.com"
          target="_blank"
          >Website</NuxtLink
        >
      </div>
    </div>
    <div v-else class="project-description project-description__empty">
      {{ $t('projects.selectProject') }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { $router } = useNuxtApp();
const prevHeight = ref();

const translationPath = computed(() => {
  const project = $router.currentRoute.value.query.project as string;
  if (project) {
    return project
      .toLowerCase()
      .split(/[^a-zA-Z0-9]+/)
      .join('');
  } else {
    return 'portfolio';
  }
});

const beforeLeave = (el: any) => {
  prevHeight.value = getComputedStyle(el).height;
};

const enter = (el: any) => {
  const { height } = getComputedStyle(el);

  el.style.height = prevHeight.value;

  setTimeout(() => {
    el.style.height = height;
  });
};

const afterEnter = (el: any) => {
  el.style.height = 'auto';
};
</script>

<style scoped lang="scss">
.project-description {
  padding-block: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: auto;

  @include tablet {
    padding-block: 80px;
  }

  &__empty {
    padding-block: unset;

    @include tablet {
      width: 100%;
    }
  }

  &__title {
    font-weight: 200;
    font-size: 24px;

    @include tablet {
      font-size: 36px;
    }
  }

  &__logo {
    height: 50px;
    width: auto;
    padding-block: 40px;

    @include tablet {
      height: 75px;
    }
  }

  &__text {
    @include tablet {
      font-size: 20px;
    }
  }

  &__links {
    padding-top: 20px;
    text-shadow: 0 0 20px $piction-blue;
    border-bottom: 1px solid $aquamarine-blue;

    @include tablet {
      font-size: 20px;
      padding-top: 40px;
    }
  }

  &__link {
    color: $foam;
    text-decoration: none;
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition:
    opacity 0.5s ease,
    height 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
