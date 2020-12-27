const toggleBtn = document.querySelector('.fa-bars');
const menu = document.querySelector('.nav__menu');
const icons = document.querySelector('.nav__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});