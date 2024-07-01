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
		// Отримати посилання на обидва блоки
		var block1 = document.getElementById('doctor-features--inner-1');
		var block2 = document.getElementById('doctor-features--inner-2');

		// Отримати висоту першого блоку
		var height2 = block2.offsetHeight;

		// Встановити висоту другого блоку такою ж
		block1.style.height = height2 + 'px';
	}
}

// Викликати функцію після завантаження сторінки
window.onload = matchHeight;

// Викликати функцію при зміні розміру вікна
window.onresize = matchHeight;