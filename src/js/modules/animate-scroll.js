import $ from 'jquery';


$(document).on('click', 'a.anchor[href^="#"]', function (e) {
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top - 70
	}, 800);
	e.preventDefault();
});

