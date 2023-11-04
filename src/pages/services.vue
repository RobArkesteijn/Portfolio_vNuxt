<template>
  <div>
    <MyServices />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'home.list.services',
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
