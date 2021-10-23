// Блок SVG рисунка бургер-меню
const headerBurgerMenu = document.querySelector('.header_burger__menu');
const hear = document.querySelector('.header_burger__menu svg path');

// Изменение цвета элементов header-а в зависимости от его цвета
const burgerColor = document.querySelector('.burger_color');
const logoColor = document.querySelector('.logo-color');
const logoFillText = document.querySelector('.logo_fill__text');

// Секция header-а
const header = document.querySelector('.header');

// Секция бургер-меню
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger_close');
const burgerMenuList = document.querySelector('.burger_menu__list');

// Секция сообщения об ошибке
const sectionError = document.querySelector('.section-error');

// Секция сообщения об успешной отправке заявки
const sectionRequestSuccess = document.querySelector(
	'.section-request__success'
);

// Якорные ссылки на начало основных секций лендинга
const sectionMain = document.querySelector('#section-main');
const sectionAboutCompany = document.querySelector('#section-about-company');
const sectionPortfolio = document.querySelector('#section-portfolio');
const sectionPropositions = document.querySelector('#section-propositions');
const specPropositions = document.querySelector('#spec-propositions');

// Кнопка бургер-меню "Оставить заявку"
const burgerWindowButton = document.querySelector('.burger_window__button');

// Кнопка закрытия окна сообщения об ошибке
const sectionErrorButton = document.querySelector('.section-error_button');

// Кнопка перехода к портфолио
const sectionPortfolioButton = document.querySelector(
	'.section-portfolio_button'
);

// Кнопка подтверждения отправки
const specSubmitButton = document.querySelector('.spec-submit_button');

// Кнопка успешной отправки заявки
const successButton = document.querySelector('.success_button');
const messageButtonBlock = document.querySelector('.message-button_block');

// Пункты бургер-меню
const burgerMenuItems = document.querySelectorAll('.burger_menu__item');

// Секция точечного меню
const sectionScrollMenu = document.querySelector('.section_scroll-menu');

// Кнопка "Спец предложение" первого экрана
const sectionMainButton = document.querySelector('.section-main_button');

// Логотип header-а
const headerLogoIcon = document.querySelector('.header_logo__icon');

// Точечное меню
const dotsMenuItems = document.querySelectorAll('.dots-menu_item');

// Начала всех экранов страницы (6 шт.)
const sectionTops = document.querySelectorAll('.section-top');
const scrollTop = window.pageYOffset;

// Изменение цвета точек в точечном меню в при скроллинге
let currentGetAttr = '';
window.addEventListener('scroll', () => {
	sectionTops.forEach((sectionTop) => {
		if (
			sectionTop.offsetTop - window.pageYOffset > -100 &&
			sectionTop.offsetTop - window.pageYOffset < 500
		) {
			if (currentGetAttr !== sectionTop.getAttribute('id')) {
				currentGetAttr = sectionTop.getAttribute('id');
				console.log('currentGetAttr: ', currentGetAttr);
				// --------------
				dotsMenuItems.forEach((dotsMenuItem) => {
					dotsMenuItem.classList.remove('dots-menu_item__active');
					if (
						dotsMenuItem.getAttribute('href').substring(1) === currentGetAttr
					) {
						dotsMenuItem.classList.add('dots-menu_item__active');
					}
				});
			} else {
			}
		}
	});
});

// Переход в начало страницы при обновлении страницы
window.addEventListener('load', () => {
	document.getElementById('section-main').scrollIntoView({
		behavior: 'smooth',
	});
});

// Обработка нажатия кнопки главного экрана "Спец предложение"
sectionMainButton.addEventListener('click', (event) => {
	event.preventDefault();
	const target = event.currentTarget;
	const id = target.getAttribute('href').substring(1);
	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
	});
	console.log('Reloaded');
});

// Обработка нажатия кнопки точечного меню
dotsMenuItems.forEach((dotsMenuItem) => {
	dotsMenuItem.addEventListener('click', (event) => {
		event.preventDefault();
		let id = event.currentTarget.getAttribute('href').substring(1);
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
		});
		dotsMenuItems.forEach((dotsMenuItem) => {
			dotsMenuItem.classList.remove('dots-menu_item__active');
		});
		event.currentTarget.classList.add('dots-menu_item__active');
	});
});

// Доработать функцию обработки точечного меню - индикация точками при скроллинге

// Обработка нажатия кнопки логотипа header-а
headerLogoIcon.addEventListener('click', (event) => {
	event.preventDefault();
	const target = event.currentTarget;
	const id = target.getAttribute('href').substring(1);
	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
	});
});

