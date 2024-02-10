<template>
  <div class="homepage">
    <HomeIntro />
    <AnimatedStripes
      :list-items="[
        { path: $t('home.list.aboutMe'), name: 'about' },
        { path: $t('home.list.skills'), name: 'skills' },
        { path: $t('home.list.projects'), name: 'projects' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  title: 'home.list.home',
});

useHead({
  meta: [
    { property: 'og:title', content: t('meta.home.title') },
    { name: 'description', content: t('meta.home.description') },
    { name: 'og:description', content: t('meta.home.description') },
    { name: 'twitter:title', content: t('meta.home.title') },
    { name: 'twitter:description', content: t('meta.home.description') },
    { name: 'twitter:card', content: 'summary' },
  ],
});

const ogImageOptions = {
  component: 'ExampleOgImage',
  title: t('meta.home.title'),
};

defineOgImage(ogImageOptions);
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
