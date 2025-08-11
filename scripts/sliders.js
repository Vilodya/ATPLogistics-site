const partnersSwiper = new Swiper('.partners__slider-wrapper.swiper', {
  slidesPerView: 5,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 5
    },
    992: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});

  const deliverySwiper = new Swiper('.delivery__slider-wrapper.swiper', {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    }
  });

