$(document).ready(function() {
  //Accordion functionality
  $('#accordion h4').click(function(){
    var showArticle = $(this).next('article'), 
    hideArticle = $('#accordion article');
    if (! $(this).hasClass('open')) {
      $('#accordion h4').removeClass('open');
      $(this).addClass('open');
      hideArticle.hide();
      showArticle.slideDown('fast');
   } else {
      $('#accordion h4').removeClass('open');
   }
  });
  //Scrollto functionality for navigation
 $('a#home').bind('click', function(){
   $.scrollTo('#about',{'duration':'slow'});
   return false;
 })
 $('a.button').bind('click', function(){
   $.scrollTo('#contact',{'duration':'slow'});
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
   hideArticle = $('#carousel article'),
   removeArticle = $(this).parent().children('article').addClass('active').remove().appendTo('#info');

   
   if (! $(this).hasClass('active')) {
     $('#carousel img').removeClass('active');
     $('#info article').removeClass('active');
     $(this).addClass('active');
     hideArticle.hide();
     removeArticle.slideDown('fast');

  } else {
     $(this).removeClass('active');
     $('#info article').removeClass('active');
     showArticle.slideUp();
  }

 });
 });
