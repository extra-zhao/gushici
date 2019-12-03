//分页
layui.use(['laypage', 'layer', 'laydate'], function() {
	var laypage = layui.laypage,
		layer = layui.layer;
	laypage.render({
		elem: 'pagination',
		count: 100,
		layout: ['prev', 'page', 'next', 'skip'],
		jump: function(obj) {
		}
	});
	var laydate = layui.laydate;
	//日期
	laydate.render({
		elem: '#date'
	});
})