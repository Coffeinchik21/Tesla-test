var controller = new ScrollMagic.Controller()

var scenesData = [
	{ triggerElement: '.reveal' },
	{ triggerElement: '.reveal2' },
	{ triggerElement: '.reveal3' },
	{ triggerElement: '.reveal4' },
]

function createScene(data) {
	new ScrollMagic.Scene({
		triggerElement: data.triggerElement,
		triggerHook: 0.9,
		duration: 0,
		offset: 50,
	})
		.setClassToggle(data.triggerElement, 'visible')
		.addTo(controller)
}

scenesData.forEach(createScene)
