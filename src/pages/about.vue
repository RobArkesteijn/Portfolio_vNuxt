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
definePageMeta({
  title: 'home.list.aboutMe',
});

useHead({
  meta: [
    { property: 'og:title', content: 'this is og title for the projects page' },
    { name: 'description', content: '[og:description]' },
    { name: 'og:description', content: '[description]' },
    { name: 'og:image', content: 'http://localhost:3000/favicon.png' },
    { name: 'twitter:title', content: '[twitter:title]' },
    { name: 'twitter:description', content: '[twitter:description]' },
    { name: 'twitter:image', content: 'http://localhost:3000/favicon.png' },
    { name: 'twitter:card', content: 'summary' },
  ],
});
</script>
