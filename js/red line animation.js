var controller = new ScrollMagic.Controller()

// Отримуємо елемент нової лінії
var scrollingLine = document.querySelector('.scrolling-line')

// Сцена для анімації зміни висоти лінії
var scene = new ScrollMagic.Scene({
	triggerElement: '.steps__container', // Елемент, який буде викликати анімацію
	triggerHook: 'onLeave', // Анімація виконується при виході з видимої частини екрану
	duration: '200%', // Тривалість анімації - 200% висоти контейнера
})
	.addTo(controller)
	.on('progress', function (e) {
		var progress = e.progress
		var containerHeight =
			document.querySelector('.steps__container').offsetHeight
		var newLineHeight = progress * containerHeight + 'px' // Висота нової лінії залежно від прогресу прокрутки
		scrollingLine.style.height = newLineHeight
	})
