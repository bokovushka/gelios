import $ from 'jquery';
import '../../../../node_modules/readmore-js/readmore.js';

$('.spoiler').readmore({
	speed: 75,
	collapsedHeight: false,
	moreLink: '<button class="btn-read-more btn-default btn btn-block btn-outline-main-blue text-uppercase mt-5 col col-md-6 col-lg-4 mx-auto">Показати</button>',
	lessLink: '<button class="btn-read-more btn-default btn btn-block btn-outline-main-blue text-uppercase mt-5 col col-md-6 col-lg-4 mx-auto">Сховати</button>'

});
