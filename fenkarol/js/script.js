$(document).ready(function(){
	
	// match height init
	$(function() {
		$('.advantages__box').matchHeight();
		$('.info__box').matchHeight();
		$('.mechanism__box-wrapper').matchHeight();
		$('.greate__box').matchHeight();
		$('.use__ears').matchHeight();
		$('.page-header__box').matchHeight();
	});

	// banner adaptiv
	$(window).resize(function() {
		var bodyWidth = $(this).width();
		$(".info__separator").height(bodyWidth / 4.7);
		$(".banner").height(bodyWidth / 2.5);
		$(".banner-children").height(bodyWidth / 2);
		$(".banner-header__image").height(bodyWidth / 2.1);
	}).resize();

	// mobile menu
	$('#nav-icon').on('click', function(){
		if( !$(this).hasClass('open') ) {
			$(this).addClass('open');
			$('.menu').slideDown(300);
		} else {
			$(this).removeClass('open');
			$('.menu').slideUp('open');
		}
	});

});