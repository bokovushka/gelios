import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
	// Перевіряємо ширину вікна
	if (window.innerWidth >= 768) {
		let horizontalSection = document.querySelector('.horizontal');

		if (horizontalSection) { // перевіряємо, чи існує елемент
			console.log(horizontalSection.scrollWidth);

			gsap.to('.horizontal', {
				x: () => horizontalSection.scrollWidth * -1,
				xPercent: 100,
				scrollTrigger: {
					// markers: true,
					scrub: true,
					trigger: '.horizontal',
					start: () => "center 50%",
					end: () => "+=" + horizontalSection.offsetWidth, // використовуємо offsetWidth без додаткового запиту до DOM
					pin: '.scroll-trigger',
					scrub: true,
					invalidateOnRefresh: true
				}
			});
		}
	}
});

document.addEventListener('click', function (event) {
	// Перевірка, чи клікнуто на елементи з класом .btn-read-more або .accordion .btn
	if (event.target.classList.contains('btn-read-more') || event.target.closest('.accordion .btn') || event.target.closest('.btn-more')) {
		ScrollTrigger.refresh();
	}
});
