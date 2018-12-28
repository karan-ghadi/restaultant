$(function() {
  if ($(window).width() < 768) {
    $('a.nav-link').on('click', function(e) {
      
      $('a.nav-link').removeClass('active');
      $('.navbar-collapse').removeClass('show');

      var href = $(this).attr('href');
      $('html , body').animate({
          scrollTop: $(href).offset().top - 56
      }, 2000, 'easeInOutExpo');

      $(this).addClass('active');
      e.preventDefault();
    });
  } else {
    $('a.nav-link').on('click', function(e) {
      $('a.nav-link').removeClass('active');
      var href = $(this).attr('href');

      $('html , body').animate({
          scrollTop: $(href).offset().top - $('.navbar').outerHeight()
      }, 2000, 'easeInOutExpo');

      $(this).addClass('active');
      e.preventDefault();
    });
  }
  $('.scrollTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });
  var text = $('.text');
  var about = $('#about-us');
  setInterval(function() {
    text.toggleClass('hidden');
  }, 3000);

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > $(window).outerHeight() / 2) {
      $('.navbar.navbar-light.bg-light').addClass('active');
    } else {
      $('.navbar.navbar-light.bg-light').removeClass('active');
    }

    // if (scroll >= about.offset().top - 10) {
    //   text.removeClass('hidden');
    // } else {
    //   text.addClass('hidden');
    // }
  });
});
