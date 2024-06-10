import { Fancybox } from "@fancyapps/ui";

//? clinic-gallery
Fancybox.bind('[data-fancybox="clinic-gallery"]', {
	Toolbar: {
		display: {
			left: [],
			right: ["close"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-right"></use></svg>`,
		},
	},
	contentClick: "iterateZoom",
	Images: {
		Panzoom: {
			maxScale: 3,
		},
	},
	Thumbs: false,
	caption: (fancybox, slide) => {
		const caption = slide.caption || "";

		return `${slide.index + 1} / ${fancybox.carousel?.slides.length
			} <br /> ${caption}`;
	},
});



