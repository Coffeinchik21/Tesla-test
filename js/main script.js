let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('burger-menu__active');
    menuBtn.classList.toggle('burger-btn__active');
})