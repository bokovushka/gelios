//check-up.html
// Отримуємо всі кнопки з класом 'btn-read-more--check-up'
const buttons = document.querySelectorAll('.btn-read-more--check-up');

// Додаємо обробник події кліку для кожної кнопки
buttons.forEach(button => {
	button.addEventListener('click', function () {
		const parentItem = this.closest('.check-up--item');

		// Перевіряємо, чи батьківський елемент вже має клас 'active'
		if (parentItem.classList.contains('active')) {
			// Якщо має, то прибираємо клас і змінюємо текст кнопки
			parentItem.classList.remove('active');
			this.textContent = 'Детальніше';
		} else {
			// Якщо не має, то додаємо клас і змінюємо текст кнопки

			// Видаляємо клас 'active' з усіх інших елементів
			document.querySelectorAll('.check-up--item').forEach(item => {
				item.classList.remove('active');
				item.querySelector('.btn-read-more--check-up').textContent = 'Детальніше';
			});

			parentItem.classList.add('active');
			this.textContent = 'Згорнути';
		}
	});
});


//subcategory.html
function matchHeight() {
	if (window.innerWidth >= 768) {

		var block1 = document.getElementById('doctor-features--inner-1');
		var block2 = document.getElementById('doctor-features--inner-2');

		if (block1 && block2) {
			var height2 = block2.offsetHeight;

			block1.style.height = height2 + 'px';
		}
	}
}
window.onload = matchHeight;
window.onresize = matchHeight;
