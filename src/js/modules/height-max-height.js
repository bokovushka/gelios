import $ from 'jquery';

//? height = max height
// Оголошення функції setEqualHeight
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(function () {
		$(this).css('height', 'auto'); // Спочатку встановлюємо автоматичну висоту
		var currentHeight = $(this).height();
		if (currentHeight > tallestcolumn) {
			tallestcolumn = currentHeight;
		}
	});
	columns.height(tallestcolumn);
}

window.addEventListener('resize', (e) => {
	cardResize();
});

window.addEventListener('load', function () {
	setTimeout(() => {
		cardResize();
	}, 500);
}, false);

function cardResize() {

}

$(document).ready(function () {
	setEqualHeight($(".our-fleet-preview .our-fleet-preview--item .name"));
	// setEqualHeight($(".car-content .subscription-period-tab .tab-content .tab-pane .name"));
});