const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})