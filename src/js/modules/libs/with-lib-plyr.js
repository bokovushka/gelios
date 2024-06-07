import Plyr from 'plyr';

// Перевірка наявності аудіоплеєрів
const audioPlayers = document.querySelectorAll('.js-player');
let players; // Змінна players вище оголошується

if (audioPlayers.length > 0) {
	// Створення аудіоплеєрів з використанням Plyr та отримання посилань на них
	players = Plyr.setup('.js-player', {
		// Параметри конфігурації
		// clickToPlay: false
	});

	// Додаємо обробник подій для кожного аудіоплеєра
	players.forEach((player, i) => {
		player.on('play', () => {
			// При відтворенні ставимо решту плеєрів, крім поточного
			players.forEach((otherPlayer, a) => {
				if (a !== i) {
					otherPlayer.pause();
				}
			});
		});
	});
}

// Функція для зупинки всіх відео
function pauseAllVideos() {
	if (players) { // Перевірка на наявність players
		// Зупиняємо всі аудіоплеєри
		players.forEach(player => {
			player.pause();
		});
	}

	// Зупиняємо всі відеоплеєри
	document.querySelectorAll('.js-player').forEach(videoPlayer => {
		const plyrVideoPlayer = videoPlayer.plyr;
		if (plyrVideoPlayer.playing) {
			plyrVideoPlayer.pause();
			videoPlayer.querySelector('.btn-video-play-pause').classList.remove('active');
		}
	});
}