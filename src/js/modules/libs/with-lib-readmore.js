import $ from 'jquery';
import '../../../../node_modules/readmore-js/readmore.min.js';

$(document).ready(function () {
	function updateReadmore() {
		if (window.innerWidth < 1200) {
			$('.spoiler--contacts').readmore({
				speed: 75,
				collapsedHeight: false,
				moreLink: '<button class="btn-read-more btn rounded-0 mt-8 p-0 h5 text-blue">Показати більше</button>',
				lessLink: '<button class="btn-read-more btn rounded-0 mt-8 p-0 h5 text-blue">Показати менше</button>'
			});
		} else {
			$('.spoiler--contacts').readmore('destroy').css('height', 'auto');
		}
	}

	updateReadmore();

	$(window).resize(function () {
		updateReadmore();
	});

	$('.modal').on('shown.bs.modal', function () {
		updateReadmore();
	});
});



$(document).ready(function () {
	function initializeReadmore() {
		$('.spoiler-list').readmore({
			speed: 75,
			collapsedHeight: false,
			moreLink: '<button class="btn-read-more btn rounded-0 mt-3 p-0 text-blue">Показати більше</button>',
			lessLink: '<button class="btn-read-more btn rounded-0 mt-3 p-0 text-blue">Показати менше</button>'
		});
	}

	// Initialize on document ready
	initializeReadmore();

	// Reinitialize on window resize
	$(window).resize(function () {
		initializeReadmore();
	});


});
