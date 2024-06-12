import $ from 'jquery';

// Функція для плавної прокрутки до елемента
function scrollToElement(element) {
	if ($(element).length > 0) {
		var headerHeight = $('header').outerHeight();
		var targetScroll = $(element).offset().top - headerHeight - 20;
		$('html, body').animate({ scrollTop: targetScroll }, 'slow');
	}
}

//? pagination
function getPageList(totalPages, page, maxLength) {
	if (maxLength < 5) throw "maxLength must be at least 5";

	function range(start, end) {
		return Array.from(Array(end - start + 1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 9 ? 1 : 2;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
	if (totalPages <= maxLength) {
		// no breaks in list
		return range(1, totalPages);
	}
	if (page <= maxLength - sideWidth - 1 - rightWidth) {
		// no break on left of page
		return range(1, maxLength - sideWidth - 1)
			.concat([0])
			.concat(range(totalPages - sideWidth + 1, totalPages));
	}
	if (page >= totalPages - sideWidth - 1 - rightWidth) {
		// no break on right of page
		return range(1, sideWidth)
			.concat([0])
			.concat(
				range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
			);
	}
	// Breaks on both sides
	return range(1, sideWidth)
		.concat([0])
		.concat(range(page - leftWidth, page + rightWidth))
		.concat([0])
		.concat(range(totalPages - sideWidth + 1, totalPages));
}

//? pagination doctors
$(function () {
	var targetElement = '#doctors';
	var numberOfItems = $("#doctors .content-item").length;
	// var limitPerPage = 12;
	var w = screen.width;
	if (w < 768) {
		var limitPerPage = 5;
	} else if (w < 1024) {
		var limitPerPage = 8;
	} else {
		var limitPerPage = 12;
	}
	var totalPages = Math.ceil(numberOfItems / limitPerPage);
	var paginationSize = 7;
	var currentPage;

	function showPage(whichPage) {
		if (whichPage < 1 || whichPage > totalPages) return false;
		currentPage = whichPage;
		$(targetElement + " .content-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
		$(targetElement + " .pagination li").slice(1, -1).remove();
		getPageList(totalPages, currentPage, paginationSize).forEach(item => {
			$("<li>").addClass("page-item " + (item ? "current-page " : "") + (item === currentPage ? "active " : ""))
				.append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "..."))
				.insertBefore(targetElement + " #next-page");
		});

		// Add or remove active class from previous and next buttons
		if (currentPage === 1) {
			$("#previous-page").addClass("active");
		} else {
			$("#previous-page").removeClass("active");
		}

		if (currentPage === totalPages) {
			$("#next-page").addClass("active");
		} else {
			$("#next-page").removeClass("active");
		}

		return true;
	}

	// Include the prev/next buttons:
	$("#doctors .pagination").append(
		$("<li>").addClass("page-item button-slider-prev").attr({ id: "previous-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-small-down">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Prev")
		),
		$("<li>").addClass("page-item button-slider-next").attr({ id: "next-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-small-down">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Next")
		)
	);
	// Show the page links
	if (totalPages > 1) {
		$("#doctors").show();
		showPage(1);
	} else {
		$("#doctors .pagination").hide();
	}

	$(document).on("click", targetElement + " .pagination li.current-page:not(.active)", function () {
		var targetPage = +$(this).text();
		showPage(targetPage);
		scrollToElement(targetElement);
	});

	$(targetElement + " #next-page").on("click", function () {
		if (currentPage < totalPages) {
			var nextPage = currentPage + 1;
			showPage(nextPage);
			scrollToElement(targetElement);
		}
	});

	$(targetElement + " #previous-page").on("click", function () {
		if (currentPage > 1) {
			var prevPage = currentPage - 1;
			showPage(prevPage);
			scrollToElement(targetElement);
		}
	});
});

//? pagination shares
$(function () {
	var targetElement = '#shares';
	var numberOfItems = $("#shares .content-item").length;
	// var limitPerPage = 12;
	var w = screen.width;
	if (w < 768) {
		var limitPerPage = 5;
	} else if (w < 1200) {
		var limitPerPage = 8;
	} else {
		var limitPerPage = 9;
	}
	var totalPages = Math.ceil(numberOfItems / limitPerPage);
	var paginationSize = 7;
	var currentPage;

	function showPage(whichPage) {
		if (whichPage < 1 || whichPage > totalPages) return false;
		currentPage = whichPage;
		$(targetElement + " .content-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
		$(targetElement + " .pagination li").slice(1, -1).remove();
		getPageList(totalPages, currentPage, paginationSize).forEach(item => {
			$("<li>").addClass("page-item " + (item ? "current-page " : "") + (item === currentPage ? "active " : ""))
				.append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "..."))
				.insertBefore(targetElement + " #next-page");
		});

		// Add or remove active class from previous and next buttons
		if (currentPage === 1) {
			$("#previous-page").addClass("active");
		} else {
			$("#previous-page").removeClass("active");
		}

		if (currentPage === totalPages) {
			$("#next-page").addClass("active");
		} else {
			$("#next-page").removeClass("active");
		}

		return true;
	}

	// Include the prev/next buttons:
	$("#shares .pagination").append(
		$("<li>").addClass("page-item button-slider-prev").attr({ id: "previous-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-small-down">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Prev")
		),
		$("<li>").addClass("page-item button-slider-next").attr({ id: "next-page" }).append(
			$(`<a><svg><use xlink:href="img/icons/icons.svg#i-arrow-small-down">`)
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Next")
		)
	);
	// Show the page links
	if (totalPages > 1) {
		$("#shares").show();
		showPage(1);
	} else {
		$("#shares .pagination").hide();
	}

	$(document).on("click", targetElement + " .pagination li.current-page:not(.active)", function () {
		var targetPage = +$(this).text();
		showPage(targetPage);
		scrollToElement(targetElement);
	});

	$(targetElement + " #next-page").on("click", function () {
		if (currentPage < totalPages) {
			var nextPage = currentPage + 1;
			showPage(nextPage);
			scrollToElement(targetElement);
		}
	});

	$(targetElement + " #previous-page").on("click", function () {
		if (currentPage > 1) {
			var prevPage = currentPage - 1;
			showPage(prevPage);
			scrollToElement(targetElement);
		}
	});
});