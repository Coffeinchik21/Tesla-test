var redLine = new ScrollMagic.Controller({ horizontal: false })
var tween = TweenMax.to('#target', 0.5, {
	backgroundColor: 'green',
	width: '+=400',
})
var scene = new ScrollMagic.Scene({ triggerElement: '#line', duration: 500 })
	.setTween(tween)
	.addIndicators() // add indicators (requires plugin)
	.addTo(redLine)
