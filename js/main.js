angular.module('myApp', ['ngRoute', 'myControllers'])
	.config( function ($routeProvider) {

		$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add-school', {
        templateUrl: 'views/add-school.html',
        controller: 'AddSchoolCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	})