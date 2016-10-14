$(function(){
	var $ul = $('<ul/>');
	var $orde_r_box=$('#orde_r_box');
	$.ajaxSetup({
		url:'/data/goods.json',
			// id:'G001',
		dataType:'json',
		success:function(res)
		{
			console.log(res);
				//												
			$.each(res,function(idx,yao){
				var $li = $('<li/>');
				$('<a/>').attr({href:'#'}).html('<img src="'+yao.imgurl+'"/>').appendTo($li);
				$('<p/>').addClass('sec_p').html('￥：'+yao.price).appendTo($li);
				$('<a/>').addClass('sec_a').html('产品信息：'+yao.title).appendTo($li);
				$('<a/>').addClass('sec_join').html('加入购物车').appendTo($li);
				$li.appendTo($ul);
				($ul).addClass('orde_r_sec');
			}),
			 $ul.appendTo('#orde_r');
			$orde_r_box.append($ul);
		}
	});
	$.ajax();

	// 懒加载效果
	// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
	$(window).on('scroll',function(){
		// 获取滚动条滚动过的距离
		var scrollTop = $(window).scrollTop();

		// 当差不多滚动到底部是加载更多内容
		if(scrollTop >= $(document).height() - $(window).height() - 100){
			$.ajax();
		}
	})

	

})