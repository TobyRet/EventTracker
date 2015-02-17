var addEventApplication = angular.module('addEventApplication', []);

addEventApplication.controller("AddEventController", ['$scope','$http', '$window', function($scope, $http, $window) {
	
	var addEventController = this;
	alert("im here");

	$scope.event = {};

	var createEventAction = function(event) {
		$http.post("/event", event).success(
			function(response) {
				var url = response["redirect_url"];
				$window.location.href = url;
		}).failure(function(error){
			alert("something bad happened");
		});
	};

	addEventController.createEvent = createEventAction;

}]);
