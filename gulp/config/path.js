// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		assets: `${buildFolder}/assets/`
	},
	src: {
		js: `${srcFolder}/js/*.js`,//{libs.js,main.js,jquery.js}
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/{libs.scss,main.scss}`,
		html: `${srcFolder}/*.html`, //.pug
		assets: `${srcFolder}/assets/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`, //.pug
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		assets: `${srcFolder}/assets/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}