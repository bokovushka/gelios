var PushNav = function (options) {
	this.curItem = null;
	this.curLevel = 0;
	this.transitionEnd = _getTransitionEndEventName();
	this.options = {};

	var defaults = {
		initElem: ".main-menu",
		menuTitle: "Menu"
	};

	// Check if PushNav was initialized with some options and assign them to the "defaults"
	if (options && typeof options === "object") {
		this.options = extendDefaults(defaults, options);
	} else {
		this.options = defaults;
	}

	// Add to the "defaults" ONLY if the key is already in the "defaults"
	function extendDefaults(source, extender) {
		var result = {};
		for (let option in source) {
			result[option] = source[option];
		}
		for (let option in extender) {
			if (source.hasOwnProperty(option)) {
				result[option] = extender[option];
			}
		}
		return result;
	}

	this.options.menuTitle = $(this.options.initElem).find(".nav-title").text().trim() || this.options.menuTitle;

	PushNav.prototype.getCurrentItem = function () {
		return this.curItem;
	};

	PushNav.prototype.setMenuTitle = function (title) {
		this.options.menuTitle = title;
		_updateMenuTitle(this);
		return title;
	};

	// Init is an anonymous IIFE
	(function (PushNavInstance) {
		var initElem = $(PushNavInstance.options.initElem).length ? $(PushNavInstance.options.initElem) : false;

		if (initElem) {
			PushNavInstance.options.initElem = initElem;
			_clickHandlers(PushNavInstance);
			_updateMenuTitle(PushNavInstance);
		} else {
			console.log(PushNavInstance.options.initElem + " element doesn't exist, menu not initialized.");
		}
	})(this);

	function _getTransitionEndEventName() {
		var el = document.createElement("div"),
			transitions = {
				transition: "transitionend",
				OTransition: "otransitionend", // oTransitionEnd in very old Opera
				MozTransition: "transitionend",
				WebkitTransition: "webkitTransitionEnd"
			};

		for (var i in transitions) {
			if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
				return transitions[i];
			}
		}
	}

	function _clickHandlers(menu) {
		menu.options.initElem.find(".navbar-toggler").on("click", function (e) {
			e.preventDefault();
			menu.curItem = $(this).parent();
			_updateActiveMenu(menu, 'start');
		});

		menu.options.initElem.on("click", ".has-dropdown > a", function (e) {
			e.preventDefault();
			menu.curItem = $(this).parent();
			_updateActiveMenu(menu, 'forward');
		});

		menu.options.initElem.on("click", ".nav-toggle", function () {
			_updateActiveMenu(menu, "back");
		});
	}

	function _updateActiveMenu(menu, direction) {
		_slideMenu(menu, direction);
		if (direction === "back" || direction === "start") {
			menu.curItem.removeClass("nav-dropdown-open nav-dropdown-active");
			menu.curItem = menu.curItem.parent().closest(".item");
			if (menu.curItem.length) {
				menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
			}
			_updateMenuTitle(menu);
		} else {
			menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
			_updateMenuTitle(menu);
		}
	}

	function _updateMenuTitle(menu) {
		var title = menu.options.menuTitle;
		if (menu.curLevel > 0) {
			title = menu.curItem.children("a").text().trim();
			menu.options.initElem.find(".nav-toggle").addClass("back-visible");
		} else {
			menu.options.initElem.find(".nav-toggle").removeClass("back-visible");
		}
		menu.options.initElem.find(".nav-title").text(title);
	}

	function _slideMenu(menu, direction) {
		if (direction === "back") {
			menu.curLevel = menu.curLevel > 0 ? menu.curLevel - 1 : 0;
		} else if (direction === "forward") {
			menu.curLevel += 1;
		} else {
			menu.curLevel = 0;
		}
		menu.options.initElem.children(".push-menu--lvl").css({
			transform: "translateX(-" + menu.curLevel * 100 + "%)"
		});
	}
};

$(document).ready(function () {
	$(".header-main--desk .push-menu--nav, .header-main--mob .push-menu--nav").each(function () {
		new PushNav({
			initElem: this
		});
	});
});
