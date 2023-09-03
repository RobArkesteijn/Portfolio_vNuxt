export default () => {
  const { $gsap } = useNuxtApp();

  const staggerIcons = (elClass: string) => {
    const tl = $gsap.timeline();
    tl.to(elClass, 1, {
      scale: 1,
      ease: 'power1.inOut',
      stagger: {
        amount: 1.5,
        grid: 'auto',
        from: 'center',
      },
    });
  };

  return {
    staggerIcons,
  };
};
