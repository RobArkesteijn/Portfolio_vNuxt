<template>
  <div>
    <MySkills />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  title: 'home.list.skills',
});

useHead({
  meta: [
    { property: 'og:title', content: t('meta.skills.title') },
    { name: 'description', content: t('meta.skills.description') },
    { name: 'og:description', content: t('meta.skills.description') },
    { name: 'twitter:title', content: t('meta.skills.title') },
    { name: 'twitter:description', content: t('meta.skills.description') },
    { name: 'twitter:card', content: 'summary' },
  ],
});

const ogImageOptions = {
  component: 'ExampleOgImage',
  title: t('meta.skills.title'),
};

defineOgImage(ogImageOptions);
</script>
