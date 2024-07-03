(function () {
	var PushNavDirection = function (options) {
		var self = this;

		this.curItem = null;
		this.curLevel = 0;
		this.transitionEnd = _getTransitionEndEventName();
		this.options = {};

		var defaults = {
			initElem: ".push-menu",
		};

		if (options && typeof options === "object") {
			this.options = extendDefaults(defaults, options);
		} else {
			this.options = defaults;
		}

		function extendDefaults(source, extender) {
			var result = {};
			for (var option in source) {
				if (source.hasOwnProperty(option)) {
					result[option] = source[option];
				}
			}
			for (var option in extender) {
				if (extender.hasOwnProperty(option) && source.hasOwnProperty(option)) {
					result[option] = extender[option];
				}
			}
			return result;
		}

		PushNavDirection.prototype.getCurrentItem = function () {
			return self.curItem;
		};

		(function (PushNavDirectionInstance) {
			_clickHandlers(PushNavDirectionInstance);
		})(this);

		function _getTransitionEndEventName() {
			var el = document.createElement("div"),
				transitions = {
					transition: "transitionend",
					OTransition: "otransitionend",
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
			menu.options.initElem.find(".btn-nav-back").on("click", function (e) {
				e.preventDefault();
				_updateActiveMenu(menu, "back");
			});

			menu.options.initElem.find(".btn-nav-forward").on("click", function (e) {
				e.preventDefault();
				menu.curItem = $(this).closest(".push-menu").find(".item.has-dropdown").first();
				_updateActiveMenu(menu, 'forward');
			});

			menu.options.initElem.on("click", ".has-dropdown > a", function (e) {
				e.preventDefault();
				menu.curItem = $(this).parent();
				_updateActiveMenu(menu, 'forward');
			});
		}

		function _updateActiveMenu(menu, direction) {
			_slideMenu(menu, direction);
			if (direction === "back") {
				if (menu.curItem) {
					menu.curItem.removeClass("nav-dropdown-open nav-dropdown-active");
					menu.curItem = menu.curItem.parent().closest(".item");
					if (menu.curItem.length) {
						menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
					}
				}
			} else {
				menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
			}
		}

		function _slideMenu(menu, direction) {
			if (direction === "back") {
				menu.curLevel = menu.curLevel > 0 ? menu.curLevel - 1 : 0;
			} else if (direction === "forward") {
				menu.curLevel += 1;
			} else {
				menu.curLevel = 0;
			}

			menu.options.initElem.children(".push-menu--nav").children(".push-menu--lvl").css({
				transform: "translateX(-" + menu.curLevel * 100 + "%)"
			});

			// Add the toggle class based on menu level
			if (menu.curLevel > 0) {
				menu.options.initElem.find(".nav-toggle").addClass("back-visible");
			} else {
				menu.options.initElem.find(".nav-toggle").removeClass("back-visible");
			}
		}
	};

	$(document).ready(function () {
		$(".offices-direction .push-menu").each(function () {
			new PushNavDirection({
				initElem: $(this)
			});
		});
	});
})();














// // Wrap the entire PushNavDirection implementation in a function for encapsulation
// (function () {
// 	var PushNavDirection = function (options) {
// 		var self = this;

// 		this.curItem = null;
// 		this.curLevel = 0;
// 		this.transitionEnd = _getTransitionEndEventName();
// 		this.options = {};

// 		var defaults = {
// 			initElem: ".push-menu",
// 			menuTitle: "Menu"
// 		};

// 		// Check if PushNavDirection was initialized with some options and assign them to the "defaults"
// 		if (options && typeof options === "object") {
// 			this.options = extendDefaults(defaults, options);
// 		} else {
// 			this.options = defaults;
// 		}

// 		// Add to the "defaults" ONLY if the key is already in the "defaults"
// 		function extendDefaults(source, extender) {
// 			var result = {};
// 			for (var option in source) {
// 				if (source.hasOwnProperty(option)) {
// 					result[option] = source[option];
// 				}
// 			}
// 			for (var option in extender) {
// 				if (extender.hasOwnProperty(option) && source.hasOwnProperty(option)) {
// 					result[option] = extender[option];
// 				}
// 			}
// 			return result;
// 		}

// 		this.options.menuTitle = this.options.initElem.find(".nav-title").text().trim() || this.options.menuTitle;

// 		PushNavDirection.prototype.getCurrentItem = function () {
// 			return self.curItem;
// 		};

// 		PushNavDirection.prototype.setMenuTitle = function (title) {
// 			self.options.menuTitle = title;
// 			_updateMenuTitle(self);
// 			return title;
// 		};

// 		(function (PushNavDirectionInstance) {
// 			var initElem = PushNavDirectionInstance.options.initElem;

// 			_clickHandlers(PushNavDirectionInstance);
// 			_updateMenuTitle(PushNavDirectionInstance);

// 		})(this);

// 		function _getTransitionEndEventName() {
// 			var el = document.createElement("div"),
// 				transitions = {
// 					transition: "transitionend",
// 					OTransition: "otransitionend", // oTransitionEnd in very old Opera
// 					MozTransition: "transitionend",
// 					WebkitTransition: "webkitTransitionEnd"
// 				};

// 			for (var i in transitions) {
// 				if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
// 					return transitions[i];
// 				}
// 			}
// 		}

// 		function _clickHandlers(menu) {
// 			menu.options.initElem.find(".navbar-toggler").on("click", function (e) {
// 				e.preventDefault();
// 				menu.curItem = $(this).parent();
// 				_updateActiveMenu(menu, 'start');
// 			});

// 			menu.options.initElem.on("click", ".has-dropdown > a", function (e) {
// 				e.preventDefault();
// 				menu.curItem = $(this).parent();
// 				_updateActiveMenu(menu, 'forward');
// 			});

// 			menu.options.initElem.on("click", ".nav-toggle", function () {
// 				_updateActiveMenu(menu, "back");
// 			});
// 		}

// 		function _updateActiveMenu(menu, direction) {
// 			_slideMenu(menu, direction);
// 			if (direction === "back" || direction === "start") {
// 				menu.curItem.removeClass("nav-dropdown-open nav-dropdown-active");
// 				menu.curItem = menu.curItem.parent().closest(".item");
// 				if (menu.curItem.length) {
// 					menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
// 				}
// 				_updateMenuTitle(menu);
// 			} else {
// 				menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
// 				_updateMenuTitle(menu);
// 			}
// 		}

// 		function _updateMenuTitle(menu) {
// 			var title = menu.options.menuTitle;
// 			if (menu.curLevel > 0) {
// 				title = menu.curItem.children("a").text().trim();
// 				menu.options.initElem.find(".nav-toggle").addClass("back-visible");
// 			} else {
// 				menu.options.initElem.find(".nav-toggle").removeClass("back-visible");
// 			}
// 			menu.options.initElem.find(".nav-title").text(title);
// 		}

// 		function _slideMenu(menu, direction) {
// 			if (direction === "back") {
// 				menu.curLevel = menu.curLevel > 0 ? menu.curLevel - 1 : 0;
// 			} else if (direction === "forward") {
// 				menu.curLevel += 1;
// 			} else {
// 				menu.curLevel = 0;
// 			}

// 			// Target only the immediate child .push-menu--lvl
// 			menu.options.initElem.children(".push-menu--nav").children(".push-menu--lvl").css({
// 				transform: "translateX(-" + menu.curLevel * 100 + "%)"
// 			});
// 		}
// 	};

// 	$(document).ready(function () {
// 		$(".offices-direction .push-menu").each(function () {
// 			new PushNavDirection({
// 				initElem: $(this)
// 			});
// 		});
// 	});
// })();
