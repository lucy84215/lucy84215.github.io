// JavaScript Document
setInterval(function(){
  $('.text span').removeClass('past');
  $('.text span.active').addClass('past').removeClass('active');
  $('.text span.past').addClass('active');
  if ($('.text span.active').length == 0){
    $('.text span:nth-child(1)').addClass('active');
  }
}, 800);

$('.single-experience').hover(function(){
	$(this).children('.experience-hover').toggleClass('active');
});

$('.logo span a img').hover(function(){
    $('.logo span a img').attr('src','img/logo.png');
},function(){
     $('.logo span a img').attr('src','img/logo-white.png'); 
});


$('.center-photo img').hover(function(){
	$('.center-photo').next().toggleClass('active');
	$('.center-photo').next().next().toggleClass('active');
});
