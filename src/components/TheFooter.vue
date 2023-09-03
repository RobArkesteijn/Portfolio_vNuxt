<template>
  <div class="footer">
    <NuxtLink
      href="mailto:rarkesteijn@outlook.com"
      target="_blank"
      class="footer__link"
    >
      <Icon name="mdi:email" class="footer__icon" />
    </NuxtLink>
    <NuxtLink
      href="https://www.linkedin.com/in/rob-arkesteijn-394550267/"
      target="_blank"
      class="footer__link"
    >
      <Icon name="mdi:linkedin" class="footer__icon" />
    </NuxtLink>
    <NuxtLink
      href="https://github.com/RobArkesteijn"
      target="_black"
      class="footer__link"
    >
      <Icon name="mdi:github" class="footer__icon" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  height: 10vh;
  width: calc(100% - 40px);
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: fade-in 2s forwards ease;
  opacity: 0;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  &__link {
    color: $powder-blue;
  }

  &__icon {
    font-size: 2.5em;
  }
}
</style>
