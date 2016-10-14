$(function(){
var j2=0;
	$('#resig').click(function(){
		j2++;
		var $sjy=/^1[3|5|8|9][0-9]{9}$/;
		var sj=false
		var $sjn=$('#phone').val().replace(/' '/g,'')
		if(!$sjy.test($sjn)){
			$('#phone').next().html('非法手机号')
		}else{
			$('#phone').next().css('color','green')
			$('#phone').next().html('正确')
			sj=true
			}
		}
		
})