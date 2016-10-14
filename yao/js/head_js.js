$(function(){
	$("#cont").hover(function(){
		$("#menu").toggle();	
		$("#menu li a").click(function(){
			$("#posit").text($(this).text());
			$("#menu").css("display","none")
		});	
	});
	
})