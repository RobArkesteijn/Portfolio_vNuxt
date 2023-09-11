<template>
  <div>
    <ReturnToPrevious />
    <MyProjects />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'home.list.projects',
});

useHead({
  meta: [
    { property: 'og:title', content: 'this is og title for the projects page' },
  ],
});
</script>
