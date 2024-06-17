let lastScrollTop = 0;

$(window).scroll(function (event) {
	let st = $(this).scrollTop();
	let headerThreshold = 15;
	let mainThreshold = 15;

	if ($(window).width() < 1024) {
		headerThreshold = 5;
		mainThreshold = 5;
	}

	if (st > lastScrollTop && $(window).scrollTop() >= mainThreshold) {
		$(".header").removeClass("header--show").addClass("header--hide");
		$("main").addClass("show");
	} else {
		$(".header").removeClass("header--hide");
		if ($(window).scrollTop() <= headerThreshold) {
			$(".header").removeClass("header--show");
			$("main").removeClass("show");
		} else {
			$(".header").addClass("header--show");
			$("main").addClass("show");
		}
	}
	lastScrollTop = st;
});


setInterval(function () {
	if ($(".header").hasClass("header--hide")) {
		$(".header-top .current-lang").removeClass("active");
		$(".header-top .current-lang--inner").removeClass("active");
		$(".header-top .current-lang .submenu").removeClass("active");
	}
}, 300);





