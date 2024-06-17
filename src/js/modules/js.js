// function adjustHeight() {
// 	if (window.innerWidth < 1024) {
// 		const mainContent = document.querySelector('.header-main--mob');
// 		mainContent.style.height = `calc(${window.innerHeight}px - 124px - env(safe-area-inset-top))`;
// 	} else {
// 		// Скидаємо висоту для екранів більше 1024px
// 		document.querySelector('.header-main--mob').style.height = 'auto';
// 	}
// }

// window.addEventListener('resize', adjustHeight);
// window.addEventListener('orientationchange', adjustHeight);

// // Викликати функцію при завантаженні сторінки
// adjustHeight();



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});