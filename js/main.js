const headerBurgerMenu = document.querySelector('.header_burger__menu');
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger_close');
const burgerMenuList = document.querySelector('.burger_menu__list');
console.log('burgerMenuList: ', burgerMenuList);

headerBurgerMenu.addEventListener('click', (event) => {
	burger.classList.toggle('hidden');
});

burgerClose.addEventListener('click', () => {
	burger.classList.toggle('hidden');
});

burgerMenuList.addEventListener('click', () => {
	burger.classList.toggle('hidden');
});
