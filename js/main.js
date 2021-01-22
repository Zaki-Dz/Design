let animation = document.querySelector('.animation');

setInterval(function(){

	animation.style.display = 'none';

}, 5000);

let menu = document.querySelector('.menu');

let menu_btn = document.querySelector('.menu-btn');

let menu_click = false;

menu_btn.addEventListener('click', function() {

	if (menu_click == false) {

		menu.style.transform = 'translateY(0)';
		menu_click = true;

	} else {

		menu.style.transform = 'translateY(-100%)';
		menu_click = false;

	}

});
