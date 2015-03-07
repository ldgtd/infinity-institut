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

  // menu toggle
  if ($('.man-woman, .woman, .man').find('li:has(.container)')) {
    $('.man-woman, .woman, .man').find('li:has(.container)').find('.more_link').append('+');
    $('.man-woman, .woman, .man').find('li').on('click', function() {
      event.preventDefault();

      var $this = $(this);

      if ($this.hasClass('active')) {
        $this.find('.container').slideUp('slow', function() {
          $this.removeClass('active');
          $this.find('.more_link').html('+');
          $('section#main').css('height', '2500px');
          $('.gradient-wood').css('height', '3167px');
        });
      } else {
        $('#prestations li.active .container').slideUp('slow');
        $('#prestations li.active .more .more_link').html('+');
        $('#prestations li.active').removeClass('active');
        $this.find('.container').slideDown('slow', function() {
          $this.addClass('active');
          $this.find('.more_link').html('-');
          var additinoalHeight = $this.height();
          var totalHeight = additinoalHeight + 2500;
          var totalHeightGradient = additinoalHeight + 3166;

          $('section#main').css('height', totalHeight + 'px');
          $('.gradient-wood').css('height', totalHeightGradient + 'px');
        });
      }
    });
  }

  // gradient height
  $('.gradient-wood').css('height', $('body').height() + 'px');
});