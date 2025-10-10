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