$(document).ready(function () {
	var modal = $('.modal'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close'),
			retBtn = $('.returnButton');

	modalBtn.on('click', function () {
		modal.toggleClass('modal_visible');	
	});
	closeBtn.on('click', function() {
		modal.toggleClass('modal_visible');
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			retBtn.addClass('btnShow');
		} else {
			retBtn.removeClass('btnShow');
		}
	});
	retBtn.on('click', function() {
		$('html, body').animate({scrollTop:0}, '6');
	});

});