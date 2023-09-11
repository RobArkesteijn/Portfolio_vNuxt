<template>
  <div>
    <ReturnToPrevious />
    <MySkills />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'home.list.skills',
});

useHead({
  meta: [
    { property: 'og:title', content: 'this is og title for the skills page' },
  ],
});
</script>
