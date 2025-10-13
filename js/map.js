  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.map');

    const io = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        section.classList.add('in-view');
        io.unobserve(section);
      }
    }, {
      root: null,
      threshold: 0.35,
      rootMargin: '0px 0px -10% 0px'
    });

    io.observe(section);
  });

gsap.registerPlugin(MotionPathPlugin);

gsap.timeline({
  delay: 14,
  repeat: -1,
  repeatDelay: 2,
  defaults: { ease: "power1.inOut" }
})
.set("#truck2", { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" })
.to("#truck2", { opacity: 1, scale: 1.1, duration: 0.2 })
.to("#truck2", { scale: 1, duration: 0.2 })
.to("#truck2", {
  duration: 2,
  motionPath: {
    path: "#route-dulati-russia",
    align: "#route-dulati-russia",
    alignOrigin: [0.5, 0.5],
    autoRotate: 180 // если трак «смотрит влево», можно добавить rotation:180
  }
}, "<")
.to("#truck2", { opacity: 0, scale: 0.5, duration: 0.2 }, ">");