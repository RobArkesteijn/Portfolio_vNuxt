<template>
  <div class="bg-[#252329] w-full relative -z-20">
    <NuxtImg src="/logo.png" height="50" class="absolute top-10 right-10" />
    <TopBlob class="w-96 h-96 absolute top-0 -z-10" />
    <div class="py-10 px-36 text-[#b2e4db] flex flex-col">
      <h1 class="text-7xl">{{ title }}</h1>
      <p class="text-4xl leading-loose">{{ description }}</p>
      <NuxtImg src="/portfolio.png" height="100" class="self-end" />
    </div>
    <div
      class="aspect-[3/1] w-full bg-no-repeat bg-center bg-cover absolute bottom-0 -z-20"
      :class="`bg-[url(${LayeredWaves})]`"
    ></div>
  </div>
</template>

<script setup lang="ts">
import LayeredWaves from '@/public/layeredwaves.svg?url';

// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
});

defineProps({
  title: {
    type: String,
    default: 'Hello World',
  },
  description: {
    type: String,
    default: 'Description goes here',
  },
});
</script>
