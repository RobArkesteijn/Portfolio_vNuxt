<template>
  <div class="homepage">
    <HomeIntro />
    <AnimatedStripes
      :list-items="[
        $t('home.list.aboutMe'),
        $t('home.list.skills'),
        $t('home.list.experiences'),
        $t('home.list.projects'),
      ]"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'home.list.home',
});

useHead({
  meta: [
    { property: 'og:title', content: 'this is og title for the home page' },
  ],
});
</script>

<style scoped lang="scss">
.homepage {
  overflow: hidden;

  @include tablet {
    display: flex;
    min-height: calc(90vh - 108px);
    gap: 40px;
  }

  @include desktop {
    gap: 160px;
    min-height: calc(90vh - 128px);
  }
}
</style>
