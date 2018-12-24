// JavaScript Document
$(window).on("scroll",function(){
	if($(window).scrollTop()>20){
		$(".site-header").addClass("activeScroll");
	}else{
		$(".site-header").removeClass("activeScroll");
	}
})

