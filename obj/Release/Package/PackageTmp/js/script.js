function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* cookie.JS
========================================================*/
include('js/jquery.cookie.js');


/* DEVICE.JS
========================================================*/
include('js/device.min.js');

/* Stick up menu
========================================================*/
include('js/tmstickup.js');
$(window).load(function() { 
  if ($('html').hasClass('desktop')) {
      $('#stuck_container').TMStickUp({
      })
  }
});

/* Easing library
========================================================*/
include('js/jquery.easing.1.3.js');


/* ToTop
========================================================*/
include('js/jquery.ui.totop.js');
$(function () {   
  $().UItoTop({ easingType: 'easeOutQuart' });
});



/* DEVICE.JS AND SMOOTH SCROLLIG
========================================================*/
include('js/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');
$(function () { 
  if ($('html').hasClass('desktop')) {
      $.srSmoothscroll({
        step:150,
        speed:800
      });
  }   
});

/* Copyright Year
========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
});


/* Superfish menu
========================================================*/
include('js/superfish.js');
include('js/jquery.mobilemenu.js');


/* Orientation tablet fix
========================================================*/
$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

$(window).load(function() {
    if($('.js-search').length > 0){
        var $search_mobile = $('#search').clone();
        $($search_mobile).addClass('mobile-only');

        $('nav').append($search_mobile);


        $('.js-search .fa-search').click(function(){
            if($('.js-search').hasClass('active')){
                $('.js-search').removeClass('active');
            }else{
                $('.js-search').addClass('active');
            }
        });
    }
});

$(document).ready(function(){
    if($('#camera').length > 0){
        $('#camera').camera({
            height: '31.197917%',
            minHeight: '200px',
            pagination: true,
            thumbnails: false,
            playPause: false,
            hover: false,
            loader: 'none',
            navigation: false,
            navigationHover: false,
            mobileNavHover: false,
            fx: 'simpleFade'
        })
    }

    if($('#accordion').length > 0){
        $('#accordion').accordion({
            heightStyle: "content"
        });
    }

    if($('a[data-type="lightbox"]').length > 0){
        $('a[data-type="lightbox"]').touchTouch();
    }
});
