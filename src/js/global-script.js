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

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // disable UI
    disableDefaultUI: true,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
};

// Get the HTML DOM element that will contain your map
// We are using a div with id="map" seen below in the <body>
var mapElement = document.getElementById('map');

// Create the Google Map using our element and options defined above
var map = new google.maps.Map(mapElement, mapOptions);

// Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
