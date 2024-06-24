function checkScrollbars() {
	var contents = document.querySelectorAll('.select2-results__options');

	contents.forEach(function (content) {
		// Якщо контент має скролбар
		if (content.scrollHeight > content.clientHeight) {
			content.classList.add('has-scrollbar');
			content.classList.remove('no-scrollbar');
		} else {
			content.classList.add('no-scrollbar');
			content.classList.remove('has-scrollbar');
		}
	});
}

function observeSelect2Open() {
	const observer = new MutationObserver((mutationsList) => {
		for (let mutation of mutationsList) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				if (mutation.target.classList.contains('select2-container--open')) {
					checkScrollbars();
				}
			}
		}
	});

	const config = { attributes: true, subtree: true, childList: true };

	observer.observe(document.body, config);
}

// Виклик функції під час завантаження сторінки та при зміні розміру вікна
window.onload = function () {
	checkScrollbars();
	observeSelect2Open();
};

window.onresize = checkScrollbars;
