<template>
  <div class="my-skills">
    <h2 class="my-skills__title">{{ $t('skills.title') }}</h2>
    <div class="my-skills__container">
      <NuxtLink
        v-for="(icon, index) in skillsArray"
        :key="`icon-${index}`"
        :href="icon.link"
        target="_blank"
        class="my-skills__link"
      >
        <Icon :name="icon.logo" class="my-skills__icon" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { staggerIcons } = useAnimations();
const skillsArray = [
  {
    logo: 'vscode-icons:file-type-vue',
    link: 'https://vuejs.org/',
  },
  {
    logo: 'vscode-icons:file-type-scss',
    link: 'https://sass-lang.com/',
  },
  {
    logo: 'vscode-icons:file-type-typescript-official',
    link: 'https://www.typescriptlang.org/',
  },
  {
    logo: 'logos:javascript',
    link: 'https://www.javascript.com/',
  },
  {
    logo: 'logos:pinia',
    link: 'https://pinia.vuejs.org/',
  },
  {
    logo: 'vscode-icons:file-type-html',
    link: 'https://html.com/',
  },
  {
    logo: 'vscode-icons:file-type-css',
    link: 'https://en.wikipedia.org/wiki/CSS',
  },
  {
    logo: 'vscode-icons:file-type-nuxt',
    link: 'https://nuxt.com/',
  },
  {
    logo: 'logos:tailwindcss-icon',
    link: 'https://tailwindcss.com/',
  },
  {
    logo: 'logos:nodejs-icon',
    link: 'logos:nodejs-icon',
  },
  {
    logo: 'vscode-icons:file-type-firebase',
    link: 'https://firebase.google.com/',
  },
  {
    logo: 'logos:material-ui',
    link: 'https://mui.com/',
  },
  {
    logo: 'vscode-icons:file-type-reactjs',
    link: 'https://react.dev/',
  },
  {
    logo: 'logos:nextjs-icon',
    link: 'https://nextjs.org/',
  },
  {
    logo: 'devicon:jquery',
    link: 'https://jquery.com/',
  },
];

onMounted(() => {
  staggerIcons('.my-skills__icon');
});
</script>

<style scoped lang="scss">
.my-skills {
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
  min-height: calc(90vh - 108px);

  @include tablet {
    padding: 0 40px 0;
  }

  @include desktop {
    min-height: calc(90vh - 128px);
  }

  &__title {
    padding-top: 91px;
    font-size: 36px;
    text-shadow: 1px 1px 1px $black;
    font-weight: 200;
    text-align: center;
    animation: fade-in 2s forwards ease;
    opacity: 0;

    @keyframes fade-in {
      to {
        opacity: 1;
      }
    }

    @include tablet {
      padding-top: 111px;
      font-size: 48px;
    }
  }

  &__container {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    z-index: 1;
    margin-block: auto;

    @include desktop {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__icon {
    font-size: 48px;
    margin-block: 10px;
    scale: 0.1;
    padding: 10px;
    border: 1px solid transparent;
    transition:
      border 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      border: 1px solid $aquamarine-blue;
      box-shadow: 0 0 20px 0.1px $piction-blue;
    }

    @include tablet {
      font-size: 64px;
      margin-block: 20px;
      padding: 20px;
    }
  }
}
</style>
