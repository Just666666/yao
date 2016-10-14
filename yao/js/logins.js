$(function(){
$('#sig').click(function(){
		var $yhm=$('#acco').val();
		var $yhmm=$('#cig').val()
		var yhcook=document.cookie.split('; ');
		if(yhcook!=''){
			$.each(yhcook,function(idx,ele){
				if(ele.split('=')[0].length<5){
					var goyan=JSON.parse(ele.split('=')[1])
					if($yhm==goyan.name && $yhmm==goyan.password){
						alert('登陆成功，欢迎回来，我尊贵的会员')
						window.location.href="../index.html"
					}else{
						alert('用户名不存在或密码错误')
					}
				}
			})
		}
	})

})