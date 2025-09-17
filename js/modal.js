// Объявление переменных
const cards = document.querySelectorAll('.operator-benefits__grid-item');

const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');

const detailsButton = document.querySelectorAll('.operator-benefits__btn');
const closeButton = document.querySelector('.modal__close');

// Открытие модалки
document.querySelectorAll('.operator-benefits__btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.operator-benefits__grid-item'); // Получаем карточку-родителя
    const title = card.getAttribute('data-title');
    const text = card.getAttribute('data-text');

    modalTitle.textContent = title;
    modalText.textContent = text;
    
    modal.classList.add('modal_is-opened');
  });
});

// Функция закрытия
function closeModal() {
  modal.classList.remove('modal_is-opened');
}

// Закрытие по крестику
closeButton.addEventListener('click', closeModal);

// Закрытие при клике вне окна
modal.addEventListener('click', (e) => {
  if (e.target === modal) { // клик именно по фону
    closeModal();
  }
});

// Закрытие по Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});