$(document).ready(function() {
  //Accordion functionality
  $('#accordion h4').click(function(){
    var showArticle = $(this).next('article'), 
    hideArticle = $('#accordion article');
    if (! $(this).hasClass('open')) {
      $(this).addClass('open');
      hideArticle.hide();
      showArticle.slideDown('slow');
   } else {
      $(this).removeClass('open');
      showArticle.slideUp();
   }
  });
 //Scrollto functionality for navigation
 $('a#home').bind('click', function(){
   $.scrollTo('#about',{'duration':'slow'});
   return false;
 })
 $('a#work').bind('click', function(){
   $.scrollTo('#portfolio',{'duration':'slow'});
   return false;
 })
 $('a#skills').bind('click', function(){
   $.scrollTo('#services',{'duration':'slow'});
   return false;
 })
 $('a#email').bind('click', function(){
   $.scrollTo('#contact',{'duration':'slow'});
   return false;
 })
 //Activate Carousel
 $('#carousel_wrap').carousel({ dispItems: 4 });
 $('#carousel img').click(function(){
    var showArticle = $(this).next('article'), 
    hideArticle = $('#carousel article');
    if (! $(this).hasClass('active')) {
      $(this).addClass('active');
      hideArticle.hide();
      showArticle.slideDown('slow');
   } else {
      $(this).removeClass('active');
      showArticle.slideUp();
   }
  });
});
