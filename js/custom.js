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
 $('#carousel_wrap').carousel({ dispItems: 2 });
 
 $(function (){
   var firstArticle = $('#carousel li:first-child article').html(),
       article = $('#portfolio_info').html(firstArticle);
  });

 $('#carousel img').click(function(){
    var article = $(this).next('article'),
        articleText = article.html();
        
        if (articleText){
          $('#portfolio_info').html(articleText);
        } else {
          $('#portfolio_info').html('');
        }
    
    if ($(this).hasClass('active')){
      $('#carousel img').removeClass('active');
    } else {
      $('#carousel img').removeClass('active');
      $(this).addClass('active');
    }
 });
 
 });
