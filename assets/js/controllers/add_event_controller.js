var addEventApplication = angular.module('addEventApplication', []);

addEventApplication.controller("AddEventController", ['$scope','$http', '$window', function($scope, $http, $window) {
	
	var addEventController = this;

	$scope.event = {};
	$scope.event.name = "";
	$scope.event.artist = "";
	$scope.event.date = "";
	$scope.event.price = "";
	$scope.event.details = "";

	var createEventAction = function() {
		alert($scope.event.name);
		$http.post("/event", $scope.event).success(
			function(response) {
				var url = response["redirect_url"];
				$window.location.href = url;
		}).failure(function(error){
			alert("something bad happened");
		});
	};

	addEventController.createEvent = createEventAction;

}]);
