//= require jquery
//= require jquery_ujs
//= require underscore
//= require turbolinks
//= require slider

// Sticky menu
var stickyMenuPosition;
var stickyMenu = function() {
  var position = $(document).scrollTop();

  if (stickyMenuPosition < position) {
    $('#sticky-nav').addClass('navfixed');
    $('.gradient').addClass('gradient-fixed');
  } else {
    $('#sticky-nav').removeClass('navfixed');
    $('.gradient').removeClass('gradient-fixed');
  }
};

$(function() {
  // init slider
  var slider = new Slider();
  slider.start();

  // init sticky menu
  if ($('#sticky-nav').length > 0) {
    stickyMenuPosition = $('#sticky-nav').offset().top;
    stickyMenu();
    $(window).scroll(stickyMenu);
  }

  // gradient height
  $('.gradient-wood').css('height', $('body').height() + 'px');
});