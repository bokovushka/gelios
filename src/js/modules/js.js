import $ from 'jquery';


$(document).on('click', 'a.anchor[href^="#"]', function (e) {
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top - 70
	}, 800);
	e.preventDefault();
});


// //? Підрахунок кількості блоків `.subscription-period-benefits--item`

document.addEventListener("DOMContentLoaded", function () {
	var blocks = document.querySelectorAll('.subscription-period-benefits');

	blocks.forEach(function (block) {
		var items = block.querySelectorAll('.subscription-period-benefits--item');

		if (items.length > 5) {
			for (var i = 5; i < items.length; i++) {
				items[i].classList.add('d-none');
			}
		}
	});

	var showMoreButtons = document.querySelectorAll('.subscription-period-tab .btn-more');

	showMoreButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			var parentBlock = this.previousElementSibling;
			var items = parentBlock.querySelectorAll('.subscription-period-benefits--item');

			for (var i = 5; i < items.length; i++) {
				if (items[i].classList.contains('d-none')) {
					items[i].classList.remove('d-none');
				} else {
					items[i].classList.add('d-none');
				}
			}

			if (parentBlock.querySelectorAll('.d-none').length > 0) {
				this.textContent = 'Усі фішки';
			} else {
				this.textContent = 'Сховати';
			}
		});
	});
});

// //? Підрахунок кількості блоків `.subscription-features--item`

document.addEventListener("DOMContentLoaded", function () {
	var blocks = document.querySelectorAll('.subscription-features');

	blocks.forEach(function (block) {
		var items = block.querySelectorAll('.subscription-features--item');

		if (items.length > 8) {
			for (var i = 8; i < items.length; i++) {
				items[i].classList.add('d-none');
			}
		}
	});

	var showMoreButtons = document.querySelectorAll('.subscription-features-content .btn-more');

	showMoreButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			var parentBlock = this.previousElementSibling;
			var items = parentBlock.querySelectorAll('.subscription-features--item');

			for (var i = 8; i < items.length; i++) {
				if (items[i].classList.contains('d-none')) {
					items[i].classList.remove('d-none');
				} else {
					items[i].classList.add('d-none');
				}
			}

			if (parentBlock.querySelectorAll('.d-none').length > 0) {
				this.textContent = 'Показати Більше';
			} else {
				this.textContent = 'Сховати';
			}
		});
	});
});

// ? Підрахунок кількості історій користувачів & відповідна к-ть мініатюр у fancybox
document.addEventListener("DOMContentLoaded", function () {

	// Перевірка наявності блоків з класом .scroll-gallery--item
	var galleryItems = document.querySelectorAll('.customer-stories-main .scroll-gallery--item');

	if (galleryItems.length > 0) {
		var itemsPerPage = window.innerWidth >= 1024 ? 6 : 4;
		var currentIndex = itemsPerPage;

		var items = document.querySelectorAll('.customer-stories-main .scroll-gallery--item');
		var showMoreButton = document.querySelector('.customer-stories-main .btn-show-more');

		// Функція для показу додаткових елементів при натисканні на кнопку
		function showMore() {
			var nextIndex = Math.min(currentIndex + itemsPerPage, items.length);
			for (var i = currentIndex; i < nextIndex; i++) {
				items[i].style.display = 'block';
				var link = items[i].querySelector('a');
				if (link) {
					link.setAttribute('data-fancybox', 'scroll-gallery');
				}
			}
			currentIndex = nextIndex;

			// Перевірка, чи ще є елементи, які можна показати
			if (currentIndex >= items.length) {
				showMoreButton.style.display = 'none'; // Приховати кнопку, якщо елементів не залишилося
			}
		}

		// Додати обробник подій для кнопки "Показати більше"
		var showMoreButton = document.querySelector('.btn-show-more');
		if (showMoreButton) {
			showMoreButton.addEventListener('click', showMore);
		}

		// Приховати всі елементи, крім перших `itemsPerPage`
		for (var i = itemsPerPage; i < items.length; i++) {
			items[i].style.display = 'none';
		}

		// Додати атрибут data-fancybox="scroll-gallery" для <a> елементів у видимих блоках при завантаженні сторінки
		items.forEach(function (item, index) {
			if (index < itemsPerPage) {
				var link = item.querySelector('a');
				if (link) {
					link.setAttribute('data-fancybox', 'scroll-gallery');
				}
			}
		});
	}
});


