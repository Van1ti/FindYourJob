const burger = document.querySelector('.header_top--burger');
const menu = document.querySelector('.mobile_menu');
const closeBtn = document.querySelector('.mobile_menu--close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Закрытие при клике вне меню
menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.remove('active');
    }
});
