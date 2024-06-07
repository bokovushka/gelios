import $ from 'jquery';
import "../../../../node_modules/select2/dist/js/select2.js";

//? select
$('.select-choose-specialist').select2({
	minimumResultsForSearch: -1,
	placeholder: 'Оберіть фахівця'
});

$('.select-choose-clinic').select2({
	minimumResultsForSearch: -1,
	placeholder: 'Оберіть клініку'
});

$('.select-doctors-category').select2({
	minimumResultsForSearch: -1,
});

