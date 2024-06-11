import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.tour-viewer');

	if (container) {

		const viewer = new Viewer({
			container: container,
			panorama: '../img/3d-1.jpeg',
			touchmoveTwoFingers: true,
			mousewheelCtrlKey: true,
			loadingImg: '../img/loader.gif',
			lang: {
				ctrlZoom: 'Натисніть ctrl + та використайте scroll для використання zoom',
				twoFingers: 'Використайте подвійний дотик для навігації',
				loading: 'Завантаження...',
			},
			plugins: [
				[AutorotatePlugin, {
					autostartDelay: 1000,
					autorotatePitch: '5deg',
				}],
				[GalleryPlugin, {}]
			],
			navbar: [
				'autorotate',
				'zoom',
				'move',
				'gallery',
				'fullscreen',
			],
		});

		const gallery = viewer.getPlugin(GalleryPlugin);

		gallery.setItems([
			{
				id: 'panoram-img-1',
				panorama: '../img/3d-1.jpeg',
				thumbnail: '../img/3d-1.jpeg',
				name: 'Панорама 1',
			},
			{
				id: 'panoram-img-2',
				panorama: '../img/3d-2.jpeg',
				thumbnail: '../img/3d-2.jpeg',
				name: 'Панорама 2',
			},
		]);
	}
});