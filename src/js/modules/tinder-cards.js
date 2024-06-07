const TinderCards = document.body.querySelector('.tinder-cards');

if (TinderCards) {
	// Get all the cards
	const cards = TinderCards.querySelectorAll('.card');

	// Set zIndexCounter to the total number of cards
	let zIndexCounter = cards.length;

	// Loop through each card and assign zIndex dynamically
	cards.forEach(card => {
		card.style.zIndex = zIndexCounter;
		zIndexCounter--;
	});

	let current = TinderCards.querySelector('.card:first-child') // Select the first card instead of the last
	let likeText = current.children[0]
	let startX = 0, startY = 0, moveX = 0, moveY = 0
	let cardsEnded = false; // Variable to track if cards are ended
	initCard(current)

	let isAnimationInProgress = false; // Додана змінна для відстеження анімації

	let lastZIndex = zIndexCounter;

	document.querySelector('.tinder .i-like').onclick = () => {
		if (!isAnimationInProgress) { // Перевіряємо, чи не триває анімація
			isAnimationInProgress = true; // Позначаємо, що розпочата анімація
			moveX = 1;
			moveY = 0;
			complete();
		}
	}
	document.querySelector('.tinder .i-dislike').onclick = () => {
		if (!isAnimationInProgress) { // Перевіряємо, чи не триває анімація
			isAnimationInProgress = true; // Позначаємо, що розпочата анімація
			moveX = -1;
			moveY = 0;
			complete();
		}
	}

	document.querySelector('.tinder .i-favorite').onclick = () => {
		if (!isAnimationInProgress) {
			isAnimationInProgress = true;
			current.classList.add('favorite'); // Додати клас "favorite" поточній картці
			moveX = 1;
			moveY = 0;
			complete();
		}
	}

	function initCard(card) {
		card.addEventListener('pointerdown', onPointerDown)
	}

	function setTransform(x, y, deg, duration) {
		current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`
		likeText.style.opacity = Math.abs((x / innerWidth * 2.1))
		likeText.className = `is-like ${x > 0 ? 'like' : 'nope'}`
		if (duration) current.style.transition = `transform ${duration}ms`
	}

	function onPointerDown({ clientX, clientY }) {
		startX = clientX;
		startY = clientY;
		lastZIndex = parseInt(current.style.zIndex); // Зберігаємо поточне значення z-index
		current.addEventListener('pointermove', onPointerMove);
		current.addEventListener('pointerup', onPointerUp);
		current.addEventListener('pointerleave', onPointerUp);
	}

	function onPointerMove({ clientX, clientY }) {
		moveX = clientX - startX
		moveY = clientY - startY
		setTransform(moveX, moveY, moveX / innerWidth * 50)
	}

	function onPointerUp() {
		current.style.zIndex = lastZIndex;

		current.removeEventListener('pointermove', onPointerMove)
		current.removeEventListener('pointerup', onPointerUp)
		current.removeEventListener('pointerleave', onPointerUp)
		if (Math.abs(moveX) > TinderCards.clientWidth / 2) {
			current.removeEventListener('pointerdown', onPointerDown)
			complete()
		} else cancel()
	}

	// Після анімації встановлюємо isAnimationInProgress назад в false
	function complete() {
		const flyX = (Math.abs(moveX) / moveX) * innerWidth * 1.3;
		const flyY = (moveY / moveX) * flyX;
		setTransform(flyX, flyY, flyX / innerWidth * 50, innerWidth);

		const prev = current;
		const next = current.nextElementSibling;
		if (next) {
			initCard(next);
			current = next;
			likeText = current.children[0];
			setTimeout(() => {
				if (prev && prev.parentNode === TinderCards) {
					TinderCards.removeChild(prev);
				}
				isAnimationInProgress = false;
			}, innerWidth);
		} else if (!cardsEnded) {
			const endCard = document.createElement('div');
			endCard.classList.add('card', 'end');
			const endText = document.createElement('div');
			endText.classList.add('card-text');
			endText.textContent = "Автомобілі за підпискою - мінімум забов'язань, максимум свободи";
			endCard.appendChild(endText);
			TinderCards.appendChild(endCard);

			// Заборонити всім кнопкам реагувати на події натискання миші
			const buttons = document.querySelectorAll('.tinder button');
			buttons.forEach(button => {
				button.style.pointerEvents = 'none';
			});

			setTimeout(() => {
				if (TinderCards.contains(prev)) {
					TinderCards.removeChild(prev);
				}
				isAnimationInProgress = false;
			}, innerWidth);

			current.removeEventListener('pointerdown', onPointerDown);
			cardsEnded = true;
		}
	}


	function cancel() {
		setTransform(0, 0, 0, 100)
		setTimeout(() => current.style.transition = '', 100)
	}

}
// else {
// 	// Якщо елемент не знайдено, виведіть повідомлення або виконайте альтернативні дії
// 	console.error("Елемент з класом .tinder-cards не знайдено на сторінці.");
// }