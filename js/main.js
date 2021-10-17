const headerBurgerMenu = document.querySelector('.header_burger__menu');
// console.log('headerBurgerMenu: ', headerBurgerMenu.childNodes.svg);
const hear = document.querySelector('.header_burger__menu svg path');

const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger_close');
const burgerMenuList = document.querySelector('.burger_menu__list');

// const docElements = document.documentElement.scrollHeight;
const header = document.querySelector('.header');

const burgerColor = document.querySelector('.burger_color');
const logoColor = document.querySelector('.logo-color');
const logoFillText = document.querySelector('.logo_fill__text');

const sectionErrorButton = document.querySelector('.section-error_button');
const sectionError = document.querySelector('.section-error');

const sectionPortfolioButton = document.querySelector(
	'.section-portfolio_button'
);

const specSubmitButton = document.querySelector('.spec-submit_button');

const sectionRequestSuccess = document.querySelector(
	'.section-request__success'
);
const successButton = document.querySelector('.success_button');

specSubmitButton.addEventListener('click', () => {
	sectionRequestSuccess.classList.remove('hidden');
	document.body.style.overflow = 'hidden';
});

successButton.addEventListener('click', () => {
	sectionRequestSuccess.classList.add('hidden');
	document.body.style.overflow = '';
});

sectionPortfolioButton.addEventListener('click', (e) => {
	// Исключаем прокрутку документа под открытым окном сообщения об ошибке
	document.body.style.overflow = 'hidden';
	sectionError.classList.remove('hidden');
});

// Закрытие окна сообщения об ошибке и переход в начало страницы через якорную ссылку
sectionErrorButton.addEventListener('click', () => {
	sectionError.classList.add('hidden');
	document.body.style.overflow = '';
});

// Изменение фона header-а при скроллинге страницы
document.addEventListener('scroll', () => {
	if (window.pageYOffset !== 0) {
		headerBackgroundDark();
	} else {
		headerBackgroundTransparent();
	}
});

// Открываем бургер-меню
headerBurgerMenu.addEventListener('click', () => {
	burger.classList.toggle('hidden');
	// Исключаем прокрутку документа под открытым модальным окном
	document.body.style.overflow = 'hidden';
});

// Скрываем бургер-меню по нажатию на крестик
burgerClose.addEventListener('click', () => {
	burger.classList.toggle('hidden');
	// Разрешаем прокрутку документа под открытым модальным окном
	document.body.style.overflow = '';
});

// Скрываем бургер-меню по нажатию на пункт меню
burgerMenuList.addEventListener('click', () => {
	burger.classList.toggle('hidden');
	// Разрешаем прокрутку документа под открытым модальным окном
	document.body.style.overflow = '';
});

// Функция изменения фона header-а на чёрный
function headerBackgroundDark() {
	header.classList.remove('transparent');
	burgerColor.style.fill = 'white';
	logoColor.style.stroke = 'white';
	logoFillText.style.fill = 'white';
}

// Функция изменения фона header-а на прозрачный
function headerBackgroundTransparent() {
	header.classList.add('transparent');
	burgerColor.style.fill = 'black';
	logoColor.style.stroke = 'black';
	logoFillText.style.fill = 'black';
}
