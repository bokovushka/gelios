import SimpleBar from 'simplebar';

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

document.addEventListener('DOMContentLoaded', function () {
	const elements = document.querySelectorAll('.simplebar-overflow');
	elements.forEach(element => {
		new SimpleBar(element);
	});
});