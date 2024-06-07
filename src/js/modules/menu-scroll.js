import $ from 'jquery';

let lastScrollTop = 0;

$(window).scroll(function (event) {
	let st = $(this).scrollTop();
	let headerThreshold = 15;
	let mainThreshold = 15;


	if ($(window).width() <= 1023) {
		// Perform header modifications only if window width is 768 or greater
		if (st > lastScrollTop && $(window).scrollTop() >= mainThreshold) {
			$(".header-main").addClass("header--show");
		} else {
			if ($(window).scrollTop() <= headerThreshold) {
				$(".header-main").removeClass("header--show");
			}
		}
	}
	lastScrollTop = st;
});





