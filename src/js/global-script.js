// Если на проекте jQuery
jQuery(document).ready(function($){

  var mainNav = $('.page-header'),
      contentSections = $('.section');

  $(window).on('scroll', function(){

		//on desktop - update the active link in the secondary fixed navigation
		updatemainNavigation();
	});

  function updatemainNavigation() {
		contentSections.each(function(){
			var actual = $(this),
				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
				actualAnchor = mainNav.find('a[href="#'+actual.attr('id')+'"]');
			if ( ( actual.offset().top - mainNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - mainNav.height() > $(window).scrollTop() ) ) {
				actualAnchor.addClass('active');
			}else {
				actualAnchor.removeClass('active');
			}
		});
	}

  //smooth scrolling when clicking on the secondary navigation items
	mainNav.find('ul a').on('click', function(event){
        event.preventDefault();
        var target= $(this.hash);
        $('body,html').animate({
        	'scrollTop': target.offset().top - mainNav.height() + 1
        	}, 400
        );
        //on mobile - close secondary navigation
        $('.burger').removeClass('burger--close');
        mainNav.find('.main-nav').removeClass('main-nav--open');
    });

  //on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
	$('.burger').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('burger--close');
		mainNav.find('.main-nav').toggleClass('main-nav--open');
	});

  // https://github.com/digitalBush/jquery.maskedinput
  $(".phone-mask").mask("+7(999) 999-9999");

  // https://github.com/erensuleymanoglu/parallax-background
  $('.parallax').parallaxBackground();

  //animate header end
  var fixNav = 500;
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if ( scroll >= fixNav ) {
        $('.page-header').addClass('page-header--sticky');
      }
      else {
          $('.page-header').removeClass('page-header--sticky');
      }
  });
  //animate header end
});
