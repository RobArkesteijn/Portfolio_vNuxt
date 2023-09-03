<template>
  <div>
    <HomeIntro />
    <AnimatedStripes
      :list-items="[
        $t('home.list.aboutMe'),
        $t('home.list.skills'),
        $t('home.list.experiences'),
        $t('home.list.projects'),
      ]"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
