import $ from 'jquery';
import "../../../../node_modules/select2/dist/js/select2.js";

//? select
$('.select-choose-specialist').select2({
	minimumResultsForSearch: -1,
	dropdownParent: $('.main')
	// placeholder: 'Оберіть фахівця',
});

$('.select-choose-clinic').select2({
	minimumResultsForSearch: -1,
	dropdownParent: $('.main')
	// placeholder: 'Оберіть клініку',
});

$('.select-choose-specialist--popup').select2({
	minimumResultsForSearch: -1,
	dropdownCssClass: 'select-up-index',
	dropdownParent: $('.main')
	// placeholder: 'Оберіть фахівця',
});

$('.select-choose-clinic--popup').select2({
	minimumResultsForSearch: -1,
	dropdownCssClass: 'select-up-index',
	dropdownParent: $('.main')
});

$('.select-doctors-category').select2({
	minimumResultsForSearch: -1,
	dropdownParent: $('.doctors')
});

$('.select-news-category').select2({
	minimumResultsForSearch: -1,
	placeholder: 'Категорії статей',
	dropdownCssClass: 'news-category-results',
	dropdownParent: $('.news-head')
});

