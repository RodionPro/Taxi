$(document).ready(function() {

	var scrolling = false;
	/* HEADER */
	$(window).on('scroll', function(e) {
		if($('.headBar__wrapper').css('display')=='none') return;
		var t = $(window).scrollTop();
		var $mainHead = $('.headBar__wrapper');
		var $fixedHead = $('#headBar2');
		var $nav = $('.content .nav');

		if(scrolling) {
		$(window).scrollTop(5);
		}

		if(t>0 && !$mainHead.hasClass('headBar__wrapper--invis')) {
			$mainHead.addClass('headBar__wrapper--invis');
			$nav.addClass('nav--invis');
			$fixedHead.removeClass('headBar2--invis');
			$(window).scrollTop(5);
			scrolling = true;
			setTimeout(function() {
				scrolling = false;
			}, 1000);
		}
		else if(t==0) {
			$mainHead.removeClass('headBar__wrapper--invis');
			$nav.removeClass('nav--invis');
			$fixedHead.addClass('headBar2--invis');
		}
	});
	/* HEADER END */
});    


