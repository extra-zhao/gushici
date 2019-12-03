//分页
layui.use(['laypage', 'layer'], function() {
	var laypage = layui.laypage,
		layer = layui.layer;
	laypage.render({
		elem: 'pagination',
		count:100,
		layout: ['prev', 'page', 'next','skip'],
		jump: function(obj) {
			console.log(obj)
		}
	});
})