import $ from 'jquery';

//? mobile menu lock body
$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.navbar-toggler');
	let bgBody = document.querySelector('.popup-bg-body');
	let isMenuEnabled = true;

	menuBtn.addEventListener('click', function (event) {
		if (!isMenuEnabled) {
			event.preventDefault();
		} else {
			body_lock.classList.add('lock');
			bgBody.classList.add('open')
			isMenuEnabled = false;
			setTimeout(function () {
				isMenuEnabled = true;
			}, 1000);
		}
	});

	setInterval(function () {
		if ($(bgBody).hasClass('collapsed')) {
			body_lock.classList.remove('lock');
			bgBody.classList.remove('open')
		}
	}, 100);
});

//?  закриття меню поза областю
$(document).mouseup(function (e) {
	if (!$(".header").is(e.target) // если клик был не по нашему блоку
		&& $(".header").has(e.target).length === 0) { // и не по его дочерним элементам
		$('.popup-bg-body').removeClass("open");
		$('body').removeClass("lock");
	}
});

//? закриття popup-bg-body і мобільного меню при поворотах наприклад на планшетці
// setInterval(function () {
// 	if (window.innerWidth >= 1024) {
// 		if ($(".navbar-collapse").hasClass("show")) {
// 			$('.navbar-toggler').click()
// 		}
// 	}
// }, 1000);

