// Объявление переменных
const cards = document.querySelectorAll('.card');

const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');

const detailsButton = document.querySelectorAll('.operator-benefits__btn');
const closeButton = document.querySelector('.modal__close');

// Функции
document.querySelectorAll('.operator-benefits__btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card'); // Получаем карточку-родителя
    const title = card.getAttribute('data-title');
    const text = card.getAttribute('data-text');

    modalTitle.textContent = title;
    modalText.textContent = text;
    
    modal.classList.add('modal_is-opened');
  });
});

// Закрытие модалки
closeButton.addEventListener('click', () => {
  modal.classList.remove('modal_is-opened');
});