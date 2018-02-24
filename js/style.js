$(document).ready(function () {
   $('.nav-menu').click(function () {
      $('.nav-menu-point').toggle()
   });
   $('.icon-link').click(function () {
       $('.icon-link').hide();
       $('.download-button').show();
   });

    $('header').show('slide',1000);
    $('.inspire').show('slide',{direction: 'right'},1000);
    $('.features').show('blind', 1000);





});
