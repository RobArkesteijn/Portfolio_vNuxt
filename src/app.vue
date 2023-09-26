<template>
  <NuxtLayout>
    <TopBlob />
    <PortfolioLogo />
    <ReturnToPrevious v-if="$route.path !== localePath('/')" />
    <NuxtPage />
    <LanguageNavigation />
    <TheFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
