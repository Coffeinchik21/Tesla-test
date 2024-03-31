let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('burger-menu--active');
    menuBtn.classList.toggle('burger-btn--active');
})

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 0, offset: 5}});

	new ScrollMagic.Scene()
					.setClassToggle(".header", "header--active") 
					.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene()
                    .setClassToggle(".menu__link-item", "menu__link-item--active")
					.addIndicators() 
					.addTo(controller);
    new ScrollMagic.Scene()
                    .setClassToggle(".contact-number__item", "contact-number__item--active")
					.addIndicators() 
					.addTo(controller);





