import $ from 'jquery';

initShowMenu($(".header .languages .current-lang .current-lang--inner"), $(".header .languages .current-lang .submenu"), $(".header .languages .current-lang"));
initShowMenu($(".header-main--desk .nav-link .nav-link--inner"), $(".header-main--desk .nav-link .submenu"), $(".header-main--desk .nav-link"));

function initShowMenu(links, menus, burgers) {
	links.each(function (index) {
		showMenu($(this), menus.eq(index), burgers.eq(index));
	});
}

function showMenu(link, menu, burger) {
	$(document).mouseup(function (e) {
		if (burger.is(e.target) || burger.has(e.target).length !== 0) {
			if (!burger.hasClass('active')) {
				menu.addClass('active');
				burger.addClass('active');
				link.addClass('active');
			}
			else {
				if ((link.is(e.target) || link.has(e.target).length !== 0)) {
					if (link.hasClass('active')) {
						menu.removeClass('active'); // ховаємо його
						burger.removeClass('active');
						link.removeClass('active');
					}
				}
			}
		}
		else {
			if (!menu.is(e.target) // якщо клік був не по нашому блоку
				&& menu.has(e.target).length === 0) { // і не по його дочірнім елементам
				menu.removeClass('active'); // ховаємо його
				burger.removeClass('active');
				link.removeClass('active');
			}
		}
	});
};
