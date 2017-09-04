$(document).ready(function(){
	$(".nano").nanoScroller();
	$(".matchHeight").matchHeight();

	$(".phone").inputmask("mask", {"mask": "+7 (999) 999-9999"});

	var sidebar = $(".sidebar");
	var menuHide = $(".menuHide");
	var menuMobile = $(".menuMobile__wrapper");
	var mobileMenuDrop = $(".menuMobile > li.drop > a");
	var headerSlider = $("#header-slider");
	var forItemSlider = $(".slider__forItem");

	$(".product__button_min").on("click", function(){
		var block = $(this).parent();
		var image = block.children(".product__image").attr('src');
		var name = block.children().children(".product__name").text();
		var prise = block.children().children(".product__prise").html();
		$(".modal__item__image").attr('src', image);
		$(".item__name").text(name);
		$(".item__prise").html(prise);
	});

	$('.count').each(function () {
		if ( $(this).text() === '' ) {
			return;
		}
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


	$(window).scroll(function(){
		if ( $(window).scrollTop() > 15 ) {
			$(".nav").addClass("nav__on");
		} else {
			$(".nav").removeClass("nav__on");
		}
	});

	headerSlider.owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: true,
		navText: [
			" ",
			" "
		],
		navSpeed: 500
	});

	forItemSlider.owlCarousel({
		items: 3,
		slideBy: 3,
		loop: true,
		autoplay: true,
		autoplaySpeed: 0,
		autoplayTimeout: 3500,
		touchDrag: false,
		mouseDrag: false,
		responsive: {
			0 : {
				items: 2,
				slideBy: 2
			},
			768 : {
				items: 3,
				slideBy: 3
			}
		}
	});

	// forItemSlider.on('translate.owl.carousel', function(event) {
	// 	$(this).find(".forItem").fadeOut(500);
	// });
	//
	// forItemSlider.on('translated.owl.carousel', function(event) {
	// 	$(this).find(".forItem").fadeIn(700);
	// });

	addEventListener("keyup", function(event) {
		if (event.keyCode === 27) {
			$('.button-menu').removeClass('open');
			menuHide.removeClass("menuHide_open")
		}
	});

	$('.button-menu').on("click", function(){
		if( !menuHide.hasClass("menuHide_open") ) {
			$(this).addClass('open');
			menuHide.addClass("menuHide_open")
		} else {
			$(this).removeClass('open');
			menuHide.removeClass("menuHide_open")
		}
	});

	$('.button-mobile').on("click", function(){
		if( !menuMobile.hasClass("menuMobile__wrapper_open") ) {
			$('.button-mobile').addClass('open');
			menuMobile.addClass("menuMobile__wrapper_open")
		} else {
			$('.button-mobile').removeClass('open');
			menuMobile.removeClass("menuMobile__wrapper_open")
		}
	});

	var menuDrop = $(".menu__left > li > ul");
	var x = menuDrop.width();
	var menuDropHeight = x / 2;

	$(".menu__left > li > ul > li").each(function(){
		if( $(this).width() < menuDropHeight ) {
			$(this).css("width", "50%");
		}
	});

	mobileMenuDrop.on("click", function(){
		$(this).addClass('open');
		$(this).next("div").addClass("menu__drop_open");
	});
	$(".button-mobile-menu.open").on("click", function(){
		mobileMenuDrop.removeClass("open");
		mobileMenuDrop.next("div").removeClass("menu__drop_open");
	});

	menuDrop.parent().addClass("drop");
	var parentMenuDrop = $(".menu__left > li.drop");
	var menuItem = $(".menu__left > li");

	menuItem.each(function(){
		if ( $(this).hasClass("drop-on") ) {
			$(this).children("ul").slideDown(300);
		}
	});

	$("<div class='drop__icon'></div>").insertAfter(".menu__left > li > a")
	$(".drop__icon").on("click", function(){
		if( $(this).parent().hasClass('drop-on') ) {
			$(this).parent().removeClass('drop-on');
			$(this).next().slideUp(300);
		} else {
			$(this).parent().addClass('drop-on');
			$(this).next().slideDown(300);
		}
	});

});