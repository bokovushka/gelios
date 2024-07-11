import { Fancybox } from "@fancyapps/ui";

//? Загальні налаштування для Fancybox
const fancyboxSettings = {
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
		return `${slide.index + 1} / ${fancybox.carousel?.slides.length} <br /> ${caption}`;
	},
};

Fancybox.bind('[data-fancybox="clinic--gallery"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="stay-conditions--gallery"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="stay-conditions--gallery-mob"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="hospital--gallery"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="hospital--gallery-mob"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="certificates--gallery"]', fancyboxSettings);

Fancybox.bind('[data-fancybox="media--gallery-1"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="media--gallery-2"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="media--gallery-3"]', fancyboxSettings);

Fancybox.bind('[data-fancybox="offices-direction--gallery-1"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="offices-direction--gallery-2"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="offices-direction--gallery-3"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="offices-direction--gallery-4"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="offices-direction--gallery-5"]', fancyboxSettings);
Fancybox.bind('[data-fancybox="offices-direction--gallery-6"]', fancyboxSettings);

