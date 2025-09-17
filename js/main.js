const toggleButton = document.querySelector('.toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseButton = mobileMenu.querySelector('.mobile-menu__close');

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

menuCloseButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

const header = document.getElementById('header');
const isHome = document.body.classList.contains('home');

const icons = [
  {
    el: document.getElementById('icon-globe'),
    black: "./assets/svg/globe-black.svg",
    white: "./assets/svg/globe.svg"
  },
  {
    el: document.getElementById('icon-chevron'),
    black: "./assets/svg/chevron-down-black.svg",
    white: "./assets/svg/chevron-down.svg"
  },
  {
    el: document.getElementById('icon-phone'),
    black: "./assets/svg/phone-black.svg",
    white: "./assets/svg/phone.svg"
  },
  {
    el: document.getElementById('icon-burger'),
    black: "./assets/svg/burger-black.svg",
    white: "./assets/svg/burger.svg"
  }
];

if (isHome) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.classList.remove('transparent');
icons.forEach(icon => icon.el.src = icon.black);
    } else {
      header.classList.add('transparent');
      header.classList.remove('scrolled');
      icons.forEach(icon => icon.el.src = icon.white);
    }
  });
}