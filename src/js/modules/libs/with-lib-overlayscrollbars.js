import {
	OverlayScrollbars,
	ScrollbarsHidingPlugin,
	SizeObserverPlugin,
	ClickScrollPlugin
} from 'overlayscrollbars';

document.addEventListener('DOMContentLoaded', function () {
	const elements = document.querySelectorAll('.simplebar-overflow');
	elements.forEach(element => {
		OverlayScrollbars(element, {});
	});
});