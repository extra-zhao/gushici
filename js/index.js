layui.use('carousel', function() {
	var carousel = layui.carousel;
	//建造实例
	carousel.render({
		elem: '#tuijian',
		width: '100%', //设置容器宽度
		height: "300px",
		arrow:"none"
	});
});