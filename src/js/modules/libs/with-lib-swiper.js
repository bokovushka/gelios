import { auto } from '@popperjs/core';
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
		1200: { loop: false },
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
		1200: { loop: false },
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

new Swiper('.stay-conditions--swiper', {
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".stay-conditions .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	breakpoints: {
		1024: {
			loop: false
		},
		768: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.7,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
});

new Swiper('.hospital--swiper', {
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".hospital .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	breakpoints: {
		1024: {
			loop: false
		},
		768: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 1.7,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
});

new Swiper('.media--swiper', {
	grabCursor: true,
	loop: true,
	slidesPerView: 4.5,
	spaceBetween: 25,
	pagination: {
		el: ".media-content .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	breakpoints: {
		1200: {
		},
		1024: {
			slidesPerView: 3.5,
		},
		768: {
			slidesPerView: 2.7,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 2.2,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		}
	},
	//для обновлення при табатах
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

new Swiper(".template-shares--swiper", {
	grabCursor: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 25,
	autoHeight: true,
	pagination: {
		el: ".template-shares--swiper .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".template-shares--swiper .swiper-buttons .button-slider-next",
		prevEl: ".template-shares--swiper .swiper-buttons .button-slider-prev",
	},
	autoplay: {
		delay: 10000,
		disableOnInteraction: false
	},
	breakpoints: {
		1024: {
		},
		768: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
		0: {
			spaceBetween: 15,
		}
	}
})

new Swiper(".offices-anchor--swiper", {
	grabCursor: true,
	slidesPerView: 4,
	loop: true,
	spaceBetween: 25,
	autoHeight: true,
	navigation: {
		nextEl: ".offices-anchor--swiper .swiper-buttons .button-slider-next",
		prevEl: ".offices-anchor--swiper.swiper-buttons .button-slider-prev",
	},
	autoplay: {
		delay: 10000,
		disableOnInteraction: false
	},
	breakpoints: {
		1400: {
		},
		1200: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 3,
		},
		768: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
		575: {
			spaceBetween: 15,
			slidesPerView: 1,
		},
		0: {
			spaceBetween: 15,
			slidesPerView: 1,
		}
	}
})

document.querySelectorAll('.offices-direction-thumbs--swiper').forEach(function (swiperThumbsEl, index) {
	var swiperMainEl = document.querySelectorAll('.offices-direction--swiper')[index];

	if (swiperThumbsEl && swiperMainEl) {
		var SwiperOfficesDirectionThumbs = new Swiper(swiperThumbsEl, {
			grabCursor: true,
			spaceBetween: 8,
			slidesPerView: 'auto'
		});

		new Swiper(swiperMainEl, {
			grabCursor: true,
			slidesPerView: 1,
			loop: true,
			breakpoints: {
				1200: {
					spaceBetween: 25,
				},
				576: {
					spaceBetween: 20,
				},
				0: {
				}
			},
			autoplay: {
				delay: 10000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: swiperMainEl.querySelector(".swiper-buttons .button-slider-next"),
				prevEl: swiperMainEl.querySelector(".swiper-buttons .button-slider-prev"),
			},
			thumbs: {
				swiper: SwiperOfficesDirectionThumbs,
			}
		});
	}
});
