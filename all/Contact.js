document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const nav = document.querySelector("header nav");

    hamburgerMenu.addEventListener("click", () => {
        nav.classList.toggle("active"); // Переключить класс 'active' для отображения/скрытия меню
    });
});
