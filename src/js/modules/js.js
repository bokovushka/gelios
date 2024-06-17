function adjustHeight() {
	if (window.innerWidth < 1024) {
		const mainContent = document.querySelector('.header-main--mob');
		mainContent.style.height = `calc(${window.innerHeight}px - 124px - env(safe-area-inset-top))`;
	} else {
		// Скидаємо висоту для екранів більше 1024px
		document.querySelector('.header-main--mob').style.height = 'auto';
	}
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('orientationchange', adjustHeight);

// Викликати функцію при завантаженні сторінки
adjustHeight();