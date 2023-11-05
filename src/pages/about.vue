<template>
  <div>
    <AboutmeCarousel
      :slides="[
        $t('aboutMe.carouselText.pageOne'),
        $t('aboutMe.carouselText.pageTwo'),
        $t('aboutMe.carouselText.pageThree'),
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  title: 'home.list.aboutMe',
});

useHead({
  meta: [
    { property: 'og:title', content: t('meta.about.title') },
    { name: 'description', content: t('meta.about.description') },
    { name: 'og:description', content: t('meta.about.description') },
    { name: 'twitter:title', content: t('meta.about.title') },
    { name: 'twitter:description', content: t('meta.about.description') },
    { name: 'twitter:card', content: 'summary' },
  ],
});

const ogImageOptions = {
  component: 'ExampleOgImage',
  title: t('meta.about.title'),
};

defineOgImage(ogImageOptions);
</script>
