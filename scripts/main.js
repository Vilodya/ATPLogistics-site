const toggleButton = document.querySelector('.toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseButton = mobileMenu.querySelector('.mobile-menu__close');

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

menuCloseButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});