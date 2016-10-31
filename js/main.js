angular.module('myApp', ['ngRoute', 'ngMap', 'ngTagsInput', 'myControllers'])
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
      .when('/edit-school/:idSchool', {
        templateUrl: 'views/add-school.html',
        controller: 'EditSchoolCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	})