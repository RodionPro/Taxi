$(document).ready(function() {

	/* HEADER */

	$(window).on('scroll', function (e) {
		var t = $(window).scrollTop();
		var $mainHead = $('.headBar__wrapper');
		var $fixedHead = $('#headBar2');
		var $nav = $('.content .nav');

		if (t > 0 && !$mainHead.hasClass('headBar__wrapper--invis')) {
			$mainHead.addClass('headBar__wrapper--invis');
			$nav.addClass('nav--invis');
			$fixedHead.removeClass('headBar2--invis');
			$(window).scrollTop(5);
		}
		else if (t == 0) {
			$mainHead.removeClass('headBar__wrapper--invis');
			$nav.removeClass('nav--invis');
			$fixedHead.addClass('headBar2--invis');
		}
	});
});