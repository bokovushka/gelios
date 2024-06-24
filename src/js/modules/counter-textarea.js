// Получаем все элементы textarea и span для счётчиков символов
const textInputs = document.querySelectorAll('.form-textarea');
const textareaCounts = document.querySelectorAll('.textarea-counter .count');

// Функция для обновления счётчика символов
function updateCharCount(event) {
	const textInput = event.target;
	const charCount = textInput.parentElement.querySelector('.textarea-counter .count');
	charCount.textContent = textInput.value.length;
}

// Добавляем обработчик события input для каждого textarea
textInputs.forEach(textInput => {
	textInput.addEventListener('input', updateCharCount);
});