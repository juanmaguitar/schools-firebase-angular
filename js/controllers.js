angular.module("myControllers",['myServices'])
	.controller('NavBarCtrl', function($rootScope, $scope, AuthService) {

		$rootScope.$on('authEvent', function( e, data ) {
			$rootScope.user = data;
		});

		$scope.logIn = AuthService.logIn;
		$scope.logOut = AuthService.logOut;
	})
	.controller('MainCtrl', function($rootScope, $scope, DataService) {

		$rootScope.section = "home"
		$scope.schools = DataService.schools;

		$scope.addMessage = function(e) {
			e.preventDefault()
			DataService.addMessage($scope.message);
			$scope.message = ""
		}

	})
	.controller('AddSchoolCtrl', function($rootScope, $scope, DataService, $location) {

		$rootScope.section = "add-school";
		$scope.title = "Add School"

		$scope.addSchool = function(e) {
			e.preventDefault()

			DataService.addSchool({
				name: $scope.name,
				email: $scope.email,
				description: $scope.description,
				tags: $scope.tags.map( tag => tag.text )
			});
			$location.path("/")
		}

	})
	.controller('EditSchoolCtrl', function($rootScope, $scope, DataService, $location, $routeParams) {

		var idSchool = $routeParams.idSchool;

		$rootScope.section = "edit-school";
		$scope.title = "Edit School"

		DataService.getSchool(idSchool)
			.then( school => {
				$scope.name = school.name;
				$scope.description = school.description;
				$scope.tags = school.tags;
				$scope.email = school.email;
			})

		// $scope.addSchool = function(e) {
		// 	e.preventDefault()

		// 	DataService.addSchool({
		// 		name: $scope.name,
		// 		email: $scope.email,
		// 		description: $scope.description,
		// 		tags: $scope.tags.map( tag => tag.text )
		// 	});
		// 	$location.path("/")
		// }

	})

