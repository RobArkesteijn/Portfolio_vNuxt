<template>
  <div
    ref="cursor"
    class="cursor"
    :class="`cursor--${type}`"
  />
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { gsap } from 'gsap'

const type = ref('')
const cursor = ref(null as Element | null)

const { x: mouseX, y: mouseY } = useMouse({ type: 'client' })

const position = { x: mouseX, y: mouseY }
const velocity = { x: 0, y: 0 }

let xSetter: ((value: Ref<number>) => void) | null = null
let ySetter: ((value: Ref<number>) => void) | null = null

const setCursorType = (dataCursorValue: string) => {
  type.value = dataCursorValue
}

const onMouseMove = (e: MouseEvent): void => {
  const cursorSize = cursor.value?.clientWidth
  const x = e.clientX - cursorSize! / 2
  const y = e.clientY - cursorSize! / 2

  gsap.to(position, {
    x,
    y,
    duration: 1.25,
    ease: 'Expo.easeOut',
    onUpdate: () => {
      velocity.x = x - position.x.value
      velocity.y = y - position.y.value
    },
  })
}

const loop = () => {
  if (xSetter) xSetter(position.x)
  if (ySetter) ySetter(position.y)
}

// Add event listeners to all elements which should show hover
const initHoverElements = () => {
  const dataCursorElements = document.querySelectorAll('[data-cursor]');

  [...dataCursorElements].forEach((elem) => {
    const dataCursorValue = elem.getAttribute('data-cursor') as string
    elem.addEventListener(
      'mouseenter',
      () => setCursorType(dataCursorValue),
      false,
    )
  })

  if (dataCursorElements.length > 0) {
    window.addEventListener('mousemove', onMouseMove)
    gsap.ticker.add(loop)
  }
}

onMounted(() => {
  xSetter = gsap.quickSetter(cursor.value, 'x', 'px') as (value: Ref<number>) => void
  ySetter = gsap.quickSetter(cursor.value, 'y', 'px') as (value: Ref<number>) => void

  initHoverElements()
})
</script>

<style lang="scss" scoped>
$transition-duration: 0.16s;

.cursor {
  display: none;
  z-index: -3;
  pointer-events: none;
  position: fixed;
  inset-inline-start: 0;
  inset-block-start: 0;
  transform-origin: 50% 50%;
  will-change: opacity, box-shadow;

  @include desktop {
    display: block;
  }

  &--lighting {
    background-color: $outer-space;
    border-radius: 50%;
    opacity: 0.1;
    inline-size: 400px;
    block-size: 400px;
    box-shadow: 0 0 200px 200px $outer-space;
  }
}
</style>
