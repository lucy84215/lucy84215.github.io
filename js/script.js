// JavaScript Document
$(window).on("scroll",function(){
	if($(window).scrollTop()>50){
		$(".nav").addClass("activeScroll");
	}else{
		$(".nav").removeClass("activeScroll");
	}
})

