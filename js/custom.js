$(function() {

	if ($(window).width() < 768) {
		$('.navbar-nav li a.nav-link').on('click', function(e) {
			$('.navbar-nav li a.nav-link').parent().removeClass('active');
			$('.navbar-collapse').removeClass('show');

			var href = $(this).attr('href');
			$('html , body').animate({
				scrollTop: $(href).offset().top - 56
			}, 2000, 'easeInOutExpo');

			$(this).parent().addClass('active');
			e.preventDefault();
		});
	} else {
		$('.navbar-nav li a.nav-link').on('click', function(e) {
			$('.navbar-nav li a.nav-link').parent().removeClass('active');
			var href = $(this).attr('href');

			$('html , body').animate({
				scrollTop: $(href).offset().top - $('.navbar').outerHeight()
			}, 2000, 'easeInOutExpo');

			$(this).parent().addClass('active');
			e.preventDefault();
		});
	}


	$(window).scroll(function () {    
		var winScroll = $(window).scrollTop();
		if(winScroll > ($(window).outerHeight()/2) ){
			$('.navbar.navbar-light.bg-light').addClass('active');
		}else{
			$('.navbar.navbar-light.bg-light').removeClass('active');
		}
	});

});
