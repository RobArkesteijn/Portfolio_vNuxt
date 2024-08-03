import { gsap } from 'gsap'

export default () => {
  const staggerIcons = (el: string) => {
    gsap.to(el, {
      duration: 0.5,
      scale: 1,
      stagger: {
        amount: 0.5,
        grid: 'auto',
        from: 'center',
      },
    })
  }

  return {
    staggerIcons,
  }
}
