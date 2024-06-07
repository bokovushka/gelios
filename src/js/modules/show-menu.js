import $ from 'jquery';
//? languages
showMenu($(".header .languages .current-lang .current-lang--inner"), $(".header .languages .current-lang .submenu"), $(".header .languages .current-lang"));
function showMenu(link, menu, burger) {
	$(document).mouseup(function (e) {
		if (burger.is(e.target) || burger.has(e.target).length !== 0) {
			if (!burger.hasClass('active')) {
				menu.addClass('active');
				burger.addClass('active');
				link.addClass('active');
			}
			// else {
			// 	menu.removeClass('active'); // скрываем его
			// 	burger.removeClass('active');
			// }
			else {
				if ((link.is(e.target) || link.has(e.target).length !== 0)) {
					if (link.hasClass('active')) {
						menu.removeClass('active'); // скрываем его
						burger.removeClass('active');
						link.removeClass('active');
					}
				}
			}
		}
		else {
			if (!menu.is(e.target) // если клик был не по нашему блоку
				&& menu.has(e.target).length === 0) { // и не по его дочерним элементам
				menu.removeClass('active'); // скрываем его
				burger.removeClass('active');
				link.removeClass('active');
			}
		}
	});
};