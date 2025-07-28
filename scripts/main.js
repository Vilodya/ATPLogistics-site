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

const toggleButton = document.querySelector('.toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseButton = mobileMenu.querySelector('.mobile-menu__close');

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

menuCloseButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});