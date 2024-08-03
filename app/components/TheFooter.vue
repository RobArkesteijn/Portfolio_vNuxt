<template>
  <div class="footer">
    <NuxtLink
      href="mailto:rarkesteijn@outlook.com"
      external
      class="footer__link"
      :aria-label="$t('footer.email')"
    >
      <EmailIcon class="footer__icon" />
    </NuxtLink>
    <NuxtLink
      href="https://www.linkedin.com/in/rob-arkesteijn-394550267/"
      class="footer__link"
      external
      :aria-label="$t('footer.linkedin')"
    >
      <LinkedinIcon class="footer__icon" />
    </NuxtLink>
    <NuxtLink
      href="https://github.com/RobArkesteijn"
      class="footer__link"
      external
      :aria-label="$t('footer.github')"
    >
      <GitHub class="footer__icon" />
    </NuxtLink>
    <LayeredWaves />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  position: relative;
  height: 10vh;
  width: calc(100% - 40px);
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @include tablet {
    animation-delay: 2s;
  }

  &__icon {
    font-size: 2.5em;

    &:hover {
      fill: $foam;
    }

    @include tablet {
      font-size: 3.5em;
    }
  }
}
</style>
