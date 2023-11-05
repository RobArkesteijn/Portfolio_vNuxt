<template>
  <NuxtLayout>
    <VitePwaManifest />
    <TopBlob />
    <PortfolioLogo />
    <TheBreadcrumb v-if="$route.path !== localePath('/')" />
    <NuxtPage />
    <LanguageNavigation />
    <TheFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
