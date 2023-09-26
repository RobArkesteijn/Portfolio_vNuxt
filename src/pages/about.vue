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
  meta: [{ property: 'og:title', content: 'this is og title for about page' }],
});
</script>
