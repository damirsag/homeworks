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
		$('html, body').animate({scrollTop:0}, '300');
	});

	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	var nextBtn = $('.swiper-button-next');
	var prevBtn = $('.swiper-button-prev');
	var bullets = $('.swiper-pagination');

	nextBtn.css('left', prevBtn.width() + 10 + bullets.width() + 10)
	bullets.css('left', + prevBtn.width() + 10)
});