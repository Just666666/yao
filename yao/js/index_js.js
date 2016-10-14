$(function(){
	$("#focu_sear_l_ul li").mouseenter(function(){
		$(this).css("background","#fff");
		$(this).children().css("color","#314349").animate({left:"-10px"},"show");
	}).mouseleave(function(){
		$(this).css("background","#314349");
		$(this).children().css("color","#fff");
	})
})