let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('burger-menu--active');
    menuBtn.classList.toggle('burger-btn--active');
})

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 0, offset: 5}});

	new ScrollMagic.Scene()
					.setClassToggle(".header", "header--active")  
					.addTo(controller);
	new ScrollMagic.Scene()
                    .setClassToggle(".menu__link-item", "menu__link-item--active")
					.addTo(controller);
    new ScrollMagic.Scene()
                    .setClassToggle(".contact-number__item", "contact-number__item--active")
					.addTo(controller);
var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: 0, offset: 1500}});
    new ScrollMagic.Scene()
                    .setClassToggle(".video__self", "hidden")
					.addTo(controller2);
                    

