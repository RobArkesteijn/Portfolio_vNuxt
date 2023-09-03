<template>
  <div>
    <ReturnToPrevious />
    <AboutmeCarousel
      v-if="
        $route.path === localePath('/aboutme') ||
        $route.path === localePath('/overmij')
      "
      :slides="[
        $t('aboutMe.carouselText.pageOne'),
        $t('aboutMe.carouselText.pageTwo'),
        $t('aboutMe.carouselText.pageThree'),
      ]"
    />
    <MySkills
      v-if="
        $route.path === localePath('/skills') ||
        $route.path === localePath('/vaardigheden')
      "
    />
    <MyProjects
      v-if="
        $route.path === localePath('/projects') ||
        $route.path === localePath('/projecten')
      "
    />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped lang="scss"></style>
