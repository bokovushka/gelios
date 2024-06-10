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
		delay: 5000,
		disableOnInteraction: false
	},
	speed: 1000,
	effect: 'fade',
})

new Swiper(".shares--swiper", {
	grabCursor: true,
	slidesPerView: 3,
	loop: true,
	spaceBetween: 25,
	pagination: {
		el: ".shares .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	breakpoints: {
		1200: {},
		1024: {
			slidesPerView: 2.3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.6,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
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
	breakpoints: {
		1200: {},
		1024: {
			slidesPerView: 3.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.8,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
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
	breakpoints: {
		1200: {},
		1024: {
			slidesPerView: 3.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.8,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
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
	breakpoints: {
		1200: {},
		1024: {
			slidesPerView: 1.8,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.3,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
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
	breakpoints: {
		1200: {},
		1024: {
			slidesPerView: 5.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4.2,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 3.2,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1.8,
			spaceBetween: 15,
		}
	}
});

new Swiper(".news--swiper", {
	grabCursor: true,
	slidesPerView: 3,
	loop: true,
	spaceBetween: 25,
	pagination: {
		el: ".news .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	breakpoints: {
		1200: {},
		1024: {
			slidesPerView: 2.3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.6,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
})

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
	breakpoints: {
		1200: {},
		1024: {
			slidesPerView: 3.2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2.6,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.6,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
});
