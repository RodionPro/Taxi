$(document).ready(function() {

  /* QR КОДЫ */
  $(".cover").click(function () {
    $(this).children(".spoiler_indicator").toggleClass("res");
    $(this).children(".img1").toggleClass("close");
    $(this).children(".img2").toggleClass("open");
  });
  /* QR КОДЫ */

  /* ВЫБОР СТРАНЫ */
  $("#countSelect").click(function() {
    $(".countUp").toggleClass("open");
  });  
  /* ВЫБОР СТРАНЫ */  

  /* ПОП АП ВИДЕО */  
  p = $('.popup__overlay')
  $('#popup_video').click(function() {
    p.css('display', 'block');
  })
  p.click(function(event) {
    e = event || window.event
    if (e.target == this) {
      $(p).css('display', 'none')
    }
  })
  $('.popup__close').click(function() {
    p.css('display', 'none')
  })  
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