// Обработка нажатия кнопки главного экрана "Спец предложение"
sectionMainButton.addEventListener('click', (event) => {
	event.preventDefault();
	const target = event.currentTarget;
	const id = target.getAttribute('href').substring(1);
	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
	});
});

// Обработка кнопки "Перейти на сайт" и открытие сообщения об ошибке
sectionPortfolioButton.addEventListener('click', (event) => {
	event.preventDefault();
	// Исключаем прокрутку документа под открытым окном сообщения об ошибке
	document.body.style.overflow = 'hidden';
	// sectionError.classList.remove('hidden');
	sectionError.classList.remove('fade_left');
	sectionError.classList.add('appear_left');
});

// Закрытие окна сообщения об ошибке и переход в начало страницы
sectionErrorButton.addEventListener('click', (event) => {
	event.preventDefault();
	// sectionError.classList.add('hidden');
	document.body.style.overflow = '';
	const target = event.currentTarget;
	const id = target.getAttribute('href').substring(1);
	document.getElementById(id).scrollIntoView({});
	sectionError.classList.remove('appear_left');
	sectionError.classList.add('fade_left');
});

// Обработка нажатия кнопки отправки заявки и отображение окна успешной отправки
specSubmitButton.addEventListener('click', (event) => {
	event.preventDefault();
	document.body.style.overflow = 'hidden';
	// sectionRequestSuccess.classList.remove('hidden');
	sectionRequestSuccess.classList.remove('fade_left');
	sectionRequestSuccess.classList.add('appear_left');
});

// Обработка закрытия окна успешной отправки
messageButtonBlock.addEventListener('click', (event) => {
	event.preventDefault();
	// sectionRequestSuccess.classList.add('hidden');
	document.body.style.overflow = '';
	const id = event.currentTarget.getAttribute('data-link').substring(1);
	document.getElementById(id).scrollIntoView({});
	sectionRequestSuccess.classList.remove('appear_left');
	sectionRequestSuccess.classList.add('fade_left');
});

// Обработка нажатия на пункт бургер-меню с плавным скроллингом к выбранной секции
burgerMenuItems.forEach((burgerMenuItem) => {
	burgerMenuItem.addEventListener('click', (event) => {
		event.preventDefault();
		closeBurger();
		const target = event.target;
		const id = target.getAttribute('href').substring(1);
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

// Открываем бургер-меню
headerBurgerMenu.addEventListener('click', () => {
	// burger.classList.remove('hidden');
	burger.classList.add('appear');
	burger.classList.remove('fade');

	// Исключаем прокрутку документа под открытым модальным окном
	document.body.style.overflow = 'hidden';
});

// Скрываем бургер-меню по нажатию на крестик
burgerClose.addEventListener('click', () => {
	closeBurger();
});

// Скрываем бургер-меню по нажатию на кнопку "Отправить заявку"
// и переходим по ссылке
burgerWindowButton.addEventListener('click', (e) => {
	e.preventDefault();
	closeBurger();
	// Плавный скроллинг по ссылке #specPropositions
	specPropositions.scrollIntoView({ behavior: 'smooth' });
});

// При начальной загрузке страницы делаем прозрачным header
initialHeader();

// Функция закрытия бургер-меню
function closeBurger() {
	// burger.classList.add('hidden');
	burger.classList.add('fade');
	burger.classList.remove('appear');

	// Разрешаем прокрутку документа под открытым модальным окном
	document.body.style.overflow = '';
}

// Изменение фона header-а при скроллинге страницы
document.addEventListener('scroll', () => {
	initialHeader();
});

// Управляет прозрачностью header-а
function initialHeader() {
	if (window.pageYOffset <= 400) {
		headerBackgroundTransparent();
	} else {
		headerBackgroundDark();
	}
}

// Функция изменения фона header-а на чёрный
// и элементов header-а на белый
function headerBackgroundDark() {
	header.classList.remove('transparent');
	header.classList.add('black');
	burgerColor.style.fill = 'white';
	logoColor.style.stroke = 'white';
	logoFillText.style.fill = 'white';
}

// Функция изменения фона header-а на прозрачный
// и элементов header-а на чёрный
function headerBackgroundTransparent() {
	header.classList.remove('black');
	header.classList.add('transparent');
	burgerColor.style.fill = 'black';
	logoColor.style.stroke = 'black';
	logoFillText.style.fill = 'black';
}
