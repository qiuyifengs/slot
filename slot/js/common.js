/*
 *
 * 谢尼玛
 * 
 */
$(function(){
	/*浏览器可视高度*/
	var Height = $(window).height();
	//控制样式自适应
	$(".body-box").height(Height);
	//login高度调整
	$(".login-logo").css("line-height",Height * 0.35 + "px");
	var FHeight = $(".login-form").height();
	var IHeight = $(".login-input i").height();
	var ImgHeight = $(".login-input img").height();
	$(".login-input img").css("margin-top", (IHeight - ImgHeight) / 2 );
	//register高度调整
	var HeaderHeight = $(".header").height();
	//$(".header span:eq(1)").css("line-height",HeaderHeight + "px");
	var IpHeight = $(".header img").height();
	//$(".header span:eq(0)").css("top",(HeaderHeight - IpHeight) / 2 +"px");
	var identifyingH = $(".register-form .login-input:eq(1) span").height();
	$(".register-form .login-input:eq(1) a").css("line-height",identifyingH + "px");
	//计算器高度
	var CalHeight = $(".calculator-btn li").height();
	$(".a_demo_two").css("line-height",CalHeight - 10 + "px");
	//升级
	var LvImgHeight = $(".promotion-head img").height();
	var LvHeadHeight = $(".promotion-head").height();
	var LvHeadSpan = $(".promotion-head span").height();
	//footer
	var FooterHeight = $(".footer").height();
	var FLiHeight = $(".footer li").height();
	$(".footer li").css("margin-top",(FooterHeight - FLiHeight ) / 2 + "px");
	$(".promotion-head img").css("margin-top", -1 * (LvImgHeight - LvHeadHeight) / 1.5 +"px" );
	$(".promotion-head span").css("margin-top",(LvHeadHeight - LvHeadSpan) / 2 +"px");
	//表单焦点闪烁//
	/*
	$("#user").focus(function(){
		$(".user img").prop("src","/Public/Home/images/user_focus.png");
		if($(".login-input input").val() == ""){
			$(".password img").prop("src","/Public/Home/images/password.png");
			$(".repassword img").prop("src","/Public/Home/images/password.png");
			$(".name img").prop("src","/Public/Home/images/recommend.png");
		}
	})
	$("#password").focus(function(){
		$(".password img").prop("src","/Public/Home/images/password_focus.png");
		if($(".login-input input").val() == ""){
			$(".user img").prop("src","/Public/Home/images/user.png");
			$(".repassword img").prop("src","/Public/Home/images/password.png");
			$(".name img").prop("src","/Public/Home/images/recommend.png");
		}
	})
	$("#repassword").focus(function(){
		$(".repassword img").prop("src","/Public/Home/images/password_focus.png");
		if($(".login-input input").val() == ""){
			$(".password img").prop("src","/Public/Home/images/password.png");
			$(".user img").prop("src","/Public/Home/images/user.png");
			$(".name img").prop("src","/Public/Home/images/recommend.png");
		}
	})
	$("#name").focus(function(){
		$(".name img").prop("src","/Public/Home/images/recommend_focus.png");
		if($(".login-input input").val() == ""){
			$(".password img").prop("src","/Public/Home/images/password.png");
			$(".repassword img").prop("src","/Public/Home/images/password.png");
			$(".user img").prop("src","/Public/Home/images/user.png");
		}
	})
	
	$(".login-input input").on("input",function(){
		var InputVal1 = $("#user").val();
		var InputVal2 = $("#password").val();
		var InputVal3 = $("#repassword").val();
		var InputVal4 = $("#name").val();
		if( InputVal1 == ""){
			$(".user img").prop("src","/Public/Home/images/user.png");
		}else{
			$(".user img").prop("src","/Public/Home/images/user_focus.png");
		}
		if( InputVal2 == ""){
			$(".password img").prop("src","/Public/Home/images/password.png");
		}else{
			$(".password img").prop("src","/Public/Home/images/password_focus.png");
		}
		if( InputVal3 == ""){
			$(".repassword img").prop("src","/Public/Home/images/password.png");
		}else{
			$(".repassword img").prop("src","/Public/Home/images/password_focus.png");
		}
		if( InputVal4 == ""){
			$(".name img").prop("src","/Public/Home/images/recommend.png");
		}else{
			$(".name img").prop("src","/Public/Home/images/recommend_focus.png");
		}
	})
	*/
	
})
