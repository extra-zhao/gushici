//顶部跳转
$(".page-header .menu-list li").click(function() {
	var index = $(this).index();
	switch(index) {
		case 0:
			window.location.href = "./index.html";
			return false;
		case 1:
			window.location.href = "./shiwen.html";
			return false;
		case 2:
			window.location.href = "./mingju.html";
			return false;
		case 3:
			window.location.href = "./writer.html";
			return false;
		case 4:
			window.location.href = "./guji.html";
			return false;
	}
})

//译 注赏 背 听的切换
$(".each-song .study-action div").click(function() {
	$(this).toggleClass("active");
})

//右侧卡片的点击切换
$(".card-wrapper .each-content .type-list div").click(function() {
	$(this).parent().find("div").removeClass("active");
	$(this).addClass("active");
})


//列表上方类型的切换
$(".each-class .class-list div").click(function(){
	$(this).parent().find("div").removeClass("active");
	$(this).addClass("active");
})
//展开与收起
$(".each-class .arrow").click(function(){
	$(this).parent().toggleClass("active");
//	$(this).addClass("active");
})


//个人中心菜单切换
$(".user-body-wrapper li").click(function() {
	var index = $(this).index();
	switch(index) {
		case 0:
			window.location.href = "./favor.html";
			return false;
		case 1:
			window.location.href = "./wanshan.html";
			return false;
		case 2:
			window.location.href = "./langsong.html";
			return false;
		case 3:
			window.location.href = "./points.html";
			return false;
		case 4:
			window.location.href = "./user.html";
			return false;
		case 5:
			window.location.href = "./../login.html";
			return false;
	}
})


//个人中心模块切换
$(".favor-menu div").click(function(){
	$(this).parent().find("div").removeClass("active");
	$(this).addClass("active");
})
