$(document).ready(function() {

	/* HEADER */

	$(window).on('scroll', function(e) {
		var t = $(window).scrollTop();
		var $mainHead = $('.headBar__wrapper');
		var $fixedHead = $('#headBar2');
		var $nav = $('.content .nav');

		if(t>0 && !$mainHead.hasClass('headBar__wrapper--invis')) {
			$mainHead.addClass('headBar__wrapper--invis');
			$nav.addClass('nav--invis');
			$fixedHead.removeClass('headBar2--invis');
			$(window).scrollTop(5);
		}
		else if(t==0) {
			$mainHead.removeClass('headBar__wrapper--invis');
			$nav.removeClass('nav--invis');
			$fixedHead.addClass('headBar2--invis');
		}
	});


	/* HEADER END */

  /* QR КОДЫ */
	$(".cover .spoiler_indicator").click(function () {
		var $el = $(this).closest('.cover');
		$el.children(".spoiler_indicator").toggleClass("res");
		$el.children(".img1").toggleClass("close");
		$el.children(".img2").toggleClass("open");
	});
  /* QR КОДЫ */

  /* ВЫБОР СТРАНЫ */
  $("#countSelect").click(function() {
    $(".countUp").toggleClass("open");
  });  
  /* ВЫБОР СТРАНЫ */  

  /* ПОП АП ВИДЕО */  
  p = $('.popup__overlay');
  $('#popup_video').click(function() {
    p.css('display', 'block');
  });
  p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
      $(p).css('display', 'none')
    }
  });
  $('.popup__close').click(function() {
    p.css('display', 'none')
  });
  /* ПОП АП ВИДЕО */    


  /* МЕНЮ */ 
  $("#toggle-l").click(function() {
    $(this).toggleClass("open");
    $("#menu-1").toggleClass("opened");
    $(".menu-1-1").toggleClass("opened");
    $(".headMini .nav .im a").toggleClass("opened");
  });
  /* МЕНЮ */
});    


