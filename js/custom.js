$(function () {

	if ($(window).width() < 768) {
		$('.navbar-nav li a.nav-link').on('click', function (e) {
			$('.navbar-nav li a.nav-link').removeClass('active');
			$('.navbar-collapse').removeClass('show');

			var href = $(this).attr('href');
			$('html , body').animate({
				scrollTop: $(href).offset().top - 56
			}, 2000, 'easeInOutExpo');

			$(this).addClass('active');
			e.preventDefault();
		});
	} else {
		$('.navbar-nav li a.nav-link').on('click', function (e) {
			$('.navbar-nav li a.nav-link').removeClass('active');
			var href = $(this).attr('href');

			$('html , body').animate({
				scrollTop: $(href).offset().top - $('.navbar').outerHeight()
			}, 2000, 'easeInOutExpo');

			$(this).addClass('active');
			e.preventDefault();
		});
	}

		var text = $(".text");
		var about = $('#about-us');
		console.log()


		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > ($(window).outerHeight() / 2)) {
				$('.navbar.navbar-light.bg-light').addClass('active');
			} else {
				$('.navbar.navbar-light.bg-light').removeClass('active');
			}

			if (scroll >= (about.offset().top - 10)) {
				text.removeClass("hidden");
			} else {
				text.addClass("hidden");
			}
		});
});
