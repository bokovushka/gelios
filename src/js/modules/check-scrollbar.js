// function checkScrollbar(element) {
// 	// Якщо контент має скролбар
// 	if (element.scrollHeight > element.clientHeight) {
// 		element.classList.add('has-scrollbar');
// 		element.classList.remove('no-scrollbar');
// 	} else {
// 		element.classList.add('no-scrollbar');
// 		element.classList.remove('has-scrollbar');
// 	}
// }

// function checkAllScrollbars() {
// 	// Отримати всі елементи з класом 'scrollable-content'
// 	var elements = document.querySelectorAll('.scrollable-content');
// 	elements.forEach(function (element) {
// 		checkScrollbar(element);
// 	});
// }

// // Виклик функції під час завантаження сторінки та при зміні розміру вікна
// window.onload = checkAllScrollbars;
// window.onresize = checkAllScrollbars;

// // Опціонально: Викликати функцію при зміні контенту
// // Використовуємо MutationObserver для відстеження змін у DOM
// const observer = new MutationObserver(checkAllScrollbars);

// document.querySelectorAll('.scrollable-content').forEach(function (element) {
// 	observer.observe(element, { childList: true, subtree: true });
// });








function checkScrollbar(element) {
	// Якщо контент має скролбар
	if (element.scrollHeight > element.clientHeight) {
		element.classList.add('has-scrollbar');
		element.classList.remove('no-scrollbar');
	} else {
		element.classList.add('no-scrollbar');
		element.classList.remove('has-scrollbar');
	}
}

function propagateNoScrollbarUpwards(element) {
	let parent = element.parentElement.closest('.scrollable-content');
	while (parent) {
		parent.classList.add('no-scrollbar');
		parent.classList.remove('has-scrollbar');
		parent = parent.parentElement.closest('.scrollable-content');
	}
}

function checkAllScrollbars() {
	// Отримати всі елементи з класом 'scrollable-content'
	var elements = document.querySelectorAll('.scrollable-content');
	elements.forEach(function (element) {
		checkScrollbar(element);
	});

	// Додатково перевіряємо всі елементи, щоб пропагувати клас no-scrollbar вгору по ланцюгу
	elements.forEach(function (element) {
		if (element.classList.contains('has-scrollbar')) {
			propagateNoScrollbarUpwards(element);
		}
	});
}

// Виклик функції під час завантаження сторінки та при зміні розміру вікна
window.onload = checkAllScrollbars;
window.onresize = checkAllScrollbars;

// Виклик функції при взаємодії користувача з сайтом (наприклад, натискання кнопок)
document.addEventListener('click', checkAllScrollbars);

// Опціонально: Викликати функцію при зміні контенту
// Використовуємо MutationObserver для відстеження змін у DOM
const observer = new MutationObserver(checkAllScrollbars);

document.querySelectorAll('.scrollable-content').forEach(function (element) {
	observer.observe(element, { childList: true, subtree: true });
});
