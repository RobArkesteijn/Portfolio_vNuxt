<template>
  <svg
    id="visual"
    viewBox="0 0 900 600"
    width="900"
    height="600"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    class="blob"
  >
    <g transform="translate(-63.39855111025423 -51.3193726731422)">
      <path
        d="M467.5 -499.7C602.9 -443.5 707.7 -293.4 723.8 -137.2C740 19 667.5 181.2 573.2 318C478.8 454.8 362.7 566.2 227 609.3C91.3 652.5 -64 627.4 -168.9 551.3C-273.8 475.2 -328.3 348.1 -414 226.2C-499.7 104.2 -616.7 -12.6 -597.1 -102.1C-577.5 -191.6 -421.3 -253.8 -299.1 -312.2C-176.8 -370.7 -88.4 -425.3 38.8 -471.6C166.1 -517.9 332.1 -555.8 467.5 -499.7"
        fill="#1b3f4d"
      ></path>
    </g>
  </svg>
</template>

<script setup lang="scss"></script>

<style scoped lang="scss">
.blob {
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: -1;

  @include tablet {
    height: 500px;
    width: 500px;
  }
}
</style>
