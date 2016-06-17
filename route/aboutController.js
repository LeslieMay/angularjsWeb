myModule.controller('aboutController', function($scope) {
	var active = 0;
	var curindex = 0;
	listItem = $scope.listItems = [];
	$scope.addItem = function() {
		listItem.push({
			classname: 'ol_div',
			id: curindex++
		});
	};
	//添加右侧的导航
	for (var i = 0; i < 4; i++) {
		$scope.addItem();
	}
	//初始换激活的导航
	for (var i = 0; i < 4; i++) {
		if (listItem[i].id == active) {
			listItem[i].classname = "ol_div activeol_div"
		}
	}
	//设置激活导航栏样式函数
	$scope.setClass=function(a){
		for (var i = 0; i < 4; i++) {
			if (listItem[i].id == a) {
				listItem[i].classname = "ol_div activeol_div"
			} else {
				listItem[i].classname = "ol_div"
			}
		}
	}
	//点击按钮触发函数：聚焦到相应分屏页面，改变激活导航的样式
	$scope.setCurindex = function(index) {
		active = index;
		$scope.setClass(active);
		var myheight = document.body.clientHeight || document.documentElement.clientHeight;
		document.body.scrollTop = myheight * active;
		document.documentElement.scrollTop = myheight * active;
	}
	//监听页面滚动时  当滚动进某一页的分屏时将分屏的导航项激活
	setInterval(function(){
		var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
		active = Math.floor(scrollT / (document.body.clientHeight || document.documentElement.clientHeight));
		console.log(active);
		$scope.setClass(active);
		$scope.$apply();
	},1000)
});