angular.module("myControllers",['myServices'])
	.controller('NavBarCtrl', function($rootScope, $scope, AuthService) {

		$rootScope.$on('authEvent', function( e, data ) {
			$rootScope.user = data;
		});

		$scope.logIn = AuthService.logIn;
		$scope.logOut = AuthService.logOut;
	})
	.controller('MainCtrl', function($scope, DataService) {

		$scope.schools = DataService.schools;

		$scope.addMessage = function(e) {
			e.preventDefault()
			DataService.addMessage($scope.message);
			$scope.message = ""
		}

	})
	.controller('AddSchoolCtrl', function($scope, DataService) {

		// $scope.schools = DataService.schools;

		// $scope.addMessage = function(e) {
		// 	e.preventDefault()
		// 	DataService.addMessage($scope.message);
		// 	$scope.message = ""
		// }

	})
