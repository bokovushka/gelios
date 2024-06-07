import AirDatepicker from 'air-datepicker';
import { createPopper } from '@popperjs/core';

new AirDatepicker("#graduation-year-first", {
	container: '.datepicker',
	view: 'years',
	minView: 'years',
	dateFormat: 'yyyy',
	minDate: '1970',
	maxDate: [new Date()],
	position({ $datepicker, $target, $pointer, done }) {
		let popper = createPopper($target, $datepicker, {
			placement: 'top',
			modifiers: [
				{
					name: 'flip',
					options: {
						padding: {
							top: 64
						}
					}
				},
				{
					name: 'offset',
					options: {
						offset: [0, 20]
					}
				},
				{
					name: 'arrow',
					options: {
						element: $pointer
					}
				}
			]
		})

		/*
	  Возвращаем функцию, которая вызывается при срабатывании `hide()`,
	  она обязательно должна вызвать функцию `done()`
			для завершения процесса скрытия календаря 
	 */
		return function completeHide() {
			popper.destroy();
			done();
		}
	}
});

new AirDatepicker("#graduation-year-last", {
	container: '.datepicker',
	view: 'years',
	minView: 'years',
	dateFormat: 'yyyy',
	minDate: '1970',
	maxDate: [new Date()],
	position({ $datepicker, $target, $pointer, done }) {
		let popper = createPopper($target, $datepicker, {
			placement: 'top',
			modifiers: [
				{
					name: 'flip',
					options: {
						padding: {
							top: 64
						}
					}
				},
				{
					name: 'offset',
					options: {
						offset: [0, 20]
					}
				},
				{
					name: 'arrow',
					options: {
						element: $pointer
					}
				}
			]
		})

		/*
	  Возвращаем функцию, которая вызывается при срабатывании `hide()`,
	  она обязательно должна вызвать функцию `done()`
			для завершения процесса скрытия календаря 
	 */
		return function completeHide() {
			popper.destroy();
			done();
		}
	}
});
