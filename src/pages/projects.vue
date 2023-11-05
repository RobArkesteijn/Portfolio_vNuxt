<template>
  <div>
    <MyProjects />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  title: 'home.list.projects',
});

useHead({
  meta: [
    { property: 'og:title', content: t('meta.projects.title') },
    { name: 'description', content: t('meta.projects.description') },
    { name: 'og:description', content: t('meta.projects.description') },
    { name: 'twitter:title', content: t('meta.projects.title') },
    { name: 'twitter:description', content: t('meta.projects.description') },
    { name: 'twitter:card', content: 'summary' },
  ],
});

const ogImageOptions = {
  component: 'ExampleOgImage',
  title: t('meta.projects.title'),
};

defineOgImage(ogImageOptions);
</script>
