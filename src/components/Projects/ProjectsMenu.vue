<template>
  <div class="projects-menu">
    <h2 class="projects-menu__title">{{ $t('projects.title') }}</h2>
    <ul class="projects-menu__list">
      <li
        v-for="(project, index) in projects"
        :key="`projects-${index}`"
        class="projects-menu__item"
        :class="{
          'projects-menu__item-active': $route.query.project === project,
        }"
        @click="setProjectQuery(project)"
      >
        {{ project }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const projects = [
  'Portfolio',
  'NXTDES',
  'Innosys Delft B.V.',
  'Harborn Digital',
];

const setProjectQuery = (project: string) => {
  const currentQuery = { ...route.query };
  currentQuery.project = project;
  router.replace({ query: currentQuery });
};

onMounted(() => {
  setProjectQuery('Portfolio');
});
</script>

<style scoped lang="scss">
.projects-menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include tablet {
    align-items: flex-start;
  }

  &__title {
    font-size: 36px;
    font-weight: 200;
    padding-block: 91px 20px;

    @include tablet {
      padding-block: unset;
      font-size: 48px;
    }
  }

  &__list {
    list-style: none;
    position: relative;

    @include tablet {
      font-size: 20px;
    }

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

  &__item {
    padding-left: 16px;
    padding-block: 10px;
    cursor: pointer;
    color: $aquamarine-blue;
    transition:
      color 0.3s ease,
      text-shadow 0.3s ease;
  }

  &__item-active {
    color: $foam;
    text-shadow: 0 0 10px $piction-blue;
  }
}
</style>
