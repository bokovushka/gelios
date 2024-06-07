import Swiper from 'swiper/bundle';

new Swiper(".section-top--backdrop-swiper", {
	grabCursor: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 20,
	pagination: {
		el: ".section-top--backdrop-swiper .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 15000,
		disableOnInteraction: false
	},
	speed: 1000,
	effect: 'fade',
})

new Swiper(".doctors--swiper", {
	grabCursor: true,
	slidesPerView: 4,
	loop: true,
	spaceBetween: 25,
	pagination: {
		el: ".doctors .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
})

new Swiper(".offices--swiper", {
	grabCursor: true,
	slidesPerView: 4,
	loop: true,
	spaceBetween: 25,
	pagination: {
		el: ".offices .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
})

new Swiper(".reviews--swiper", {
	grabCursor: true,
	slidesPerView: 2,
	loop: true,
	spaceBetween: 25,
	pagination: {
		el: ".reviews .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
})

new Swiper('.partners--swiper', {
	slidesPerView: 6.5,
	spaceBetween: 25,
	loop: true,
	speed: 6000,
	autoplay: {
		enabled: true,
		delay: 1,
		// disableOnInteraction: false,
	},
	centeredSlides: true,
	allowTouchMove: false,
});

new Swiper('.certificates--swiper', {
	grabCursor: true,
	slidesPerView: 4,
	loop: true,
	spaceBetween: 25,
	pagination: {
		el: ".certificates .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
});
