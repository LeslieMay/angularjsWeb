var myModule = angular.module("myModule", ['ngRoute', 'ui.bootstrap']);

myModule.controller('navCtrl', function($scope) {
	$scope.navList = [{
		name: '首页',
		uri: '#/'
	}, {
		name: '介绍',
		uri: '#/about'
	}, {
		name: '功能',
		uri: '#/service'
	}, {
		name: '关于',
		uri: '#/contact'
	}];
});
//设置路由
myModule.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './html/home.html',
			controller: 'homeController'
		})
		.when('/about', {
			templateUrl: './html/about.html',
			controller: 'aboutController'
		})
		.when('/service', {
			templateUrl: './html/service.html',
			controller: 'serviceController'
		})
		.when('/contact', {
			templateUrl: './html/contact.html',
			controller: 'contactController'
		})
		.otherwise({
			redirectTo: '/'
		});
});