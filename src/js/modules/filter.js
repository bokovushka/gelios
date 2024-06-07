import $ from 'jquery';

//? mobile menu lock body
let bodyFilterLock = document.querySelector('body');
let btnFilter = document.querySelector('.btn-filter');
let bgBodyFilter = document.querySelector('.popup-bg-body-filter');
let isMenuFilterEnabled = true;

if (btnFilter) {
	btnFilter.addEventListener('click', function (event) {
		if (!isMenuFilterEnabled) {
			event.preventDefault();
		} else {
			bodyFilterLock.classList.add('lock-filter');
			bgBodyFilter.classList.add('open');
			isMenuFilterEnabled = false;
			setTimeout(function () {
				isMenuFilterEnabled = true;
			}, 1000);
		}
	});
}

setInterval(function () {
	if (bgBodyFilter && $(bgBodyFilter).hasClass('collapsed')) {
		bodyFilterLock.classList.remove('lock-filter');
		bgBodyFilter.classList.remove('open');
	}
}, 100);
