$(function(){
				
				var $nav = $("#LoutiNav");
				var $floor = $("#main .prod_o");
				
				//1.给window添加滚动事件
				$(window).scroll(function(){
					
					var scrollTop = $(window).scrollTop();
					
					if(scrollTop >= 500){
						$nav.fadeIn();
					}else{
						$nav.fadeOut();
					}
					
					//console.log($floor);
					//目的 主要是来找index
					$floor.each(function(idx,ele){
						if(scrollTop >= $(ele).offset().top && scrollTop <= $(ele).offset().top + $(ele).outerHeight()/2){
							//console.log(idx);
							$nav.find("li").removeClass("hover").eq(idx).addClass("hover");
							return false;
						}
						
					});
					
					
				});
				
				//2.给导航添加点击事件
				$nav.on("click","li",function(){
					//top
					// if($(this).hasClass("last")){
					// 	$("html body").animate({scrollTop:0});
					// }
					
					var index = $(this).index();
					var _scrollTop = $floor.eq(index).offset().top;
					$("html body").animate({scrollTop:_scrollTop});
					
					
				});
				
				
			});