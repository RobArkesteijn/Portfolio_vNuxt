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
  'Innosys Delft B.V.',
  'NXTDES',
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
    padding-block: 91px 40px;

    @include tablet {
      padding-block: unset;
      font-size: 48px;
    }
  }

  &__list {
    list-style: none;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: $aquamarine-blue;
    border: solid 1px $aquamarine-blue;
    gap: 1px;

    @include tablet {
      grid: unset;
      background-color: unset;
      border: unset;
      font-size: 20px;

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
  }

  &__item {
    cursor: pointer;
    background-color: $baltic-sea;
    width: calc(100% - 20px);
    text-align: center;
    padding: 10px;
    color: $aquamarine-blue;
    transition:
      color 0.3s ease,
      text-shadow 0.3s ease;

    @include tablet {
      background-color: unset;
      text-align: left;
      padding: 10px 0 10px 16px;
    }
  }

  &__item-active {
    color: $foam;
    text-shadow: 0 0 10px $piction-blue;
  }
}
</style>
