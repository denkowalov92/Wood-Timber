function toggleAccordion(element) {
    const item = element.closest('.accordion-item');
    item.classList.toggle('open');
}
// Функция для переключения состояния бургер-меню
function toggleNav() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}
