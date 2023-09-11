<template>
  <div class="my-projects">
    <ProjectsMenu />
    <ProjectDescription />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.my-projects {
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fade-in 2s forwards ease;
  opacity: 0;

  @include tablet {
    padding: 80px 40px;
  }

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }
}
</style>
