<template>
  <div class="homepage">
    <HomeIntro />
    <AnimatedStripes
      :list-items="[
        $t('home.list.aboutMe'),
        $t('home.list.skills'),
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
    { property: 'og:title', content: 'this is og title for the projects page' },
    { name: 'description', content: '[og:description]' },
    { name: 'og:description', content: '[description]' },
    { name: 'og:image', content: '[og:image]' },
    { name: 'twitter:title', content: '[twitter:title]' },
    { name: 'twitter:description', content: '[twitter:description]' },
    { name: 'twitter:image', content: '[twitter:image]' },
    { name: 'twitter:card', content: 'summary' },
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
