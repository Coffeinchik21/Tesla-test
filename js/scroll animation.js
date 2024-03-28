function createScrollMagicControllerAndScene(
	triggerElementId,
	animateElementId,
	duration
) {
	var controller = new ScrollMagic.Controller()
	var animateElem = document.getElementById(animateElementId)

	var scene = new ScrollMagic.Scene({
		triggerElement: '#' + triggerElementId,
		duration: duration,
	})
		.on('enter', function () {
			// trigger animation by changing inline style.
			animateElem.style.transform = 'scale(1.3)'
			animateElem.style.backgroundColor = '#fc0303'
			animateElem.style.border = 'solid 4px rgba(135, 20, 20, 0.2)'
		})
		.on('leave', function () {
			// reset style
			animateElem.style.transform = 'scale(1)'
			animateElem.style.backgroundColor = '#e60002'
			animateElem.style.border = 'none'
		})
		.addTo(controller)
}

createScrollMagicControllerAndScene('trigger1', 'animate1', 700)
createScrollMagicControllerAndScene('trigger2', 'animate2', 700)
createScrollMagicControllerAndScene('trigger3', 'animate3', 400)
createScrollMagicControllerAndScene('trigger4', 'animate4', 500)
