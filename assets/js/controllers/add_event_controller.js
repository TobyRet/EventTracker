var addEventApplication = angular.module('addEventApplication', []);

addEventApplication.controller("AddEventController", ['$scope','$http', '$window', function($scope, $http, $window) {
	
	var addEventController = this;
	
	$scope.event = {};

	var createEventAction = function(event) {
		$http.post("/event", event).success(
			function(response) {
				var url = response["redirect_url"];
				$window.location.href = url;
		});
	};

	addEventController.createEvent = createEventAction(event);

}]);
