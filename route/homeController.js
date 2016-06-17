    //轮播图控制器
    myModule.controller('homeController', function($scope,$uibModal, $log) {
    	$scope.myInterval = 3000;
    	$scope.noWrapSlides = false;
    	$scope.active = 0;
    	
    	var slides = $scope.slides = [];
    	var currIndex = 0;
    	$scope.addSlide = function() {
    		slides.push({
    			image: 'img/cd-background-' + (currIndex + 1) + '.jpg',
    			text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
    			id: currIndex++
    		});
    	};
    	for (var i = 0; i < 3; i++) {
    		$scope.addSlide();
    	}
 $scope.LogItems = [$scope.username,  $scope.userpwd];
  $scope.animationsEnabled = true;
  //打开登录模态框
  $scope.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'Login.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        LogItems: function () {
          return $scope.LogItems;
        }
      }
    });
};
//打开注册模态框
  $scope.openSign = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'Sign.html',
      controller: 'ModalInstanceCtrlNew',
      size: size,
      resolve: {
        LogItems: function () {
          return $scope.LogItems;
        }
      }
    });

};
    });
    //登录模态框控制函数  可以在这里进行与后台的操作
myModule.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, LogItems) {
$scope.LogItems = LogItems;
  $scope.ok = function () {
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
    //注册模态框控制函数  可以在这里进行与后台的操作
myModule.controller('ModalInstanceCtrlNew', function ($scope, $uibModalInstance, LogItems) {
$scope.LogItems = LogItems;
  $scope.ok = function () {
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});