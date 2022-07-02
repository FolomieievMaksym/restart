"use strict";
const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	body = document.querySelector('body');

window.addEventListener('load', () => {
	body.addEventListener('click', burgerToggle)
	function burgerToggle(e) {
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
	}
})