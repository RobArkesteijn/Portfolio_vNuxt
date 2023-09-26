export default () => {
  const { $gsap } = useNuxtApp();

  const staggerIcons = (elClass: string) => {
    const tl = $gsap.timeline();
    tl.to(elClass, {
      duration: 1,
      scale: 1,
      ease: 'power1.inOut',
      stagger: {
        amount: 1.5,
        grid: [5, 3],
        from: 'center',
      },
    });
  };

  return {
    staggerIcons,
  };
};
