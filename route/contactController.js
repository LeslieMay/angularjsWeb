myModule.controller('contactController', function($scope) {
	//将内容封装为对象
	$scope.navList=[{name:'公司简介',uri:'javascript::void(0)',id:1,flag:false,content:'这儿是我们公司的简介。详细信息如下：......。'},
	{name:'加入我们',uri:'javascript::void(0)',id:2,flag:false,content:'如果想加入我们。请联系：......。'},
	{name:'联系我们',uri:'javascript::void(0)',id:3,flag:false,content:'公司详细地址如下：......。'},
	];
	$scope.path="";
	//当点击可左侧的菜单项后，设置导航路径
	$scope.setPath =function(index) {
		$scope.path=$scope.navList[index-1].name;
		for(var i=0;i<3;i++){
			if(i==index-1){
				$scope.navList[index-1].flag=true;
			}else{
				$scope.navList[i].flag=false;
			}
		}
		$scope.FlagTotal=$scope.navList[0].flag || $scope.navList[1].flag || $scope.navList[2].flag;
	}
	//设置初始路径导航不显示
	$scope.FlagTotal=$scope.navList[0].flag || $scope.navList[1].flag || $scope.navList[2].flag;
});