<template>
  <div class="my-projects">
    <ProjectsMenu />
    <ProjectDescription />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.my-projects {
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fade-in 2s forwards ease;
  opacity: 0;
  z-index: 1;
  position: relative;
  min-height: calc(90vh - 108px);

  @include tablet {
    padding-inline: 80px;
    padding-block: unset;
    flex-direction: row-reverse;
    gap: 40px;
    margin-block: auto;
  }

  @include desktop {
    min-height: calc(90vh - 128px);
    padding-inline: 160px;
    gap: 80px;
  }

  @include desktop-xl {
    padding-inline: 320px;
  }

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }
}
</style>
