// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//TIMER//

document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Nov 30 2024 00:00:00');

	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');

	const normalize = (n) => n <= 9 ? `0${n}` : n

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;

		let days = normalize(Math.floor(leftUntil / 1000 / 60 / 60 / 24));
		let hours = normalize(Math.floor(leftUntil / 1000 / 60 / 60) % 24);
		let minutes = normalize(Math.floor(leftUntil / 1000 / 60) % 60);

		daysVal.innerHTML = days.toString().replace(/\d/gi, (substring) => `<div><span>${substring}</span></div>`);
		hoursVal.innerHTML = hours.toString().replace(/\d/gi, (substring) => `<div><span>${substring}</span></div>`);
		minutesVal.innerHTML = minutes.toString().replace(/\d/gi, (substring) => `<div><span>${substring}</span></div>`);
	};

	timeCount();
	setInterval(timeCount, 1000);
});