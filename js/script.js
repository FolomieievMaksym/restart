"use strict";
const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	body = document.querySelector('body'),
	popup = document.querySelector('.popup'),
	popupBody = document.querySelector('.popup__body'),
	formButton = document.querySelector('.first-form__button');

window.addEventListener('load', () => {



	body.addEventListener('click', toggle)
	function toggle(e) {
		// alert("Click") // Для проверки вызова функции кликом
		if (e.target.closest('.burger')) {
			burger.classList.toggle('active');
			menu.classList.toggle('active');
			body.classList.toggle('lock')
		} else if (!e.target.closest('.burger')) {
			burger.classList.remove('active');
			menu.classList.remove('active');
			body.classList.remove('lock')
		}
		if (e.target.closest('.first-form__button')) {
			e.preventDefault();
			popup.classList.add('active');
			body.classList.add('lock');
			popup.addEventListener('click', (e) => {
				if (!e.target.closest('.popup__body') || e.target.closest('.popup__close')) {
					popup.classList.remove('active');
					body.classList.remove('lock');
				}
			})
		}

	}
})