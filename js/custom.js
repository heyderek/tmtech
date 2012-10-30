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
  //Activate Flexslider Carousel
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      slideShow: false,
      itemWidth: 300,
      itemMargin: 20
    });

 $(function (){
   var firstArticle = $('.flexslider li:first-child article').html(),
       article = $('#portfolio_info').html(firstArticle);
  });

 $('.flexslider img').click(function(){
    var article = $(this).next('article'),
        articleText = article.html();
        
        if (articleText){
          $('#portfolio_info').html(articleText);
        } else {
          $('#portfolio_info').html('');
        }
    
    if ($(this).hasClass('active')){
      $('.flexslider img').removeClass('active');
    } else {
      $('.flexslider img').removeClass('active');
      $(this).addClass('active');
    }
 });
 
 });
