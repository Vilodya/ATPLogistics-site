    const operatorSwiper = new Swiper('.operator__slider-wrapper.swiper', {
    slidesPerView: 6,
    spaceBetween: 32,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive
    breakpoints: {
      1400: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      700: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    }
  });